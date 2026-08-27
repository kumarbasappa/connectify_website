"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologyCategories } from "@/lib/technologies";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers,
  Terminal,
  Zap,
} from "lucide-react";

export default function TechnologyCloud() {
  const [activeTab, setActiveTab] = useState(technologyCategories[0].id);

  const selectedCategory =
    technologyCategories.find((cat) => cat.id === activeTab) ||
    technologyCategories[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    "data-ai": <Database className="w-4 h-4" />,
    "cloud-infra": <Cloud className="w-4 h-4" />,
  };

  const getTechIcon = (name: string) => {
    if (name.includes("React") || name.includes("Next")) return <Zap className="w-5 h-5 text-indigo-500" />;
    if (name.includes("Type") || name.includes("Java") || name.includes("Python")) return <Terminal className="w-5 h-5 text-sky-500" />;
    if (name.includes("Postgres") || name.includes("Mongo") || name.includes("Data")) return <Database className="w-5 h-5 text-emerald-500" />;
    if (name.includes("AWS") || name.includes("Cloud") || name.includes("Docker")) return <Cloud className="w-5 h-5 text-cyan-500" />;
    return <Cpu className="w-5 h-5 text-purple-500" />;
  };

  return (
    <section className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand dark:text-cyan-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              02 / ENGINEERING STACK
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Proven technology matrix.
            </h2>
          </div>
          <p className="font-sans max-w-md text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            We work exclusively with modern, battle-tested technologies verified across our enterprise and government client deployments.
          </p>
        </div>

        {/* Modernized Category Tabs with Framer Motion Layout Pill */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-slate-200/90 pb-4 dark:border-white/10">
          {technologyCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-white dark:text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-tab-pill"
                    className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {categoryIcons[cat.id] || <Cpu className="w-4 h-4" />}
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tech Stack Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {selectedCategory.techs.map((tech) => (
              <div
                key={tech.name}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-indigo-500/50"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10">
                      {getTechIcon(tech.name)}
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-cyan-400">
                      {tech.name}
                    </h3>
                  </div>
                  {tech.verified && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      Verified
                    </span>
                  )}
                </div>
                <p className="font-sans mt-3.5 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
                  {tech.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
