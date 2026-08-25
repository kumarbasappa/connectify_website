import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="start" className="relative overflow-hidden bg-background py-28 lg:py-36 border-t border-black/10 dark:border-white/10">
      {/* Radial Indigo & Electric Glow Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(45rem 35rem at 50% 50%, rgba(99, 102, 241, 0.18), rgba(79, 70, 229, 0.06) 50%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-4xl px-6 text-center lg:px-12">
        {/* Eyebrow Badge - Glowing Cyan/Teal Accent */}
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:border-cyan-500/30 dark:bg-cyan-950/50 dark:text-cyan-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500 dark:bg-cyan-400 animate-pulse" />
          ACCEPTING NEW ENTERPRISE PROJECTS
        </span>

        {/* Section Heading - High Contrast White to Indigo Gradient */}
        <h2 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl lg:leading-[1.05]">
          Ready to scale your <br />
          <span className="bg-gradient-to-r from-brand via-electric to-indigo-600 bg-clip-text text-transparent dark:from-white dark:via-slate-100 dark:to-indigo-300">
            digital architecture?
          </span>
        </h2>

        {/* Subheader Paragraph - High Contrast Slate (#CBD5E1 dark / #334155 light) */}
        <p className="mx-auto mt-6 max-w-2xl font-sans text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
          Whether you need a full product engineering team, modern cloud infrastructure, or strategic technical leadership, let&apos;s start the conversation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full btn-glow px-8 py-4 font-display text-base font-semibold"
          >
            Schedule a consultation
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
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-surface px-8 py-4 font-display text-base font-semibold text-foreground transition-all hover:border-brand/40 dark:border-white/15 dark:bg-white/5"
          >
            Explore case studies
          </Link>
        </div>
      </div>
    </section>
  );
}