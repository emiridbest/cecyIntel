import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Stats from "@/components/Stats";
import ComplianceMarquee from "@/components/ComplianceMarquee";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Cecy Intelligence exists, why now, and how we govern health data under the Nigeria Data Protection Act 2023.",
};

const VALUES = [
  ["Integrity", "Every data point represents a life. We handle it with the rigour, honesty and respect that demands."],
  ["Excellence", "We were trained in the best institutions. We build to the highest standards. Africa deserves nothing less."],
  ["Mission first", "This company was named for a woman who gave everything quietly and without recognition. We carry that spirit into everything we build."],
  ["Inclusion", "Africa's health data problem affects every community. Our solutions must serve every community, not just those who can afford premium care."],
  ["Innovation", "The hardest problems in African health won't yield to old methods. We build new tools, and we keep making them better."],
];

export default function AboutPage() {
  return (
    <>
      {/* Hero - Helium About style: big heading beside an arched image */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr]">
          <div data-reveal="left">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-gold-deep">
              About us
            </p>
            <h1 className="text-3xl font-bold leading-[1.1] tracking-tight text-[#0a0a0a] sm:text-5xl">
              We&rsquo;re on a mission to connect the health data Africa already
              produces.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-relaxed text-[#404040]">
              Health decisions that affect African lives should rest on African
              evidence. We build the infrastructure that makes that possible.
            </p>
          </div>
          <div data-reveal="right" className="overflow-hidden rounded-[2rem] rounded-t-[6rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/doctorThink.jpg"
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
          <h2 data-reveal className="text-2xl font-bold leading-tight tracking-tight text-[#0a0a0a] sm:text-3xl">
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

      {/* Vision and mission - stacked statements */}
      <section className="light">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-20">
          <div data-reveal>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold-deep">
              Our vision
            </p>
            <p className="mt-5 text-xl font-medium leading-snug tracking-tight text-body sm:text-2xl">
              To become Africa&rsquo;s most trusted health intelligence
              infrastructure: the data backbone that every government,
              corporation and health institution on the continent depends on to
              make its most critical decisions.
            </p>
          </div>

          <div aria-hidden="true" className="my-10 h-px w-full bg-line sm:my-12" />

          <div data-reveal>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-gold-deep">
              Our mission
            </p>
            <p className="mt-5 text-xl font-medium leading-snug tracking-tight text-body sm:text-2xl">
              To transform Africa&rsquo;s fragmented health data into actionable
              intelligence that empowers governments, industries and healthcare
              systems to make decisions that save lives, protect workers and
              build a healthier continent.
            </p>
          </div>
        </div>
      </section>

      {/* The Africa we are building - vision in practice */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-[#f5d68a]">
            The Africa we are building
          </p>
          <h2 data-reveal className="chip text-2xl text-white sm:text-3xl">
            Our vision, in practice
          </h2>
          <p data-reveal className="mt-10 text-xl font-semibold leading-relaxed text-white">
            We envision an Africa where:
          </p>
          <ul className="mt-6 max-w-3xl space-y-5 border-l-2 border-gold pl-6 text-sm leading-relaxed text-[#d9d9d9]">
            <li data-reveal>no government makes a health policy decision without evidence;</li>
            <li data-reveal>no employer manages workforce health by instinct;</li>
            <li data-reveal>no pharmaceutical company enters an African market blind;</li>
            <li data-reveal>no patient is failed because the system could not read its own data.</li>
          </ul>
        </div>
      </section>

      {/* Why now - three dynamic numbered points */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 data-reveal><span className="chip text-2xl">Why now</span></h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-12">
            {[
              [
                "The raw material matured",
                "Routine reporting runs on DHIS2 nationwide, successive NDHS waves give comparable baselines, and health-insurance expansion is generating claims data at a scale Nigeria has never had.",
              ],
              [
                "The legal foundation arrived",
                "The Nigeria Data Protection Act 2023 created a clear statutory framework for health data: lawful bases, safeguards, and accountability.",
              ],
              [
                "The tools caught up",
                "Modern data engineering lets a focused team clean and harmonise sources that once needed a decade-long donor programme, and do it continuously.",
              ],
            ].map(([title, desc], i) => (
              <div
                key={title}
                data-reveal
                style={{ "--d": `${i * 110}ms` } as CSSProperties}
                className="border-t border-body/20 pt-5"
              >
                <span className="font-mono text-sm text-gold-deep">{`[0${i + 1}]`}</span>
                <h3 className="mt-3 text-xl text-body">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our values */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-gold-deep">
            Core values
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">
            The principles that govern everything we do
          </h2>
          {/* Asymmetric full grid: three tiles across the top, two wider ones
              below, so no cell sits empty. Tiles slide in left to right. */}
          <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
            {VALUES.map(([title, text], i) => (
              <div
                key={title}
                data-reveal="left"
                style={{ "--d": `${i * 100}ms` } as CSSProperties}
                className={`group bg-white p-8 transition-colors hover:bg-[#fcfaf4] ${
                  i < 3 ? "lg:col-span-2" : "lg:col-span-3"
                } ${i === 4 ? "sm:col-span-2 lg:col-span-3" : ""}`}
              >
                <span className="font-mono text-xs text-gold-deep">{`[0${i + 1}]`}</span>
                <dt className="mt-6 text-xl font-bold text-[#0a0a0a]">{title}</dt>
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
                src="/consent.jpg"
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
          <ComplianceMarquee />
        </div>
      </section>
    </>
  );
}
