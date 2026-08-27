"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Activity,
  Sparkles,
  Cpu,
  Zap,
  Play,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

function CountUpNumber({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const duration = 1600;
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        setVal(target * easeProgress);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setVal(target);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
      {suffix}
    </span>
  );
}

// Fluid Cyberpunk Particle Mesh & Dynamic Light Beam Canvas
function FluidCyberpunkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    const isDark = theme === "dark" || document.documentElement.classList.contains("dark");
    const particleCount = Math.min(Math.floor((width * height) / 11000), 85);

    type CyberParticle = {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
    };

    const darkColors = ["#06b6d4", "#a855f7", "#ec4899", "#3b82f6", "#10b981"];
    const lightColors = ["#4f46e5", "#0284c7", "#7c3aed", "#0891b2", "#2563eb"];

    const palette = isDark ? darkColors : lightColors;

    const particles: CyberParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const px = Math.random() * width;
      const py = Math.random() * height;
      const color = palette[Math.floor(Math.random() * palette.length)];
      particles.push({
        x: px,
        y: py,
        ox: px,
        oy: py,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.2 + 1.2,
        color: color,
        glowColor: color,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;

      // Render Cyberpunk Particles & Cursor Force Beams
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Drift motion
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Interactive Cursor Magnetic Force
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 1.5;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;

            // Draw glowing energy beam to cursor
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            const beamGrad = ctx.createLinearGradient(p.x, p.y, mouse.x, mouse.y);
            beamGrad.addColorStop(0, p.color);
            beamGrad.addColorStop(1, isDark ? "rgba(6, 182, 212, 0.4)" : "rgba(79, 70, 229, 0.3)");
            ctx.strokeStyle = beamGrad;
            ctx.globalAlpha = (1 - dist / maxDist) * (isDark ? 0.35 : 0.2);
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }

        // Particle Glow & Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isDark ? 0.85 : 0.55;
        ctx.shadowBlur = isDark ? 10 : 0;
        ctx.shadowColor = p.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow

        // Inter-particle light beam mesh
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - pdist / 120) * (isDark ? 0.25 : 0.12);
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-700 overflow-hidden"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-20 dark:bg-[#080c14] lg:pt-36 lg:pb-28">
      {/* Fluid Cyberpunk Particle Mesh & Dynamic Light Beam Canvas */}
      <FluidCyberpunkCanvas />

      {/* Central Masking Radial Vignette for High Text Contrast */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/40 to-background dark:via-[#080c14]/40 dark:to-[#080c14]" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2.5 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brand shadow-xs backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/90 dark:text-amber-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Sparkles className="h-3.5 w-3.5 text-brand dark:text-amber-400" />
          <span>NEXT-GEN ENTERPRISE ENGINEERING &amp; AI</span>
        </motion.div>

        {/* Kinetic Centered Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-[68px] dark:text-white"
        >
          Engineering digital platforms{" "}
          <span className="block mt-2 bg-gradient-to-r from-brand via-electric to-indigo-600 bg-clip-text text-transparent dark:from-cyan-400 dark:via-electric dark:to-pink-400">
            that power enterprise growth.
          </span>
        </motion.h1>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl font-sans text-base font-medium leading-relaxed text-slate-600 sm:text-xl dark:text-slate-300"
        >
          Connectify designs, builds, and operates resilient digital infrastructure, cloud platforms, and intelligent software systems for high-growth enterprises and public sector leaders.
        </motion.p>

        {/* Action CTAs Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/80 p-2 shadow-2xl backdrop-blur-2xl dark:border-white/15 dark:bg-slate-900/80">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-brand px-7 py-3.5 font-display text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-all duration-300 hover:scale-[1.03] dark:bg-electric dark:shadow-indigo-950/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Schedule Consultation</span>
              <ArrowRight className="relative h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 font-display text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
            >
              <Play className="h-4 w-4 fill-brand text-brand dark:fill-amber-400 dark:text-amber-400" />
              <span>Explore Blueprints</span>
            </Link>
          </div>
        </motion.div>

        {/* Integrated Metric Counter Glass Ribbon Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-14 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-slate-900/80"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-brand dark:text-electric">
                <Activity className="h-5 w-5" />
                <p className="font-mono text-3xl font-extrabold bg-gradient-to-r from-brand to-electric bg-clip-text text-transparent sm:text-4xl dark:from-amber-400 dark:to-electric">
                  <CountUpNumber target={25} suffix="+" />
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                Deployed Systems
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="h-5 w-5" />
                <p className="font-mono text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent sm:text-4xl dark:from-emerald-400 dark:to-teal-300">
                  <CountUpNumber target={99.99} decimals={2} suffix="%" />
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                SLA Uptime
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-indigo-600 dark:text-indigo-400">
                <Cpu className="h-5 w-5" />
                <p className="font-mono text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-electric bg-clip-text text-transparent sm:text-4xl dark:from-indigo-400 dark:to-electric">
                  <CountUpNumber target={6} />
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                Core Practices
              </p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 text-amber-600 dark:text-amber-400">
                <Zap className="h-5 w-5" />
                <p className="font-mono text-3xl font-extrabold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent sm:text-4xl dark:from-amber-400 dark:to-amber-200">
                  Tier-1
                </p>
              </div>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                Enterprise Clients
              </p>
            </div>
          </div>
        </motion.div>

        {/* Secondary Trust Row (Bottom Center) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 font-mono text-xs font-semibold text-slate-600 dark:text-slate-400"
        >
          <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SOC2 Type II Verified</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Zero-Trust Edge</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-1.5 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>99.998% SLA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}