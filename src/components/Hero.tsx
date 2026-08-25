"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroDashboard from "./HeroDashboard";

function CountUpNumber({ target, prefix = "", suffix = "", decimals = 0 }: { target: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500; // 1.5s
          const startTime = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setVal(target * easeProgress);
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setVal(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Eyebrow entrance
      tl.fromTo(
        "[data-hero-eyebrow]",
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      );

      // Heading line reveal
      tl.fromTo(
        "[data-hero-heading-line]",
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.15 },
        "-=0.5"
      );

      // Subtitle fade
      tl.fromTo(
        "[data-hero-sub]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      );

      // CTAs & Tags reveal
      tl.fromTo(
        "[data-hero-cta]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        "-=0.5"
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative flex min-h-[90vh] items-center justify-center bg-background pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      {/* Ambient Radial Background & Fine Structural Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-60 dark:opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-10 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-brand/20 via-electric/25 to-transparent blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headlines & Narrative */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div
              data-hero-eyebrow
              className="inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-surface/80 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-brand shadow-xs backdrop-blur-md dark:border-white/15"
            >
              <span className="h-2 w-2 rounded-full bg-brand animate-pulse" />
              ENTERPRISE B2B TECH CONSULTING • AI &amp; CLOUD
            </div>

            {/* Main Heading */}
            <h1
              ref={headingRef}
              className="mt-6 font-display text-4xl font-extrabold leading-[1.06] tracking-tight sm:text-5xl sm:leading-[1.04] lg:text-[62px]"
            >
              <span
                data-hero-heading-line
                className="block bg-gradient-to-r from-foreground via-brand to-electric bg-clip-text text-transparent"
              >
                Engineering digital platforms
              </span>
              <span
                data-hero-heading-line
                className="block bg-gradient-to-r from-brand via-electric to-foreground bg-clip-text text-transparent"
              >
                that power enterprise growth.
              </span>
            </h1>

            {/* Supporting Narrative */}
            <p
              data-hero-sub
              className="mt-6 max-w-2xl font-sans text-base font-normal leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300 h-auto overflow-visible"
            >
              Connectify designs, builds, and operates resilient digital infrastructure, cloud platforms, and intelligent software systems for high-growth enterprises and institution leaders.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div data-hero-cta>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2.5 rounded-full btn-glow px-7 py-3.5 font-display text-sm font-semibold"
                >
                  Schedule a consultation
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div data-hero-cta>
                <Link
                  href="/case-studies"
                  className="group inline-flex items-center gap-2 rounded-full border border-black/15 bg-surface/90 px-7 py-3.5 font-display text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-brand/40 dark:border-white/15 dark:bg-white/5"
                >
                  View case studies
                  <svg
                    className="h-4 w-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Key Enterprise Stats with 1.5s Count-Up Animation */}
            <div
              data-hero-cta
              className="mt-12 grid grid-cols-2 gap-6 border-t border-black/10 pt-6 sm:grid-cols-4 dark:border-white/10"
            >
              <div>
                <p className="font-mono text-2xl font-bold bg-gradient-to-r from-brand to-electric bg-clip-text text-transparent sm:text-3xl">
                  <CountUpNumber target={25} suffix="+" />
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">Deployed Systems</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold bg-gradient-to-r from-brand to-electric bg-clip-text text-transparent sm:text-3xl">
                  <CountUpNumber target={99.99} decimals={2} suffix="%" />
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">SLA Uptime</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold bg-gradient-to-r from-brand to-electric bg-clip-text text-transparent sm:text-3xl">
                  <CountUpNumber target={6} />
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">Core Practices</p>
              </div>
              <div>
                <p className="font-mono text-2xl font-bold bg-gradient-to-r from-brand to-electric bg-clip-text text-transparent sm:text-3xl">Tier-1</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted font-semibold">Enterprise Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column: 2.5D Product Telemetry Dashboard */}
          <div className="lg:col-span-5" data-hero-cta>
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}