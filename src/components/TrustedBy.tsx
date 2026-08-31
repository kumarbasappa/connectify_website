"use client";

import { useRef } from "react";

interface MarqueeItemProps {
  name: string;
  logoSvg: string;
  industry: string;
  accentColor: string;
}

const marqueeClients: MarqueeItemProps[] = [
  {
    name: "Government of Karnataka",
    logoSvg: "/clients/govt-karnataka.svg",
    industry: "GovTech",
    accentColor: "sky",
  },
  {
    name: "AU Small Finance Bank",
    logoSvg: "/clients/au-bank.svg",
    industry: "BFSI",
    accentColor: "emerald",
  },
  {
    name: "Hyundai Motors",
    logoSvg: "/clients/hyundai.svg",
    industry: "Automotive",
    accentColor: "cyan",
  },
  {
    name: "ITC Limited",
    logoSvg: "/clients/itc.svg",
    industry: "Enterprise",
    accentColor: "purple",
  },
  {
    name: "Rapido Mobility",
    logoSvg: "/clients/rapido.svg",
    industry: "Logistics",
    accentColor: "amber",
  },
  {
    name: "Nium Global",
    logoSvg: "/clients/nium.svg",
    industry: "Fintech",
    accentColor: "emerald",
  },
  {
    name: "Integra Systems",
    logoSvg: "/clients/integra.svg",
    industry: "Tech",
    accentColor: "indigo",
  },
  {
    name: "Namma Metro",
    logoSvg: "/clients/namma-metro.svg",
    industry: "Transit",
    accentColor: "purple",
  },
  {
    name: "Bank of Abyssinia",
    logoSvg: "/clients/bank-abyssinia.svg",
    industry: "Banking",
    accentColor: "emerald",
  },
  {
    name: "FidyPay",
    logoSvg: "/clients/fidypay.svg",
    industry: "Fintech",
    accentColor: "cyan",
  },
];

const badgeColorMap: Record<string, string> = {
  sky: "bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/20",
  emerald: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
  purple: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
  rose: "bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-500/20",
  indigo: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-500/20",
  cyan: "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-500/20",
};

export function MarqueeLogoPill({ name, logoSvg, industry, accentColor }: MarqueeItemProps) {
  const badgeStyle = badgeColorMap[accentColor] || badgeColorMap.sky;

  return (
    <div className="inline-flex items-center gap-3.5 px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:border-indigo-400/60 dark:hover:border-cyan-400/50 hover:shadow-md transition-all duration-300 group shrink-0 will-change-transform transform-gpu [image-rendering:-webkit-optimize-contrast] cursor-pointer">
      {/* High-Res Logo Container */}
      <div className="flex items-center justify-center h-7 w-auto min-w-[80px] max-w-[125px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSvg}
          alt={`${name} Logo`}
          className="h-full w-auto max-h-7 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:opacity-60 dark:group-hover:opacity-100 transition-all duration-300"
          loading="eager"
        />
      </div>

      {/* Divider */}
      <span className="w-px h-4 bg-slate-200 dark:bg-white/10 group-hover:bg-slate-300 dark:group-hover:bg-white/20 transition-colors" />

      {/* Domain Badge */}
      <span className={`text-[11px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full border ${badgeStyle}`}>
        {industry}
      </span>
    </div>
  );
}

export default function TrustedBy() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-background py-12 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-0 text-center">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-slate-900 dark:text-cyan-400">
          INDUSTRIES WE BUILD FOR
        </p>
      </div>

      <div className="relative mt-8 flex overflow-hidden group/marquee">
        {/* Left Edge Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-32 bg-gradient-to-r from-background to-transparent"
        />

        {/* Marquee Track */}
        <div
          ref={containerRef}
          className="marquee-container flex w-max items-center"
        >
          {/* Primary Track */}
          <div className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 pr-6 sm:pr-8 group-hover/marquee:[animation-play-state:paused]">
            {marqueeClients.map((item, idx) => (
              <MarqueeLogoPill
                key={`${item.name}-${idx}`}
                name={item.name}
                logoSvg={item.logoSvg}
                industry={item.industry}
                accentColor={item.accentColor}
              />
            ))}
          </div>

          {/* Clone Track for Seamless Loop */}
          <div
            className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 pr-6 sm:pr-8 group-hover/marquee:[animation-play-state:paused]"
            aria-hidden="true"
            role="presentation"
          >
            {marqueeClients.map((item, idx) => (
              <MarqueeLogoPill
                key={`clone-${item.name}-${idx}`}
                name={item.name}
                logoSvg={item.logoSvg}
                industry={item.industry}
                accentColor={item.accentColor}
              />
            ))}
          </div>
        </div>

        {/* Right Edge Mask */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-32 bg-gradient-to-l from-background to-transparent"
        />
      </div>
    </section>
  );
}
