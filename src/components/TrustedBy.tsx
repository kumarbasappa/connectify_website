"use client";

import { useRef } from "react";

const clientLogos = [
  { name: "Hyundai Motors", tag: "Automotive" },
  { name: "ITC Ltd", tag: "Enterprise" },
  { name: "AU Small Finance Bank", tag: "BFSI" },
  { name: "Government of Karnataka", tag: "Public Sector" },
  { name: "Rapido Mobility", tag: "Logistics" },
  { name: "Nium Financial", tag: "Fintech" },
  { name: "Flycure Health", tag: "Healthcare" },
  { name: "Taurus AI", tag: "Artificial Intelligence" },
];

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-background py-14 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-12">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted">
          TRUSTED BY ENTERPRISE LEADERS &amp; HIGH-GROWTH VENTURES
        </p>
      </div>

      <div className="relative mt-8 flex overflow-hidden">
        {/* Left Edge Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-28 bg-gradient-to-r from-background to-transparent"
        />

        {/* Marquee Track with Automated Infinite Clone for Accessibility & Performance */}
        <div
          ref={containerRef}
          className="marquee-container flex w-max items-center"
        >
          {/* Primary Track */}
          <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
            {clientLogos.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-surface/80 px-6 py-3.5 transition-all duration-300 hover:border-brand/50 hover:bg-card-bg hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/50"
              >
                <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60 transition-colors group-hover:bg-brand group-hover:opacity-100 dark:bg-slate-500 dark:group-hover:bg-electric" />
                <span className="font-display text-sm font-bold tracking-tight text-slate-700 transition-colors group-hover:text-foreground dark:text-slate-300 dark:group-hover:text-white">
                  {client.name}
                </span>
                <span className="font-mono text-[10px] font-semibold text-muted opacity-70 group-hover:opacity-100">
                  [{client.tag}]
                </span>
              </div>
            ))}
          </div>

          {/* Automated Clone Track for Smooth Loop (Hidden from Accessibility Tree) */}
          <div className="flex shrink-0 animate-marquee items-center gap-8 sm:gap-12 pr-8 sm:pr-12" aria-hidden="true">
            {clientLogos.map((client, idx) => (
              <div
                key={`clone-${client.name}-${idx}`}
                className="group flex items-center gap-3 rounded-2xl border border-black/10 bg-surface/80 px-6 py-3.5 transition-all duration-300 hover:border-brand/50 hover:bg-card-bg hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/50"
              >
                <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60 transition-colors group-hover:bg-brand group-hover:opacity-100 dark:bg-slate-500 dark:group-hover:bg-electric" />
                <span className="font-display text-sm font-bold tracking-tight text-slate-700 transition-colors group-hover:text-foreground dark:text-slate-300 dark:group-hover:text-white">
                  {client.name}
                </span>
                <span className="font-mono text-[10px] font-semibold text-muted opacity-70 group-hover:opacity-100">
                  [{client.tag}]
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
