"use client";

import { motion } from "motion/react";
import { fadeUpVariant, staggerContainer, lineReveal, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MarekButton } from "@/components/ui/MarekButton";

const polymerFeatures = [
  { label: "Brand", value: "Ve-prene™ TPR" },
  { label: "Experience", value: "20+ years manufacturing" },
  { label: "Variants", value: "Transparent · Translucent · Opaque" },
  { label: "Colors", value: "Full fashion color range" },
  { label: "Application", value: "Direct injection onto upper or unit soles" },
  { label: "Service", value: "Custom formulation available" },
];

const distributionItems = [
  "Synthetic rubber",
  "Plastics",
  "Chemical additives",
  "Prime & off-grade materials",
  "Global trade",
];

export function Divisions() {
  return (
    <section id="products" className="bg-cream border-b border-navy/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
          {/* Left — Marekh Polymer */}
          <motion.div
            className="border-r border-navy/10 border-t-[3px] border-t-sienna px-8 md:px-12 lg:px-14 py-16 lg:py-20"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel number="01" label="Marekh Polymer" className="mb-6 text-navy/40" />

            <h2 className="font-display text-4xl md:text-5xl text-navy tracking-tight leading-tight mb-4">
              Ve&#8209;prene
              <br />
              <em className="text-navy/50 not-italic text-3xl md:text-4xl">
                Thermoplastic Rubber
              </em>
            </h2>

            <p className="text-sm text-navy/60 leading-relaxed max-w-[52ch] mb-10">
              Marekh&apos;s own brand of footwear TPR — engineered for high
              elasticity and ease of processing. No vulcanisation required,
              significantly reducing production cost and time.
            </p>

            {/* Feature rows */}
            <motion.div
              className="divide-y divide-navy/8 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {polymerFeatures.map((f) => (
                <motion.div
                  key={f.label}
                  variants={fadeUpVariant}
                  className="grid grid-cols-[140px_1fr] py-3.5 hover:bg-navy/5 transition-colors -mx-1 px-1 group"
                >
                  <span className="text-xs uppercase tracking-wider text-navy/40 group-hover:text-navy/60 transition-colors self-center">
                    {f.label}
                  </span>
                  <span className="text-sm text-navy/80">{f.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="h-px bg-sienna mb-8 origin-left"
              variants={lineReveal}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            />

            <MarekButton variant="outline-sienna" href="#veprene">
              Technical Details
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MarekButton>
          </motion.div>

          {/* Right — Distribution */}
          <motion.div
            className="bg-cream-dark px-8 md:px-10 lg:px-12 py-16 lg:py-20"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel number="02" label="Distribution" className="mb-6 text-navy/40" />

            <h2 className="font-display text-3xl md:text-4xl text-navy tracking-tight leading-tight mb-4">
              Polymer
              <br />
              <em className="text-navy/40 not-italic">materials supply.</em>
            </h2>

            <p className="text-sm text-navy/50 leading-relaxed mb-10">
              Supplying the Pakistani market and trading globally in both prime
              and off-grade polymer materials.
            </p>

            <div className="divide-y divide-navy/10 mb-10">
              {distributionItems.map((item) => (
                <div key={item} className="py-3.5 flex items-center gap-3 group">
                  <div className="w-1 h-1 rounded-full bg-navy/30 group-hover:bg-sienna transition-colors flex-shrink-0" />
                  <span className="text-sm text-navy/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-cream border border-navy/10 p-5">
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Coverage</p>
              <p className="text-sm text-navy/70">
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
