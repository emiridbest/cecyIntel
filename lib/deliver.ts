import { promises as fs } from "fs";
import path from "path";
import { Resend } from "resend";

/**
 * Delivers a form submission. If RESEND_API_KEY is configured the submission
 * is emailed via Resend; otherwise it is appended to ./data/<name>.jsonl so
 * local development still round-trips a real submission without a key.
 */
export async function deliverSubmission(opts: {
  kind: "contact" | "survey";
  subject: string;
  text: string;
  record: Record<string, unknown>;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  if (apiKey) {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL ?? "hello@cecyintelligence.com",
      subject: opts.subject,
      text: opts.text,
    });
    if (error) throw new Error(`Resend rejected the email: ${error.message}`);
    return;
  }

  // Dev fallback: durable local storage, one JSON object per line.
  const dir = path.join(process.cwd(), "data");
  await fs.mkdir(dir, { recursive: true });
  const line = JSON.stringify({ receivedAt: new Date().toISOString(), ...opts.record });
  await fs.appendFile(path.join(dir, `${opts.kind}-submissions.jsonl`), line + "\n", "utf8");
}
