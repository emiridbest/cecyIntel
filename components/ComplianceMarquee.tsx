/*
 * Auto-scrolling strip of compliance standards Cecy Intelligence aligns with.
 * Styled like a partner-logo slider: two copies of the list sit in one track
 * so the CSS marquee loops seamlessly. Hover pauses it, and prefers-reduced-motion
 * disables animation entirely (see globals.css).
 */

type ComplianceItem =
  | { type: "logo"; src: string; alt: string }
  | { type: "text"; label: string; sub: string };

const COMPLIANCE_ITEMS: ComplianceItem[] = [
  { type: "text", label: "NDPA 2023", sub: "Nigeria Data Protection Act" },
  { type: "logo", src: "/ndpc.png", alt: "Nigeria Data Protection Commission" },
  { type: "logo", src: "/gdpr.png", alt: "GDPR aligned" },
  { type: "logo", src: "/hipaa.png", alt: "HIPAA aligned" },
];

function ComplianceCard({ item }: { item: ComplianceItem }) {
  return (
    <div className="flex h-24 w-56 shrink-0 items-center justify-center gap-3 rounded-2xl border border-line bg-white px-6 shadow-sm">
      {item.type === "logo" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          className="max-h-14 w-auto object-contain"
        />
      ) : (
        <div className="text-center">
          <p className="text-lg font-extrabold tracking-tight text-[#0a0a0a]">
            {item.label}
          </p>
          <p className="mt-1 text-[11px] leading-tight text-muted">
            {item.sub}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ComplianceMarquee() {
  return (
    <div className="marquee mt-10">
      <div className="marquee-track">
        {[...COMPLIANCE_ITEMS, ...COMPLIANCE_ITEMS].map((item, index) => (
          <ComplianceCard key={`${item.type}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}
