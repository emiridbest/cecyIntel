"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Helium-style hero: a centred tagline with the golden globe rising from the
 * middle below it. Text animates in as a stagger; the globe drifts and the
 * CTA scales on hover. Clean black-on-white so the gold globe carries the
 * colour.
 */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="mx-auto max-w-4xl px-5 pt-20 text-center sm:px-8 sm:pt-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep"
          >
            Health-data infrastructure for Africa
          </motion.p>
          <motion.h1
            variants={item}
            className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0a0a0a] sm:text-6xl"
          >
            Connecting the health data{" "}
            <span className="relative whitespace-nowrap">
              Africa
              <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#f5d68a]/70" />
            </span>{" "}
            already produces
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-[#404040]"
          >
            We aggregate, clean, and connect facility reporting, health
            surveys, insurance claims, and disease registries into one
            governed, tiered-access analytics layer.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap justify-center gap-4">
            <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/survey"
                className="inline-block rounded-full bg-[#0a0a0a] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#333]"
              >
                Take the data-access survey
              </Link>
            </motion.div>
            <motion.div whileHover={reduce ? undefined : { scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/approach"
                className="inline-block rounded-full border border-[#0a0a0a]/25 px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-colors hover:border-[#0a0a0a]"
              >
                Read our approach
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Golden globe medallion, centred below the tagline. The source art is
          gold-on-black, so we clip it to a circle and ring it in gold. */}
      <motion.div
        className="mx-auto mt-14 w-full max-w-[15rem] px-5 pb-16 sm:mt-16 sm:max-w-xs sm:pb-24"
        initial={reduce ? false : { opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1], delay: 0.35 }}
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/globe.png"
            alt="The Cecy Intelligence globe of Africa, drawn in gold with connected network nodes"
            width={512}
            height={512}
            priority
            className="mx-auto h-auto w-full rounded-full ring-4 ring-[#d4a03c]/60 drop-shadow-[0_20px_60px_rgba(212,160,60,0.35)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
