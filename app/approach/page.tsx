import type { CSSProperties } from "react";
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
    img: "/nurseReading.jpg",
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
    img: "/mumChild.jpg",
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
    img: "/researchGlobe.jpg",
    alt: "A globe resting on a keyboard beside a research key",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHeader
        title="Our approach"
        eyebrow="Three horizons, in order"
        image={{ src: "/researchProcess.jpg", alt: "A hand-drawn diagram of the research process" }}
      >
        <p>
          We sequence deliberately. Each horizon funds and de-risks the next.
        </p>
      </PageHeader>

      {HORIZONS.map((h, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={h.title} className={i % 2 === 0 ? "light" : ""}>
            <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Text side */}
                <div data-reveal={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl font-extrabold tracking-tight text-gold sm:text-6xl">
                      {`0${i + 1}`}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
                      {h.label}
                    </span>
                  </div>
                  <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-body sm:text-4xl">
                    {h.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{h.body[0]}</p>

                  <ul className="mt-8 space-y-3">
                    {h.deliverables.map((d, j) => (
                      <li
                        key={d}
                        data-reveal
                        style={{ "--d": `${j * 90}ms` } as CSSProperties}
                        className="flex items-start gap-3 text-base leading-snug text-body"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6f4c10]"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image side */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  data-reveal={flip ? "left" : "right"}
                  src={h.img}
                  alt={h.alt}
                  loading="lazy"
                  className={`aspect-[4/3] w-full rounded-3xl object-cover shadow-sm ${flip ? "lg:order-1" : ""}`}
                />
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-[#f8e5b4] text-[#171310]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug">
            Horizon one is underway. If your organisation needs Nigerian health
            data, help us prioritise.
          </h2>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/survey"
              className="rounded-full bg-[#171310] px-6 py-3 text-sm font-medium text-[#f5d68a] transition-colors hover:bg-[#3a2c12]"
            >
              Take the survey
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-[#171310]/40 px-6 py-3 text-sm transition-colors hover:border-[#171310]"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
