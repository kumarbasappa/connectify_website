"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Target, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function AboutValue() {
  return (
    <section className="relative bg-background py-24 lg:py-32 border-t border-slate-200/90 dark:border-white/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-[35%] h-[35%] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Headline & Kinetic Typography */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              ENTERPRISE FOUNDATION
            </div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 mb-3">
              01 / ENGINEERING PHILOSOPHY
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-5xl lg:leading-[1.1] dark:text-white">
              We build software systems <br />
              <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-indigo-300">
                designed for real-world scale
              </span>{" "}
              and high-stakes reliability.
            </h2>
          </motion.div>

          {/* Right Column - Narrative & Multi-Layer Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6 lg:col-span-6"
          >
            <p className="font-sans text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              Connectify operates at the intersection of business strategy and deep software engineering.
              Whether architecting statewide public infrastructure or launching high-frequency financial ledgers, we deliver software that remains stable, secure, and maintainable over years of production load.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/80">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">01 / ARCHITECTURE</span>
                  <div className="p-2 rounded-xl bg-indigo-50 dark:bg-white/5 border border-indigo-100 dark:border-white/10">
                    <Cpu className="w-5 h-5 text-indigo-600 dark:text-cyan-400" />
                  </div>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-950 dark:text-white">Battle-Tested Code</h3>
                <p className="mt-1.5 font-sans text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-300">Cloud-native microservices, zero-trust security controls, and sub-second latency.</p>
              </div>

              <div className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/80">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">02 / EXECUTION</span>
                  <div className="p-2 rounded-xl bg-sky-50 dark:bg-white/5 border border-sky-100 dark:border-white/10">
                    <Target className="w-5 h-5 text-sky-600 dark:text-indigo-400" />
                  </div>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-950 dark:text-white">Measurable Impact</h3>
                <p className="mt-1.5 font-sans text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-300">Direct alignment between every sprint deliverable and core operational metrics.</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-slate-950 dark:text-cyan-400 transition-colors hover:text-indigo-600 dark:hover:text-white"
              >
                <span>Read our engineering principles</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
