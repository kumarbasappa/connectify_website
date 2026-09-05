"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, resolvedTheme, setTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div
        className={`h-9 w-20 rounded-2xl border border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-slate-900/80 ${className}`}
      />
    );
  }

  const activeTheme = theme === "dark" || resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div
      role="group"
      aria-label="Theme selection"
      className={`inline-flex items-center gap-0.5 rounded-2xl border border-slate-200/80 bg-white/80 p-0.5 dark:border-white/10 dark:bg-slate-900/80 backdrop-blur-md shadow-xs ${className}`}
    >
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 ${
          activeTheme === "light"
            ? "bg-brand text-white shadow-xs"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
        aria-label="Switch to light theme"
        aria-pressed={activeTheme === "light"}
        title="Light theme"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 ${
          activeTheme === "dark"
            ? "bg-brand text-white shadow-xs"
            : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        }`}
        aria-label="Switch to dark theme"
        aria-pressed={activeTheme === "dark"}
        title="Dark theme"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
