"use client";

import { useRef } from "react";

const industryDomains = [
  { name: "Automotive Solutions", tag: "Automotive", style: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20" },
  { name: "Enterprise Systems", tag: "Enterprise", style: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20" },
  { name: "Banking & Financial Rails", tag: "BFSI", style: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20" },
  { name: "Public Sector Tech", tag: "Public Sector", style: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20" },
  { name: "Logistics & Mobility", tag: "Logistics", style: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border-sky-500/20" },
  { name: "Cross-Border Fintech", tag: "Fintech", style: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border-emerald-500/20" },
  { name: "Healthcare Platforms", tag: "Healthcare", style: "bg-rose-500/10 text-rose-600 dark:text-rose-300 border-rose-500/20" },
  { name: "Artificial Intelligence", tag: "AI", style: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border-purple-500/20" },
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-background py-14 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-0 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-cyan-400">
          INDUSTRIES WE BUILD FOR
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
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.style}`}>
                  {item.tag}
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
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.style}`}>
                  {item.tag}
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
