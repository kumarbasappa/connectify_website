import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import FinalCta from "@/components/FinalCta";

const categories = [
  {
    id: "healthtech",
    name: "Healthtech",
    description:
      "Clinical, hospital, and patient engagement platforms engineered for compliance, interoperability, and modern healthcare delivery.",
    count: "04 platforms",
    platforms: [
      "Clinic Management System",
      "Hospital Operations & EHR System",
      "Post-Care Patient Monitoring Platform",
      "Medical Tourism & Telehealth Portal",
    ],
    tech: ["Flutter", "React", "Node.js", "PostgreSQL", "HIPAA-ready"]
  },
  {
    id: "accounting",
    name: "Accounting & Spend Platforms",
    description:
      "Financial automation, spend control, and bookkeeping engines for clear financial visibility and audit compliance.",
    count: "04 platforms",
    platforms: [
      "Enterprise Bookkeeping & Ledger Software",
      "AI Document & Invoice Processing",
      "Corporate Expense & Card Management",
      "Multi-Currency Treasury System",
    ],
    tech: ["React", "Python", "PostgreSQL", "FastAPI"]
  },
  {
    id: "saas-platforms",
    name: "Operational SaaS Platforms",
    description:
      "Multi-tenant SaaS products engineered for retail management, sales pipelines, digital loyalty, and public sector tender discovery.",
    count: "05 platforms",
    platforms: [
      "Multi-Brand Cloud POS System",
      "Product Catalogue Management (PIM)",
      "Contractor & Consumer Loyalty Engine",
      "AI Lead Sourcing & Sales Discovery",
      "Public Sector Tender Discovery Engine"
    ],
    tech: ["React", "React Native", "Node.js", "MongoDB", "PostgreSQL"]
  },
  {
    id: "hrtech",
    name: "HRtech & Collaboration",
    description:
      "Recruitment, talent discovery, learning management, and enterprise meeting solutions for distributed workforces.",
    count: "03 platforms",
    platforms: [
      "AI-Powered High-Volume Screening Platform",
      "Enterprise Learning Management (LMS)",
      "Secure Video Networking & Automated MoMs"
    ],
    tech: ["React Native", "Python", "Node.js", "WebRTC"]
  },
  {
    id: "fintech",
    name: "Fintech & Banking Rails",
    description:
      "Production-grade financial rails — Banking-as-a-Service, NPCI-certified card processing engines, B2B payment gateways, and instant settlement systems.",
    count: "04 platforms",
    platforms: [
      "Banking-as-a-Service (BaaS) Orchestration",
      "NPCI-Certified RuPay Card Processing Engine",
      "High-Volume B2B Payment Gateway",
      "Merchant Settlement & P2P Engine"
    ],
    tech: ["Java", "React", "Node.js", "PostgreSQL", "PCI-DSS"]
  },
];

export const metadata = {
  title: "Products & Enterprise Platforms — Connectify",
  description:
    "Explore our production-ready enterprise platforms across Healthtech, Accounting, SaaS, HRtech, and Fintech.",
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Enterprise Platforms"
        title="Industry platforms we build and ship."
        description="Production-grade application platforms engineered for enterprise deployment, regulatory compliance, and high transaction volume."
      />

      <div className="px-0 py-16 lg:py-24 bg-background">
        <div className="mx-auto w-full max-w-6xl space-y-12">
          {/* Quick Jump Navigation Pills */}
          <nav className="flex flex-wrap gap-2 rounded-2xl border border-black/10 bg-card-bg p-3 shadow-md dark:border-white/10">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="rounded-xl px-4 py-2 font-mono text-xs font-semibold text-muted transition-colors hover:bg-amber-500/10 hover:text-amber-400 dark:hover:bg-amber-500/20 dark:hover:text-amber-300"
              >
                {cat.name}
              </a>
            ))}
          </nav>

          {/* Product Categories */}
          {categories.map((category, i) => (
            <section
              key={category.id}
              id={category.id}
              className="scroll-mt-28 rounded-3xl border border-black/10 bg-card-bg p-8 sm:p-12 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex flex-wrap items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-xs font-bold text-amber-400">
                    CATEGORY {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-3xl dark:text-white">
                    {category.name}
                  </h2>
                  <p className="mt-3 max-w-2xl font-sans text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
                    {category.description}
                  </p>
                </div>

                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.15em] text-amber-400">
                  {category.count}
                </span>
              </div>

              {/* Featured Platform Architectures */}
              <div className="mt-8 border-t border-black/10 pt-6 dark:border-white/10">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-amber-300">
                  Featured Platform Architectures:
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  {category.platforms.map((platform) => (
                    <div
                      key={platform}
                      className="rounded-xl border border-black/10 bg-surface p-4 font-display text-sm font-semibold text-foreground shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-amber-400/60 hover:shadow-[0_0_15px_rgba(245,158,11,0.15)] dark:border-white/10 dark:bg-white/5 dark:text-white"
                    >
                      {platform}
                    </div>
                  ))}
                </div>
              </div>

              {/* Core Technology Stack */}
              <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
                <span className="font-mono text-xs font-semibold text-muted">Core Technology Stack:</span>
                {category.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-surface px-3 py-1 font-mono text-xs font-semibold text-amber-400 dark:border-white/10 dark:bg-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          ))}

          {/* Custom Engineering Banner */}
          <section className="rounded-3xl border border-amber-500/30 bg-card-bg p-8 sm:p-12 shadow-xl transition-all duration-300 ease-in-out hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]">
            <span className="rounded-full bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-400">
              TAILORED ARCHITECTURE
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-tight text-foreground sm:text-3xl dark:text-white">
              Need custom platform development?
            </h2>
            <p className="mt-3 max-w-2xl font-sans text-base font-medium leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
              If our standard enterprise platform blueprints don&apos;t match your exact functional specifications, our principal architects and engineering teams can design and construct custom software tailored specifically to your business rules.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full btn-glow px-8 py-4 font-display text-sm font-semibold"
              >
                Talk to a Solutions Architect
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
          </section>
        </div>
      </div>

      <FinalCta />
    </>
  );
}
