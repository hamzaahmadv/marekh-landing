"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeUpVariant, viewportOnce } from "@/lib/motion";

const items = [
  { text: "Est. 1989", accent: true },
  { text: "Lahore, Pakistan", accent: false },
  { text: "Polymer Industry", accent: false },
  { text: "Global Distribution", accent: false },
  { text: "Two Divisions", accent: false },
];

export function AboutStrip() {
  return (
    <section id="about" className="bg-navy border-y border-cream/10 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <div className="flex flex-wrap md:flex-nowrap">
          {items.map((item) => (
            <motion.div
              key={item.text}
              variants={fadeUpVariant}
              className="flex-1 min-w-[160px] px-6 py-5 border-r border-cream/10 last:border-r-0 first:pl-0"
            >
              <span className={`text-xs font-medium uppercase tracking-[0.12em] whitespace-nowrap ${item.accent ? "text-sienna" : "text-cream/40"}`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
