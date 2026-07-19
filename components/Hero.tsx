"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Helium-style hero: clean black-on-white, text-forward, no video. A large
 * bold headline animates in word-block by word-block via Framer Motion, and
 * the brand globe (rendered black and white) floats gently beside it.
 */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold-deep"
          >
            Health-data infrastructure
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0a0a0a] sm:text-6xl"
          >
            Connecting the health data{" "}
            <span className="relative whitespace-nowrap">
              Africa
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-[#f5d68a]/70"
              />
            </span>{" "}
            already produces.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-[#404040]"
          >
            We aggregate, clean, and connect facility reporting, health
            surveys, insurance claims, and disease registries into one
            governed, tiered-access analytics layer.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap gap-4">
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

        <motion.div
          className="mx-auto hidden max-w-sm lg:block"
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: 0.2 }}
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/globe.png"
              alt="The Cecy Intelligence globe of Africa with connected network nodes"
              width={512}
              height={512}
              priority
              className="rounded-full grayscale"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
