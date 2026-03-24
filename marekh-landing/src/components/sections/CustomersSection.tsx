"use client";

import { motion } from "motion/react";
import { fadeUpVariant, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const brands = [
  { name: "Bata", descriptor: "Global footwear group" },
  { name: "Pierre Cardin", descriptor: "International fashion brand" },
  { name: "Hush Puppies", descriptor: "American footwear brand" },
];

export function CustomersSection() {
  return (
    <section id="customers" className="bg-cream border-b border-navy/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">
          {/* Left — brand names */}
          <div>
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mb-10"
            >
              <SectionLabel number="04" label="Customers" className="mb-6 text-navy/40" />
              <p className="text-sm text-navy/50 max-w-[42ch] leading-relaxed">
                Ve&#8209;prene TPR is trusted by multinational footwear brands
                and regional manufacturers across Pakistan.
              </p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {brands.map((brand) => (
                <motion.div
                  key={brand.name}
                  variants={fadeUpVariant}
                  className="border-t border-navy/10 py-5 flex items-baseline justify-between group cursor-default"
                >
                  <h3 className="font-display text-4xl md:text-5xl text-navy/70 tracking-tight transition-colors duration-200 group-hover:text-sienna leading-none">
                    {brand.name}
                  </h3>
                  <span className="text-xs text-navy/30 group-hover:text-navy/50 transition-colors hidden md:block">
                    {brand.descriptor}
                  </span>
                </motion.div>
              ))}

              <motion.div variants={fadeUpVariant} className="border-t border-navy/10 pt-5">
                <p className="text-sm text-navy/40">
                  ...and many local manufacturers across Pakistan.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Right — context card */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:pt-20"
          >
            <div className="bg-navy p-6 lg:p-8">
              <p className="text-xs uppercase tracking-wider text-cream/40 mb-4">
                Supply Coverage
              </p>
              <p className="text-sm text-cream/60 leading-relaxed mb-6">
                Marekh supplies the domestic Pakistani market while maintaining
                active trading relationships internationally in both prime and
                off-grade polymer materials.
              </p>
              <div className="border-t border-cream/10 pt-5 space-y-3">
                {[
                  "Prime materials sourced globally",
                  "Off-grade materials for cost-sensitive applications",
                  "Technical support for custom requirements",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1 h-1 rounded-full bg-sienna mt-2 flex-shrink-0" />
                    <span className="text-xs text-cream/40">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
