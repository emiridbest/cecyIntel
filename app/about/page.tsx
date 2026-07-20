import type { CSSProperties } from "react";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ComplianceMarquee from "@/components/ComplianceMarquee";

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
        image={{ src: "/doctorThink.jpg", alt: "A doctor in a laboratory, pausing in thought" }}
      >
        <p>
          Built so that health decisions in Africa rest on African evidence.
        </p>
      </PageHeader>

      {/* Vision + mission - sleek stacked statements, revealed on scroll */}
      <section className="light">
        <div className="mx-auto max-w-4xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Our vision
            </p>
            <p className="mt-5 text-2xl font-medium leading-snug tracking-tight text-body sm:text-4xl">
              To become Africa&rsquo;s most trusted health intelligence
              infrastructure: the data backbone that every government,
              corporation and health institution on the continent depends on to
              make its most critical decisions.
            </p>
          </div>

          <div aria-hidden="true" className="my-12 h-px w-full bg-line sm:my-16" />

          <div className="reveal">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Our mission
            </p>
            <p className="mt-5 text-2xl font-medium leading-snug tracking-tight text-body sm:text-4xl">
              To transform Africa&rsquo;s fragmented health data into actionable
              intelligence that empowers governments, industries and healthcare
              systems to make decisions that save lives, protect workers and
              build a healthier continent.
            </p>
          </div>
        </div>
      </section>

      {/* The Africa we are building - vision in practice */}
      <section>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            The Africa we are building
          </p>
          <h2 className="chip text-2xl sm:text-3xl">Our vision, in practice</h2>
          <p className="mt-10 text-xl font-medium leading-relaxed text-body">
            We envision an Africa where:
          </p>
          <ul className="mt-6 max-w-3xl space-y-5 border-l-2 border-gold pl-6 text-lg leading-relaxed text-muted">
            <li>no government makes a health policy decision without evidence;</li>
            <li>no employer manages workforce health by instinct;</li>
            <li>no pharmaceutical company enters an African market blind;</li>
            <li>no patient is failed because the system could not read its own data.</li>
          </ul>
        </div>
      </section>

      {/* Core values */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            Core values
          </p>
          <h2 className="chip text-2xl sm:text-3xl">The principles that govern everything we do</h2>
          <dl className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Integrity", "Every data point represents a life. We handle it with the rigour, honesty and respect that demands."],
              ["Excellence", "We were trained in the best institutions. We build to the highest standards. Africa deserves nothing less."],
              ["Mission first", "This company was named for a woman who gave everything quietly and without recognition. We carry that spirit into everything we build."],
              ["Inclusion", "Africa's health data problem affects every community. Our solutions must serve every community, not just those who can afford premium care."],
              ["Innovation", "The hardest problems in African health won't yield to old methods. We build new tools, and we keep making them better."],
            ].map(([name, text], i) => (
              <div
                key={name}
                className="group bg-ink-raised p-8 transition-colors duration-300 hover:bg-[#6f4c10]"
              >
                <p className="font-serif text-sm text-gold-deep transition-colors group-hover:text-[#f5d68a]">
                  {`0${i + 1}`}
                </p>
                <dt className="mt-2 text-xl font-bold text-body transition-colors group-hover:text-white">
                  {name}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted transition-colors group-hover:text-[#ecdfc2]">
                  {text}
                </dd>
              </div>
            ))}
            {/* Sixth cell fills the grid with the brand line, in gold. */}
            <div className="flex flex-col justify-center bg-[#6f4c10] p-8 text-white">
              <p className="text-lg font-bold leading-snug">
                Africa&rsquo;s most trusted health intelligence infrastructure.
              </p>
              <p className="mt-2 text-sm text-[#ecdfc2]">The data backbone for the continent.</p>
            </div>
          </dl>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2><span className="chip text-2xl">Why now</span></h2>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-snug tracking-tight text-body sm:text-3xl">
            Three things changed at once.
          </p>
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
                className="border-t-2 border-gold pt-5"
              >
                <span className="text-4xl font-extrabold tracking-tight text-gold sm:text-5xl">
                  {`0${i + 1}`}
                </span>
                <h3 className="mt-3 text-xl font-bold text-body">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="governance" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="justify-self-start"><span className="chip text-2xl">Governance &amp; ethics</span></h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/consent.jpg"
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
          <ComplianceMarquee />
        </div>
      </section>
    </>
  );
}
