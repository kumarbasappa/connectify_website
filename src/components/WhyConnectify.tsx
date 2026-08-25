import Link from "next/link";
import BorderGlow from "./BorderGlow";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function WhyConnectify() {
  return (
    <section className="relative bg-background py-24 lg:py-32 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <FadeInWhenVisible className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand dark:text-amber-400">
              04 / DIFFERENTIATORS
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Why enterprise leaders trust Connectify.
            </h2>
          </div>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-brand dark:text-amber-400 transition-colors hover:text-electric dark:hover:text-amber-300"
          >
            Read our company story
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
        </FadeInWhenVisible>

        {/* Asymmetrical Bento Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Bento Card 1 (Large 2-Column Span) */}
          <FadeInWhenVisible delay={0.1} className="lg:col-span-2">
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="245 158 11"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#f59e0b", "#fbbf24", "#d97706"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-card-bg p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10 backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand dark:text-amber-400">
                      01 / STRATEGIC ALIGNMENT
                    </span>
                    <span className="rounded-full bg-brand/10 border border-brand/20 px-3 py-1 font-mono text-[11px] font-bold text-brand dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-400">
                      ROI FOCUS
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground sm:text-3xl dark:text-white">
                    Business-First Engineering
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    We tie architectural choices directly to commercial outcomes — customer retention, transaction volume, operational margin, and scale. Engineering decisions are validated against financial objectives.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-black/10 pt-6 dark:border-white/10">
                  <span className="rounded-full border border-black/10 bg-surface px-3.5 py-1.5 font-mono text-xs font-semibold text-foreground/80 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    ✓ Financial Model Sync
                  </span>
                  <span className="rounded-full border border-black/10 bg-surface px-3.5 py-1.5 font-mono text-xs font-semibold text-foreground/80 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    ✓ TCO Reduction
                  </span>
                  <span className="rounded-full border border-black/10 bg-surface px-3.5 py-1.5 font-mono text-xs font-semibold text-foreground/80 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200">
                    ✓ Board-Ready KPIs
                  </span>
                </div>
              </div>
            </BorderGlow>
          </FadeInWhenVisible>

          {/* Bento Card 2 (1 Column Span) */}
          <FadeInWhenVisible delay={0.2} className="lg:col-span-1">
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="245 158 11"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#f59e0b", "#fbbf24", "#d97706"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-card-bg p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10 backdrop-blur-sm">
                <div>
                  <span className="font-mono text-xs font-bold text-brand dark:text-amber-400">
                    02 / RESILIENCE
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground dark:text-white">
                    Enterprise Security &amp; Scale
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Zero-trust security architectures, sub-15ms latencies, and multi-region failovers built to handle real-world peak loads for banks and state platforms.
                  </p>
                </div>

                <div className="mt-6 rounded-xl border border-black/10 bg-surface p-3.5 font-mono text-xs text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓ 99.998% Uptime</span> • SOC2 &amp; HIPAA Compliant
                </div>
              </div>
            </BorderGlow>
          </FadeInWhenVisible>

          {/* Bento Card 3 (1 Column Span) */}
          <FadeInWhenVisible delay={0.3} className="lg:col-span-1">
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="245 158 11"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#f59e0b", "#fbbf24", "#d97706"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-card-bg p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10 backdrop-blur-sm">
                <div>
                  <span className="font-mono text-xs font-bold text-brand dark:text-amber-400">
                    03 / USER EXPERIENCE
                  </span>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground dark:text-white">
                    Product Thinking &amp; UX
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    Engineering, modern visual design, and product strategy work together seamlessly, eliminating handoff friction and accelerating shipping velocity.
                  </p>
                </div>

                <div className="mt-6 font-mono text-xs font-semibold text-brand dark:text-amber-400">
                  3x Faster Time-to-Market →
                </div>
              </div>
            </BorderGlow>
          </FadeInWhenVisible>

          {/* Bento Card 4 (2 Column Span) */}
          <FadeInWhenVisible delay={0.4} className="lg:col-span-2">
            <BorderGlow
              backgroundColor="var(--card-bg)"
              borderRadius={20}
              glowColor="245 158 11"
              glowRadius={28}
              glowIntensity={0.8}
              edgeSensitivity={35}
              colors={["#f59e0b", "#fbbf24", "#d97706"]}
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-card-bg p-8 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10 backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-brand dark:text-amber-400">
                      04 / OPERATIONAL EMBEDDING
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 font-mono text-[11px] font-bold text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
                      24/7 SRE COVERAGE
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-foreground sm:text-3xl dark:text-white">
                    Long-Term Operational Partnership
                  </h3>
                  <p className="mt-4 font-sans text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    Our engagement doesn&apos;t end at deployment. We provide dedicated SRE operations, continuous latency optimization, board reporting support, and roadmap evolution.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-black/10 pt-6 dark:border-white/10">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-700 dark:text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Active Incident Response &lt; 5 mins</span>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
