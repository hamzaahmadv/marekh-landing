"use client";

import { motion } from "motion/react";
import { fadeUpVariant, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MarekButton } from "@/components/ui/MarekButton";

const specs = [
  {
    spec: "Transparency",
    description: "Available in transparent, translucent, and fully opaque formulations.",
  },
  {
    spec: "Color Range",
    description: "Supplied in a wide variety of fashion colors. Custom color matching available.",
  },
  {
    spec: "Processing",
    description: "No vulcanisation required. Direct processing on standard injection equipment.",
  },
  {
    spec: "Application",
    description: "Suitable for direct injection onto uppers or as unit soles in footwear production.",
  },
  {
    spec: "Elasticity",
    description: "High degree of elasticity comparable to conventional rubber without the cure cycle.",
  },
  {
    spec: "Customisation",
    description: "Technical assistance available to develop tailor-made compounds for specific applications.",
  },
];

export function VepreneSection() {
  return (
    <section id="veprene" className="bg-navy border-b border-cream/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          {/* Left prose */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel number="03" label="Ve-prene TPR" className="mb-6 text-cream/40" />
            <h2 className="font-display text-4xl md:text-5xl text-cream tracking-tight leading-tight mb-6">
              Engineered
              <br />
              <em className="text-cream/50 not-italic">for footwear.</em>
            </h2>
            <p className="text-sm text-cream/60 leading-relaxed mb-6">
              Ve&#8209;prene is Marekh&apos;s proprietary thermoplastic rubber,
              developed over two decades for the footwear manufacturing industry.
              It combines the performance characteristics of vulcanised rubber
              with the processing ease of thermoplastics.
            </p>
            <p className="text-sm text-cream/40 leading-relaxed">
              The material is trusted by global brands and regional manufacturers
              alike for sole production, valued for its consistency, workability,
              and cost-effectiveness.
            </p>
          </motion.div>

          {/* Right spec list */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <div className="divide-y divide-cream/10">
              {specs.map((s) => (
                <motion.div
                  key={s.spec}
                  variants={fadeUpVariant}
                  className="grid grid-cols-[140px_1fr] py-4 gap-4 hover:bg-cream/5 transition-colors -mx-2 px-2 group"
                >
                  <span className="text-xs uppercase tracking-wider text-cream/40 self-start pt-0.5 group-hover:text-cream/60 transition-colors">
                    {s.spec}
                  </span>
                  <span className="text-sm text-cream/70 leading-relaxed">{s.description}</span>
                </motion.div>
              ))}
            </div>

            {/* Custom formulation callout */}
            <motion.div
              variants={fadeUpVariant}
              className="mt-8 bg-sienna/10 border border-sienna/30 p-6"
            >
              <p className="text-xs uppercase tracking-wider text-sienna mb-2">
                Custom Formulation
              </p>
              <p className="text-sm text-cream/70 leading-relaxed mb-4">
                Marekh provides technical assistance to develop tailor-made
                materials meeting specific customer requirements. Contact our
                team to discuss your application needs.
              </p>
              <MarekButton variant="outline-sienna" href="#contact">
                Discuss Requirements
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MarekButton>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Full-width video strip */}
      <motion.div
        className="mt-16 w-full overflow-hidden"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <video
          src="/videos/footwearmarekh.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-h-[55vh] object-cover"
        />
      </motion.div>
    </section>
  );
}
