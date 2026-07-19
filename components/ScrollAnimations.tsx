"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * Drives scroll reveals for any element marked with `data-reveal`. Mounted
 * once in the layout. It tags <html> with `reveal-ready` so the hidden CSS
 * state only exists when JS is running (no-JS visitors see everything), then
 * reveals each element as it scrolls into view. Re-runs on route change so
 * newly rendered pages get observed.
 */
export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => {
      // Anything already in view on load reveals immediately, no jump.
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
