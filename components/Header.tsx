"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/survey", label: "Survey" },
  { href: "/contact", label: "Contact" },
];

/*
 * Black header bar so the full logo (globe plus wordmark, black ground)
 * sits seamlessly. The wordmark lives in the image, so no text logo here.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#d4a03c] bg-[#0a0a0a] text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/logoWide.png"
            alt="Cecy Intelligence"
            width={2960}
            height={1150}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-sm transition-colors hover:text-[#f5d68a] ${
                pathname === item.href ? "text-[#d4a03c]" : "text-[#d9d9d9]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-white/15 sm:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`block px-5 py-4 text-sm ${
                pathname === item.href ? "text-[#d4a03c]" : "text-[#d9d9d9]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
