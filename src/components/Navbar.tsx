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
  Briefcase,
  Mail,
  Sun,
  Moon,
  ArrowRight,
  Menu,
  X,
  Package,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Products", href: "/products", icon: Package },
  { label: "Work", href: "/case-studies", icon: Briefcase },
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

  // Continuous Parabolic / Cosine Magnification Curve (42px -> 62px, 1.5x scaling)
  const widthSync = useTransform(distance, [-150, 0, 150], [42, 62, 42]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 300,
    damping: 20,
  });

  // Proportional Icon Magnification (18px -> 26px)
  const iconSizeSync = useTransform(distance, [-150, 0, 150], [18, 26, 18]);
  const iconSize = useSpring(iconSizeSync, {
    mass: 0.1,
    stiffness: 300,
    damping: 20,
  });

  const [hovered, setHovered] = useState(false);
  const Icon = link.icon;

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="relative flex flex-col items-center justify-end gap-1.5"
    >
      <Link href={link.href} aria-label={`Navigate to ${link.label}`}>
        <motion.div
          whileTap={{ scale: 0.85, y: -3 }}
          style={{ width, height: width }}
          className={`flex items-center justify-center rounded-2xl transition-colors duration-200 border ${
            isActive
              ? "bg-slate-900 text-white border-slate-800 shadow-xl shadow-indigo-500/25 dark:bg-white dark:text-slate-950 dark:border-white dark:shadow-[0_0_20px_rgba(56,189,248,0.5)]"
              : "bg-white/80 text-slate-700 border-slate-200/90 hover:bg-white dark:bg-slate-900/80 dark:text-white/80 dark:border-white/10 dark:hover:bg-slate-800"
          }`}
        >
          <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center flex-none">
            <Icon className="w-full h-full" />
          </motion.div>
        </motion.div>
      </Link>
      <span className="text-[10px] font-bold text-slate-600 dark:text-slate-400 hidden md:block">
        {link.label}
      </span>

      {/* macOS Active App Indicator Dot with Horizontal Glide Layout Transition */}
      {isActive && (
        <motion.span
          layoutId="dock-active-dot"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="absolute -bottom-2.5 h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]"
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
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [nearBottomEdge, setNearBottomEdge] = useState(false);

  const mouseX = useMotionValue(Infinity);

  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    setMounted(true);

    // Global listener to detect input focus across forms to prevent dock occlusion
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        setIsInputFocused(true);
      }
    };

    const handleFocusOut = () => {
      setIsInputFocused(false);
    };

    // Re-emerge dock when mouse moves close to the bottom screen edge (<80px)
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY >= window.innerHeight - 80) {
        setNearBottomEdge(true);
      } else {
        setNearBottomEdge(false);
      }
    };

    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    if (latest <= 10) {
      setIsScrollingDown(false);
    } else if (diff > 8) {
      setIsScrollingDown(true);
    } else if (diff < -8) {
      setIsScrollingDown(false);
    }
  });

  // Dock hides when typing in forms or scrolling down, unless mouse is near bottom edge
  const shouldHideDock = (isInputFocused || isScrollingDown) && !nearBottomEdge;

  const [themeHovered, setThemeHovered] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <>
      {/* Top-Left Fixed Single Wordmark Logo Badge with Gravity/Dropping Spring Physics */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 12,
          stiffness: 100,
          mass: 0.8,
        }}
        className="fixed top-4 left-4 sm:top-5 sm:left-6 z-50 flex items-center"
      >
        <Link
          href="/"
          aria-label="Connectify Homepage"
          className="group flex items-center rounded-2xl border border-slate-200/80 bg-white/80 px-3.5 py-1.5 sm:px-4.5 sm:py-2 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-indigo-500/50 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_0_30px_rgba(99,102,241,0.25)]"
        >
          <span className="font-display text-base sm:text-lg font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] via-indigo-600 to-purple-600 dark:from-cyan-400 dark:via-sky-400 dark:to-indigo-300">
            connectify
          </span>
        </Link>
      </motion.div>

      {/* macOS Floating Magnification Bottom Dock */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "180%", opacity: 0 },
        }}
        animate={shouldHideDock && !mobileMenuOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-end w-max max-w-[95vw]"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          whileHover={{ y: -5, scale: 1.008 }}
          transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut" }, scale: { duration: 0.2 } }}
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="relative flex items-end gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 rounded-2xl bg-white/80 dark:bg-[#0f172a]/85 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/5 dark:ring-white/10 transition-colors duration-300"
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
          <div className="hidden md:block h-8 w-[1px] bg-slate-200 dark:bg-slate-800 self-center mx-3" />

          {/* Utilities & Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button with Floating Tooltip */}
            {mounted && (
              <div
                className="relative flex flex-col items-center"
                onMouseEnter={() => setThemeHovered(true)}
                onMouseLeave={() => setThemeHovered(false)}
              >
                <AnimatePresence>
                  {themeHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.8 }}
                      animate={{ opacity: 1, y: -12, scale: 1.05 }}
                      exit={{ opacity: 0, y: 6, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 420, damping: 22 }}
                      className="absolute -top-10 z-30 pointer-events-none px-3 py-1 rounded-xl bg-slate-900/90 text-white text-xs font-bold font-display whitespace-nowrap backdrop-blur-xl border border-white/20 shadow-2xl dark:bg-white/95 dark:text-slate-950"
                    >
                      {theme === "dark" ? "Light Mode" : "Dark Mode"}
                    </motion.div>
                  )}
                </AnimatePresence>
                <button
                  type="button"
                  id="theme-toggle-btn"
                  data-testid="theme-toggle-btn"
                  onClick={toggleTheme}
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/80 bg-white/80 text-slate-800 transition-all hover:scale-105 hover:bg-white dark:border-white/10 dark:bg-slate-900/80 dark:text-white/90 dark:hover:bg-slate-800"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4 text-amber-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-slate-700" />
                  )}
                </button>
              </div>
            )}

            {/* Unified Primary CTA with Floating Tooltip & Magnetic Hover */}
            <div
              className="relative flex flex-col items-center"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
            >
              <AnimatePresence>
                {ctaHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -12, scale: 1.05 }}
                    exit={{ opacity: 0, y: 6, scale: 0.8 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                    className="absolute -top-10 z-30 pointer-events-none px-3 py-1 rounded-xl bg-slate-900/90 text-white text-xs font-bold font-display whitespace-nowrap backdrop-blur-xl border border-white/20 shadow-2xl dark:bg-white/95 dark:text-slate-950"
                  >
                    Schedule Consultation
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-1.5 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 px-4 py-2.5 text-xs font-extrabold shadow-lg transition-all duration-300 h-10 hover:scale-[1.04] border border-transparent dark:border-white/10"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

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
