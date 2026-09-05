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
  ArrowRight,
  Menu,
  X,
  Check,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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

  const widthSync = useTransform(distance, [-140, 0, 140], [40, 54, 40]);
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 200,
    damping: 12,
  });

  const iconSizeSync = useTransform(distance, [-140, 0, 140], [18, 24, 18]);
  const iconSize = useSpring(iconSizeSync, {
    mass: 0.1,
    stiffness: 200,
    damping: 12,
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
      className="relative flex items-center justify-end"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -12, scale: 1.05 }}
            exit={{ opacity: 0, y: 6, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 420, damping: 22 }}
            className="absolute -top-10 z-30 pointer-events-none px-3 py-1 rounded-xl bg-slate-900/90 text-white text-xs font-bold font-display whitespace-nowrap backdrop-blur-xl border border-white/20 shadow-2xl dark:bg-white/95 dark:text-slate-950 flex items-center gap-1.5"
          >
            <span>{link.label}</span>
            {isActive && <Check className="w-3 h-3 text-emerald-400 dark:text-emerald-600" />}
          </motion.div>
        )}
      </AnimatePresence>

      <Link href={link.href} aria-label={`Navigate to ${link.label}`}>
        <motion.div
          whileTap={{ scale: 0.85, y: -3 }}
          style={{ width, height: width }}
          className={`flex items-center justify-center rounded-2xl transition-colors duration-200 border ${
            isActive
              ? "bg-brand text-white border-brand-deep shadow-xl shadow-brand/25 dark:bg-brand dark:text-white dark:border-brand-deep"
              : "bg-white/80 text-slate-700 border-slate-200/90 hover:bg-white dark:bg-slate-900/80 dark:text-white/80 dark:border-white/10 dark:hover:bg-slate-800"
          }`}
        >
          <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center flex-none">
            <Icon className="w-full h-full" />
          </motion.div>
        </motion.div>
      </Link>

      {/* macOS Active App Indicator Dot with Horizontal Glide Layout Transition */}
      {isActive && (
        <motion.span
          layoutId="dock-active-dot"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="absolute -bottom-1 h-1.5 w-1.5 rounded-full bg-brand dark:bg-electric shadow-xs"
        />
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
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

  const shouldHideDock = (isInputFocused || isScrollingDown) && !nearBottomEdge;

  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <>
      {/* Top-Left Fixed Corporate Brand Logo Badge */}
      <div className="fixed top-5 left-5 z-50 flex items-center">
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-brand/50 dark:border-white/10 dark:bg-slate-950/80 dark:shadow-[0_0_30px_rgba(37,99,235,0.2)]"
        >
          {/* Light Mode Logo Icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/connectify-icon-purple.png"
            alt="Connectify Icon"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:rotate-6 dark:hidden"
          />
          {/* Dark Mode Logo Icon */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/connectify-icon-white.png"
            alt="Connectify Icon"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:rotate-6 hidden dark:block"
          />
          <span className="font-display text-sm font-extrabold tracking-tight text-foreground">
            connectify
          </span>
        </Link>
      </div>

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
          className="relative flex items-end gap-2.5 sm:gap-3 px-3 py-3 sm:px-4 rounded-2xl bg-white/80 dark:bg-surface/90 backdrop-blur-xl border border-border shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-black/5 dark:ring-white/10 transition-colors duration-300"
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
          <div className="hidden md:block h-8 w-[1px] bg-border self-center mx-2" />

          {/* Utilities & Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Desktop Theme Toggle Selector */}
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>

            {/* Primary CTA */}
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
                className="group relative inline-flex items-center gap-1.5 rounded-2xl bg-brand text-white hover:bg-brand-deep dark:bg-brand dark:text-white dark:hover:bg-brand-deep px-4 py-2.5 text-xs font-extrabold shadow-lg transition-all duration-300 h-10 hover:scale-[1.04] border border-transparent"
              >
                <span>Start a Project</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-surface text-foreground md:hidden"
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
            className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-brand via-electric to-brand-deep"
          />
        </motion.div>
      </motion.header>

      {/* Mobile Menu Bottom Sheet Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-md md:hidden">
          <div className="fixed bottom-24 left-1/2 w-[90%] -translate-x-1/2 rounded-3xl border border-border bg-background p-6 shadow-2xl">
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
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 font-display text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-brand text-white"
                        : "text-foreground hover:bg-surface"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </div>
                    {isActive && <Check className="w-4 h-4 text-white" />}
                  </Link>
                );
              })}

              {/* Mobile Theme Toggle Section */}
              <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
                <p className="font-mono text-xs font-bold text-muted uppercase tracking-wider">Appearance</p>
                <ThemeToggle className="w-full justify-around py-1" />

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand text-white py-3 font-display text-sm font-semibold shadow-lg mt-2"
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
