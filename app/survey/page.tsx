import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SurveyForm from "./SurveyForm";

export const metadata: Metadata = {
  title: "Data-access survey",
  description:
    "A five-minute survey on how organisations currently access and use Nigerian health data and what blocks them.",
};

export default function SurveyPage() {
  return (
    <>
      <PageHeader
        title="Data-access survey"
        eyebrow="Five minutes, four steps"
        image={{ src: "/researchGlobe.png", alt: "The Cecy Intelligence gold globe of Africa with network nodes" }}
      >
        <p>
          How does your organisation use Nigerian health data? Your answers
          directly shape which datasets we clean first and how access tiers
          are designed. Responses are used only in aggregate; we never publish
          anything that identifies your organisation, and respondents get
          first access to pilot programmes.
        </p>
      </PageHeader>
      <section>
        <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
          <SurveyForm />
        </div>
      </section>
    </>
  );
}
