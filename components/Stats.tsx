"use client";

import { useEffect, useRef, useState } from "react";

/*
 * Programme targets, displayed as counters that count up when scrolled into
 * view. Users with prefers-reduced-motion see the final values immediately.
 */
const STATS = [
  { value: 36, suffix: "", label: "States to be covered, plus the FCT" },
  { value: 500000, suffix: "+", label: "Subjects to be enrolled" },
  { value: 10, suffix: "+", label: "Targeted data sources connected" },
  { value: 3, suffix: "", label: "Access tiers, from open to governed" },
];

const DURATION_MS = 1600;

function format(n: number) {
  return n.toLocaleString("en-NG");
}

export default function Stats({ variant = "light" }: { variant?: "light" | "dark" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setProgress(1);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          // ease-out cubic so the count decelerates into the final value
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dark = variant === "dark";
  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label} className="border-l-2 border-gold pl-5">
          <p className={`text-4xl font-bold sm:text-5xl ${dark ? "text-white" : "text-[#171310]"}`}>
            {format(Math.round(s.value * progress))}
            {s.suffix}
          </p>
          <p className={`mt-3 text-sm leading-snug ${dark ? "text-[#d9d9d9]" : "text-muted"}`}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}
