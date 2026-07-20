import { promises as fs } from "fs";
import path from "path";
import { Resend } from "resend";
import { mongoEnabled, saveToMongo } from "./mongo";

/**
 * Delivers a form submission through every configured channel:
 *   - MongoDB   (MONGODB_URI)   - durable record of every submission
 *   - Resend    (RESEND_API_KEY) - email notification
 * Both run when configured, independently. If neither is set, the submission
 * is appended to ./data/<name>.jsonl so local development still round-trips.
 *
 * The request only fails if EVERY attempted channel fails, so one outage
 * (e.g. email) never loses a submission that another channel stored.
 */
export async function deliverSubmission(opts: {
  kind: "contact" | "survey";
  subject: string;
  text: string;
  record: Record<string, unknown>;
}): Promise<void> {
  const hasMongo = mongoEnabled();
  const hasResend = Boolean(process.env.RESEND_API_KEY);

  let delivered = false;
  let lastError: unknown = null;

  if (hasMongo) {
    try {
      await saveToMongo(opts.kind, opts.record);
      delivered = true;
    } catch (err) {
      console.error("MongoDB save failed:", err);
      lastError = err;
    }
  }

  if (hasResend) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
        to: process.env.CONTACT_TO_EMAIL ?? "hello@cecyintelligence.com",
        subject: opts.subject,
        text: opts.text,
      });
      if (error) throw new Error(`Resend rejected the email: ${error.message}`);
      delivered = true;
    } catch (err) {
      console.error("Resend send failed:", err);
      lastError = err;
    }
  }

  // No cloud channel configured: durable local storage, one JSON per line.
  if (!hasMongo && !hasResend) {
    const dir = path.join(process.cwd(), "data");
    await fs.mkdir(dir, { recursive: true });
    const line = JSON.stringify({ receivedAt: new Date().toISOString(), ...opts.record });
    await fs.appendFile(path.join(dir, `${opts.kind}-submissions.jsonl`), line + "\n", "utf8");
    delivered = true;
  }

  if (!delivered) {
    throw lastError instanceof Error
      ? lastError
      : new Error("No delivery channel succeeded");
  }
}
