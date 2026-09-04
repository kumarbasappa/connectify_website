"use client";

import Link from "next/link";
import BorderGlow from "./BorderGlow";
import SpotlightCard from "./SpotlightCard";
import TiltCard from "./TiltCard";
import type { Project } from "@/lib/projects";

interface CaseStudyCardGridProps {
  projects: Project[];
}

export default function CaseStudyCardGrid({ projects }: CaseStudyCardGridProps) {
  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <TiltCard key={project.slug} maxTilt={8} scaleOnHover={1.025}>
          <SpotlightCard color="purple">
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="245 158 11"
              glowRadius={24}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#f59e0b", "#fbbf24", "#d97706"]}
            >
              <Link
                href={`/case-studies/${project.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-card-bg shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-slate-800 dark:bg-[#161F2E]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/20 to-transparent opacity-90 dark:from-[#161F2E] dark:via-[#161F2E]/20" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400">
                        {project.category}
                      </span>
                      <svg
                        className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-500 dark:group-hover:text-amber-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-amber-500 dark:text-white dark:group-hover:text-amber-400">
                      {project.name}
                    </h2>
                    <p className="mt-2 font-sans text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 border-t border-black/10 pt-4 dark:border-slate-800">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-surface px-2.5 py-0.5 font-mono text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </BorderGlow>
          </SpotlightCard>
        </TiltCard>
      ))}
    </div>
  );
}
