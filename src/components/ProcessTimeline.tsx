"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { processSteps } from "@/lib/process";
import { CheckCircle2, ArrowRight, Activity, GitBranch, Layers, Rocket } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const stageIcons = [
    <Activity key="1" className="w-5 h-5 text-indigo-500" />,
    <GitBranch key="2" className="w-5 h-5 text-purple-500" />,
    <Layers key="3" className="w-5 h-5 text-sky-500" />,
    <Rocket key="4" className="w-5 h-5 text-emerald-500" />,
  ];

  return (
    <section className="relative bg-surface py-24 lg:py-32 border-t border-black/5 dark:border-white/10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand dark:text-amber-400 flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5" />
            03 / PROCESS ARCHITECTURE
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Four stages from concept to enterprise scale.
          </h2>
          <p className="font-sans mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Our structured engineering methodology ensures predictable delivery, transparent governance, and zero operational surprises.
          </p>
        </div>

        {/* Animated Sequential Process Workflow Tabs */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 text-left transition-all duration-300 ease-in-out ${
                  isActive
                    ? "border-brand bg-white shadow-xl scale-[1.02] dark:border-amber-400 dark:bg-slate-900/90 dark:shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                    : "border-slate-200 bg-white hover:border-brand/60 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-amber-400/60"
                }`}
              >
                <div>
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-mono text-2xl font-black transition-colors ${
                        isActive ? "text-brand dark:text-amber-400" : "text-slate-400 dark:text-slate-500 opacity-80"
                      }`}
                    >
                      {step.stepNumber}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
                      {stageIcons[idx] || <Activity className="w-5 h-5" />}
                    </div>
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Animated Active Indicator Progress Bar */}
                <div className="mt-6 w-full h-1 bg-slate-100 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand dark:bg-amber-400"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspector Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:border-brand/60 lg:p-12 dark:border-white/10 dark:bg-slate-900/90 dark:hover:border-amber-400/60"
          >
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 font-mono text-xs font-bold text-brand dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400">
                  STAGE {processSteps[activeStep].stepNumber}
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
                  {processSteps[activeStep].title}
                </h3>
                <p className="font-display mt-2 text-base font-bold text-brand dark:text-amber-400">
                  {processSteps[activeStep].subtitle}
                </p>
              </div>
              <p className="font-sans max-w-xl text-sm font-medium leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                {processSteps[activeStep].description}
              </p>
            </div>

            <div className="mt-10 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-2 dark:border-white/10">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400 flex items-center gap-2">
                  <ArrowRight className="w-3.5 h-3.5" />
                  Key Sprint Activities:
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {processSteps[activeStep].activities.map((act, i) => (
                    <li key={i} className="flex items-center gap-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-none" />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand dark:text-amber-400" />
                  Stage Deliverables:
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {processSteps[activeStep].deliverables.map((del, i) => (
                    <li key={i} className="flex items-center gap-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand dark:bg-amber-400 shrink-0" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
