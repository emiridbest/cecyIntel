"use client";

import { motion } from "framer-motion";

/*
 * Bold editorial card in the UK Biobank news-card style: a solid colour panel
 * with a kicker, large heading, description and arrow, beside a full-bleed
 * image split by a diagonal edge. Panels alternate gold/black and the image
 * side flips on alternate rows. Stacks cleanly on mobile (image on top, no
 * diagonal).
 */
export default function AudienceCard({
  name,
  kicker,
  text,
  img,
  alt,
  index,
}: {
  name: string;
  kicker: string;
  text: string;
  img: string;
  alt: string;
  index: number;
}) {
  const flip = index % 2 === 1; // odd rows put the image on the left
  const gold = index % 2 === 0;
  const panel = gold ? "bg-[#6f4c10]" : "bg-[#0a0a0a]";

  // Diagonal cut on the image edge that meets the panel.
  const clip = flip
    ? "lg:[clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]"
    : "lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
      className={`relative overflow-hidden rounded-2xl text-white shadow-sm lg:min-h-[22rem] ${panel}`}
    >
      {/* Image: block on top for mobile, absolute diagonal half on desktop */}
      <div
        className={`lg:absolute lg:inset-y-0 lg:w-[58%] ${flip ? "lg:left-0" : "lg:right-0"} ${clip}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={alt} loading="lazy" className="h-56 w-full object-cover lg:h-full" />
      </div>

      {/* Text panel */}
      <div
        className={`relative z-10 p-8 sm:p-12 lg:flex lg:min-h-[22rem] lg:w-[52%] lg:flex-col lg:justify-center ${
          flip ? "lg:ml-auto" : ""
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f5d68a]">{kicker}</p>
        <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">{name}</h3>
        <p className="mt-4 max-w-md leading-relaxed text-[#e6e0d0]">{text}</p>
        <span aria-hidden="true" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f5d68a]">
          <svg width="26" height="16" viewBox="0 0 26 16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M2 8h20M17 2l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </motion.div>
  );
}
