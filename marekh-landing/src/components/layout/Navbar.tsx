"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Customers", href: "#customers" },
  { label: "Contact", href: "#contact" },
];

const productLinks = [
  { number: "01", label: "Marekh Polymer", sub: "Ve-prene™ TPR overview", href: "#products" },
  { number: "02", label: "Ve-prene TPR", sub: "Technical specifications", href: "#veprene" },
  { number: "03", label: "Distribution", sub: "Polymer materials supply", href: "#distribution" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-navy backdrop-blur-xl border-b border-white/10 shadow-[0_4px_32px_rgba(0,0,0,0.4)]"
          : "bg-navy backdrop-blur-xl border-b border-white/10"
      )}
    >
      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sienna/40 to-transparent pointer-events-none" />

      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 flex-shrink-0 mix-blend-screen">
            <Image
              src="/marekh-logo.png"
              alt="Marekh"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-display text-lg text-cream group-hover:text-white transition-colors duration-200">
            Marekh
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="text-sm text-cream/80 hover:text-cream transition-colors duration-200 relative group flex items-center gap-1">
              Products
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sienna group-hover:w-full transition-all duration-300" />
            </button>

            <AnimatePresence>
              {productsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-0 mt-3 w-64 bg-navy border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden"
                >
                  {productLinks.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setProductsOpen(false)}
                      className={`flex items-start gap-3 px-4 py-3.5 hover:bg-cream/5 transition-colors group ${i !== 0 ? "border-t border-white/8" : ""}`}
                    >
                      <span className="text-xs text-sienna/60 font-medium mt-0.5 w-4 flex-shrink-0">{item.number}</span>
                      <div>
                        <p className="text-sm text-cream/90 group-hover:text-cream transition-colors">{item.label}</p>
                        <p className="text-xs text-cream/40 mt-0.5">{item.sub}</p>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-cream/80 hover:text-cream transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sienna group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="https://tally.so/r/rjVG8o"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1.5 text-sm font-medium text-cream/80 hover:text-cream transition-colors duration-200"
        >
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="translate-y-[0.5px]">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-cream/60 hover:text-cream transition-colors p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-white/10 bg-navy/40 backdrop-blur-xl px-6 py-4 flex flex-col gap-4"
          >
            <p className="text-xs uppercase tracking-wider text-cream/30 pb-1">Products</p>
            {productLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 text-sm text-cream/60 hover:text-cream transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-xs text-sienna/60">{item.number}</span>
                {item.label}
              </a>
            ))}
            <div className="border-t border-white/10 pt-3 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="text-sm font-medium text-sienna hover:text-sienna-light transition-colors pt-1 border-t border-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
