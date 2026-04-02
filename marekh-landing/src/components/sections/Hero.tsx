"use client";

import { motion } from "motion/react";
import { heroLeft, heroRight } from "@/lib/motion";
import { MarekButton } from "@/components/ui/MarekButton";

function IndustrialPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5F0E8" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <circle cx="65%" cy="35%" r="200" fill="none" stroke="#F5F0E8" strokeWidth="0.5" opacity="0.15" />
      <circle cx="65%" cy="35%" r="130" fill="none" stroke="#C84B2F" strokeWidth="0.6" opacity="0.2" />
      <circle cx="65%" cy="35%" r="60" fill="none" stroke="#F5F0E8" strokeWidth="1" opacity="0.1" />
      <circle cx="25%" cy="72%" r="110" fill="none" stroke="#F5F0E8" strokeWidth="0.4" opacity="0.1" />
      <circle cx="88%" cy="75%" r="80" fill="none" stroke="#F5F0E8" strokeWidth="0.4" opacity="0.08" />
      <line x1="15%" y1="15%" x2="85%" y2="85%" stroke="#C84B2F" strokeWidth="0.5" opacity="0.1" />
      <circle cx="65%" cy="35%" r="5" fill="#C84B2F" opacity="0.5" />
      <circle cx="25%" cy="72%" r="3" fill="#F5F0E8" opacity="0.2" />
      <circle cx="88%" cy="75%" r="3" fill="#F5F0E8" opacity="0.15" />
      <circle cx="12%" cy="22%" r="2.5" fill="#C84B2F" opacity="0.25" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-[55fr_45fr]">
      {/* Left panel — Ivory Cream */}
      <motion.div
        className="bg-cream flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 pt-24 pb-16 lg:pt-0 lg:pb-0"
        variants={heroLeft}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-xl">
          {/* Headline */}
          <h1 className="font-display text-5xl md:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-navy mb-6">
            Polymer
            <br />
            distribution
            <br />
            <em className="text-sienna not-italic">&amp; manufacturing.</em>
          </h1>

          {/* Body */}
          <p className="font-sans text-lg text-navy/70 leading-relaxed tracking-wide max-w-[48ch] mb-10">
            Trusted supplier of synthetic rubber, plastics, and chemical
            additives to Pakistan&apos;s polymer industry.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <MarekButton variant="primary" href="#contact">
              Contact Sales
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MarekButton>
            <MarekButton variant="outline" href="#products">
              View Products
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MarekButton>
          </div>
        </div>
      </motion.div>

      {/* Right panel — Deep Navy */}
      <motion.div
        className="relative bg-navy min-h-[60vh] lg:min-h-0 overflow-hidden flex flex-col"
        variants={heroRight}
        initial="hidden"
        animate="visible"
      >
        <IndustrialPattern />

        {/* Hero video */}
        <div
          className="relative flex-1 flex items-center justify-center p-2 lg:p-8 pt-4 lg:pt-20"
          style={{
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        >
          <video
            src="/videos/heroanimation.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Stat chips */}
        <div className="relative z-10 flex flex-wrap gap-2 lg:gap-3 px-4 pb-4 lg:px-10 lg:pb-10">
          <motion.div
            className="inline-flex items-center gap-2 lg:gap-3 bg-navy-dark/80 backdrop-blur-sm border border-cream/15 px-3 py-2 lg:px-4 lg:py-3 w-fit"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="text-lg lg:text-2xl font-display text-cream tracking-tight">35+</span>
            <span className="text-[10px] lg:text-xs text-cream/50 uppercase tracking-wider">Years in industry</span>
          </motion.div>
          <motion.div
            className="inline-flex items-center gap-2 lg:gap-3 bg-navy-dark/80 backdrop-blur-sm border border-cream/15 px-3 py-2 lg:px-4 lg:py-3 w-fit"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="text-lg lg:text-2xl font-display text-cream tracking-tight">Global</span>
            <span className="text-[10px] lg:text-xs text-cream/50 uppercase tracking-wider">Prime &amp; off-grade trade</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
