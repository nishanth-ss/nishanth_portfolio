"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export default function AnimatedPortrait() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className="flex justify-center"
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative h-64 w-64 md:h-80 md:w-80">
        <Image
          src="/nishanth_profile.jpg"
          alt="Nishanth Sekar"
          fill
          priority
          className="rounded-full border-4 border-secondary object-cover"
        />
      </div>
    </motion.div>
  );
}
