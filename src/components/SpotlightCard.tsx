"use client";

import { useRef, useCallback } from "react";
import { useReducedMotion } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  /** Brand color for spotlight: "teal" | "purple" | "pink" | "indigo" (default: "indigo") */
  color?: "teal" | "purple" | "pink" | "indigo";
}

const colorMap = {
  teal: "rgba(20, 184, 166, 0.12), rgba(56, 189, 248, 0.06)",
  purple: "rgba(168, 85, 247, 0.12), rgba(99, 102, 241, 0.06)",
  pink: "rgba(236, 72, 153, 0.12), rgba(168, 85, 247, 0.06)",
  indigo: "rgba(99, 102, 241, 0.13), rgba(56, 189, 248, 0.06)",
};

/**
 * SpotlightCard — wraps children with a cursor-follow radial gradient spotlight.
 * 
 * - Uses CSS custom properties (--mouse-x, --mouse-y) for zero-jank GPU compositing.
 * - Automatically disabled on touch devices via CSS @media (hover: none).
 * - Respects prefers-reduced-motion (no spotlight, just existing hover styles).
 */
export default function SpotlightCard({
  children,
  className = "",
  color = "indigo",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [c1, c2] = colorMap[color].split(", ");

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      ref.current.style.setProperty("--mouse-x", `${x}%`);
      ref.current.style.setProperty("--mouse-y", `${y}%`);
    },
    [shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    // Reset to center so the glow fades from center on leave
    ref.current.style.setProperty("--mouse-x", "50%");
    ref.current.style.setProperty("--mouse-y", "50%");
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card ${className}`}
      style={
        {
          "--spotlight-c1": c1,
          "--spotlight-c2": c2,
          "--mouse-x": "50%",
          "--mouse-y": "50%",
          position: "relative",
        } as React.CSSProperties
      }
    >
      {/* Spotlight overlay — pointer-events none, sits above bg, below content */}
      {!shouldReduceMotion && (
        <div
          aria-hidden="true"
          className="spotlight-overlay"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "inherit",
            background: `radial-gradient(
              340px circle at var(--mouse-x) var(--mouse-y),
              var(--spotlight-c1, rgba(99, 102, 241, 0.13)),
              var(--spotlight-c2, rgba(56, 189, 248, 0.06)),
              transparent 70%
            )`,
            opacity: 0,
            transition: "opacity 0.35s ease",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
      {/* Children sit above the spotlight overlay */}
      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </div>
    </div>
  );
}
