"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BorderGlow from "./BorderGlow";
import { projects } from "@/lib/projects";

gsap.registerPlugin(ScrollTrigger);

// Select top 6 showcase projects from real data
const featuredProjects = projects.slice(0, 6);

// System telemetry metric tags mapping per project
const projectMetricsMap: Record<string, string> = {
  "karnataka-statewide-survey-platform": "6.8M Citizens Onboarded • 100% Uptime",
  "taurus-career-ai": "500k Active AI Chats • <45ms Response",
  "flycure-health": "HIPAA Certified • 99.99% Cloud SLA",
  "hyundai-dealer-platform": "450+ Dealerships Synced • Real-Time Inventory",
  "itc-supply-chain-analytics": "2.4M Daily Events • Zero-Lag Kafka",
  "au-bank-digital-onboarding": "Tier-1 BFSI Security • 12ms KYC Verification",
};

export default function SelectedWork() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-project-card]");
      items.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true
            }
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={rootRef} className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand dark:text-cyan-400">
              05 / SELECTED DEPLOYMENTS
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Proven enterprise impact.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-brand dark:text-cyan-400 transition-colors hover:text-electric dark:hover:text-white"
          >
            View all 25 case studies
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const systemMetric = projectMetricsMap[project.slug] || "99.99% Operational SLA";
            return (
              <div key={project.slug} data-project-card>
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
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-card-bg transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card-bg via-card-bg/20 to-transparent opacity-90" />

                      {/* Live System Metric Overlay Pill */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-black/75 px-3 py-1 font-mono text-[10px] font-bold text-emerald-400 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{systemMetric}</span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-brand dark:text-cyan-400">
                            {project.category}
                          </span>
                          <svg
                            className="h-4 w-4 text-muted transition-all group-hover:translate-x-1 group-hover:text-amber-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-amber-400">
                          {project.name}
                        </h3>
                        <p className="font-sans mt-2 text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-300 line-clamp-2">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-black/10 bg-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </BorderGlow>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 rounded-full btn-glow px-8 py-4 font-display text-base font-semibold"
          >
            Browse Full Portfolio (25 Projects)
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
