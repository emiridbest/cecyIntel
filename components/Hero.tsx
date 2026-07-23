"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-[#ece7dc] bg-white">

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">

        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LEFT */}

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >

            <motion.p
              variants={item}
              className="
                font-mono
                text-[11px]
                uppercase
                tracking-[0.32em]
                text-[#A37B22]
              "
            >
              Health Intelligence Infrastructure
            </motion.p>

            <motion.h1
              variants={item}
              className="
                mt-8
                text-[3.5rem]
                font-black
                tracking-[-0.06em]
                leading-[0.92]
                text-[#0a0a0a]

                lg:text-[5.25rem]
              "
            >
              Africa already
              produces the
              health data.
            </motion.h1>

            <motion.h2
              variants={item}
              className="
                mt-3
                text-[3.5rem]
                font-black
                tracking-[-0.06em]
                leading-[0.92]
                text-[#A37B22]

                lg:text-[5.25rem]
              "
            >
              We make it usable.
            </motion.h2>

            <motion.p
              variants={item}
              className="
                mt-10
                max-w-xl
                text-lg
                leading-8
                text-[#5e5e5e]
              "
            >
              We aggregate, clean, and connect facility reporting, health surveys, insurance claims, and disease registries into one governed, tiered-access analytics layer.
            </motion.p>
                        <motion.div
              variants={item}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/survey"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0a0a0a]
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-[#202020]
                  "
                >
                  Take the data-access survey

                  <svg
                    className="ml-3"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={reduce ? undefined : { y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/approach"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#dad4c9]
                    bg-white
                    px-7
                    py-3.5
                    text-sm
                    font-semibold
                    text-[#0a0a0a]
                    transition-all
                    duration-300
                    hover:border-[#0a0a0a]
                  "
                >
                  Read our approach
                </Link>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -8, 0],
                    }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-[420px]"
            >
              <Image
                src="/globe.png"
                alt="Cecy Intelligence African Health Data Network"
                width={700}
                height={700}
                priority
                className="
                  h-auto
                  w-full
                  select-none
                "
              />
            </motion.div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}