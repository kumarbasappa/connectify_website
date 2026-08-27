import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import BorderGlow from "@/components/BorderGlow";
import { projects, industries } from "@/lib/projects";

import ProjectDropdown from "@/components/ProjectDropdown";

export const metadata = {
  title: "Case Studies & Work — Connectify",
  description:
    "Explore 25 enterprise case studies across GovTech, Fintech, AI Platforms, Healthcare, Mobility, and Enterprise solutions.",
};

export default async function CaseStudiesPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category ? decodeURIComponent(category) : undefined;
  
  const filtered = active
    ? projects.filter((p) => p.industries.includes(active) || p.tags.includes(active))
    : projects;

  return (
    <>
      <PageIntro
        eyebrow="Case Studies & Portfolio"
        title="Real impact. Proven enterprise scale."
        description="Explore our complete portfolio of 25 enterprise deployments across GovTech, Banking, AI Platforms, Healthcare, and Logistics."
      />

      <div className="px-0 py-16 lg:py-24 bg-background">
        <div className="mx-auto w-full max-w-7xl">
          {/* Mobile View: Project Name & Category Dropdowns */}
          <ProjectDropdown activeCategory={active} mode="both" />

          {/* Desktop View: Dynamic Theme Category Filter Pills */}
          <div className="hidden md:flex flex-wrap items-center gap-2 rounded-2xl border border-black/10 bg-slate-100/80 p-3 shadow-xs backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/60">
            <Link
              href="/case-studies"
              className={`rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${
                !active
                  ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                  : "text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
              }`}
            >
              All Projects ({projects.length})
            </Link>
            {industries.map((ind) => {
              const isActive = active === ind.name;
              const count = projects.filter((p) => p.industries.includes(ind.name) || p.tags.includes(ind.name)).length;
              return (
                <Link
                  key={ind.name}
                  href={`/case-studies?category=${encodeURIComponent(ind.name)}`}
                  className={`rounded-xl px-4 py-2 font-mono text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-amber-500 text-slate-950 font-bold shadow-xs"
                      : "text-slate-700 hover:bg-slate-200/80 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white"
                  }`}
                >
                  {ind.name} ({count})
                </Link>
              );
            })}
          </div>

          {/* Results Counter */}
          <div className="mt-8 flex items-center justify-between font-mono text-xs text-slate-600 dark:text-slate-400">
            <p>
              Showing <span className="font-bold text-brand dark:text-amber-400">{filtered.length}</span> case studies
              {active ? ` for category "${active}"` : ""}
            </p>
            {active && (
              <Link href="/case-studies" className="font-semibold text-brand dark:text-amber-400 hover:underline">
                Clear filter ×
              </Link>
            )}
          </div>

          {/* Case Studies Grid */}
          {filtered.length === 0 ? (
            <div className="mt-12 rounded-3xl border border-black/10 bg-card-bg p-12 text-center shadow-md dark:border-slate-800 dark:bg-[#161F2E]">
              <p className="text-base text-slate-700 dark:text-slate-300 font-sans font-medium">
                No case studies match this filter yet.{" "}
              </p>
              <Link
                href="/case-studies"
                className="mt-4 inline-block font-semibold text-brand dark:text-amber-400 underline underline-offset-4"
              >
                View all projects
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <div key={project.slug}>
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
                            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-600 dark:text-cyan-400">
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
                              className="rounded-full border border-black/10 bg-surface px-2.5 py-0.5 font-mono text-[10px] font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </BorderGlow>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <FinalCta />
    </>
  );
}