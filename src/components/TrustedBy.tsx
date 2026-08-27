"use client";

import { useRef } from "react";

const industryDomains = [
  { name: "Automotive Systems", tag: "Automotive" },
  { name: "Enterprise SaaS Platforms", tag: "Enterprise" },
  { name: "Banking & Financial Services", tag: "BFSI" },
  { name: "Public Sector Digital Services", tag: "Government" },
  { name: "Logistics & Fleet Mobility", tag: "Logistics" },
  { name: "Cross-Border Fintech", tag: "Fintech" },
  { name: "HealthTech Platforms", tag: "Healthcare" },
  { name: "AI & Machine Learning", tag: "AI / ML" },
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-background py-14 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-0 text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          ENTERPRISE TECH ECOSYSTEM &amp; DOMAIN FOCUS
        </p>
      </div>

      <div className="relative mt-8 flex overflow-hidden">
        {/* Left Edge Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-r from-background to-transparent"
        />

        {/* Marquee Track */}
        <div
          ref={containerRef}
          className="marquee-container flex w-max items-center"
        >
          {/* Primary Track */}
          <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {industryDomains.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-surface/80 px-6 py-3.5 transition-all duration-300 hover:border-brand/50 hover:bg-card-bg hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/50"
              >
                <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60 transition-colors group-hover:bg-brand group-hover:opacity-100 dark:bg-slate-500 dark:group-hover:bg-electric" />
                <span className="font-display text-sm font-bold tracking-tight text-slate-700 transition-colors group-hover:text-foreground dark:text-slate-300 dark:group-hover:text-white">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] font-semibold text-muted opacity-70 group-hover:opacity-100">
                  [{item.tag}]
                </span>
              </div>
            ))}
          </div>

          {/* Clone Track */}
          <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 pr-8 sm:pr-12" aria-hidden="true" role="presentation">
            {industryDomains.map((item, idx) => (
              <div
                key={`clone-${item.name}-${idx}`}
                aria-hidden="true"
                className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-surface/80 px-6 py-3.5 transition-all duration-300 hover:border-brand/50 hover:bg-card-bg hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/50"
              >
                <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60 transition-colors group-hover:bg-brand group-hover:opacity-100 dark:bg-slate-500 dark:group-hover:bg-electric" aria-hidden="true" />
                <span className="font-display text-sm font-bold tracking-tight text-slate-700 transition-colors group-hover:text-foreground dark:text-slate-300 dark:group-hover:text-white">
                  {item.name}
                </span>
                <span className="font-mono text-[10px] font-semibold text-muted opacity-70 group-hover:opacity-100">
                  [{item.tag}]
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Edge Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    </section>
  );
}
