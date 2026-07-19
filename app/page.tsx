import type { CSSProperties } from "react";
import Link from "next/link";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import MotionCard from "@/components/MotionCard";
import AudienceCard from "@/components/AudienceCard";
import ComplianceMarquee from "@/components/ComplianceMarquee";

const AUDIENCES = [
  {
    name: "Researchers",
    kicker: "Academia & research",
    text: "Apply for tiered access to cleaned, documented, de-identified datasets, with the provenance and codebooks you need to publish.",
    img: "/scientistMicroscope.png",
    alt: "A scientist working at a microscope",
  },
  {
    name: "Government",
    kicker: "Public sector",
    text: "See across your own programmes. We reconcile facility reporting with survey and claims data so policy decisions rest on more than one source.",
    img: "/decisionChart.png",
    alt: "Officials reviewing charts and figures around a table",
  },
  {
    name: "Insurers & HMOs",
    kicker: "Payers",
    text: "Price risk on Nigerian morbidity patterns rather than imported actuarial tables, and benchmark claims against national utilisation data.",
    img: "/leansChart.png",
    alt: "A magnifying lens over a printed trend chart",
  },
  {
    name: "Pharma & life sciences",
    kicker: "Life sciences",
    text: "Understand real treatment pathways, disease burden, and site feasibility in Africa before committing to trials or market entry.",
    img: "/pharmTab.png",
    alt: "A gloved hand recording pharmaceutical data on a chart",
  },
  {
    name: "NGOs & development partners",
    kicker: "Development",
    text: "Target interventions and measure outcomes with the same evidence base your government counterparts use.",
    img: "/healthAndSafety.png",
    alt: "A health-and-safety puzzle piece being fitted into place",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - Helium-style light, text-forward, Framer Motion (see Hero.tsx) */}
      <Hero />

      {/* The data gap */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            The problem
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">The data gap</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div data-reveal="left" className="space-y-5 leading-relaxed text-muted">
              <p>
                Every month, tens of thousands of Nigerian health facilities
                report into the National Health Management Information System.
                Every few years, the Demographic and Health Survey interviews
                households across all thirty-six states. Insurers process claims
                daily. Registries track cancer, sickle cell, and infectious
                disease.
              </p>
              <p>
                Almost none of it talks to anything else. Each dataset lives in
                its own silo, in its own format, under its own gatekeeper. A
                researcher can wait months for an extract; an insurer prices
                products without national morbidity baselines; a ministry
                measures a programme with the same system that funds it.
              </p>
              <p className="text-body">
                The consequence is an absence of usable data. Every actor in
                the system pays for that gap, over and over.
              </p>
            </div>
            <div data-reveal="right" className="border-l border-gold-deep pl-6">
              <h3 className="text-xs uppercase tracking-widest text-gold-deep">The hard numbers</h3>
              <ul className="mt-5 space-y-5 text-sm leading-relaxed text-muted">
                <li>
                  <strong className="text-body">A quarter of the burden, a sixth of the people.</strong>{" "}
                  Africa carries about 25% of the global disease burden while
                  being home to just over one-sixth of the world&rsquo;s population
                  (WHO; UN Office of the Special Adviser on Africa).
                </li>
                <li>
                  <strong className="text-body">1.1% of clinical trials.</strong>{" "}
                  Of 76,331 clinical trials initiated worldwide in 2023, only
                  845 were hosted on the African continent. The evidence used
                  to treat African patients is overwhelmingly generated
                  elsewhere.
                </li>
                <li>
                  <strong className="text-body">Fragmented by design.</strong>{" "}
                  WHO&rsquo;s framework for digital health in the African Region
                  (2021) identifies fragmented, often paper-based,
                  non-interoperable information systems as a persistent
                  constraint on decision-making across the region.
                </li>
                <li>
                  <strong className="text-body">Collected twice, connected never.</strong>{" "}
                  Peer-reviewed reviews document parallel reporting channels in
                  African health systems: the same data captured repeatedly by
                  hospitals, disease programmes, and agencies whose databases
                  cannot talk to each other.
                </li>
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-muted">
                Sources:{" "}
                <a
                  href="https://iris.who.int/handle/10665/345393"
                  className="text-gold underline underline-offset-2 hover:text-gold-light"
                >
                  WHO AFRO digital health framework (2021)
                </a>
                {" · "}
                <a
                  href="https://africacdc.org/download/african-union-health-information-exchange-guidelines-and-standards/"
                  className="text-gold underline underline-offset-2 hover:text-gold-light"
                >
                  Africa CDC Health Information Exchange Guidelines
                </a>
              </p>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            data-reveal="scale"
            src="/nurseForm.png"
            alt="A nurse completing a paper reporting form on a clipboard"
            loading="lazy"
            className="mt-12 max-h-80 w-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <div data-reveal="left">
            <h2 className="chip text-2xl text-white">Our vision</h2>
            <p className="mt-6 text-xl leading-relaxed text-white">
              Health decisions that affect African lives are informed by
              African data.
            </p>
          </div>
          <div data-reveal="right">
            <h2 className="chip text-2xl text-white">Our mission</h2>
            <p className="mt-6 leading-relaxed text-[#d9d9d9]">
              We aggregate, standardise, and govern the health data Africa
              already produces, and we make it accessible through transparent,
              tiered rules to the researchers, agencies, insurers, and
              partners who need it.
            </p>
          </div>
        </div>
      </section>

      {/* One continent, one data layer - 3D globe */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <div data-reveal="left">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#f5d68a]">
              One continent
            </p>
            <h2 className="chip text-2xl text-white sm:text-3xl">Built for Africa&rsquo;s scale</h2>
            <p className="mt-6 leading-relaxed text-[#d9d9d9]">
              Africa carries about a quarter of the world&rsquo;s disease burden
              with just over a sixth of its people, yet the data that could
              guide the response sits in disconnected silos. We start in
              Nigeria and its 36 states, then extend the same governed model
              across the continent, country by country, under each
              jurisdiction&rsquo;s own data-protection law.
            </p>
          </div>
          <div data-reveal="right" className="mx-auto w-full max-w-md">
            {/* The rotating 3D globe. Muted + playsInline for mobile autoplay. */}
            <video
              src="/globeVid.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-label="A rotating globe showing Africa"
              className="aspect-square w-full rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programme targets */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            Our targets
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">Where we are headed</h2>
          <div className="mt-12">
            <Stats />
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            The solution
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">What we build</h2>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <p data-reveal="left" className="max-w-2xl leading-relaxed text-muted">
              We connect the data Nigeria already collects to the decisions it
              should inform.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-reveal="right"
              src="/dataAnalyst.png"
              alt="An analyst working with health data dashboards on screen"
              loading="lazy"
              className="max-h-56 w-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Aggregate",
                text: "We bring NHMIS reporting, NDHS survey waves, claims, and registry data into one place, with documented provenance for every source.",
                // database cylinder
                icon: <path d="M12 5c4 0 7 1.1 7 2.5S16 10 12 10 5 8.9 5 7.5 8 5 12 5Zm7 4.5v3c0 1.4-3 2.5-7 2.5s-7-1.1-7-2.5v-3M19 12.5v4c0 1.4-3 2.5-7 2.5s-7-1.1-7-2.5v-4" />,
              },
              {
                title: "Standardise",
                text: "We map each source to common coding for diagnoses, facilities, and geography, so datasets that never met can finally be joined.",
                // converging arrows
                icon: <path d="M4 6h5l3 6 3-6h5M4 18h5l3-6 3 6h5" />,
              },
              {
                title: "Open, in tiers",
                text: "Public indicators are free. De-identified research extracts follow an application process. Sensitive linkages stay inside governed environments.",
                // three stacked tiers
                icon: <path d="M12 4 4 8l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" />,
              },
            ].map((step, i) => (
              <MotionCard
                key={step.title}
                delay={i * 0.11}
                className="rounded-2xl bg-ink-raised p-8 shadow-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6f4c10]"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {step.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-2xl">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{step.text}</p>
              </MotionCard>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            The full roadmap is on the{" "}
            <Link href="/approach" className="text-gold hover:text-gold-light">
              Approach page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Who we serve */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            Who it serves
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">Who we serve</h2>
          <div className="mt-12 space-y-6">
            {AUDIENCES.map((a, i) => (
              <AudienceCard
                key={a.name}
                index={i}
                name={a.name}
                kicker={a.kicker}
                text={a.text}
                img={a.img}
                alt={a.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Compliance frame */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p data-reveal className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            Trust
          </p>
          <h2 data-reveal className="chip text-2xl sm:text-3xl">Compliance</h2>
          <p data-reveal className="mt-6 max-w-2xl leading-relaxed text-muted">
            We operate under the Nigeria Data Protection Act 2023 and align
            our safeguards with international health data standards.
          </p>
          <ComplianceMarquee />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["NDPA 2023", "Nigeria Data Protection Act: lawful bases, data processing agreements, and a named data protection officer."],
              ["NDPC", "Registered posture under the Nigeria Data Protection Commission's implementing directions."],
              ["GDPR-aligned", "De-identification, purpose limitation, and data subject rights modelled on the EU General Data Protection Regulation."],
              ["HIPAA-aligned", "Technical and administrative safeguards modelled on the US HIPAA Security Rule for health information."],
            ].map(([name, text], i) => (
              <MotionCard
                key={name}
                as="li"
                delay={(i % 4) * 0.09}
                className="rounded-2xl bg-ink-raised p-6 shadow-sm"
              >
                <h3 className="text-lg">{name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </MotionCard>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA - one of the few places pure logo gold is used as a fill. */}
      <section className="bg-[#f8e5b4] text-[#171310]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 data-reveal className="mx-auto max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
            Tell us how you use Nigerian health data and what stops you.
          </h2>
          <p data-reveal style={{ "--d": "80ms" } as CSSProperties} className="mx-auto mt-6 max-w-xl leading-relaxed text-[#4a3a15]">
            Our five-minute survey is shaping which datasets we prioritise and
            how access should work. Early respondents get first access to pilot
            programmes.
          </p>
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
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
