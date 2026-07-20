"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Slides every section in as it scrolls into view, reliably and across all
 * browsers (IntersectionObserver, not the patchy CSS animation-timeline).
 * It auto-targets each section's content wrapper - except the first section
 * (the hero, which has its own load animation) - plus anything explicitly
 * marked [data-reveal]. It tags <html> with `reveal-ready` so the hidden
 * state only exists when JS runs, so no-JS visitors and crawlers see
 * everything. Re-runs on route change.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Auto-target section content wrappers, skipping the first (hero) and any
    // section that already has its own reveal targets inside (so we don't
    // double-animate).
    document
      .querySelectorAll<HTMLElement>("main > section:nth-of-type(n+2) > div")
      .forEach((el) => {
        if (!el.querySelector("[data-reveal], .reveal")) el.classList.add("js-reveal");
      });

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".js-reveal, [data-reveal]"),
    );

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    root.classList.add("reveal-ready");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => {
      // Anything already on screen reveals immediately (no jump).
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
