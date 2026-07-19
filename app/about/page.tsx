import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Stats from "@/components/Stats";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Cecy Intelligence exists, why now, and how we govern health data under the Nigeria Data Protection Act 2023.",
};

const VALUES = [
  ["Openness", "Public health indicators are free and open by default. Access widens outward from there, never the reverse."],
  ["Rigour", "Every dataset is cleaned, versioned, and provenance-tracked, with a data dictionary and known-limitations notes."],
  ["Governance", "Consent, de-identification, and audit are built into the product, not bolted on after the fact."],
  ["Interoperability", "We map every source to common coding so datasets that never met can finally be joined."],
  ["Equity", "Commercial access is priced so that commercial users subsidise the free public and academic tiers."],
  ["Trust", "We do not sell personal data. Sensitive linkages are analysed only inside our governed environment."],
];

export default function AboutPage() {
  return (
    <>
      {/* Hero - Helium About style: big heading beside an arched image */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal="left">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
              About us
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0a0a0a] sm:text-5xl">
              We&rsquo;re on a mission to connect the health data Africa already
              produces.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#404040]">
              Health decisions that affect African lives should rest on African
              evidence. We build the infrastructure that makes that possible.
            </p>
          </div>
          <div data-reveal="right" className="overflow-hidden rounded-[2rem] rounded-t-[6rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/doctorThink.png"
              alt="A doctor in a laboratory, pausing in thought"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <Stats variant="dark" />
        </div>
      </section>

      {/* Belief statement + body */}
      <section>
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-24">
          <h2 data-reveal className="text-3xl font-extrabold leading-tight tracking-tight text-[#0a0a0a] sm:text-4xl">
            We believe every African deserves health care shaped by data that
            reflects them.
          </h2>
          <div data-reveal className="mx-auto mt-8 max-w-2xl space-y-5 text-left leading-relaxed text-muted sm:text-center">
            <p>
              Today, clinical and public-health decisions across the region
              routinely rely on evidence generated elsewhere: reference ranges
              from European cohorts, actuarial tables from other markets, trial
              populations that don&rsquo;t reflect the patients being treated. That
              is not because local data doesn&rsquo;t exist. It is because local
              data is fragmented, inconsistently coded, and hard to access.
            </p>
            <p>
              Cecy Intelligence exists to close that gap: one governed analytics
              layer over the data that already exists, with access rules that
              are transparent, tiered, and the same for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="light">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_1.6fr]">
          <div data-reveal="left">
            <h2><span className="chip text-2xl">Why now</span></h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/labRead.png"
              alt="A laboratory scientist reading results from a screen"
              loading="lazy"
              className="mt-8 w-full rounded-2xl object-cover"
            />
          </div>
          <div data-reveal="right" className="space-y-5 leading-relaxed text-muted">
            <p>
              First, the raw material matured: routine facility reporting
              through NHMIS now runs on DHIS2 nationwide, successive NDHS waves
              provide comparable population baselines, and health-insurance
              expansion is generating claims data at a scale Nigeria has never
              had.
            </p>
            <p>
              Second, the legal foundation arrived. The Nigeria Data Protection
              Act 2023 created a clear statutory framework for processing
              personal and health data, including the lawful bases, safeguards,
              and accountability that responsible data infrastructure requires.
            </p>
            <p>
              Third, the tools caught up. Modern data engineering makes it
              feasible for a focused team to clean and harmonise sources that
              once needed a decade-long donor programme, and to do it
              continuously.
            </p>
          </div>
        </div>
      </section>

      {/* Our values */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            What drives us
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">Our values</h2>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(([title, text], i) => (
              <div
                key={title}
                data-reveal
                style={{ "--d": `${(i % 3) * 100}ms` } as CSSProperties}
                className="rounded-2xl bg-ink-raised p-8 shadow-sm"
              >
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6f4c10]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <dt className="mt-5 text-xl font-bold text-[#0a0a0a]">{title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Governance & ethics */}
      <section id="governance" className="light scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div data-reveal="left">
              <h2><span className="chip text-2xl">Governance &amp; ethics</span></h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/consent.png"
                alt="A health worker explaining a consent form to a patient before signing"
                loading="lazy"
                className="mt-8 w-full rounded-2xl object-cover"
              />
            </div>
            <div data-reveal="right" className="space-y-5 leading-relaxed text-muted">
              <p>
                Health data carries obligations that most data doesn&rsquo;t. Our
                governance posture is conservative by design.
              </p>
            </div>
          </div>
          <dl className="mt-14 grid gap-6 sm:grid-cols-2">
            {[
              ["NDPA 2023 compliance", "We process data under the Nigeria Data Protection Act 2023 and the NDPC's implementing directions: defined lawful bases for every dataset, data-processing agreements with every source, and a named data protection officer."],
              ["De-identification by default", "Individual-level data is de-identified before it enters any analytical environment. Direct identifiers are removed at ingestion; quasi-identifiers are assessed for re-identification risk before any release."],
              ["Consent where consent is due", "Aggregated public statistics require no individual consent. Our future longitudinal panels are different: participation will be opt-in, with plain-language consent that participants can withdraw at any time."],
              ["Tiered, auditable access", "Open indicators are public. Research extracts require an application stating purpose and safeguards. Sensitive linked data never leaves our controlled environment. Every access is logged."],
              ["Local review", "Research uses of our data are expected to carry approval from a recognised Nigerian health research ethics committee, in line with the National Health Research Ethics Committee framework."],
              ["Data stays governed", "We do not sell personal data. Commercial access is to de-identified, aggregated, or synthetic outputs. Commercial pricing subsidises the free public and academic tiers."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-8 shadow-sm">
                <dt className="text-xl font-bold text-[#0a0a0a]">{title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
