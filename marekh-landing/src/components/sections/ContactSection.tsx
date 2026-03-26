"use client";

import { motion } from "motion/react";
import { fadeUpVariant, staggerContainer, viewportOnce } from "@/lib/motion";
import { SectionLabel } from "@/components/ui/SectionLabel";

const contactDetails = [
  {
    label: "Address",
    value: "124-S, Quaid-e-Azam Industrial Estate\nKotlakhpat, Township\nLahore-54760, Pakistan",
    href: undefined,
  },
  { label: "Phone", value: "+92 42 5118449", href: "tel:+924251184499" },
  { label: "", value: "+92 42 5122433", href: "tel:+924251224399" },
  { label: "Email", value: "sales@marekh.com", href: "mailto:sales@marekh.com" },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Left — contact info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeUpVariant} className="mb-10">
              <SectionLabel number="05" label="Contact" className="mb-6 text-cream/40" />
              <h2 className="font-display text-4xl md:text-5xl text-cream tracking-tight leading-tight">
                Get in touch.
              </h2>
            </motion.div>

            <div className="divide-y divide-cream/10">
              {contactDetails.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpVariant}
                  className="py-4 grid grid-cols-[80px_1fr] gap-4"
                >
                  <span className="text-xs uppercase tracking-wider text-cream/30 self-start pt-0.5">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-cream/70 hover:text-sienna transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-cream/50 whitespace-pre-line leading-relaxed">
                      {item.value}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Tally.so form */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            <p className="text-xs uppercase tracking-wider text-cream/40 mb-6">
              Send an Enquiry
            </p>
            <div className="flex-1 border border-cream/15 min-h-[460px]">
              {/* Replace FORM_ID with your actual Tally form ID */}
              <iframe
                src="https://tally.so/embed/rjVG8o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="460"
                title="Contact Marekh"
                style={{ background: "transparent", border: "none" }}
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <span className="text-xs text-cream/30">
            © {new Date().getFullYear()} Marekh Private Ltd
          </span>
          <span className="text-xs text-cream/20">Lahore, Pakistan</span>
        </div>
      </div>
    </section>
  );
}
