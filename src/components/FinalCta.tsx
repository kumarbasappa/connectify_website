"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function FinalCta() {
  return (
    <section id="start" className="relative overflow-hidden bg-background py-28 lg:py-36 border-t border-slate-200/90 dark:border-white/10">
      {/* Deep Ambient Indigo & Electric Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-indigo-500/20 via-sky-500/15 to-purple-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto w-full max-w-5xl px-6 lg:px-12">
        <div className="relative rounded-3xl border border-slate-200/90 bg-white/90 p-8 sm:p-12 lg:p-16 text-center shadow-2xl backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/80">
          {/* Eyebrow Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:border-cyan-500/30 dark:bg-cyan-950/50 dark:text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-cyan-400 animate-ping" />
            <Sparkles className="w-3.5 h-3.5" />
            ACCEPTING NEW ENTERPRISE PROJECTS
          </span>

          {/* Main Heading */}
          <h2 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl lg:text-6xl lg:leading-[1.1] dark:text-white">
            Ready to scale your <br />
            <span className="bg-gradient-to-r from-indigo-600 via-sky-600 to-violet-600 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-indigo-300">
              digital architecture?
            </span>
          </h2>

          {/* Subheader Paragraph */}
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-medium leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
            Whether you need a full product engineering team, modern cloud infrastructure, or strategic technical leadership, let&apos;s start the conversation.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-8 py-4 font-display text-base font-semibold transition-all duration-300 shadow-xl hover:scale-[1.02] w-full sm:w-auto"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule Consultation</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200/90 bg-white/80 px-8 py-4 font-display text-base font-semibold text-slate-900 transition-all hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 w-full sm:w-auto"
            >
              Explore Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}