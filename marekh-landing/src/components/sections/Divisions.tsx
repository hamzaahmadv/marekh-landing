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
    <>
      {/* Page 1 — Marekh Polymer / Ve-prene */}
      <section id="products" className="min-h-screen bg-cream border-b border-navy/10 flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-14 py-24 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="border-t-[3px] border-t-sienna pt-8"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel number="01" label="Marekh Polymer" className="mb-6 text-navy/40" />

            <h2 className="font-display text-5xl md:text-6xl xl:text-7xl text-navy tracking-tight leading-tight mb-6">
              Ve&#8209;prene
              <br />
              <em className="text-navy/50 not-italic text-4xl md:text-5xl xl:text-6xl">
                Thermoplastic Rubber
              </em>
            </h2>

            <p className="text-sm text-navy/60 leading-relaxed max-w-[52ch] mb-12">
              Marekh&apos;s own brand of footwear TPR — engineered for high
              elasticity and ease of processing. No vulcanisation required,
              significantly reducing production cost and time.
            </p>

            <motion.div
              className="divide-y divide-navy/8 mb-12 max-w-2xl"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {polymerFeatures.map((f) => (
                <motion.div
                  key={f.label}
                  variants={fadeUpVariant}
                  className="grid grid-cols-[160px_1fr] py-3.5 hover:bg-navy/5 transition-colors -mx-1 px-1 group"
                >
                  <span className="text-xs uppercase tracking-wider text-navy/40 group-hover:text-navy/60 transition-colors self-center">
                    {f.label}
                  </span>
                  <span className="text-sm text-navy/80">{f.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="h-px bg-sienna mb-8 origin-left max-w-2xl"
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

          {/* Right — video */}
          <div
            className="relative h-[60vh] lg:h-full min-h-[400px] flex items-center justify-center"
            style={{
              maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 45%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%, black 45%, transparent 100%)",
            }}
          >
            <video
              src="/videos/marekhvid2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

          </div>
        </div>
      </section>

      {/* Page 2 — Distribution */}
      <section id="distribution" className="min-h-screen bg-cream-dark border-b border-navy/10 flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-14 py-24 lg:py-32 w-full">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel number="02" label="Distribution" className="mb-6 text-navy/40" />

            <h2 className="font-display text-5xl md:text-6xl xl:text-7xl text-navy tracking-tight leading-tight mb-6">
              Polymer
              <br />
              <em className="text-navy/40 not-italic">materials supply.</em>
            </h2>

            <p className="text-sm text-navy/50 leading-relaxed max-w-[52ch] mb-12">
              Supplying the Pakistani market and trading globally in both prime
              and off-grade polymer materials.
            </p>

            <div className="divide-y divide-navy/10 mb-12 max-w-2xl">
              {distributionItems.map((item) => (
                <div key={item} className="py-3.5 flex items-center gap-3 group">
                  <div className="w-1 h-1 rounded-full bg-navy/30 group-hover:bg-sienna transition-colors flex-shrink-0" />
                  <span className="text-sm text-navy/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-cream border border-navy/10 p-5 max-w-sm">
              <p className="text-xs uppercase tracking-wider text-navy/40 mb-1">Coverage</p>
              <p className="text-sm text-navy/70">
                Pakistan domestic market +{" "}
                <span className="text-navy/50">international trade</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
