import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";
import ProcessTimeline from "@/components/ProcessTimeline";

const differentiators = [
  {
    title: "Specialization in High-Stakes Domains",
    description:
      "Deep domain expertise in Banking, Fintech, Healthcare, and Public Sector platforms ensures we understand compliance, security, and complex regulatory rails from day one.",
  },
  {
    title: "Continuous Innovation",
    description:
      "We harness modern technology stacks, AI agents, cloud-native serverless models, and predictive algorithms to deliver forward-thinking platforms that outpace competition.",
  },
  {
    title: "Co-creation Partnership",
    description:
      "We operate as a high-velocity extension of your core executive and technology team, ensuring complete transparency, agile alignment, and shared accountability.",
  },
  {
    title: "Measurable Commercial Impact",
    description:
      "From boosting transaction throughput to cutting cloud overhead and accelerating product launches, our track record is backed by verifiable metrics.",
  },
];

const reasons = [
  {
    title: "Senior Engineering & Advisory Talent",
    description:
      "Our team comprises battle-tested solution architects, principal engineers, and strategic advisors with proven track records across global markets.",
  },
  {
    title: "Tailored Architecture",
    description:
      "We eschew generic off-the-shelf templates in favor of modular, highly optimized codebases designed explicitly around your unique data models and workflows.",
  },
  {
    title: "Results-Oriented Execution",
    description:
      "Every development sprint, design decision, and technology recommendation is measured against core business KPIs and long-term shareholder value.",
  },
  {
    title: "Collaborative Operating Model",
    description:
      "We integrate directly into your workflow with bi-weekly demos, transparent staging environments, and real-time communication channels.",
  },
  {
    title: "Uncompromising Integrity & Trust",
    description:
      "We adhere to the highest standards of data security, IP protection, transparency, and enterprise governance across every stage of engagement.",
  },
];

export const metadata = {
  title: "About Connectify — Strategic Technology & Advisory Partner",
  description:
    "Learn how Connectify partners with ambitious enterprise leaders to engineer high-scale digital platforms, SaaS products, and business growth.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Connectify"
        title="Who we are — and why global leaders choose us."
        description="Your strategic technology partner in the digital transformation revolution — a boutique consultancy blending strategy, capital advisory, and enterprise software engineering."
      />

      <div className="px-6 py-16 lg:py-24 bg-background">
        <div className="mx-auto w-full max-w-6xl space-y-24">
          {/* Section 1: Story */}
          <section>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              01 / Our Story
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Engineering the platforms behind modern business.
            </h2>
            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <p className="font-sans text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
                Connectify is a new-age technology consultancy and product engineering firm.
                Our team brings together leaders from Banking &amp; Financial Services, Enterprise Software, Cloud Architecture, Healthcare, and Artificial Intelligence. With deep technical acumen and strategic foresight, we build products that scale under real-world pressure.
              </p>
              <p className="font-sans text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
                We believe taking a holistic approach is critical: blending deep software craftsmanship with business model design. Whether validating a new SaaS concept or executing a statewide government platform deployment, we partner closely with founders, CXOs, and product heads to deliver transformative outcomes.
              </p>
            </div>
          </section>

          {/* Section 2: Mission & Vision */}
          <section className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-card-bg p-8 sm:p-10 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10">
              <span className="font-mono text-xs font-bold text-amber-400">MISSION</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground dark:text-white">Our Mission</h3>
              <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                To empower enterprise organizations, financial institutions, and fast-growing ventures with state-of-the-art digital infrastructure, modern product design, and strategic clarity.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-card-bg p-8 sm:p-10 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10">
              <span className="font-mono text-xs font-bold text-amber-400">VISION</span>
              <h3 className="mt-4 font-display text-2xl font-bold text-foreground dark:text-white">Our Vision</h3>
              <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
                To be the most trusted technology consulting partner globally — recognized for technical excellence, speed of delivery, and undeniable commercial impact.
              </p>
            </div>
          </section>

          {/* Section 3: Differentiators */}
          <section>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              02 / Differentiators
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl dark:text-white">
              What sets Connectify apart
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-black/10 bg-card-bg p-8 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10"
                >
                  <h3 className="font-display text-xl font-bold text-foreground dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Process Timeline */}
          <ProcessTimeline />

          {/* Section 5: Why Choose Us */}
          <section>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
              03 / Why Choose Us
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Built for speed, scale, and accountability.
            </h2>
            <div className="mt-8 space-y-4">
              {reasons.map((item, i) => (
                <div
                  key={item.title}
                  className="flex gap-6 rounded-2xl border border-black/10 bg-card-bg p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10"
                >
                  <span className="font-mono text-lg font-bold text-amber-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="flex justify-center pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-full btn-glow px-8 py-4 font-display text-sm font-semibold"
            >
              Partner with Connectify
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