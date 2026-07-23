import Link from "next/link";

/*
 * The footer is the site's black anchor - explicit dark-ground hexes rather
 * than the white-page tokens, with the logo golds as accents.
 */
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-3 sm:px-8">
        <div>
          <p className="text-lg font-bold">
            Cecy <span className="text-[#d4a03c]">Intelligence</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#a8a8a8]">
            Health-data infrastructure for Africa. We make the
            health data that already exists usable, responsibly and at scale.
          </p>
        </div>
        <nav aria-label="Footer" className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-widest text-[#d4a03c]">Site</p>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-[#a8a8a8] hover:text-[#f5d68a]">About</Link></li>
            <li><Link href="/approach" className="text-[#a8a8a8] hover:text-[#f5d68a]">Approach</Link></li>
            <li><Link href="/survey" className="text-[#a8a8a8] hover:text-[#f5d68a]">Data-access survey</Link></li>
            <li><Link href="/contact" className="text-[#a8a8a8] hover:text-[#f5d68a]">Contact</Link></li>
          </ul>
        </nav>
        <div className="text-sm">
          <p className="mb-3 text-xs uppercase tracking-widest text-[#d4a03c]">Contact</p>
          <ul className="space-y-2">
            <li>
              <a href="tel:+2348141128514" className="text-[#a8a8a8] hover:text-[#f5d68a]">
                0814 112 8514
              </a>
            </li>
            <li>
              <a href="tel:+2347067013670" className="text-[#a8a8a8] hover:text-[#f5d68a]">
                0706 701 3670
              </a>
            </li>
            <li>
              <a
                href="mailto:cecyintelligence@afrihealthiq.com"
                className="break-all text-[#a8a8a8] hover:text-[#f5d68a]"
              >
                cecyintelligence@afrihealthiq.com
              </a>
            </li>
          </ul>
          <p className="mb-3 mt-8 text-xs uppercase tracking-widest text-[#d4a03c]">Governance</p>
          <p className="leading-relaxed text-[#a8a8a8]">
            We operate under the Nigeria Data Protection Act 2023. Read our{" "}
            <Link href="/about#governance" className="text-[#f5d68a] hover:text-white">
              governance and ethics commitments
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="border-t border-white/15 py-6 text-center text-xs text-[#a8a8a8]">
        © {new Date().getFullYear()} Cecy Intelligence. Lagos, Nigeria.
      </div>
    </footer>
  );
}
