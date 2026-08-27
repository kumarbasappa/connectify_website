"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  MotionValue,
} from "framer-motion";
import {
  Home,
  Info,
  Layers,
  Box,
  Briefcase,
  Mail,
  Sun,
  Moon,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Products", href: "/products", icon: Box },
  { label: "Case Studies", href: "/case-studies", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

function DockItem({
  mouseX,
  link,
  isActive,
}: {
  mouseX: MotionValue<number>;
  link: {
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  isActive: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 54, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 260,
    damping: 16,
  });

  const [hovered, setHovered] = useState(false);
  const Icon = link.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center justify-end"
    >
      {/* macOS Floating Tooltip Badge with Spring Overshoot */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -10, scale: 1.05 }}
            exit={{ opacity: 0, y: 6, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="absolute -top-9 z-30 pointer-events-none px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[11px] font-semibold font-sans whitespace-nowrap backdrop-blur-md border border-white/10 shadow-lg dark:bg-white/90 dark:text-slate-950"
          >
            {link.label}
          </motion.div>
        )}
      </AnimatePresence>

      <Link href={link.href} aria-label={link.label}>
        <motion.div
          style={{ width, height: width }}
          className={`flex items-center justify-center rounded-2xl transition-colors duration-200 border ${isActive
            ? "bg-slate-900 text-white border-slate-800 shadow-md dark:bg-white dark:text-slate-950 dark:border-white"
            : "bg-white/80 text-slate-700 border-slate-200/80 hover:bg-white dark:bg-slate-900/80 dark:text-white/80 dark:border-white/10 dark:hover:bg-slate-800"
            }`}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-none" />
        </motion.div>
      </Link>

      {/* macOS Active App Indicator Dot with Horizontal Glide Layout Transition */}
      {isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="absolute -bottom-2 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
        />
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const mouseX = useMotionValue(Infinity);

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
      {/* Top-Left Fixed Corporate Brand Logo Badge */}
      <div className="fixed top-5 left-5 z-50 flex items-center">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_0_30px_rgba(99,102,241,0.2)]"
        >
          {/* Light Mode Purple Icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/connectify-icon-purple.png"
            alt="Konnectify Icon"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:rotate-6 dark:hidden"
          />
          {/* Dark Mode White Icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/connectify-icon-white.png"
            alt="Konnectify Icon"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:rotate-6 hidden dark:block"
          />
          <span className="font-display text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">connectify
          </span>
        </Link>
      </div>

      {/* macOS Floating Magnification Bottom Dock */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "160%", opacity: 0 },
        }}
        animate={hidden && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end w-max max-w-[95vw]"
      >
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="relative flex items-end gap-2.5 sm:gap-3 px-4 py-2.5 rounded-2xl bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5 dark:ring-white/10"
        >
          {/* Desktop Magnified Dock Links */}
          <div className="hidden md:flex items-end gap-2 sm:gap-2.5">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <DockItem
                  key={link.label}
                  mouseX={mouseX}
                  link={link}
                  isActive={isActive}
                />
              );
            })}
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-8 w-[1px] bg-slate-200 dark:bg-slate-800 self-center mx-1" />

          {/* Utilities & Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-800 transition-colors hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:text-white/90 dark:hover:bg-slate-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-amber-400" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-700" />
                )}
              </button>
            )}

            {/* Let's Talk CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 px-4 py-2.5 text-xs font-bold shadow-md transition-all duration-300 h-10"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-800 md:hidden dark:border-white/15 dark:bg-white/10 dark:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* 2px Scroll Progress Bar */}
          <motion.div
            style={{ scaleX, transformOrigin: "0%" }}
            className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-indigo-600 via-sky-500 to-purple-500"
          />
        </motion.div>
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
                const Icon = link.icon;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-2.5 font-display text-sm font-semibold transition-all ${isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-800 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{link.label}</span>
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
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}