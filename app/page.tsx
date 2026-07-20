import Link from "next/link";
import Stats from "@/components/Stats";
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
    img: "/ngo.png",
    alt: "Boxes of donated medicine beside a charity sign at an aid drive",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - centred chip title with the gold globe rising from the lower
          portion of the black background (no video). */}
      <section className="relative overflow-hidden border-b border-gold-deep bg-[#0a0a0a]">
        <div className="relative z-10 mx-auto max-w-3xl px-5 pb-64 pt-20 text-center sm:px-8 sm:pb-72 sm:pt-28">
          <h1 className="anim-rise mx-auto max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-[#f5d68a] sm:text-6xl">
            Connecting the health data Africa already produces
          </h1>
          <p className="anim-rise-delayed mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white">
            Nigeria already produces the health data it needs. Cecy
            Intelligence aggregates, cleans, and connects facility reporting,
            health surveys, insurance claims, and disease registries into one
            governed, tiered access analytics layer.
          </p>
          <div className="anim-rise-delayed mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/survey"
              className="bg-[#d4a03c] px-6 py-3 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f5d68a]"
            >
              Take the data-access survey
            </Link>
            <Link
              href="/approach"
              className="border border-white/60 px-6 py-3 text-sm text-white transition-colors hover:border-[#f5d68a] hover:text-[#f5d68a]"
            >
              Read our approach
            </Link>
          </div>
        </div>
        {/* Gold globe overlaid on the lower portion; its black ground blends
            into the section so only the gold globe reads, rising from below. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/globe.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 w-[30rem] max-w-[92%] -translate-x-1/2 translate-y-[30%]"
        />
      </section>

      {/* The data gap */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2 className="chip text-2xl sm:text-3xl">The data gap</h2>
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-5 leading-relaxed text-muted">
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/nurseForm.png"
              alt="A nurse completing a paper reporting form on a clipboard"
              loading="lazy"
              className="max-h-96 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none]"
            />
          </div>
        </div>
      </section>

      {/* The gap, in figures - numbers-only band on black */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2 className="chip text-2xl text-white sm:text-3xl">Why African data matters</h2>
          <dl className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-3">
            {[
              ["25%", "of the global disease burden falls on Africa"],
              ["1 in 6", "of the world's people live on the continent"],
              ["1.1%", "of 2023 clinical trials were hosted in Africa (845 of 76,331)"],
            ].map(([num, label]) => (
              <div key={label} className="reveal border-t-2 border-gold pt-5">
                <dt className="text-5xl font-extrabold tracking-tight text-[#f5d68a] sm:text-6xl">
                  {num}
                </dt>
                <dd className="mt-4 max-w-xs leading-snug text-[#d9d9d9]">{label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-12 text-xs leading-relaxed text-[#a8a8a8]">
            Sources:{" "}
            <a
              href="https://iris.who.int/handle/10665/345393"
              className="text-[#f5d68a] underline underline-offset-2 hover:text-white"
            >
              WHO AFRO digital health framework (2021)
            </a>
            {" · "}
            <a
              href="https://www.who.int/data"
              className="text-[#f5d68a] underline underline-offset-2 hover:text-white"
            >
              WHO &amp; UN Office of the Special Adviser on Africa
            </a>
          </p>
        </div>
      </section>

      {/* Vision and mission - stacked statements on white, revealed on scroll */}
      <section>
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

      {/* Programme targets */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2 className="chip text-2xl sm:text-3xl">Where we are headed</h2>
          <div className="mt-12">
            <Stats />
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2 className="chip text-2xl sm:text-3xl">What we build</h2>
          <div className="mt-6 grid items-center gap-10 lg:grid-cols-[3fr_2fr]">
            <p className="max-w-2xl leading-relaxed text-muted">
              We connect the data Nigeria already collects to the decisions it
              should inform.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dataAnalyst.png"
              alt="An analyst working with health data dashboards on screen"
              loading="lazy"
              className="max-h-56 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none]"
            />
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-gold-deep bg-gold-deep sm:grid-cols-3">
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
            ].map((step) => (
              <div key={step.title} className="reveal bg-ink p-8">
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
              </div>
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
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2 className="chip text-2xl sm:text-3xl">Who we serve</h2>
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

      {/* Compliance - heading plus the auto-scrolling standards marquee */}
      <section>
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-deep">
            Built on trust
          </p>
          <h2 className="chip text-2xl sm:text-3xl">Compliance</h2>
          <ComplianceMarquee />
        </div>
      </section>

      {/* CTA - one of the few places pure logo gold is used as a fill. */}
      <section className="bg-[#f8e5b4] text-[#171310]">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
            Tell us how you use Nigerian health data and what stops you.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-[#4a3a15]">
            Our five-minute survey is shaping which datasets we prioritise and
            how access should work. Early respondents get first access to pilot
            programmes.
          </p>
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
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
