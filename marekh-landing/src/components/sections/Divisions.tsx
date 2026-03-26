"use client";

import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, MotionValue } from "motion/react";
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

const scrollSteps = [
  {
    label: "01 / Composition",
    heading: "Engineered\nfor elasticity.",
    body: "Ve-prene TPR delivers the resilience of vulcanised rubber — without the cure cycle. High elasticity, rapid processing, and significantly lower production cost.",
  },
  {
    label: "02 / Colour",
    heading: "Full fashion\ncolour range.",
    body: "Available in transparent, translucent, and fully opaque variants across a complete fashion colour palette. Custom colour matching on request.",
  },
  {
    label: "03 / Application",
    heading: "Direct injection.\nNo compromise.",
    body: "Processed on standard injection equipment. Direct injection onto uppers or as unit soles — slots straight into existing footwear production lines.",
  },
];

function VideoScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    video.currentTime = latest * video.duration;
  });

  const stepProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, scrollSteps.length - 0.01]
  ) as MotionValue<number>;

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-navy">
      <div className="sticky top-0 h-screen overflow-hidden flex">
        {/* Left — text panels */}
        <div className="relative z-10 flex flex-col justify-center w-full lg:w-[45%] px-8 md:px-12 lg:px-14">
          {scrollSteps.map((step, i) => (
            <ScrollTextPanel key={step.label} step={step} index={i} stepProgress={stepProgress} />
          ))}
        </div>

        {/* Right — video scrub */}
        <div
          className="absolute inset-0 lg:left-[38%] flex items-center justify-center"
          style={{
            maskImage: "radial-gradient(ellipse 85% 80% at 68% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 85% 80% at 68% 50%, black 40%, transparent 100%)",
          }}
        >
          <video
            ref={videoRef}
            src="/videos/marekhvid2.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-25">
            <path d="M9 3v12M5 11l4 4 4-4" stroke="#F5F0E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

function ScrollTextPanel({
  step,
  index,
  stepProgress,
}: {
  step: (typeof scrollSteps)[number];
  index: number;
  stepProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    stepProgress,
    [index - 0.35, index, index + 0.5, index + 0.85],
    [0, 1, 1, 0]
  );
  const y = useTransform(stepProgress, [index - 0.35, index], [24, 0]);

  return (
    <motion.div className="absolute" style={{ opacity, y }}>
      <p className="text-xs uppercase tracking-[0.18em] text-sienna mb-4">{step.label}</p>
      <h3 className="font-display text-4xl md:text-5xl xl:text-6xl text-cream tracking-tight leading-tight mb-5 whitespace-pre-line">
        {step.heading}
      </h3>
      <p className="text-sm text-cream/50 leading-relaxed max-w-[40ch]">{step.body}</p>
    </motion.div>
  );
}

export function Divisions() {
  return (
    <>
      {/* Page 1 — Marekh Polymer / Ve-prene */}
      <section id="products">
        <div className="bg-cream min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-14 py-24 lg:py-32 w-full">
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
          </div>
        </div>

        {/* Video scroll animation */}
        <VideoScrollSequence />
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
