/**
 * Shared validation used by both the client forms and the API routes,
 * so the rules can never drift apart.
 */

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export type ContactPayload = {
  name: string;
  email: string;
  organisation: string;
  role: string;
  message: string;
};

export function validateContact(data: Partial<ContactPayload>): FieldErrors<keyof ContactPayload> {
  const errors: FieldErrors<keyof ContactPayload> = {};
  if (!data.name?.trim()) errors.name = "Please enter your name.";
  if (!data.email?.trim()) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(data.email.trim())) errors.email = "That email address doesn't look right.";
  if (!data.organisation?.trim()) errors.organisation = "Please enter your organisation.";
  if (!data.role?.trim()) errors.role = "Please enter your role.";
  if (!data.message?.trim()) errors.message = "Please write a short message.";
  else if (data.message.trim().length > 5000) errors.message = "Please keep the message under 5,000 characters.";
  return errors;
}

export const SURVEY_SECTORS = [
  "Academic / research institution",
  "Government / public health agency",
  "Health insurer / HMO",
  "Pharmaceutical / life sciences",
  "NGO / development partner",
  "Hospital or clinical network",
  "Health-tech / startup",
  "Other",
] as const;

export const SURVEY_DATA_TYPES = [
  "Facility-level service data (NHMIS / DHIS2)",
  "Population survey data (NDHS, MICS)",
  "Insurance claims data",
  "Disease registries (cancer, sickle cell, others)",
  "Laboratory or diagnostics data",
  "Supply chain / pharmacy data",
  "Longitudinal cohort data",
] as const;

export const SURVEY_BARRIERS = [
  "Data exists but is not accessible to us",
  "Data quality or completeness is too poor to use",
  "Approval / bureaucratic process takes too long",
  "Formats are inconsistent and cleaning costs too much",
  "No single place to discover what exists",
  "Cost of acquisition is too high",
  "Ethical / legal uncertainty around use",
] as const;

export const SURVEY_PILOT_OPTIONS = [
  "Yes - we have a live use case now",
  "Yes - within the next 12 months",
  "Possibly - we'd want to see the data catalogue first",
  "No - but keep us informed",
] as const;

export type SurveyPayload = {
  organisation: string;
  sector: string;
  contactName: string;
  contactEmail: string;
  dataTypes: string[];
  dataUse: string;
  barriers: string[];
  barrierDetail: string;
  pilotInterest: string;
};

export function validateSurveyStep(
  step: number,
  data: Partial<SurveyPayload>,
): FieldErrors<keyof SurveyPayload> {
  const errors: FieldErrors<keyof SurveyPayload> = {};
  if (step === 0) {
    if (!data.organisation?.trim()) errors.organisation = "Please enter your organisation's name.";
    if (!data.sector) errors.sector = "Please choose the closest sector.";
    if (!data.contactName?.trim()) errors.contactName = "Please enter your name.";
    if (!data.contactEmail?.trim()) errors.contactEmail = "Please enter your email address.";
    else if (!EMAIL_RE.test(data.contactEmail.trim()))
      errors.contactEmail = "That email address doesn't look right.";
  }
  if (step === 1) {
    if (!data.dataTypes?.length) errors.dataTypes = "Select at least one type of data.";
    if (!data.dataUse?.trim()) errors.dataUse = "A sentence or two is enough.";
  }
  if (step === 2) {
    if (!data.barriers?.length) errors.barriers = "Select at least one barrier.";
  }
  if (step === 3) {
    if (!data.pilotInterest) errors.pilotInterest = "Please choose one option.";
  }
  return errors;
}

export function validateSurvey(data: Partial<SurveyPayload>): FieldErrors<keyof SurveyPayload> {
  return {
    ...validateSurveyStep(0, data),
    ...validateSurveyStep(1, data),
    ...validateSurveyStep(2, data),
    ...validateSurveyStep(3, data),
  };
}
