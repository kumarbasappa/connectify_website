"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BorderGlow from "./BorderGlow";
import { projects } from "@/lib/projects";
import { ArrowRight, Activity } from "lucide-react";
import { AntiGravityElement } from "./AntiGravity";
import SpotlightCard from "./SpotlightCard";
import TiltCard from "./TiltCard";

gsap.registerPlugin(ScrollTrigger);

// Select top 6 showcase projects from real data
const featuredProjects = projects.slice(0, 6);

// Quantitative impact metric badges for showcased projects
const projectMetricsMap: Record<string, string[]> = {
  "karnataka-statewide-survey-platform": ["2.5M+ Households", "99.99% Uptime"],
  "taurus-career-ai": ["45% Faster Matching", "Sub-200ms Latency"],
  "flycure-health": ["15+ Partner Hospitals", "HIPAA Compliant"],
  "cloud-kitchen-pos": ["100+ Live Kitchens", "Zero Offline Data Loss"],
  "contractor-loyalty-app": ["80k+ Active Contractors", "Real-Time Ledger"],
  "trackway": ["10k+ Telemetry Streams/sec", "Live GPS Tracking"],
};

const categoryGradients: Record<string, string> = {
  "GovTech": "bg-gradient-to-r from-blue-500/15 to-cyan-500/15 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30",
  "AI Platform": "bg-gradient-to-r from-purple-500/15 to-indigo-500/15 text-purple-700 dark:text-purple-300 border border-purple-500/30",
  "HealthTech": "bg-gradient-to-r from-rose-500/15 to-pink-500/15 text-rose-700 dark:text-rose-300 border border-rose-500/30",
  "Enterprise POS": "bg-gradient-to-r from-amber-500/15 to-orange-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30",
  "Fintech": "bg-gradient-to-r from-emerald-500/15 to-teal-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30",
  "Logistics": "bg-gradient-to-r from-sky-500/15 to-blue-500/15 text-sky-700 dark:text-sky-300 border border-sky-500/30",
};

export default function SelectedWork() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("[data-project-card]");
      items.forEach((el, index) => {
        // Staggered reveal & smooth entry on viewport scroll
        gsap.fromTo(
          el,
          { opacity: 0, y: 45, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            delay: (index % 3) * 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );

        // Parallax image shift on scroll
        const img = el.querySelector("img");
        if (img) {
          gsap.to(img, {
            yPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      ref={rootRef}
      className="relative bg-background py-24 lg:py-32 border-t border-slate-200/90 dark:border-white/10 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-0 relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand dark:text-cyan-400 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" />
              06 / SELECTED DEPLOYMENTS
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Proven enterprise impact.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-brand dark:text-cyan-400 transition-colors hover:text-indigo-600 dark:hover:text-white"
          >
            <span>View all 25 case studies</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => {
            const systemMetrics =
              projectMetricsMap[project.slug] || ["Enterprise SLA", "Live System"];
            const categoryBadgeStyle =
              categoryGradients[project.category] ||
              "bg-gradient-to-r from-indigo-500/15 to-purple-500/15 text-indigo-700 dark:text-cyan-300 border border-indigo-500/30";
            return (
              <AntiGravityElement
                key={project.slug}
                floatDistance={10}
                floatDuration={4.8 + idx * 0.5}
                floatDelay={idx * 0.12}
                intensity={0.22}
                scaleOnHover={1.02}
              >
                <motion.div
                  data-project-card
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, type: "spring", stiffness: 280, damping: 24 }}
                >
                <TiltCard maxTilt={8} scaleOnHover={1.025}>
                <SpotlightCard color="indigo">
                <BorderGlow
                  backgroundColor="var(--card-bg)"
                  borderRadius={20}
                  glowColor="99 102 241"
                  glowRadius={24}
                  glowIntensity={0.8}
                  edgeSensitivity={35}
                  colors={["#6366f1", "#38bdf8", "#4f46e5"]}
                >
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-md transition-all duration-500 ease-out hover:border-indigo-500/60 hover:shadow-2xl hover:shadow-indigo-500/15 dark:border-white/10 dark:bg-slate-900/90 dark:hover:border-cyan-500/60 dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                      {/* Live System Quantitative Impact Metric Badges Overlay */}
                      <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
                        {systemMetrics.map((metric, mIdx) => (
                          <motion.div
                            key={mIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.35, delay: idx * 0.08 + mIdx * 0.1, type: "spring", stiffness: 350 }}
                            className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-slate-950/85 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400 backdrop-blur-md shadow-lg"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping flex-none" />
                            <span>{metric}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-full ${categoryBadgeStyle}`}>
                            {project.category}
                          </span>
                          <ArrowRight className="h-4 w-4 text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-600 dark:group-hover:text-cyan-400" />
                        </div>
                        <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-950 transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-cyan-400">
                          {project.name}
                        </h3>
                        <p className="font-sans mt-2 text-xs font-medium leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-2">
                          {project.summary}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200 bg-slate-100/80 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
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
              </motion.div>
            </AntiGravityElement>
          );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-8 py-4 font-display text-base font-semibold transition-all duration-300 shadow-lg hover:scale-[1.02]"
          >
            <span>Browse Full Portfolio (25 Projects)</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
