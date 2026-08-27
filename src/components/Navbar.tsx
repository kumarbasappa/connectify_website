"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    if (latest <= 10) {
      setHidden(false);
      return;
    }

    if (Math.abs(diff) < 5) return;

    if (latest > 80 && diff > 0) {
      setHidden(true);
    } else if (diff < 0) {
      setHidden(false);
    }
  });

  return (
    <>
      {/* Modern Floating Bottom Navigation Dock */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "150%", opacity: 0 },
        }}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-6 inset-x-0 mx-auto w-fit max-w-[92vw] sm:max-w-2xl z-50 flex items-center justify-between gap-3 px-4 py-2 rounded-full bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-2xl shadow-slate-950/15 transition-colors duration-300"
      >
        {/* Desktop Navigation Links with Framer Motion layoutId Active Pill */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 font-display text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 dark:text-white"
                    : "text-slate-700 hover:text-slate-900 dark:text-white/70 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeDockIndicator"
                    className="absolute inset-0 rounded-full bg-indigo-100/80 dark:bg-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Action Controls: Theme Toggle & Consultation CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-200/90 bg-white/80 text-slate-800 transition-colors hover:bg-slate-100 dark:border-white/15 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/20"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          )}

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-4 py-1.5 sm:px-5 sm:py-2 text-xs font-semibold shadow-md transition-all duration-300"
          >
            <span>Let&apos;s Talk</span>
            <svg
              className="h-3.5 w-3.5"
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 md:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* 2px Continuous Scroll Progress Bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "0%" }}
          className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 via-sky-500 to-purple-500"
        />
      </motion.header>

      {/* Mobile Menu Bottom Sheet Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden">
          <div className="fixed bottom-24 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#121927]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-2.5 font-display text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                        : "text-slate-800 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-950 py-3 font-display text-sm font-semibold shadow-lg"
                >
                  <span>Schedule Consultation</span>
                  <svg
                    className="h-4 w-4"
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
            </nav>
          </div>
        </div>
      )}
    </>
  );
}