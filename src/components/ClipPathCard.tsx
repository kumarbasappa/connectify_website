"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ClipPathCardProps {
  children: ReactNode;
  className?: string;
  wipeDirection?: "inset" | "left" | "circle";
}

export default function ClipPathCard({
  children,
  className = "",
  wipeDirection = "inset",
}: ClipPathCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const el = cardRef.current;

    const initialClip =
      wipeDirection === "inset"
        ? "inset(12% 12% 12% 12% round 24px)"
        : wipeDirection === "left"
        ? "inset(0% 100% 0% 0% round 24px)"
        : "circle(0% at 50% 50%)";

    const finalClip =
      wipeDirection === "circle"
        ? "circle(150% at 50% 50%)"
        : "inset(0% 0% 0% 0% round 24px)";

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          clipPath: initialClip,
          opacity: 0,
          y: 20,
        },
        {
          clipPath: finalClip,
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [wipeDirection]);

  return (
    <div ref={cardRef} className={`will-change-[clip-path,transform] ${className}`}>
      {children}
    </div>
  );
}
