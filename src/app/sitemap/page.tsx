import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import { serviceCategories } from "@/lib/services";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Sitemap & Route Index — Connectify",
  description: "Complete overview of all pages, services, products, and case studies across the Connectify enterprise portal.",
};

export default function SitemapPage() {
  return (
    <>
      <PageIntro
        eyebrow="Directory & Index"
        title="Connectify Sitemap"
        description="Comprehensive index of our company routes, service pillars, industry platforms, and case study archives."
      />

      <div className="bg-background px-0 py-16 lg:py-24">
        <div className="mx-auto max-w-6xl grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Main Pages */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Main Pages
            </h2>
            <ul className="mt-6 space-y-3 font-sans text-sm text-slate-700 dark:text-slate-300">
              <li>
                <Link href="/" className="hover:text-brand transition-colors">Home Page (/)</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand transition-colors">About Connectify (/about)</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand transition-colors">Services &amp; Capabilities (/services)</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-brand transition-colors">Industry Platforms (/products)</Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-brand transition-colors">Case Studies &amp; Work (/case-studies)</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand transition-colors">Contact &amp; Enquiries (/contact)</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy (/privacy)</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand transition-colors">Terms of Service (/terms)</Link>
              </li>
            </ul>
          </div>

          {/* Service Pillars */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Service Pillars
            </h2>
            <ul className="mt-6 space-y-3 font-sans text-sm text-slate-700 dark:text-slate-300">
              {serviceCategories.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="hover:text-brand transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Study Archive */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80 sm:col-span-2 lg:col-span-1">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Selected Case Studies ({projects.length})
            </h2>
            <ul className="mt-6 space-y-3 font-sans text-xs text-slate-700 dark:text-slate-300 max-h-96 overflow-y-auto">
              {projects.map((p) => (
                <li key={p.slug}>
                  <Link href={`/case-studies/${p.slug}`} className="hover:text-brand transition-colors block truncate">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
