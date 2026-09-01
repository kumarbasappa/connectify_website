"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const yOffset = shouldReduceMotion ? 0 : direction === "up" ? 24 : direction === "down" ? -24 : 0;
  const xOffset = shouldReduceMotion ? 0 : direction === "left" ? 24 : direction === "right" ? -24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
