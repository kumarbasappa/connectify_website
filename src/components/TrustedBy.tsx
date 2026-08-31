"use client";

import { useRef } from "react";

type MarqueeItem = {
  name: string;
  logoUrl: string;
  industry: string;
  badgeColor: string;
};

const marqueeClients: MarqueeItem[] = [
  {
    name: "Government of Karnataka",
    logoUrl: "/clients/The-Karnataka-Government-Kannada-Logo-Vector.svg-.png",
    industry: "GovTech",
    badgeColor: "sky",
  },
  {
    name: "AU Small Finance Bank",
    logoUrl: "/clients/AU-Bank-new-logo-for-GBM_1024X1024_(cropped).png",
    industry: "BFSI",
    badgeColor: "emerald",
  },
  {
    name: "Hyundai Motors",
    logoUrl: "/clients/Hyundai-Logo-2011.png",
    industry: "Automotive",
    badgeColor: "cyan",
  },
  {
    name: "ITC Limited",
    logoUrl: "/clients/ITC_Limited_Logo.svg.png",
    industry: "Enterprise",
    badgeColor: "purple",
  },
  {
    name: "Rapido Mobility",
    logoUrl: "/clients/Rapido-business-model.jpg",
    industry: "Logistics",
    badgeColor: "amber",
  },
  {
    name: "Nium Global",
    logoUrl: "/clients/Nium_1200x675-768x432.jpg",
    industry: "Fintech",
    badgeColor: "emerald",
  },
  {
    name: "Integra Systems",
    logoUrl: "/clients/Integra Micro Systems_logo.png",
    industry: "Tech",
    badgeColor: "indigo",
  },
  {
    name: "Namma Metro",
    logoUrl: "/clients/Namma_metro.svg.png",
    industry: "Transit",
    badgeColor: "purple",
  },
  {
    name: "Bank of Abyssinia",
    logoUrl: "/clients/BankofAbyssinia-logo.jpg",
    industry: "Banking",
    badgeColor: "emerald",
  },
  {
    name: "FidyPay",
    logoUrl: "/clients/fidypaylogo.ad923170.png",
    industry: "Fintech",
    badgeColor: "cyan",
  },
];

const badgeColorMap: Record<string, string> = {
  sky: "bg-sky-500/10 text-sky-600 dark:text-sky-300 border border-sky-500/20",
  purple: "bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20",
  rose: "bg-rose-500/10 text-rose-600 dark:text-rose-300 border border-rose-500/20",
  emerald: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20",
  cyan: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20",
};

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
              <div
                key={`${item.name}-${idx}`}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:border-indigo-400 dark:hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
              >
                {/* Company Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logoUrl}
                  alt={`${item.name} Logo`}
                  className="h-6 w-auto max-w-[110px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-300"
                />
                {/* Vertical Divider */}
                <span className="w-[1px] h-4 bg-slate-200 dark:bg-white/10" />
                {/* Industry Tag */}
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColorMap[item.badgeColor] || badgeColorMap.sky}`}>
                  {item.industry}
                </span>
              </div>
            ))}
          </div>

          {/* Clone Track for Seamless Loop */}
          <div
            className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 pr-6 sm:pr-8 group-hover/marquee:[animation-play-state:paused]"
            aria-hidden="true"
            role="presentation"
          >
            {marqueeClients.map((item, idx) => (
              <div
                key={`clone-${item.name}-${idx}`}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm hover:border-indigo-400 dark:hover:border-cyan-400/50 transition-all duration-300 group cursor-pointer"
              >
                {/* Company Logo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.logoUrl}
                  alt={`${item.name} Logo`}
                  className="h-6 w-auto max-w-[110px] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 dark:brightness-0 dark:invert dark:group-hover:brightness-100 dark:group-hover:invert-0 transition-all duration-300"
                />
                {/* Vertical Divider */}
                <span className="w-[1px] h-4 bg-slate-200 dark:bg-white/10" />
                {/* Industry Tag */}
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${badgeColorMap[item.badgeColor] || badgeColorMap.sky}`}>
                  {item.industry}
                </span>
              </div>
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
