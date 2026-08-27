import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Terms of Service — Connectify",
  description: "Review the terms and conditions governing Connectify's digital transformation and engineering services.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal & Governance"
        title="Terms of Service"
        description="Standard terms and conditions governing our enterprise consulting engagements and platform use."
      />

      <div className="bg-background px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              1. Master Services Framework
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              All technology development, cloud deployment, and advisory services provided by Connectify are subject to executed Statements of Work (SOW) and Master Services Agreements (MSA).
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              2. Intellectual Property Ownership
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Unless otherwise specified in a custom SOW, all custom software artifacts, data models, and proprietary code bases engineered for a client become the exclusive intellectual property of the client upon settlement of milestone invoices.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              3. Service Level Agreements (SLA)
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Production uptime guarantees (including 99.998% SLA options) and 24/7 SRE incident response response times are defined in individual operational support contracts.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
