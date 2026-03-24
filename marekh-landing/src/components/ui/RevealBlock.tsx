"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { fadeUpVariant, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface RevealBlockProps {
  children: React.ReactNode;
  variant?: Variants;
  delay?: number;
  className?: string;
}

export function RevealBlock({
  children,
  variant = fadeUpVariant,
  delay = 0,
  className,
}: RevealBlockProps) {
  const resolvedVariant: Variants = delay
    ? {
        hidden: variant.hidden,
        visible: {
          ...(variant.visible as object),
          transition: {
            ...((variant.visible as { transition?: object })?.transition ?? {}),
            delay,
          },
        },
      }
    : variant;

  return (
    <motion.div
      className={cn(className)}
      variants={resolvedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </motion.div>
  );
}
