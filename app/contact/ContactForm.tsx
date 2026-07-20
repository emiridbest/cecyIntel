"use client";

import { useState } from "react";
import { validateContact, type ContactPayload, type FieldErrors } from "@/lib/validation";
import { TextField, TextArea, SubmitButton } from "@/components/form";

const EMPTY: ContactPayload = { name: "", email: "", organisation: "", role: "", message: "" };

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [data, setData] = useState<ContactPayload>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors<keyof ContactPayload>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");

  const set = (key: keyof ContactPayload) => (value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const clientErrors = validateContact(data);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        if (json.errors) setErrors(json.errors);
        setServerError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("We couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-gold-deep p-8">
        <h2 className="font-serif text-2xl text-gold-light">Message sent.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Thank you, {data.name.trim().split(" ")[0]}. We&rsquo;ve received your
          message and will reply to {data.email.trim()} within three working
          days.
        </p>
        <button
          type="button"
          onClick={() => {
            setData(EMPTY);
            setStatus("idle");
          }}
          className="mt-6 rounded-full border border-line px-5 py-2.5 text-sm hover:border-gold hover:text-gold-light"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField id="name" label="Name" autoComplete="name" value={data.name} onChange={set("name")} error={errors.name} />
        <TextField id="email" label="Email" type="email" autoComplete="email" value={data.email} onChange={set("email")} error={errors.email} />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <TextField id="organisation" label="Organisation" autoComplete="organization" value={data.organisation} onChange={set("organisation")} error={errors.organisation} />
        <TextField id="role" label="Role" autoComplete="organization-title" value={data.role} onChange={set("role")} error={errors.role} />
      </div>
      <TextArea id="message" label="Message" value={data.message} onChange={set("message")} error={errors.message} />
      {status === "error" && serverError && (
        <p role="alert" className="border border-gold-deep px-4 py-3 text-sm font-medium text-gold-light">
          {serverError}
        </p>
      )}
      <SubmitButton loading={status === "loading"}>Send message</SubmitButton>
    </form>
  );
}
