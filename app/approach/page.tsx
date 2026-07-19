import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "Our three horizons: aggregate and analyse existing data, build consented longitudinal panels, and grow a federated research network.",
};

const HORIZONS = [
  {
    label: "Horizon one · Now",
    title: "Aggregate and analyse what already exists",
    body: [
      "We ingest routine facility reporting (NHMIS/DHIS2), demographic and health survey waves, insurance claims, and disease registry records. Then we clean them: deduplication, facility and geography matching, diagnosis mapping, and documentation of every transformation.",
      "The output is a catalogue of cleaned, versioned, joinable datasets, each with a data dictionary and a clear access tier. Public indicators are published openly. Research extracts are released through an application process. Sensitive linkages are analysed only inside our governed environment.",
    ],
    deliverables: [
      "Harmonised multi-source data catalogue with documented provenance",
      "Open dashboard of national and state-level health indicators",
      "Tiered access process for researchers, government, insurers, pharma, and NGOs",
    ],
    img: "/nurseReading.png",
    alt: "A nurse reviewing paperwork on a ward",
  },
  {
    label: "Horizon two · Next",
    title: "Consented longitudinal panels",
    body: [
      "Cross-sectional data cannot follow a patient over time. The second horizon builds consented cohorts, linking encounters, outcomes, and self-reported health across facilities and years.",
      "Panels are opt-in. Participants see what is collected and how it is used, and can withdraw at any time.",
    ],
    deliverables: [
      "Opt-in enrolment with plain-language, revocable consent",
      "Linked longitudinal records across facilities and payers",
      "Cohort access for approved research under ethics-committee review",
    ],
    img: "/mumChild.png",
    alt: "A mother holding her child at a health clinic",
  },
  {
    label: "Horizon three · Later",
    title: "A federated research network",
    body: [
      "The third horizon connects hospitals, laboratories, and registries across Africa into a federated network. Each institution keeps custody of its own records. Approved analyses run against a common standard and return only aggregate results.",
      "Expansion happens country by country, under each country's own data protection law.",
    ],
    deliverables: [
      "Common data model adopted across member institutions",
      "Federated queries that return only aggregate results",
      "Regional expansion under each jurisdiction's data-protection law",
    ],
    img: "/researchGlobe.png",
    alt: "A globe resting on a keyboard beside a research key",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        title="Our approach"
        eyebrow="Three horizons, in order"
        image={{ src: "/researchProcess.png", alt: "A hand-drawn diagram of the research process" }}
      >
        <p>
          We sequence deliberately. Each horizon funds and de-risks the next.
        </p>
      </PageHeader>

      {HORIZONS.map((h, i) => (
        <section
          key={h.title}
          className={`${i % 2 === 0 ? "light " : ""}`}
        >
          <div className="mx-auto max-w-6xl px-5 pb-16 pt-3 sm:px-8 sm:pb-20 sm:pt-4">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{h.label}</p>
            <h2 className="mt-4 max-w-2xl text-2xl sm:text-3xl">
              <span className="chip">{h.title}</span>
            </h2>
            <div className="mt-10 grid gap-12 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-5 leading-relaxed text-muted">
                {h.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={h.img}
                  alt={h.alt}
                  loading="lazy"
                  className="mb-8 aspect-[3/2] w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none]"
                />
                <div className="border-l border-gold-deep pl-6">
                  <h3 className="text-xs uppercase tracking-widest text-gold-deep">
                    What this delivers
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                    {h.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-[#f8e5b4] text-[#171310]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug">
            Horizon one is underway. If your organisation needs Nigerian health
            data, help us prioritise.
          </h2>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/survey"
              className="bg-[#171310] px-6 py-3 text-sm font-medium text-[#f5d68a] transition-colors hover:bg-[#3a2c12]"
            >
              Take the survey
            </Link>
            <Link
              href="/contact"
              className="border border-[#171310]/40 px-6 py-3 text-sm transition-colors hover:border-[#171310]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
