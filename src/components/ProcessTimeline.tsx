"use client";

import { useState } from "react";
import { processSteps } from "@/lib/process";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-surface py-24 lg:py-32 border-t border-black/5 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand dark:text-amber-400">
            03 / Process Architecture
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Four stages from concept to enterprise scale.
          </h2>
          <p className="font-sans mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Our structured methodology ensures predictable delivery, transparent governance, and zero operational surprises.
          </p>
        </div>

        {/* Timeline Header Nav (Desktop & Mobile) */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col items-start rounded-2xl border p-6 text-left transition-all duration-300 ease-in-out ${
                  isActive
                    ? "border-brand bg-white shadow-xl scale-[1.02] dark:border-amber-400 dark:bg-slate-900/90 dark:shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                    : "border-slate-200 bg-white hover:border-brand/60 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-amber-400/60"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`font-mono text-2xl font-black transition-colors ${
                      isActive ? "text-brand dark:text-amber-400" : "text-slate-400 dark:text-slate-500 opacity-80"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  {isActive && (
                    <span className="h-2.5 w-2.5 rounded-full bg-brand dark:bg-amber-400 animate-pulse" />
                  )}
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Step Inspector Card */}
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:border-brand/60 lg:p-12 dark:border-white/10 dark:bg-slate-900/90 dark:hover:border-amber-400/60">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <span className="rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 font-mono text-xs font-bold text-brand dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400">
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
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400">
                Key Sprint Activities:
              </h4>
              <ul className="mt-4 space-y-2.5">
                {processSteps[activeStep].activities.map((act, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300">
                    <svg className="h-4 w-4 text-brand dark:text-amber-400 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400">
                Stage Deliverables:
              </h4>
              <ul className="mt-4 space-y-2.5">
                {processSteps[activeStep].deliverables.map((del, i) => (
                  <li key={i} className="flex items-center gap-3 font-sans text-sm font-medium text-slate-700 dark:text-slate-300">
                    <svg className="h-4 w-4 text-brand dark:text-amber-400 flex-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
