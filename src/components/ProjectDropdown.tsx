"use client";

import { useRouter } from "next/navigation";
import { projects, industries } from "@/lib/projects";
import { FolderKanban, Filter, ChevronDown } from "lucide-react";

interface ProjectDropdownProps {
  currentSlug?: string;
  activeCategory?: string;
  mode?: "project" | "both" | "category";
  label?: string;
}

export default function ProjectDropdown({
  currentSlug,
  activeCategory,
  mode = "both",
  label = "Select Project",
}: ProjectDropdownProps) {
  const router = useRouter();

  const handleProjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "all") {
      router.push("/case-studies");
    } else if (val) {
      router.push(`/case-studies/${val}`);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    if (val === "all") {
      router.push("/case-studies");
    } else if (val) {
      router.push(`/case-studies?category=${encodeURIComponent(val)}`);
    }
  };

  return (
    <div className="w-full md:hidden space-y-4 mb-6">
      {/* 1. All Projects Name Dropdown */}
      {(mode === "project" || mode === "both") && (
        <div>
          <label
            htmlFor="mobile-project-select"
            className="mb-1.5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand dark:text-cyan-400"
          >
            <FolderKanban className="h-4 w-4" />
            <span>{label}</span>
          </label>
          <div className="relative">
            <select
              id="mobile-project-select"
              value={currentSlug || "all"}
              onChange={handleProjectChange}
              className="w-full appearance-none rounded-2xl border border-slate-300/90 bg-white px-4 py-3.5 pr-10 font-display text-sm font-bold text-slate-900 shadow-md transition-all focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-[#161F2E] dark:text-white dark:focus:border-cyan-400 dark:focus:ring-cyan-400/20"
            >
              <option value="all" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                ── Browse All 25 Projects ──
              </option>
              {projects.map((project, idx) => (
                <option
                  key={project.slug}
                  value={project.slug}
                  className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium"
                >
                  #{String(idx + 1).padStart(2, "0")} · {project.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      )}

      {/* 2. Industry Category Filter Dropdown (Optional mode) */}
      {(mode === "category" || (mode === "both" && !currentSlug)) && (
        <div>
          <label
            htmlFor="mobile-category-select"
            className="mb-1.5 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-600 dark:text-slate-400"
          >
            <Filter className="h-4 w-4 text-amber-500" />
            <span>Filter By Industry</span>
          </label>
          <div className="relative">
            <select
              id="mobile-category-select"
              value={activeCategory || "all"}
              onChange={handleCategoryChange}
              className="w-full appearance-none rounded-2xl border border-slate-300/90 bg-white px-4 py-3.5 pr-10 font-display text-sm font-bold text-slate-900 shadow-md transition-all focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20 dark:border-white/15 dark:bg-[#161F2E] dark:text-white dark:focus:border-amber-400 dark:focus:ring-amber-400/20"
            >
              <option value="all" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold">
                All Industry Verticals ({projects.length} Projects)
              </option>
              {industries.map((ind) => {
                const count = projects.filter(
                  (p) => p.industries.includes(ind.name) || p.tags.includes(ind.name)
                ).length;
                return (
                  <option
                    key={ind.name}
                    value={ind.name}
                    className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium"
                  >
                    {ind.name} ({count} case studies)
                  </option>
                );
              })}
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400">
              <ChevronDown className="h-5 w-5" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
