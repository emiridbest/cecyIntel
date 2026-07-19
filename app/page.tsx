import Link from "next/link";

const AUDIENCES = [
  {
    name: "Researchers",
    text: "Apply for tiered access to cleaned, documented, de-identified datasets, with the provenance and codebooks you need to publish.",
    img: "/scientistMicroscope.png",
    alt: "A scientist working at a microscope",
  },
  {
    name: "Government",
    text: "See across your own programmes. We reconcile facility reporting with survey and claims data so policy decisions rest on more than one source.",
    img: "/decisionChart.png",
    alt: "Officials reviewing charts and figures around a table",
  },
  {
    name: "Insurers & HMOs",
    text: "Price risk on Nigerian morbidity patterns rather than imported actuarial tables, and benchmark claims against national utilisation data.",
    img: "/leansChart.png",
    alt: "A magnifying lens over a printed trend chart",
  },
  {
    name: "Pharma & life sciences",
    text: "Understand real treatment pathways, disease burden, and site feasibility in  Africa before committing to trials or market entry.",
    img: "/pharmTab.png",
    alt: "A gloved hand recording pharmaceutical data on a chart",
  },
  {
    name: "NGOs & development partners",
    text: "Target interventions and measure outcomes with the same evidence base your government counterparts use.",
    img: "/healthAndSafety.png",
    alt: "A health-and-safety puzzle piece being fitted into place",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero - full-bleed globe video background with overlaid text */}
      <section className="relative overflow-hidden border-b border-gold-deep bg-[#0a0a0a]">
        {/* Muted + playsInline are required for mobile autoplay policies. */}
        <video
          src="/globeVid.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Scrim so the overlaid text keeps AA contrast on the video */}
        <div aria-hidden="true" className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-36">
          <h1 className="anim-rise max-w-3xl text-3xl leading-[1.65] sm:text-5xl sm:leading-[1.55]">
            <span className="chip">Health-data infrastructure</span>
            <br />
            <span className="chip">for Nigeria and  Africa</span>
          </h1>
          <p className="anim-rise-delayed mt-8 max-w-2xl text-lg leading-relaxed text-white">
            Nigeria already produces the health data it needs. Cecy
            Intelligence aggregates, cleans, and connects facility reporting,
            health surveys, insurance claims, and disease registries into one
            governed, tiered access analytics layer.
          </p>
          <div className="anim-rise-delayed mt-10 flex flex-wrap gap-4">
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
      </section>

      {/* The data gap */}
      <section className="light">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="chip text-2xl sm:text-3xl">The data gap</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
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
            <div className="border-l border-gold-deep pl-6">
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
            src="/nurseForm.png"
            alt="A nurse completing a paper reporting form on a clipboard"
            loading="lazy"
            className="mt-12 max-h-80 w-full object-cover [clip-path:polygon(0_1.5rem,100%_0,100%_100%,0_100%)] sm:border-2 sm:border-gold-deep sm:[clip-path:none]"
          />
        </div>
      </section>

      {/* Vision and mission */}
      <section className="bg-[#0a0a0a] text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
          <div>
            <h2 className="chip text-2xl">Our vision</h2>
            <p className="mt-6 text-xl leading-relaxed text-white">
              Health decisions that affect African lives are informed by
              African data.
            </p>
          </div>
          <div>
            <h2 className="chip text-2xl">Our mission</h2>
            <p className="mt-6 leading-relaxed text-[#d9d9d9]">
              We aggregate, standardise, and govern the health data Africa
              already produces, and we make it accessible through transparent,
              tiered rules to the researchers, agencies, insurers, and
              partners who need it.
            </p>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section>
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
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
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="chip text-2xl sm:text-3xl">Who we serve</h2>
          {/* UKB-style photo cards: image top, flat white card, gold rule */}
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <li key={a.name} className="reveal border-t-2 border-gold bg-ink-raised">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.img}
                  alt={a.alt}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl">{a.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
                </div>
              </li>
            ))}
          </ul>
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
