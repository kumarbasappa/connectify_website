"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import { Home, Info, Layers, Briefcase, Mail, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Layers },
  { label: "Case Studies", href: "/case-studies", icon: Briefcase },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function FloatingDock() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tooltip.Provider delayDuration={150}>
      <motion.aside
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 dark:border-white/10 bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/10"
        aria-label="Floating Navigation Dock"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Tooltip.Root key={item.label}>
              <Tooltip.Trigger asChild>
                <Link
                  href={item.href}
                  className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-label={item.label}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  side="top"
                  sideOffset={8}
                  className="px-2.5 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-md shadow-lg backdrop-blur-sm animate-in fade-in-0 zoom-in-95 z-50"
                >
                  {item.label}
                  <Tooltip.Arrow className="fill-slate-900/90" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          );
        })}

        <div className="w-[1px] h-5 bg-slate-200 dark:bg-slate-800 mx-1" />

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              id="dock-theme-toggle-btn"
              data-testid="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="top"
              sideOffset={8}
              className="px-2.5 py-1 text-xs font-medium text-white bg-slate-900/90 rounded-md shadow-lg z-50"
            >
              Toggle theme
              <Tooltip.Arrow className="fill-slate-900/90" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </motion.aside>
    </Tooltip.Provider>
  );
}
