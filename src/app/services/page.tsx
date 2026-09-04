import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import ProcessTimeline from "@/components/ProcessTimeline";
import { serviceCategories } from "@/lib/services";

export const metadata = {
  title: "Services & Capabilities — Connectify",
  description:
    "Enterprise digital product engineering, technology consulting, business advisory, and data & AI infrastructure designed for scale.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Capabilities & Services"
        title="Enterprise engineering with strategic advisory."
        description="From full-stack digital solutions and cloud infrastructure to business growth advisory and AI foundations — we partner with ambitious organizations across 6 core pillars."
      />

      <div className="px-0 py-16 lg:py-24 bg-background">
        <div className="mx-auto w-full max-w-6xl space-y-24">
          {/* Quick Jump Navigation */}
          <nav className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-md dark:border-white/10 dark:bg-slate-900/80">
            {serviceCategories.map((group) => (
              <a
                key={group.id}
                href={`#${group.id}`}
                className="rounded-xl px-4 py-2 font-mono text-xs font-bold text-slate-700 transition-colors hover:bg-brand/10 hover:text-brand dark:text-slate-300 dark:hover:bg-amber-500/20 dark:hover:text-amber-300"
              >
                {group.title}
              </a>
            ))}
          </nav>

          {/* Service Pillar Deep Dives */}
          {serviceCategories.map((pillar) => (
            <section key={pillar.id} id={pillar.id} className="scroll-mt-28 space-y-8">
              {/* Pillar Header */}
              <div className="border-b border-slate-200 pb-6 dark:border-white/10">
                <span className="font-mono text-xs font-bold text-brand dark:text-amber-400">
                  PILLAR {pillar.number}
                </span>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                  {pillar.title}
                </h2>
                <p className="mt-2 max-w-3xl font-sans text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
                  {pillar.description}
                </p>
              </div>

              {/* Problems Solved & Deliverables Grid */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:border-brand/60 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-amber-400/60">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400">
                    Business Problems Solved
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {pillar.problemsSolved.map((prob, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-sans text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                        <span className="mt-0.5 font-bold text-brand dark:text-amber-400">•</span>
                        <span>{prob}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 ease-in-out hover:border-brand/60 hover:shadow-lg dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-amber-400/60">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-brand dark:text-amber-400">
                    Typical Deliverables
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {pillar.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 font-sans text-xs font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                        <span className="mt-0.5 font-bold text-brand dark:text-amber-400">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Individual Services Cards */}
              <div className="grid gap-6 sm:grid-cols-2">
                {pillar.services.map((service, i) => (
                  <article
                    key={service.name}
                    className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-amber-400/60"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-brand dark:text-amber-400">
                        {pillar.number}.{String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                        {service.name}
                      </h3>
                      <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/10">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 font-display text-xs font-bold text-brand transition-colors hover:text-brand-deep dark:text-amber-400 dark:hover:text-white"
                      >
                        <span>Initiate {service.name} engagement</span>
                        <svg
                          className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {/* Process Timeline Integration */}
          <ProcessTimeline />

          <div className="flex justify-center pt-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full btn-glow px-8 py-4 font-display text-sm font-semibold"
            >
              Scope Your Project Requirements
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
        </div>
      </div>

      <FinalCta />
    </>
  );
}
