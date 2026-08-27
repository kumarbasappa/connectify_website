import Link from "next/link";

const platforms = [
  {
    number: "P.01",
    name: "Healthtech",
    description:
      "Clinical, hospital and patient platforms for modern healthcare delivery.",
    count: "04 platforms",
    href: "/products#healthtech",
  },
  {
    number: "P.02",
    name: "Accounting",
    description:
      "Finance and spend platforms for clearer books, smarter automation and controlled expenses.",
    count: "04 platforms",
    href: "/products#accounting",
  },
  {
    number: "P.03",
    name: "SaaS Platforms",
    description:
      "Operational SaaS products for retail, sales, loyalty and public-sector discovery.",
    count: "05 platforms",
    href: "/products#saas-platforms",
  },
  {
    number: "P.04",
    name: "HRtech",
    description:
      "Hiring, learning and secure collaboration platforms for modern workforce teams.",
    count: "03 platforms",
    href: "/products#hrtech",
  },
  {
    number: "P.05",
    name: "Fintech",
    description:
      "Banking and payments infrastructure — BaaS, gateways, settlement and card processing.",
    count: "04 platforms",
    href: "/products#fintech",
  },
];

export default function EnterprisePlatforms() {
  return (
    <section id="platforms" className="relative z-10 bg-background py-24 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              02 / Enterprise Platforms
            </p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl dark:text-white">
              Industry platforms we build and ship.
            </h3>
          </div>
          <div className="flex flex-col items-start gap-6 sm:items-end">
            <p className="max-w-sm font-sans text-sm leading-relaxed text-slate-700 font-medium dark:text-slate-300">
              Healthtech, accounting, SaaS, HRtech and fintech products
              engineered for production scale.
            </p>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
            >
              <span>View all categories</span>
              <svg
                className="h-4 w-4 text-amber-400 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              className="group flex flex-col justify-between gap-8 rounded-2xl border border-black/10 bg-card-bg p-7 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-amber-400/60 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] dark:border-white/10"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-amber-400">
                  {platform.number}
                </span>
                <span className="font-mono text-xs font-semibold text-muted">
                  {platform.count}
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-display text-xl font-bold tracking-tight text-foreground group-hover:text-amber-400 transition-colors dark:text-white">
                  {platform.name}
                </h4>
                <p className="font-sans text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                  {platform.description}
                </p>
                <div className="mt-2 flex items-center gap-1 font-mono text-xs font-semibold text-amber-400">
                  <span>Explore Ecosystem</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}