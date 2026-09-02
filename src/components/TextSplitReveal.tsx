"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextSplitRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function TextSplitReveal({
  text,
  className = "",
  as: Component = "h2",
  delay = 0,
}: TextSplitRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const words = containerRef.current.querySelectorAll(".split-word-inner");
    if (!words.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          yPercent: 105,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.04,
          delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  const words = text.split(" ");

  return (
    <Component ref={containerRef as any} className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.1em] ${className}`}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden py-0.5 leading-tight align-top">
          <span className="split-word-inner inline-block transform-gpu will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
