import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-black/10 bg-background pt-16 pb-12 dark:border-white/10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo.png"
                alt="Connectify Corporate Logo"
                className="h-14 sm:h-16 w-auto object-contain dark:brightness-110 dark:invert-[0.1]"
              />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
              Connectify is an enterprise digital transformation and engineering firm.
              We build scalable digital platforms, modern software solutions, and provide
              strategic business and capital advisory to enterprise organizations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connectify on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 font-mono text-xs text-muted transition-colors hover:border-brand hover:bg-brand/10 hover:text-brand dark:border-white/15"
              >
                in
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connectify on X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 font-mono text-xs text-muted transition-colors hover:border-brand hover:bg-brand/10 hover:text-brand dark:border-white/15"
              >
                X
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connectify on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 font-mono text-xs text-muted transition-colors hover:border-brand hover:bg-brand/10 hover:text-brand dark:border-white/15"
              >
                ig
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/about" className="transition-colors hover:text-brand">
                  About Connectify
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-brand">
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-brand">
                  Industry Platforms
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition-colors hover:text-brand">
                  Case Studies &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition-colors hover:text-brand">
                  Contact &amp; Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <Link href="/services#digital-solutions" className="transition-colors hover:text-brand">
                  Digital Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#technology-services" className="transition-colors hover:text-brand">
                  Technology Services
                </Link>
              </li>
              <li>
                <Link href="/services#business-advisory" className="transition-colors hover:text-brand">
                  Business Advisory
                </Link>
              </li>
              <li>
                <Link href="/services#investment-consulting" className="transition-colors hover:text-brand">
                  Investment Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#data-ai" className="transition-colors hover:text-brand">
                  Data &amp; AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:business@connectify.global"
                  className="font-medium text-foreground transition-colors hover:text-brand"
                >
                  business@connectify.global
                </a>
              </li>
              <li>
                <a
                  href="tel:+919834843396"
                  className="font-medium text-foreground transition-colors hover:text-brand"
                >
                  +91 98348 43396
                </a>
              </li>
              <li className="leading-relaxed">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8%2C+Avalahalli+Main+Road%2C+JP+Nagar+9th+Phase%2C+3rd+Block%2C+Bengaluru%2C+Karnataka+560076%2C+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open office location on Google Maps"
                  className="inline-flex items-start gap-1 transition-colors hover:text-indigo-400 underline-offset-4 hover:underline"
                >
                  <span>8, Avalahalli Main Road, JP Nagar 9th Phase, 3rd Block, Bengaluru, Karnataka 560076, India</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row dark:border-white/10">
          <p className="text-xs text-muted">
            © 2026 Connectify. All rights reserved. Built for enterprise performance.
          </p>
          <div className="flex flex-wrap gap-6 text-xs text-muted">
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/case-studies" className="transition-colors hover:text-foreground">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}