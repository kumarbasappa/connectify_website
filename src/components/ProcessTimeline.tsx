"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { processSteps } from "@/lib/process";
import { CheckCircle2, ArrowRight, Activity, GitBranch, Layers, Rocket, FlaskConical, Cloud, Headset } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 300, damping: 50 });

  const stageIcons = [
    <Activity key="1" className="w-5 h-5 text-indigo-500" />,
    <GitBranch key="2" className="w-5 h-5 text-purple-500" />,
    <Layers key="3" className="w-5 h-5 text-sky-500" />,
    <Rocket key="4" className="w-5 h-5 text-amber-500" />,
    <FlaskConical key="5" className="w-5 h-5 text-rose-500" />,
    <Cloud key="6" className="w-5 h-5 text-teal-500" />,
    <Headset key="7" className="w-5 h-5 text-cyan-500" />,
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-surface py-24 lg:py-32 border-t border-black/5 dark:border-white/10 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-0 relative z-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand dark:text-amber-400 flex items-center gap-2">
            <GitBranch className="w-3.5 h-3.5" />
            04 / PROCESS ARCHITECTURE
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Structured 7-step software delivery process.
          </h2>
          <p className="font-sans mt-4 text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
            Our transparent engineering methodology ensures predictable delivery, continuous quality control, and smooth production launches.
          </p>
        </div>

        {/* Dynamic Scroll-Driven Connecting Path Line for Desktop */}
        <div className="relative mt-12 hidden lg:block px-0 h-8">
          <svg className="absolute top-1/2 left-12 right-12 w-[calc(100%-6rem)] h-8 -translate-y-1/2 pointer-events-none z-0" viewBox="0 0 1000 20" preserveAspectRatio="none">
            <path
              d="M 10 10 L 990 10"
              fill="none"
              stroke="rgba(148, 163, 184, 0.25)"
              strokeWidth="4"
              strokeDasharray="6 6"
            />
            <motion.path
              d="M 10 10 L 990 10"
              fill="none"
              stroke="url(#process-line-gradient)"
              strokeWidth="5"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="process-line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute top-1/2 left-16 right-16 h-1.5 -translate-y-1/2 rounded-full overflow-hidden z-0 opacity-40">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-600 via-sky-500 to-amber-400"
              initial={{ width: "0%" }}
              animate={{ width: `${(activeStep / (processSteps.length - 1)) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Animated Sequential Process Workflow Tabs */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
          {processSteps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <motion.button
                key={step.stepNumber}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.06, type: "spring", stiffness: 280, damping: 24 }}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setActiveStep(idx)}
                className={`relative flex flex-col justify-between rounded-2xl border p-6 text-left transition-all duration-300 ease-in-out ${
                  isActive
                    ? "border-indigo-500 bg-white shadow-xl shadow-indigo-500/10 scale-[1.02] dark:border-indigo-400 dark:bg-slate-900/90 dark:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
                    : "border-slate-200 bg-white/90 hover:border-indigo-500/50 dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-indigo-400/50"
                }`}
              >
                <div>
                  <div className="flex w-full items-center justify-between">
                    <span
                      className={`font-mono text-2xl font-black transition-colors ${
                        isActive ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500 opacity-80"
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
                    className="h-full bg-gradient-to-r from-indigo-600 via-sky-500 to-amber-400"
                    initial={{ width: "0%" }}
                    animate={{ width: isActive ? "100%" : "0%" }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.button>
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
            className="mt-8 rounded-3xl border border-indigo-500/30 bg-white p-8 shadow-xl shadow-indigo-500/5 transition-all duration-300 hover:border-indigo-500/60 lg:p-12 dark:border-indigo-500/30 dark:bg-slate-900/90 dark:hover:border-indigo-400/60 dark:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
          >
            <div className="flex flex-col justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-4 py-1.5 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.2)]">
                  STAGE {processSteps[activeStep].stepNumber}
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-slate-900 sm:text-4xl dark:text-white">
                  {processSteps[activeStep].title}
                </h3>
                <p className="font-display mt-2 text-base font-bold text-indigo-600 dark:text-indigo-400">
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
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-none" />
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
