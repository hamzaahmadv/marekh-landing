"use client";

import { motion } from "motion/react";
import { fadeUpVariant, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const distributionItems = [
  "Synthetic rubber",
  "Plastics",
  "Chemical additives",
  "Prime & off-grade materials",
  "Global trade",
];

export function DistributionSection() {
  return (
    <section id="distribution" className="min-h-screen bg-cream-dark border-b border-navy/10 flex items-center">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-14 py-16 lg:py-20 w-full">

        {/* Top — heading centered */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <SectionLabel number="03" label="Distribution" className="mb-5 text-navy/40 justify-center" />
          <h2 className="font-display text-5xl md:text-6xl xl:text-7xl text-navy tracking-tight leading-tight">
            Polymer
            <br />
            <em className="text-navy/40 not-italic">materials supply.</em>
          </h2>
        </motion.div>

        {/* Middle — left content | video | right content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr_1fr] gap-6 lg:gap-10 items-center">

          {/* Left — items list */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-xs uppercase tracking-wider text-navy/40 mb-4">Materials</p>
            <div className="divide-y divide-navy/10">
              {distributionItems.map((item) => (
                <div key={item} className="py-3.5 flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-navy/30 group-hover:bg-sienna transition-colors flex-shrink-0" />
                  <span className="text-base text-navy/70">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Center — video */}
          <motion.div
            className="flex items-center justify-center w-full"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <video
              src="/videos/marekhtrading.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover rounded-sm"
            />
          </motion.div>

          {/* Right — description + coverage */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <p className="text-base text-navy/60 leading-relaxed mb-10">
              Supplying the Pakistani market and trading globally in both prime
              and off-grade polymer materials.
            </p>
            <div className="bg-cream border border-navy/10 p-5">
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-2">Coverage</p>
              <p className="text-base text-navy/70">
                Pakistan domestic market +{" "}
                <span className="text-navy/50">international trade</span>
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
