"use client";

import { motion } from "motion/react";
import { fadeUpVariant, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MarekButton } from "@/components/ui/MarekButton";

const specs = [
  {
    spec: "Application",
    description: "Suitable for direct injection onto uppers or as unit soles in footwear production.",
  },
  {
    spec: "Processing",
    description: "Direct processing on standard injection equipment.",
  },
  {
    spec: "Elasticity",
    description: "High degree of elasticity.",
  },
  {
    spec: "Customisation",
    description: "Technical assistance available to develop tailor-made compounds.",
  },
  {
    spec: "Color Range",
    description: "Custom color matching available.",
  },
  {
    spec: "Transparency",
    description: "Available in transparent, translucent, and fully opaque formulations.",
  },
];

export function VepreneSection() {
  return (
    <section id="veprene" className="bg-navy border-b border-cream/10">
      {/* Full-width video strip at top */}
      <motion.div
        className="w-full overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20">
          {/* Left prose */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <SectionLabel number="02" label="Ve-prene TPR" className="mb-6 text-cream/60" />
            <h2 className="font-display text-5xl md:text-6xl text-cream tracking-tight leading-tight mb-8">
              Engineered
              <br />
              <em className="text-cream/70 not-italic">for footwear.</em>
            </h2>
            <p className="font-sans text-lg text-cream/85 leading-relaxed tracking-wide max-w-[44ch] mb-8">
              Ve&#8209;prene is Marekh&apos;s proprietary thermoplastic rubber,
              developed over two decades for the footwear manufacturing industry.
            </p>

            {/* Custom formulation callout */}
            <motion.div
              variants={fadeUpVariant}
              className="bg-sienna/10 border border-sienna/30 p-6"
            >
              <p className="text-xs uppercase tracking-wider text-sienna mb-3 font-medium">
                Custom Formulation
              </p>
              <p className="text-base text-cream/80 leading-relaxed mb-5">
                Contact our team to discuss your application needs.
              </p>
              <MarekButton variant="outline-sienna" href="#contact">
                Discuss Requirements
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MarekButton>
            </motion.div>
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
                  className="grid grid-cols-[160px_1fr] py-5 gap-4 hover:bg-cream/5 transition-colors -mx-2 px-2 group"
                >
                  <span className="font-sans text-sm uppercase tracking-widest text-sienna/80 self-start pt-1 group-hover:text-sienna transition-colors font-semibold">
                    {s.spec}
                  </span>
                  <span className="font-sans text-base text-cream/90 leading-relaxed">{s.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
