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

    // At the top of the page (<= 10px), always keep navbar visible
    if (latest <= 10) {
      setHidden(false);
      return;
    }

    // 5px threshold check to prevent trackpad micro-scroll jitter
    if (Math.abs(diff) < 5) return;

    // If scrolling down (> 80px), hide header; if scrolling up, reveal header
    if (latest > 80 && diff > 0) {
      setHidden(true);
    } else if (diff < 0) {
      setHidden(false);
    }
  });

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Floating Glassy Navigation Header */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 overflow-hidden rounded-full border border-black/10 bg-white/85 px-4 py-2 shadow-xl backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-[#121927]/90 dark:shadow-indigo-950/30"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={handleLogoClick}
            className="group flex cursor-pointer items-center gap-3 pl-2"
            aria-label="Connectify Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/connectifylogo.png"
              alt="Connectify"
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 sm:h-11 dark:brightness-110 dark:invert-[0.1]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative rounded-full px-4 py-1.5 font-display text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-brand/10 text-brand dark:bg-white/15 dark:text-white"
                      : "text-foreground/80 hover:bg-black/5 hover:text-foreground dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-brand dark:bg-electric" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle & Consultation CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-surface/80 text-foreground/80 transition-colors hover:bg-black/5 hover:text-foreground dark:border-white/15 dark:bg-white/10 dark:text-white/90 dark:hover:bg-white/20"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            )}

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full btn-glow px-5 py-2 text-xs font-semibold"
            >
              <span>Let&apos;s Talk</span>
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-surface/80 text-foreground/80 md:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 2px Continuous Scroll Progress Bar */}
        <motion.div
          style={{ scaleX, transformOrigin: "0%" }}
          className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-brand via-electric to-amber-400"
        />
      </motion.header>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden">
          <div className="fixed top-20 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl border border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-[#121927]">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-2.5 font-display text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-brand text-white"
                        : "text-foreground hover:bg-surface dark:text-white dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-4 pt-4 border-t border-black/10 dark:border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full btn-glow py-3 font-display text-sm font-semibold"
                >
                  <span>Schedule Consultation</span>
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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