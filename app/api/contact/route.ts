import { NextResponse } from "next/server";
import { validateContact, type ContactPayload } from "@/lib/validation";
import { deliverSubmission } from "@/lib/deliver";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const data = body as ContactPayload;
  try {
    await deliverSubmission({
      kind: "contact",
      subject: `Website enquiry from ${data.name.trim()} (${data.organisation.trim()})`,
      text: [
        `Name: ${data.name.trim()}`,
        `Email: ${data.email.trim()}`,
        `Organisation: ${data.organisation.trim()}`,
        `Role: ${data.role.trim()}`,
        "",
        data.message.trim(),
      ].join("\n"),
      record: { ...data },
    });
  } catch (err) {
    console.error("Contact submission failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your message. Please try again shortly." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
