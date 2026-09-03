"use client";

import { useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Max rotation on each axis in degrees. Default: 8 */
  maxTilt?: number;
  /** Scale factor on hover. Default: 1.025 */
  scaleOnHover?: number;
}

/**
 * TiltCard — 3D perspective tilt based on cursor position within card.
 * 
 * - Uses Framer Motion springs for smooth, physical feel (no lag, no bounce).
 * - Adds scale + enhanced shadow on hover for depth.
 * - Disabled on touch devices (no hover available).
 * - Respects prefers-reduced-motion: renders children flat without tilt.
 */
export default function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  scaleOnHover = 1.025,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Raw motion values
  const rawX = useMotionValue(0); // rotateX (vertical tilt)
  const rawY = useMotionValue(0); // rotateY (horizontal tilt)
  const rawScale = useMotionValue(1);

  // Spring config: snappy but smooth, not bouncy
  const springConfig = { stiffness: 260, damping: 22, mass: 0.6 };

  const rotateX = useSpring(rawX, springConfig);
  const rotateY = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, { stiffness: 300, damping: 24 });

  // Shadow intensity tied to tilt amount
  const shadowOpacity = useTransform(
    [rotateX, rotateY],
    ([rx, ry]: number[]) => {
      const intensity = (Math.abs(rx) + Math.abs(ry)) / (maxTilt * 2);
      return 0.08 + intensity * 0.22;
    }
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      // Normalized -1 to 1 relative to card centre
      const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      rawY.set(nx * maxTilt);       // horizontal movement → rotateY
      rawX.set(-ny * maxTilt);      // vertical movement → rotateX (inverted)
    },
    [shouldReduceMotion, maxTilt, rawX, rawY]
  );

  const handleMouseEnter = useCallback(() => {
    if (shouldReduceMotion) return;
    rawScale.set(scaleOnHover);
  }, [shouldReduceMotion, scaleOnHover, rawScale]);

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
    rawScale.set(1);
  }, [rawX, rawY, rawScale]);

  if (shouldReduceMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
        willChange: "transform",
        // Dynamic shadow deepens as tilt increases
        boxShadow: useTransform(
          shadowOpacity,
          (v) =>
            `0 24px 60px rgba(99, 102, 241, ${v}), 0 8px 20px rgba(0, 0, 0, ${v * 0.5})`
        ) as unknown as string,
      }}
    >
      {children}
    </motion.div>
  );
}
