"use client";

import { useState } from "react";
import { technologyCategories } from "@/lib/technologies";

export default function TechnologyCloud() {
  const [activeTab, setActiveTab] = useState(technologyCategories[0].id);

  const selectedCategory =
    technologyCategories.find((cat) => cat.id === activeTab) ||
    technologyCategories[0];

  return (
    <section className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand dark:text-cyan-400">
              02 / Engineering Stack
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Proven technology matrix.
            </h2>
          </div>
          <p className="font-sans max-w-md text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            We work exclusively with modern, battle-tested technologies verified across our enterprise and government client deployments.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-black/10 pb-4 dark:border-white/10">
          {technologyCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-brand text-white shadow-md shadow-brand/20 dark:bg-electric"
                    : "bg-card-bg text-slate-700 border border-black/10 hover:border-brand/40 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Active Tech Stack Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedCategory.techs.map((tech) => (
            <div
              key={tech.name}
              className="group rounded-2xl border border-black/10 bg-card-bg p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 dark:border-white/10 dark:hover:border-indigo-500/50"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-electric">
                  {tech.name}
                </h3>
                {tech.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Verified
                  </span>
                )}
              </div>
              <p className="font-sans mt-3 text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
