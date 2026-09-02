"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { serviceCategories } from "@/lib/services";
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldAlert, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const pillarColorStyles: Record<
  string,
  {
    badgeBg: string;
    badgeText: string;
    activeBorder: string;
    activeGlow: string;
    iconBg: string;
    textAccent: string;
  }
> = {
  "digital-solutions": {
    badgeBg: "bg-sky-500/10 dark:bg-sky-950/60 border border-sky-500/30",
    badgeText: "text-sky-600 dark:text-sky-400",
    activeBorder: "border-sky-500 dark:border-sky-400",
    activeGlow: "shadow-xl shadow-sky-500/15",
    iconBg: "bg-sky-500 text-white",
    textAccent: "text-sky-600 dark:text-sky-400",
  },
  "technology-services": {
    badgeBg: "bg-violet-500/10 dark:bg-violet-950/60 border border-violet-500/30",
    badgeText: "text-violet-600 dark:text-violet-400",
    activeBorder: "border-violet-500 dark:border-violet-400",
    activeGlow: "shadow-xl shadow-violet-500/15",
    iconBg: "bg-violet-500 text-white",
    textAccent: "text-violet-600 dark:text-violet-400",
  },
  "business-advisory": {
    badgeBg: "bg-amber-500/10 dark:bg-amber-950/60 border border-amber-500/30",
    badgeText: "text-amber-600 dark:text-amber-400",
    activeBorder: "border-amber-500 dark:border-amber-400",
    activeGlow: "shadow-xl shadow-amber-500/15",
    iconBg: "bg-amber-500 text-white",
    textAccent: "text-amber-600 dark:text-amber-400",
  },
  "investment-consulting": {
    badgeBg: "bg-emerald-500/10 dark:bg-emerald-950/60 border border-emerald-500/30",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    activeBorder: "border-emerald-500 dark:border-emerald-400",
    activeGlow: "shadow-xl shadow-emerald-500/15",
    iconBg: "bg-emerald-500 text-white",
    textAccent: "text-emerald-600 dark:text-emerald-400",
  },
  "brand-experience": {
    badgeBg: "bg-rose-500/10 dark:bg-rose-950/60 border border-rose-500/30",
    badgeText: "text-rose-600 dark:text-rose-400",
    activeBorder: "border-rose-500 dark:border-rose-400",
    activeGlow: "shadow-xl shadow-rose-500/15",
    iconBg: "bg-rose-500 text-white",
    textAccent: "text-rose-600 dark:text-rose-400",
  },
  "data-ai": {
    badgeBg: "bg-indigo-500/10 dark:bg-indigo-950/60 border border-indigo-500/30",
    badgeText: "text-indigo-600 dark:text-indigo-400",
    activeBorder: "border-indigo-500 dark:border-indigo-400",
    activeGlow: "shadow-xl shadow-indigo-500/15",
    iconBg: "bg-indigo-500 text-white",
    textAccent: "text-indigo-600 dark:text-indigo-400",
  },
};

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
            once: true,
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const activeService = serviceCategories[activeIdx] || serviceCategories[0];
  const activeStyles = pillarColorStyles[activeService.id] || pillarColorStyles["digital-solutions"];

  return (
    <section
      id="services-suite"
      ref={rootRef}
      className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10 overflow-hidden"
    >
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-[-10%] w-[35%] h-[35%] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-0 relative z-10">
        <div data-services-heading className="max-w-3xl">
          <p className="font-mono text-xs font-bold tracking-wider text-brand dark:text-cyan-400 flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" />
            02 / Services Suite
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-5xl dark:text-white">
            Technology consulting &amp; strategic advisory pillars.
          </h2>
          <p className="font-sans mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Select or hover over any pillar to inspect core engineering capabilities, business challenges solved, and production deliverables.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          {/* Left Column: Interactive 6-Pillar System */}
          <div className="space-y-3 lg:col-span-6">
            {serviceCategories.map((item, index) => {
              const isActive = index === activeIdx;
              const styleToken = pillarColorStyles[item.id] || pillarColorStyles["digital-solutions"];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.07, type: "spring", stiffness: 280, damping: 24 }}
                  whileHover={{ y: -6 }}
                  onMouseEnter={() => setActiveIdx(index)}
                  onClick={() => setActiveIdx(index)}
                  className="relative group cursor-pointer rounded-2xl border p-6 transition-all duration-300 border-black/10 dark:border-white/10"
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePillar"
                      className={`absolute inset-0 rounded-2xl bg-white dark:bg-slate-900/90 border-2 ${styleToken.activeBorder} ${styleToken.activeGlow} z-0`}
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm font-extrabold transition-colors ${
                          isActive ? styleToken.textAccent : "text-slate-500"
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`font-display text-xl font-bold transition-colors ${
                          isActive
                            ? "text-slate-950 dark:text-white"
                            : "text-slate-700 dark:text-slate-300 group-hover:text-slate-950 dark:group-hover:text-white"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <Link
                      href={`/services#${item.id}`}
                      aria-label={`Explore ${item.title} details`}
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all ${
                        isActive
                          ? styleToken.iconBg
                          : "bg-black/5 text-slate-500 group-hover:bg-black/10 dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>

                  <p className="relative z-10 font-sans mt-3 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.subtitle}
                  </p>

                  {/* Mobile Accordion Expanded Details (< lg screens) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="block lg:hidden relative z-10 mt-5 border-t border-slate-200/90 pt-4 dark:border-white/10 overflow-hidden"
                      >
                        <p className="font-sans text-xs sm:text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                          {item.description}
                        </p>
                        <div className="mt-4">
                          <h4 className="font-mono text-xs font-semibold tracking-wider text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                            <ShieldAlert className="w-3.5 h-3.5" /> Key Challenges Solved:
                          </h4>
                          <ul className="mt-2 space-y-1.5">
                            {item.problemsSolved.map((prob, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{prob}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-mono text-xs font-semibold tracking-wider text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> Deliverables:
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {item.deliverables.map((del, idx) => (
                              <span key={idx} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                                {del}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Desktop-only Glassmorphic Detail Inspector Pane */}
          <div className="hidden lg:block lg:col-span-6">
            <div className="sticky top-28 rounded-3xl border border-slate-200/90 bg-white/95 p-8 shadow-2xl backdrop-blur-xl lg:p-10 dark:border-white/10 dark:bg-slate-900/90 min-h-[480px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-4 py-1.5 font-mono text-xs font-bold ${activeStyles.badgeBg} ${activeStyles.badgeText} flex items-center gap-1.5`}>
                      <Layers className="w-3.5 h-3.5" />
                      Pillar {activeService.number}
                    </span>
                    <span className="font-mono text-xs tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Interactive Detail Pane
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-extrabold text-slate-950 sm:text-3xl dark:text-white">
                    {activeService.title}
                  </h3>
                  <p className="font-sans mt-4 text-sm font-medium leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                    {activeService.description}
                  </p>

                  {/* Key Challenges Solved */}
                  <div className="mt-8">
                    <h4 className="font-mono text-xs font-semibold tracking-wider text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      Key Business Challenges Solved:
                    </h4>
                    <ul className="mt-3.5 grid gap-2.5 sm:grid-cols-2">
                      {activeService.problemsSolved.map((prob, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 font-sans text-xs font-medium leading-snug text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enterprise Deliverables */}
                  <div className="mt-8 border-t border-slate-200/90 pt-6 dark:border-white/10">
                    <h4 className="font-mono text-xs font-semibold tracking-wider text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      Production Deliverables:
                    </h4>
                    <div className="mt-3.5 flex flex-wrap gap-2">
                      {activeService.deliverables.map((del, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-slate-100/80 px-3 py-1.5 font-sans text-xs font-semibold text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      href={`/services#${activeService.id}`}
                      className="group inline-flex items-center gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-6 py-3 font-display text-sm font-semibold transition-all duration-300 shadow-md"
                    >
                      <span>Explore {activeService.title} Details</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}