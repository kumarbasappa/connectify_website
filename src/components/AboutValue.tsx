"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutValue() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-value-reveal]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            once: true
          }
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Headline */}
          <div className="lg:col-span-6" data-value-reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand dark:text-cyan-400">
              01 / Engineering Philosophy
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl lg:leading-[1.1] dark:text-white">
              We build software systems <br />
              <span className="bg-gradient-to-r from-brand to-electric bg-clip-text text-transparent">
                designed for real-world scale
              </span>{" "}
              and high-stakes reliability.
            </h2>
          </div>

          {/* Right Column - Narrative & Pillars */}
          <div className="space-y-6 lg:col-span-6" data-value-reveal>
            <p className="font-sans text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
              Connectify operates at the intersection of business strategy and deep software engineering.
              Whether architecting statewide public infrastructure or launching high-frequency financial ledgers, we deliver software that remains stable, secure, and maintainable over years of production load.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-black/10 bg-card-bg p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10">
                <span className="font-mono text-xs font-bold text-amber-400">01 / ARCHITECTURE</span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground dark:text-white">Battle-Tested Code</h3>
                <p className="mt-1 font-sans text-xs font-medium text-slate-600 dark:text-slate-300">Cloud-native microservices, zero-trust security controls, and sub-second latency.</p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-card-bg p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10">
                <span className="font-mono text-xs font-bold text-amber-400">02 / EXECUTION</span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground dark:text-white">Measurable Impact</h3>
                <p className="mt-1 font-sans text-xs font-medium text-slate-600 dark:text-slate-300">Direct alignment between every sprint deliverable and your core operational metrics.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-brand dark:text-cyan-400 transition-colors hover:text-electric dark:hover:text-white"
              >
                Read our engineering principles
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
        </div>
      </div>
    </section>
  );
}
