/*
 * UK Biobank-style page header: cream band, title chip on the left, and an
 * angled gold panel on the right filled with a generated geometric pattern
 * (their equivalent is the orange diamond-lattice band).
 */

function GoldPattern() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 600 300"
    >
      <rect width="600" height="300" fill="#d4a03c" />
      <g stroke="#ffffff" strokeOpacity="0.45" strokeWidth="1.5" fill="none">
        <rect x="60" y="40" width="70" height="70" transform="rotate(45 95 75)" />
        <rect x="210" y="150" width="110" height="110" transform="rotate(45 265 205)" />
        <rect x="360" y="10" width="50" height="50" transform="rotate(45 385 35)" />
        <rect x="470" y="120" width="90" height="90" transform="rotate(45 515 165)" />
        <rect x="140" y="230" width="40" height="40" transform="rotate(45 160 250)" />
        <rect x="380" y="230" width="60" height="60" transform="rotate(45 410 260)" />
        <rect x="520" y="20" width="36" height="36" transform="rotate(45 538 38)" />
      </g>
      <g fill="#ffffff" fillOpacity="0.5">
        <circle cx="95" cy="75" r="3" />
        <circle cx="265" cy="205" r="3" />
        <circle cx="385" cy="35" r="3" />
        <circle cx="515" cy="165" r="3" />
        <circle cx="160" cy="250" r="3" />
        <circle cx="410" cy="260" r="3" />
      </g>
    </svg>
  );
}

export default function PageHeader(props: {
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  /** Optional photo for the angled right panel; falls back to the gold pattern. */
  image?: { src: string; alt: string };
}) {
  return (
    <div className="bg-[#faf6ea]">
      <div className="relative overflow-hidden">
        <div
          aria-hidden={props.image ? undefined : "true"}
          className="absolute inset-y-0 right-0 hidden w-1/2 md:block"
          style={{ clipPath: "polygon(14% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          {props.image ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={props.image.src}
                alt={props.image.alt}
                className="h-full w-full object-cover"
              />
              {/* Gold duotone wash, as UKB tints its banner photography */}
              <div aria-hidden="true" className="absolute inset-0 bg-[#d4a03c]/25" />
            </>
          ) : (
            <GoldPattern />
          )}
        </div>
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          {props.eyebrow && (
            <p className="font-mono mb-5 text-xs uppercase tracking-[0.25em] text-gold">{props.eyebrow}</p>
          )}
          <h1 className="chip max-w-xl text-3xl sm:text-5xl">{props.title}</h1>
          {props.children && (
            <div className="font-mono mt-8 max-w-xl leading-relaxed text-muted">{props.children}</div>
          )}
          {/* On small screens the angled side panel is hidden; instead the
              photo runs full-bleed below the text with a diagonal top edge,
              the way UKB banners collapse on mobile. */}
          {props.image && (
            <div className="relative -mx-5 mt-8 -mb-20 sm:-mx-8 sm:-mb-28 md:hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={props.image.src}
                alt={props.image.alt}
                className="max-h-64 w-full object-cover [clip-path:polygon(0_2rem,100%_0,100%_100%,0_100%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[#d4a03c]/25 [clip-path:polygon(0_2rem,100%_0,100%_100%,0_100%)]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
