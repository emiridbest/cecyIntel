/*
 * Auto-scrolling strip of the standards Cecy Intelligence aligns with, in the
 * style of a partner-logo slider. Two identical copies of the list sit in one
 * track so the CSS marquee loops seamlessly; hover pauses it and
 * prefers-reduced-motion stops it entirely (see globals.css).
 */

type Item = { type: "logo"; src: string; alt: string } | { type: "text"; label: string; sub: string };

const ITEMS: Item[] = [
  { type: "text", label: "NDPA 2023", sub: "Nigeria Data Protection Act" },
  { type: "logo", src: "/ndpc.png", alt: "Nigeria Data Protection Commission" },
  { type: "logo", src: "/gdpr.png", alt: "GDPR aligned" },
  { type: "logo", src: "/hipaa.png", alt: "HIPAA aligned" },
];

function Card({ item }: { item: Item }) {
  return (
    <div className="flex h-24 w-52 shrink-0 items-center justify-center px-6">
      {item.type === "logo" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="max-h-16 w-auto object-contain transition-transform duration-200 hover:scale-110"
        />
      ) : (
        <div className="text-center transition-transform duration-200 hover:scale-110">
          <p className="text-lg font-extrabold tracking-tight text-[#0a0a0a]">{item.label}</p>
          <p className="mt-1 text-[11px] leading-tight text-muted">{item.sub}</p>
        </div>
      )}
    </div>
  );
}

export default function ComplianceMarquee() {
  return (
    <div className="marquee mt-10">
      <div className="marquee-track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
