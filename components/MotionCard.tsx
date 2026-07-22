"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

/*
 * A card that reveals on scroll and lifts on hover, via Framer Motion.
 * Used for the home page card grids to make them feel interactive.
 * `as` picks the element so it can be a list item where needed.
 */
export default function MotionCard({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
}) {
  const MotionTag = as === "li" ? motion.li : motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
    >
      {children}
    </MotionTag>
  );
}
