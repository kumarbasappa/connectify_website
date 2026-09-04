import PageIntro from "@/components/PageIntro";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact & Business Enquiry — Connectify",
  description:
    "Get in touch with Connectify for project scoping, software engineering, and strategic advisory. Reach us at business@connectify.global or +91 98348 43396.",
};

const openingHours = [
  { days: "Monday - Friday", hours: "9:00 - 18:00 IST" },
  { days: "Saturday", hours: "9:00 - 16:00 IST" },
  { days: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact & Engagement"
        title="Get in touch with our team."
        description="Have a question or a new enterprise engagement in mind? Send us a project brief or reach our Bengaluru office directly."
      />

      <div className="px-0 py-16 lg:py-24 bg-background">
        <div className="mx-auto grid w-full max-w-6xl gap-12 sm:grid-cols-5">
          {/* Direct Channels */}
          <div className="space-y-6 sm:col-span-2">
            <a
              href="tel:+919834843396"
              className="block rounded-2xl border border-black/10 bg-surface p-8 transition-all hover:border-brand/40 hover:bg-surface hover:shadow-md dark:border-white/10 dark:hover:bg-white/5"
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                Direct Line
              </h2>
              <p className="mt-2 text-sm text-muted">Call our business team directly.</p>
              <p className="mt-2 font-mono text-base font-bold text-foreground">+91 98348 43396</p>
            </a>

            <a
              href="mailto:business@connectify.global"
              className="block rounded-2xl border border-black/10 bg-surface p-8 transition-all hover:border-brand/40 hover:bg-surface hover:shadow-md dark:border-white/10 dark:hover:bg-white/5"
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                Email Enquiry
              </h2>
              <p className="mt-2 text-sm text-muted">Drop us a detailed brief.</p>
              <p className="mt-2 font-mono text-base font-bold text-foreground">
                business@connectify.global
              </p>
            </a>

            <div className="rounded-2xl border border-black/10 bg-surface p-8 dark:border-white/10">
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/60">
                Bengaluru Office
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                8, Avalahalli Main Road, JP Nagar 9th Phase 3rd Block,
                Bengaluru — 560076, Karnataka, India
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 bg-surface p-8 dark:border-white/10">
              <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-foreground/60">
                Operational Hours
              </h2>
              <ul className="mt-4 space-y-2 text-xs text-muted">
                {openingHours.map((row) => (
                  <li key={row.days} className="flex justify-between gap-4">
                    <span>{row.days}</span>
                    <span className="font-semibold text-foreground">{row.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise Enquiry Form */}
          <div className="sm:col-span-3">
            <div className="rounded-3xl border border-black/10 bg-surface p-8 sm:p-10 shadow-sm dark:border-white/10">
              <h2 className="font-inter text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Send Us a Project Brief
              </h2>
              <p className="mt-2 text-sm text-muted">
                Fill out the form below and an enterprise solution architect will get back to you within 24 hours.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
