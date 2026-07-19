import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Cecy Intelligence exists, why now, and how we govern health data under the Nigeria Data Protection Act 2023.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About us"
        image={{ src: "/doctorThink.png", alt: "A doctor in a laboratory, pausing in thought" }}
      >
        <p>
          Built so that health decisions in  Africa rest on  African
          evidence.
        </p>
      </PageHeader>

      <section className="light">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_2fr]">
          <h2 className="justify-self-start"><span className="chip text-2xl">Mission</span></h2>
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              Cecy Intelligence exists to make the health data Nigeria already
              produces usable for the researchers who study its diseases, the
              agencies that run its health system, the insurers who underwrite
              its care, and the partners who fund it.
            </p>
            <p>
              Today, clinical and public-health decisions across the region
              routinely rely on evidence generated elsewhere: reference ranges
              from European cohorts, actuarial tables from other markets, trial
              populations that don&rsquo;t reflect the patients being treated. That
              is not because local data doesn&rsquo;t exist. It is because local
              data is fragmented, inconsistently coded, and hard to access.
            </p>
            <p className="text-body">
              Our mission is to close that gap: one governed analytics layer
              over the data that already exists, with access rules that are
              transparent, tiered, and the same for everyone.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="justify-self-start"><span className="chip text-2xl">Why now</span></h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/labRead.png"
              alt="A laboratory scientist reading results from a screen"
              loading="lazy"
              className="mt-8 max-h-64 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none] lg:max-h-none"
            />
          </div>
          <div className="space-y-5 leading-relaxed text-muted">
            <p>
              Three things changed. First, the raw material matured: routine
              facility reporting through NHMIS now runs on DHIS2 nationwide,
              successive NDHS waves provide comparable population baselines,
              and health-insurance expansion is generating claims data at a
              scale Nigeria has never had.
            </p>
            <p>
              Second, the legal foundation arrived. The Nigeria Data Protection
              Act 2023 created a clear statutory framework for processing
              personal and health data, including the lawful bases,
              safeguards, and accountability that responsible data
              infrastructure requires.
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

      <section id="governance" className="light scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="justify-self-start"><span className="chip text-2xl">Governance &amp; ethics</span></h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/consent.png"
                alt="A health worker explaining a consent form to a patient before signing"
                loading="lazy"
                className="mt-8 max-h-64 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none] lg:max-h-none"
              />
            </div>
            <div className="space-y-5 leading-relaxed text-muted">
              <p>
                Health data carries obligations that most data doesn&rsquo;t. Our
                governance posture is conservative by design.
              </p>
            </div>
          </div>
          <dl className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
            {[
              ["NDPA 2023 compliance", "We process data under the Nigeria Data Protection Act 2023 and the NDPC's implementing directions: defined lawful bases for every dataset, data-processing agreements with every source, and a named data protection officer."],
              ["De-identification by default", "Individual-level data is de-identified before it enters any analytical environment. Direct identifiers are removed at ingestion; quasi-identifiers are assessed for re-identification risk before any release."],
              ["Consent where consent is due", "Aggregated public statistics require no individual consent. Our future longitudinal panels are different: participation will be opt-in, with plain-language consent that participants can withdraw at any time."],
              ["Tiered, auditable access", "Open indicators are public. Research extracts require an application stating purpose and safeguards. Sensitive linked data never leaves our controlled environment. Every access is logged."],
              ["Local review", "Research uses of our data are expected to carry approval from a recognised Nigerian health research ethics committee, in line with the National Health Research Ethics Committee framework."],
              ["Data stays governed", "We do not sell personal data. Commercial access is to de-identified, aggregated, or synthetic outputs. Commercial pricing subsidises the free public and academic tiers."],
            ].map(([title, text]) => (
              <div key={title} className="border-t-2 border-gold bg-ink p-8">
                <dt className="font-serif text-xl text-gold-light">{title}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
