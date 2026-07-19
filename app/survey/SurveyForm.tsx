"use client";

import { useRef, useState } from "react";
import {
  SURVEY_SECTORS,
  SURVEY_DATA_TYPES,
  SURVEY_BARRIERS,
  SURVEY_PILOT_OPTIONS,
  validateSurveyStep,
  type SurveyPayload,
  type FieldErrors,
} from "@/lib/validation";
import { TextField, TextArea, ChoiceGroup, SubmitButton } from "@/components/form";

const EMPTY: SurveyPayload = {
  organisation: "",
  sector: "",
  contactName: "",
  contactEmail: "",
  dataTypes: [],
  dataUse: "",
  barriers: [],
  barrierDetail: "",
  pilotInterest: "",
};

const STEP_TITLES = [
  "About your organisation",
  "The data you need",
  "What blocks you today",
  "Working with us",
];

type Status = "idle" | "loading" | "success" | "error";

export default function SurveyForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<SurveyPayload>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors<keyof SurveyPayload>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);

  const isLast = step === STEP_TITLES.length - 1;

  const set = <K extends keyof SurveyPayload>(key: K) => (value: SurveyPayload[K]) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  function goTo(next: number) {
    setStep(next);
    // Move focus to the step heading so keyboard/screen-reader users land in place.
    requestAnimationFrame(() => headingRef.current?.focus());
  }

  function handleNext() {
    const stepErrors = validateSurveyStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length === 0) goTo(step + 1);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isLast) {
      handleNext();
      return;
    }
    const stepErrors = validateSurveyStep(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length > 0) return;

    setStatus("loading");
    setServerError("");
    try {
      const res = await fetch("/api/survey", {
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
        <h2 className="font-serif text-2xl text-gold-light">Response recorded. Thank you.</h2>
        <p className="mt-4 leading-relaxed text-muted">
          Your answers are in. When pilot access opens for{" "}
          {data.organisation.trim()}&rsquo;s sector, we&rsquo;ll write to{" "}
          {data.contactEmail.trim()} first.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Progress */}
      <ol className="mb-10 flex gap-2" aria-label="Survey progress">
        {STEP_TITLES.map((title, i) => (
          <li
            key={title}
            aria-current={i === step ? "step" : undefined}
            className={`h-1 flex-1 ${i <= step ? "bg-gold" : "bg-line"}`}
          >
            <span className="sr-only">
              {title} {i < step ? "(completed)" : i === step ? "(current)" : ""}
            </span>
          </li>
        ))}
      </ol>

      <h2
        ref={headingRef}
        tabIndex={-1}
        className="mb-8 font-serif text-2xl outline-none"
      >
        <span className="mr-3 text-gold-deep">
          {step + 1}/{STEP_TITLES.length}
        </span>
        {STEP_TITLES[step]}
      </h2>

      {step === 0 && (
        <div className="space-y-6">
          <TextField id="organisation" label="Organisation name" autoComplete="organization" value={data.organisation} onChange={set("organisation")} error={errors.organisation} />
          <ChoiceGroup legend="Which best describes your organisation?" name="sector" options={SURVEY_SECTORS} multiple={false} selected={data.sector ? [data.sector] : []} onChange={(s) => set("sector")(s[0] ?? "")} error={errors.sector} />
          <div className="grid gap-6 sm:grid-cols-2">
            <TextField id="contactName" label="Your name" autoComplete="name" value={data.contactName} onChange={set("contactName")} error={errors.contactName} />
            <TextField id="contactEmail" label="Your email" type="email" autoComplete="email" value={data.contactEmail} onChange={set("contactEmail")} error={errors.contactEmail} />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-6">
          <ChoiceGroup legend="Which types of Nigerian health data does your work need? (select all that apply)" name="dataTypes" options={SURVEY_DATA_TYPES} multiple selected={data.dataTypes} onChange={set("dataTypes")} error={errors.dataTypes} />
          <TextArea id="dataUse" label="What would you use this data for? A sentence or two is enough." rows={4} value={data.dataUse} onChange={set("dataUse")} error={errors.dataUse} />
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <ChoiceGroup legend="What most gets in the way of using this data today? (select all that apply)" name="barriers" options={SURVEY_BARRIERS} multiple selected={data.barriers} onChange={set("barriers")} error={errors.barriers} />
          <TextArea id="barrierDetail" label="Anything specific? For example, a dataset you tried and failed to get. (optional)" rows={3} value={data.barrierDetail} onChange={set("barrierDetail")} error={errors.barrierDetail} />
        </div>
      )}

      {step === 3 && (
        <ChoiceGroup legend="Would your organisation pilot with Cecy Intelligence? Pilots get early access to a cleaned dataset in exchange for feedback." name="pilotInterest" options={SURVEY_PILOT_OPTIONS} multiple={false} selected={data.pilotInterest ? [data.pilotInterest] : []} onChange={(s) => set("pilotInterest")(s[0] ?? "")} error={errors.pilotInterest} />
      )}

      {status === "error" && serverError && (
        <p role="alert" className="mt-6 border border-gold-deep px-4 py-3 text-sm font-medium text-gold-light">
          {serverError}
        </p>
      )}

      <div className="mt-10 flex items-center gap-4">
        {step > 0 && (
          <button
            type="button"
            onClick={() => goTo(step - 1)}
            className="border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-light"
          >
            Back
          </button>
        )}
        {isLast ? (
          <SubmitButton loading={status === "loading"}>Submit survey</SubmitButton>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className="bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
          >
            Continue
          </button>
        )}
      </div>
    </form>
  );
}
