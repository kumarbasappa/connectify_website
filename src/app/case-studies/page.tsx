import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import { projects, industries } from "@/lib/projects";
import ProjectDropdown from "@/components/ProjectDropdown";
import CaseStudyCardGrid from "@/components/CaseStudyCardGrid";

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
            <CaseStudyCardGrid projects={filtered} />
          )}
        </div>
      </div>

      <FinalCta />
    </>
  );
}