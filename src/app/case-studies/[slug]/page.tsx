import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import FinalCta from "@/components/FinalCta";
import BorderGlow from "@/components/BorderGlow";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — Enterprise Case Study | Connectify`,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  // Get 3 related projects in same industry or category
  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      {/* Header / Hero */}
      <header className="border-b border-slate-800 bg-[#0B0F17] px-6 pb-20 pt-36">
        <div className="mx-auto w-full max-w-5xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 transition-colors hover:text-amber-400"
          >
            ← Back to all case studies
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-cyan-950/60 border border-cyan-500/30 px-4 py-1.5 font-mono text-xs font-bold text-cyan-400">
              {project.category}
            </span>
            {project.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 font-mono text-xs font-semibold text-slate-200"
              >
                {ind}
              </span>
            ))}
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-6xl">
            {project.name}
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-lg font-medium leading-relaxed text-slate-300 sm:text-xl">
            {project.summary}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 py-16 lg:py-24 bg-background">
        <div className="mx-auto w-full max-w-5xl space-y-16">
          {/* Main Visual */}
          <div className="overflow-hidden rounded-3xl border border-slate-800 shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.name}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>

          {/* Overview */}
          <section className="rounded-3xl border border-slate-800 bg-[#161F2E] p-8 sm:p-12 shadow-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              01 / Project Overview
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white sm:text-3xl">
              Business Context &amp; Environment
            </h2>
            <p className="mt-4 font-sans text-base font-medium leading-relaxed text-slate-300 sm:text-lg">
              {project.overview}
            </p>
          </section>

          {/* Challenge & Solution Grid */}
          <section className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-3xl border border-rose-500/30 bg-rose-950/20 p-8 sm:p-10 shadow-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-rose-400">
                02 / The Challenge
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                Operational &amp; Technical Bottlenecks
              </h3>
              <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
                {project.challenge}
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-950/20 p-8 sm:p-10 shadow-xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                03 / The Solution
              </span>
              <h3 className="mt-2 font-display text-xl font-bold text-white">
                What Connectify Engineered
              </h3>
              <p className="mt-4 font-sans text-sm font-medium leading-relaxed text-slate-300 sm:text-base">
                {project.solution}
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="rounded-3xl border border-slate-800 bg-[#161F2E] p-8 sm:p-12 shadow-xl">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              04 / Engineering Stack
            </span>
            <h2 className="mt-2 font-display text-2xl font-extrabold text-white">
              Technologies &amp; Protocols Used
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-700 bg-slate-800/80 px-5 py-2.5 font-mono text-sm font-semibold text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>

          {/* Engagement CTA */}
          <div className="rounded-3xl border border-amber-500/30 bg-[#161F2E] p-8 text-center sm:p-12 shadow-xl">
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Facing a similar engineering challenge?
            </h2>
            <p className="mt-3 font-sans text-base font-medium text-slate-300">
              Connect with our principal solution architects to scope your roadmap.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full btn-glow px-8 py-4 font-display text-sm font-semibold"
              >
                Schedule Architecture Consultation
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

          {/* Related Case Studies */}
          <section className="pt-8">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h2 className="font-display text-2xl font-extrabold text-white">
                Related Enterprise Projects
              </h2>
              <Link href="/case-studies" className="font-mono text-xs font-bold text-amber-400 hover:underline">
                View all case studies →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {relatedProjects.map((rel) => (
                <BorderGlow
                  key={rel.slug}
                  backgroundColor="#161F2E"
                  borderRadius={16}
                  glowColor="245 158 11"
                  glowRadius={20}
                  glowIntensity={0.8}
                  edgeSensitivity={30}
                  colors={["#f59e0b", "#fbbf24", "#d97706"]}
                >
                  <Link
                    href={`/case-studies/${rel.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-slate-800 bg-[#161F2E] p-5 transition-all hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                  >
                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                      {rel.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-white line-clamp-1 group-hover:text-amber-400">
                      {rel.name}
                    </h3>
                  </Link>
                </BorderGlow>
              ))}
            </div>
          </section>
        </div>
      </div>

      <FinalCta />
    </>
  );
}