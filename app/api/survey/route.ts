import { NextResponse } from "next/server";
import { validateSurvey, type SurveyPayload } from "@/lib/validation";
import { deliverSubmission } from "@/lib/deliver";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Partial<SurveyPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const errors = validateSurvey(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const data = body as SurveyPayload;
  try {
    await deliverSubmission({
      kind: "survey",
      subject: `Data-access survey response - ${data.organisation.trim()}`,
      text: [
        `Organisation: ${data.organisation.trim()}`,
        `Sector: ${data.sector}`,
        `Contact: ${data.contactName.trim()} <${data.contactEmail.trim()}>`,
        "",
        `Data types needed:`,
        ...data.dataTypes.map((t) => `  - ${t}`),
        "",
        `Intended use: ${data.dataUse.trim()}`,
        "",
        `Barriers today:`,
        ...data.barriers.map((b) => `  - ${b}`),
        data.barrierDetail?.trim() ? `\nBarrier detail: ${data.barrierDetail.trim()}` : "",
        "",
        `Pilot interest: ${data.pilotInterest}`,
      ].join("\n"),
      record: { ...data },
    });
  } catch (err) {
    console.error("Survey submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't record your response. Please try again shortly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
