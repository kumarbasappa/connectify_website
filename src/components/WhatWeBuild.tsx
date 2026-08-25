"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCategories } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeBuild() {
  const [activeIdx, setActiveIdx] = useState(0);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-services-heading]",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
            once: true
          }
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const activeService = serviceCategories[activeIdx] || serviceCategories[0];

  return (
    <section id="services-suite" ref={rootRef} className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div data-services-heading className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand dark:text-cyan-400">
            01 / Services Suite
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl dark:text-white">
            Technology consulting &amp; strategic advisory pillars.
          </h2>
          <p className="font-sans mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Hover over any pillar to explore core engineering capabilities, typical deliverables, and business problems solved.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive List */}
          <div className="space-y-3 lg:col-span-6">
            {serviceCategories.map((item, index) => {
              const isActive = index === activeIdx;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                  className={`group cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-brand bg-card-bg shadow-xl shadow-brand/10 scale-[1.01] dark:border-indigo-500"
                      : "border-black/10 bg-card-bg hover:border-brand/40 dark:border-white/10 dark:hover:border-indigo-500/40"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm font-bold transition-colors ${
                          isActive ? "text-brand dark:text-cyan-400" : "text-slate-500"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`font-display text-xl font-bold transition-colors ${
                          isActive ? "text-foreground dark:text-white" : "text-slate-700 dark:text-slate-300 group-hover:text-foreground dark:group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                        isActive
                          ? "bg-brand text-white dark:bg-electric"
                          : "bg-black/5 text-slate-500 group-hover:bg-brand/10 group-hover:text-brand dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  <p className="font-sans mt-3 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                    {item.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Active Card Inspector */}
          <div className="lg:col-span-6">
            <div className="sticky top-28 rounded-3xl border border-black/10 bg-card-bg p-8 shadow-xl lg:p-10 dark:border-white/10">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-brand/10 px-4 py-1.5 font-mono text-xs font-bold text-brand dark:bg-cyan-950/60 dark:text-cyan-400 dark:border dark:border-cyan-500/30">
                  PILLAR {activeService.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-muted font-semibold">
                  Interactive Preview
                </span>
              </div>

              <h3 className="mt-6 font-display text-2xl font-extrabold text-foreground sm:text-3xl dark:text-white">
                {activeService.title}
              </h3>
              <p className="font-sans mt-4 text-sm font-medium leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                {activeService.description}
              </p>

              {/* Problems Solved */}
              <div className="mt-8">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-cyan-400">
                  Key Challenges We Solve:
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {activeService.problemsSolved.map((prob, i) => (
                    <li key={i} className="flex items-start gap-2 font-sans text-xs font-medium leading-snug text-slate-700 dark:text-slate-300">
                      <span className="mt-0.5 font-bold text-brand dark:text-electric">•</span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-electric">
                  Typical Enterprise Deliverables:
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {activeService.deliverables.map((del, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-black/10 bg-surface px-3 py-1 font-sans text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {del}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={`/services#${activeService.id}`}
                  className="group inline-flex items-center gap-2 rounded-full btn-glow px-6 py-3 font-display text-sm font-semibold"
                >
                  Explore {activeService.title} Details
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
      </div>
    </section>
  );
}