import type { CSSProperties } from "react";
import Link from "next/link";
import Stats from "@/components/Stats";
import AudienceCard from "@/components/AudienceCard";
import ComplianceMarquee from "@/components/ComplianceMarquee";

const AUDIENCES = [
  {
    name: "Researchers",
    kicker: "Academia & research",
    text: "Apply for tiered access to cleaned, documented, de-identified datasets, with the provenance and codebooks you need to publish.",
    img: "/scientistMicroscope.jpg",
    alt: "A scientist working at a microscope",
  },
  {
    name: "Government",
    kicker: "Public sector",
    text: "See across your own programmes. We reconcile facility reporting with survey and claims data so policy decisions rest on more than one source.",
    img: "/decisionChart.jpg",
    alt: "Officials reviewing charts and figures around a table",
  },
  {
    name: "Insurers & HMOs",
    kicker: "Payers",
    text: "Price risk on Nigerian morbidity patterns rather than imported actuarial tables, and benchmark claims against national utilisation data.",
    img: "/leansChart.jpg",
    alt: "A magnifying lens over a printed trend chart",
  },
  {
    name: "Pharma & life sciences",
    kicker: "Life sciences",
    text: "Understand real treatment pathways, disease burden, and site feasibility in Africa before committing to trials or market entry.",
    img: "/pharmTab.jpg",
    alt: "A gloved hand recording pharmaceutical data on a chart",
  },
  {
    name: "NGOs & development partners",
    kicker: "Development",
    text: "Target interventions and measure outcomes with the same evidence base your government counterparts use.",
    img: "/ngo.jpg",
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

      {/* The data gap - dynamic: bold lead, staggered silos, consequence */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <h2 className="chip text-2xl sm:text-3xl">The data gap</h2>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug tracking-tight text-body sm:text-4xl">
            Nigeria collects mountains of health data every day.{" "}
            <span className="text-gold">Almost none of it connects.</span>
          </p>

          {/* The silos - each slides in on a stagger */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Facility reporting",
                desc: "Tens of thousands of facilities report into NHMIS every month.",
                icon: <path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M10 9h4M10 12h4" />,
              },
              {
                name: "Health surveys",
                desc: "The NDHS interviews households across all thirty-six states.",
                icon: <path d="M17 20a5 5 0 0 0-10 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />,
              },
              {
                name: "Insurance claims",
                desc: "Insurers and HMOs process claims every single day.",
                icon: <path d="M6 3h9l3 3v15l-3-2-3 2-3-2-3 2V3ZM9 8h6M9 12h6M9 16h4" />,
              },
              {
                name: "Disease registries",
                desc: "Cancer, sickle cell, and infectious disease, each tracked apart.",
                icon: <path d="M9 4h6v2h3v14H6V6h3V4ZM12 10v6M9 13h6" />,
              },
            ].map((s, i) => (
              <div
                key={s.name}
                data-reveal
                style={{ "--d": `${i * 90}ms` } as CSSProperties}
                className="rounded-2xl bg-ink-raised p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6f4c10]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold text-body">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* The consequence - black callout with the image, split */}
          <div className="mt-12 grid items-stretch overflow-hidden rounded-2xl bg-[#0a0a0a] text-white lg:grid-cols-2">
            <div data-reveal="left" className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f5d68a]">
                The consequence
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                Each dataset sits in its own silo, format and gatekeeper. The
                result is an absence of usable data, and every actor pays for
                the gap, over and over.
              </p>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              data-reveal="right"
              src="/nurseForm.jpg"
              alt="A nurse completing a paper reporting form on a clipboard"
              loading="lazy"
              className="h-64 w-full object-cover lg:h-full"
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
              src="/dataAnalyst.jpg"
              alt="An analyst working with health data dashboards on screen"
              loading="lazy"
              className="max-h-56 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none]"
            />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "Aggregate",
                text: "We bring NHMIS reporting, NDHS survey waves, claims, and registry data into one place, with documented provenance for every source.",
                icon: <path d="M12 5c4 0 7 1.1 7 2.5S16 10 12 10 5 8.9 5 7.5 8 5 12 5Zm7 4.5v3c0 1.4-3 2.5-7 2.5s-7-1.1-7-2.5v-3M19 12.5v4c0 1.4-3 2.5-7 2.5s-7-1.1-7-2.5v-4" />,
              },
              {
                title: "Standardise",
                text: "We map each source to common coding for diagnoses, facilities, and geography, so datasets that never met can finally be joined.",
                icon: <path d="M4 6h5l3 6 3-6h5M4 18h5l3-6 3 6h5" />,
              },
              {
                title: "Open, in tiers",
                text: "Public indicators are free. De-identified research extracts follow an application process. Sensitive linkages stay inside governed environments.",
                icon: <path d="M12 4 4 8l8 4 8-4-8-4ZM4 12l8 4 8-4M4 16l8 4 8-4" />,
              },
            ].map((step, i) => (
              <div
                key={step.title}
                data-reveal
                style={{ "--d": `${i * 110}ms` } as CSSProperties}
                className="rounded-2xl border-t-2 border-gold bg-ink-raised p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6f4c10]"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      {step.icon}
                    </svg>
                  </span>
                  <span className="text-4xl font-extrabold tracking-tight text-gold/30">{`0${i + 1}`}</span>
                </div>
                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
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

      {/* The intelligence layer - models and AI on top of the data */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-0 sm:px-8 sm:pb-20 sm:pt-0">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#f5d68a]">
            The intelligence layer
          </p>
          <h2 className="chip text-2xl text-white sm:text-3xl">From data to decisions</h2>
          <p className="mt-8 max-w-3xl text-2xl font-semibold leading-snug tracking-tight sm:text-4xl">
            Clean, connected data is the fuel modern AI needs.{" "}
            <span className="text-[#f5d68a]">We build the models on top of it</span>, tuned to
            African populations, not borrowed from elsewhere.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Risk & demand models",
                desc: "Forecast disease burden, utilisation and cost from local patterns, not imported actuarial tables.",
                icon: <path d="M4 19h16M4 19V5m0 14 4-5 3 3 5-7 4 4" />,
              },
              {
                title: "Early-warning signals",
                desc: "Surface outbreaks and anomalies from surveillance and claims as they emerge.",
                icon: <path d="M3 12h4l2 6 4-14 2 8h6" />,
              },
              {
                title: "Decision support",
                desc: "Turn indicators into clear guidance for governments, insurers and clinicians.",
                icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3Z" />,
              },
              {
                title: "Responsible by design",
                desc: "Models are trained on de-identified data, documented and validated, never a black box over personal records.",
                icon: <path d="M12 3 4 6v6c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V6l-8-3ZM9 12l2 2 4-4" />,
              },
            ].map((c, i) => (
              <div
                key={c.title}
                data-reveal
                style={{ "--d": `${i * 90}ms` } as CSSProperties}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-transform duration-200 hover:-translate-y-1"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6f4c10]"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#b8b8b8]">{c.desc}</p>
              </div>
            ))}
          </div>
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
