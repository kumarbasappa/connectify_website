import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Privacy Policy — Connectify",
  description: "Learn how Connectify collects, uses, and safeguards enterprise data and client confidentiality.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Governance & Security"
        title="Privacy Policy"
        description="Our commitment to safeguarding enterprise data, intellectual property, and user privacy."
      />

      <div className="bg-background px-0 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-12">
          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              1. Data Protection & Confidentiality
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Connectify operates under strict non-disclosure and enterprise data governance protocols. We do not sell, license, or monetize any client data, codebases, or proprietary telemetry collected during our engagements.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              2. Information Collection & Usage
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Information submitted via our website contact forms is used solely to respond to project inquiries, conduct architecture assessments, and provide requested services. All communications are protected using enterprise-grade encryption.
            </p>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-slate-900/80">
            <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              3. Regulatory Compliance
            </h2>
            <p className="mt-4 font-sans text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Our engineering and consulting practices comply with global standards including SOC2 Type II, HIPAA, ISO 27001, and GDPR. For specific data processing agreements (DPA), please contact our legal office at business@connectify.global.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
