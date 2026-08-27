"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BorderGlow from "./BorderGlow";
import { ArrowRight, ShieldCheck, Zap, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

export default function WhyConnectify() {
  return (
    <section className="relative bg-background py-24 lg:py-32 border-t border-slate-200/90 dark:border-white/10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-0 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand dark:text-cyan-400 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              05 / DIFFERENTIATORS
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Why enterprise leaders trust Connectify.
            </h2>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-brand dark:text-cyan-400 transition-colors hover:text-indigo-600 dark:hover:text-white"
          >
            <span>Read our company story</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Asymmetrical Bento Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Card 1 (Large 2-Column Span) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="99 102 241"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#6366f1", "#38bdf8", "#4f46e5"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 dark:border-white/10 dark:bg-slate-900/80">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      01 / STRATEGIC ALIGNMENT
                    </span>
                    <span className="rounded-full bg-indigo-50 border border-indigo-200 px-3 py-1 font-mono text-[11px] font-bold text-indigo-700 dark:bg-cyan-950/60 dark:border-cyan-500/30 dark:text-cyan-400">
                      ROI FOCUS
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                    Business-First Engineering
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    We tie architectural choices directly to commercial outcomes — customer retention, transaction volume, operational margin, and scale. Engineering decisions are validated against financial objectives.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-slate-200/90 pt-6 dark:border-white/10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Financial Model Sync
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> TCO Reduction
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1.5 font-mono text-xs font-semibold text-slate-800 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Board-Ready KPIs
                  </span>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Bento Card 2 (1 Column Span) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="99 102 241"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#6366f1", "#38bdf8", "#4f46e5"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 dark:border-white/10 dark:bg-slate-900/80">
                <div>
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    02 / RESILIENCE
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-950 dark:text-white">
                    Enterprise Security &amp; Scale
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Zero-trust security architecture, low-latency response times, and multi-region failover designed to handle production demand with stability.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-emerald-500/30 bg-emerald-50/80 p-3.5 font-mono text-xs text-slate-900 dark:bg-emerald-950/50 dark:text-slate-200 flex items-center gap-2.5">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                    <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 opacity-40" />
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  </span>
                  <span className="text-emerald-900 dark:text-emerald-400 font-extrabold">High-Availability SLA Target</span> • 24/7 Monitoring Coverage
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Bento Card 3 (1 Column Span) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="99 102 241"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#6366f1", "#38bdf8", "#4f46e5"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 dark:border-white/10 dark:bg-slate-900/80">
                <div>
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    03 / VELOCITY
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-950 dark:text-white">
                    Product Design &amp; UX
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    Engineering, modern UI design, and product strategy work together seamlessly, eliminating handoff friction and accelerating delivery.
                  </p>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs font-extrabold text-indigo-600 dark:text-cyan-400">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Streamlined Product Delivery →</span>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Bento Card 4 (2 Column Span) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="99 102 241"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#6366f1", "#38bdf8", "#4f46e5"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 dark:border-white/10 dark:bg-slate-900/80">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      04 / OPERATIONAL EMBEDDING
                    </span>
                    <span className="rounded-full bg-emerald-100 border border-emerald-300 px-3 py-1 font-mono text-[11px] font-extrabold text-emerald-900 dark:bg-emerald-950/60 dark:border-emerald-500/30 dark:text-emerald-400">
                      24/7 SRE COVERAGE
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-slate-950 sm:text-3xl dark:text-white">
                    Long-Term Operational Partnership
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    Our engagement doesn&apos;t end at deployment. We provide dedicated SRE operations, continuous latency optimization, board reporting support, and roadmap evolution.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-slate-200/90 pt-6 dark:border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs font-extrabold text-slate-950 dark:text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Incident Response &lt; 5 mins</span>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
