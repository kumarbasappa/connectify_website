"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { technologyCategories } from "@/lib/technologies";
import {
  Code2,
  Server,
  Database,
  Cloud,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

// Official Tech Brand SVG Renderers
function TechBrandSvg({ name }: { name: string }) {
  const n = name.toLowerCase();

  if (n.includes("react")) {
    return (
      <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="2" />
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  if (n.includes("next")) {
    return (
      <svg className="w-5 h-5 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 3.5L8.5 20M8.5 3.5v17M15 3.5l5.5 17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (n.includes("type")) {
    return (
      <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#3178C6" />
        <text x="7" y="16" fill="white" fontSize="11" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    );
  }

  if (n.includes("tailwind")) {
    return (
      <svg className="w-5 h-5 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 6c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.4-2.2 3.9-1.7 1.2.4 2 1.3 2.9 2.2C13.6 12.9 15.3 15 19.5 15c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.4 2.2-3.9 1.7-1.2-.4-2-1.3-2.9-2.2C17.9 8.1 16.2 6 12 6zM4.5 15c-3.3 0-5.5 1.7-6.6 5 1.1-1.7 2.4-2.2 3.9-1.7 1.2.4 2 1.3 2.9 2.2C6.1 21.9 7.8 24 12 24c3.3 0 5.5-1.7 6.6-5-1.1 1.7-2.4 2.2-3.9 1.7-1.2-.4-2-1.3-2.9-2.2C10.4 17.1 8.7 15 4.5 15z" />
      </svg>
    );
  }

  if (n.includes("python")) {
    return (
      <svg className="w-5 h-5 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2c-3.3 0-3.8.3-4.5.8-.8.6-.8 1.4-.8 2.7v2h6v.7H6.5c-1.3 0-2.5.7-3 1.7-.6 1.1-.6 2.3-.6 4.3 0 2 .1 3.1.7 4.1.5.9 1.4 1.4 2.7 1.4h1.6v-2.3c0-1.6.5-2.7 1.4-3.5.9-.8 2.2-1.2 3.8-1.2h3.5v-3.7c0-1.4 0-2.3-.7-3.1-.7-.8-1.7-1.4-3.9-1.4zm-1.8 1.8c.4 0 .7.3.7.7 0 .4-.3.7-.7.7-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7z" />
      </svg>
    );
  }

  if (n.includes("node")) {
    return (
      <svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7.8v8.4L12 22l10-5.8V7.8L12 2zm-1 14.5l-4-2.3v-4.6l4 2.3v4.6zm6-2.3l-4 2.3v-4.6l4-2.3v4.6z" />
      </svg>
    );
  }

  if (n.includes("postgre")) {
    return (
      <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z" />
      </svg>
    );
  }

  if (n.includes("docker")) {
    return (
      <svg className="w-5 h-5 text-sky-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 10h-2v2h2v-2zm-3 0H8v2h2v-2zm6 0h-2v2h2v-2zm-9 0H5v2h2v-2zm6-3h-2v2h2V7zm-3 0H8v2h2V7zm6 0h-2v2h2V7zm-9 3H5v2h2v-2zm12.5 1.5c-.3-.2-.9-.3-1.6-.3-1 0-1.8.4-2.3 1.1-.3.4-.5.9-.6 1.4h-13c-.2 1.3.2 2.7 1.1 3.7C4.5 18 6.7 19 9.5 19c4.3 0 7.8-2.2 9.2-5.7.5.1.9.1 1.3 0 .6-.2 1.1-.6 1.4-1.1.2-.4.2-.6.1-.7z" />
      </svg>
    );
  }

  if (n.includes("aws")) {
    return (
      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.7 14.3c-1.8 0-3.3-.7-3.3-2.6 0-2.3 2.1-3 4.8-3.1v-.3c0-.7-.4-1.2-1.5-1.2-1 0-2 .3-2.6.7l-.5-1.3C4.5 6 6 5.5 7.6 5.5c2.3 0 3.6 1.1 3.6 3.1v4.3c0 .8.1 1.4.3 1.8H9.8c-.1-.3-.2-.7-.2-1.1-.6.7-1.6 1.1-2.9 1.1zm.4-1.4c1.1 0 2.1-.5 2.5-1.3v-1.6c-1.8.1-3.2.5-3.2 1.7 0 .8.5 1.2 1.3 1.2z" />
      </svg>
    );
  }

  return <Cpu className="w-5 h-5 text-indigo-500" />;
}

// 3D Perspective Tilt Card with Inner Glare
function TechCard3D({ tech }: { tech: { name: string; description: string; verified?: boolean } }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-6 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 hover:border-brand/60 dark:hover:border-indigo-500/60 shadow-slate-900/5 hover:shadow-2xl"
    >
      {/* Dynamic Inner Glare Radial */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: glarePos.opacity,
          background: `radial-gradient(350px circle at ${glarePos.x}% ${glarePos.y}%, rgba(99,102,241,0.18), transparent 70%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 flex items-center justify-center">
              <TechBrandSvg name={tech.name} />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-cyan-400">
              {tech.name}
            </h3>
          </div>
          {tech.verified && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              Verified
            </span>
          )}
        </div>
        <p className="font-sans mt-3.5 text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-300">
          {tech.description}
        </p>
      </div>
    </div>
  );
}

export default function TechnologyCloud() {
  const [activeTab, setActiveTab] = useState(technologyCategories[0].id);

  const selectedCategory =
    technologyCategories.find((cat) => cat.id === activeTab) ||
    technologyCategories[0];

  const categoryIcons: Record<string, React.ReactNode> = {
    frontend: <Code2 className="w-4 h-4" />,
    backend: <Server className="w-4 h-4" />,
    "data-ai": <Database className="w-4 h-4" />,
    "cloud-infra": <Cloud className="w-4 h-4" />,
  };

  return (
    <section className="relative bg-background py-24 lg:py-32 border-t border-slate-200/90 dark:border-white/10 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-0 relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-brand dark:text-cyan-400 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              03 / ENGINEERING STACK
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl dark:text-white">
              Proven technology matrix.
            </h2>
          </div>
          <p className="font-sans max-w-md text-sm font-medium leading-relaxed text-slate-700 dark:text-slate-300">
            We work exclusively with modern, battle-tested technologies verified across our enterprise and government client deployments.
          </p>
        </div>

        {/* Modernized Category Tabs with Framer Motion Layout Pill */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-slate-200/90 pb-4 dark:border-white/10">
          {technologyCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-white dark:text-slate-950"
                    : "text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="tech-tab-pill"
                    className="absolute inset-0 bg-slate-900 dark:bg-white rounded-full shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {categoryIcons[cat.id] || <Cpu className="w-4 h-4" />}
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Tech Stack Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {selectedCategory.techs.map((tech) => (
              <TechCard3D key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
