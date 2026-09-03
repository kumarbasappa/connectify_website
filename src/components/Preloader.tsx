"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { theme } = useTheme();

  useEffect(() => {
    // Only show on first visit this session (not on client-side navigation)
    if (typeof window === "undefined") return;
    const alreadySeen = sessionStorage.getItem("connectify-preloader-seen");
    if (alreadySeen) {
      setDone(true);
      return;
    }
    setVisible(true);

    // Minimum display time: 1400ms  (masks real load time if fast)
    const timer = setTimeout(() => {
      sessionStorage.setItem("connectify-preloader-seen", "1");
      setVisible(false);
    }, shouldReduceMotion ? 300 : 1500);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  // After exit animation completes, fully remove from DOM
  const handleExitComplete = () => setDone(true);

  if (done) return null;

  const isDark = theme === "dark";
  const bgColor = isDark ? "#080c14" : "#f8fafc";

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, scale: 1.04, filter: "blur(8px)" }
          }
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: bgColor }}
          aria-label="Loading Connectify"
          role="status"
        >
          {/* Logo mark assembly */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.88, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Logo mark — the double-chevron "C" icon */}
            <LogoMark isDark={isDark} reduced={!!shouldReduceMotion} />

            {/* Wordmark */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35, ease: "easeOut" }}
              className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white select-none"
            >
              connectify
            </motion.p>

            {/* Thin progress bar */}
            {!shouldReduceMotion && (
              <motion.div
                className="mt-2 h-[2px] w-[120px] rounded-full overflow-hidden bg-slate-200/60 dark:bg-slate-800/60"
              >
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.15, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
                />
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// The Connectify double-chevron logo mark drawn with SVG path animation
function LogoMark({ isDark, reduced }: { isDark: boolean; reduced: boolean }) {
  const stroke = isDark ? "white" : "#1e1b4b";
  const glow = isDark
    ? "drop-shadow(0 0 14px rgba(99,102,241,0.7))"
    : "drop-shadow(0 0 10px rgba(99,102,241,0.35))";

  return (
    <motion.div
      initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.75 }}
      animate={reduced ? { opacity: 1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
      style={{ filter: glow }}
    >
      <svg
        width="52"
        height="42"
        viewBox="0 0 52 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left chevron */}
        <motion.path
          d="M20 6 L6 21 L20 36"
          stroke={stroke}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeInOut" }}
        />
        {/* Right chevron */}
        <motion.path
          d="M34 6 L48 21 L34 36"
          stroke="url(#grad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.32, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="grad" x1="34" y1="6" x2="34" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#38bdf8" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
