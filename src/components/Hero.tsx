"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  CloudCheck,
  CheckCircle2,
  Sparkles,
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

// Fluid Flowing Light Beams & Warp Grid Canvas Component
function FluidWarpGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const mouseRef = useRef({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
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

    let animFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = canvas.parentElement?.clientWidth || window.innerWidth;
    let height = canvas.parentElement?.clientHeight || window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      height = canvas.parentElement.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);

    const isDark =
      theme === "dark" || document.documentElement.classList.contains("dark");

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.015;

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Spotlight Radial Light Beam
      if (mouse.active && mouse.x > 0 && mouse.y > 0) {
        const spotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          360
        );
        if (isDark) {
          spotlight.addColorStop(0, "rgba(56, 189, 248, 0.22)");
          spotlight.addColorStop(0.4, "rgba(168, 85, 247, 0.12)");
          spotlight.addColorStop(1, "rgba(8, 12, 20, 0)");
        } else {
          spotlight.addColorStop(0, "rgba(67, 56, 202, 0.15)");
          spotlight.addColorStop(0.4, "rgba(2, 132, 199, 0.08)");
          spotlight.addColorStop(1, "rgba(248, 250, 252, 0)");
        }
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);
      }

      // Flowing Neon Horizon Wave Beams
      const beamCount = 5;
      for (let b = 0; b < beamCount; b++) {
        ctx.beginPath();
        const beamYOffset = (height / (beamCount + 1)) * (b + 1);
        const waveFreq = 0.003 + b * 0.001;
        const waveAmp = 35 + b * 10;
        const speed = time * (1 + b * 0.3);

        ctx.moveTo(0, beamYOffset);
        for (let x = 0; x <= width; x += 15) {
          let y =
            beamYOffset +
            Math.sin(x * waveFreq + speed) * waveAmp +
            Math.cos(x * 0.002 - speed * 0.5) * 15;

          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180) {
              const bend = (1 - dist / 180) * 40;
              y += dy > 0 ? bend : -bend;
            }
          }

          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        if (isDark) {
          gradient.addColorStop(0, "rgba(56, 189, 248, 0.05)");
          gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.35)");
          gradient.addColorStop(1, "rgba(56, 189, 248, 0.05)");
        } else {
          gradient.addColorStop(0, "rgba(67, 56, 202, 0.05)");
          gradient.addColorStop(0.5, "rgba(2, 132, 199, 0.28)");
          gradient.addColorStop(1, "rgba(67, 56, 202, 0.05)");
        }

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // Fluid Warp Grid Lines
      const gridSize = 65;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      ctx.strokeStyle = isDark
        ? "rgba(56, 189, 248, 0.07)"
        : "rgba(67, 56, 202, 0.08)";
      ctx.lineWidth = 1;

      for (let c = 0; c <= cols; c++) {
        const baseX = c * gridSize;
        ctx.beginPath();
        for (let y = 0; y <= height; y += 20) {
          let x = baseX + Math.sin(y * 0.005 + time) * 6;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              const push = (1 - dist / 160) * 30;
              x += dx > 0 ? push : -push;
            }
          }
          if (y === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (let r = 0; r <= rows; r++) {
        const baseY = r * gridSize;
        ctx.beginPath();
        for (let x = 0; x <= width; x += 20) {
          let y = baseY + Math.cos(x * 0.005 + time * 0.8) * 6;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 160) {
              const push = (1 - dist / 160) * 30;
              y += dy > 0 ? push : -push;
            }
          }
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 h-full w-full pointer-events-none transition-opacity duration-700 overflow-hidden"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden flex flex-col justify-between pt-8 sm:pt-12 pb-28 md:pb-32 bg-[#f8fafc] dark:bg-[#080c14] transition-colors duration-300">
      {/* Full-Bleed Canvas */}
      <FluidWarpGridCanvas />

      {/* Central Masking Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#f8fafc]/40 to-[#f8fafc] dark:via-[#080c14]/40 dark:to-[#080c14]" />

      {/* Floating Glassmorphic Value Prop Orbiters */}
      <div className="hidden xl:flex absolute top-[18%] left-[6%] rounded-2xl p-4 items-center space-x-4 z-10 w-[240px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-200/80 dark:bg-purple-500/10 dark:border-purple-500/20 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-purple-300" />
        </div>
        <div>
          <p className="text-[11px] text-slate-500 dark:text-white/50 font-bold uppercase tracking-widest mb-0.5">
            Real-Time
          </p>
          <p className="text-[14px] font-bold text-slate-900 dark:text-white/90">
            Analytics Engine
          </p>
        </div>
      </div>

      <div className="hidden xl:flex absolute bottom-[26%] left-[8%] rounded-2xl p-4 items-center space-x-4 z-10 w-[220px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200/80 dark:bg-emerald-500/10 dark:border-emerald-500/20 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <p className="text-[14px] font-bold text-slate-900 dark:text-white/90 mb-0.5">
            Bank Grade
          </p>
          <p className="text-[11px] text-emerald-600 dark:text-[#4ade80] font-bold flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-ping" />
            Protected
          </p>
        </div>
      </div>

      <div className="hidden xl:flex absolute top-[22%] right-[6%] rounded-2xl p-4 items-center space-x-4 z-10 w-[240px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-200/80 dark:bg-indigo-500/10 dark:border-indigo-500/20 flex items-center justify-center">
          <CloudCheck className="w-5 h-5 text-sky-600 dark:text-indigo-300" />
        </div>
        <div>
          <p className="text-[14px] font-bold text-slate-900 dark:text-white/90 mb-0.5">
            Global Scalability
          </p>
          <p className="text-[11px] text-slate-500 dark:text-white/50 font-bold uppercase tracking-widest">
            Cloud Native
          </p>
        </div>
      </div>

      <div className="hidden xl:flex absolute bottom-[28%] right-[8%] rounded-2xl p-4 items-center space-x-4 z-10 w-[220px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-indigo-50 border border-indigo-200/80 dark:bg-purple-500/10 dark:border-purple-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-indigo-600 dark:text-purple-300" />
        </div>
        <div>
          <p className="text-[14px] font-bold text-slate-900 dark:text-white/90 mb-0.5">
            99.9% Uptime
          </p>
          <p className="text-[11px] text-slate-500 dark:text-white/50 font-bold uppercase tracking-widest">
            SLA Guarantee
          </p>
        </div>
      </div>

      {/* Main Hero Content Container */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="relative z-20 w-full max-w-[1050px] mx-auto px-6 flex flex-col items-center text-center my-auto"
      >
        {/* 1. Official Connectify Brand Logo Centered Near Top */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9, y: 15 },
            show: { opacity: 1, scale: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="mt-2 sm:mt-4 mb-3 sm:mb-4"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="group relative flex items-center justify-center rounded-2xl px-5 py-2.5 sm:px-6 sm:py-3 backdrop-blur-xl transition-all duration-300 shadow-[0_0_50px_rgba(99,102,241,0.22)] bg-white/80 border border-slate-200/90 dark:shadow-[0_0_60px_rgba(56,189,248,0.3)] dark:bg-slate-900/80 dark:border-cyan-500/20"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/connectifylogo.png"
              alt="Connectify Brand Logo"
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105 dark:brightness-110 dark:invert-[0.1]"
            />
          </motion.div>
        </motion.div>

        {/* Status Pill Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-slate-300/80 bg-slate-900/5 text-slate-800 shadow-xs backdrop-blur-md mb-4 sm:mb-5 dark:border-white/10 dark:bg-white/[0.04] dark:text-amber-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-amber-400" />
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-extrabold">
            NEXT-GEN INFRASTRUCTURE &amp; AI
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl md:text-[72px] lg:text-[80px] md:leading-[1.05] md:tracking-[-0.04em] font-extrabold text-slate-950 dark:text-white mb-4 sm:mb-5"
        >
          <span className="font-semibold text-slate-950 dark:text-white/90">
            We are not just building Tech{" "}
            <span className="text-slate-400 dark:text-white/40 font-light">—</span>
          </span>
          <br />
          <span className="font-extrabold text-slate-950 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-white/60">
            We are building{" "}
          </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 via-purple-600 to-indigo-600 animate-gradient-x bg-[length:200%_auto] dark:from-[#d2bbff] dark:via-[#93c5fd] dark:to-[#b68cff] drop-shadow-[0_0_25px_rgba(79,70,229,0.25)] dark:drop-shadow-[0_0_25px_rgba(124,58,237,0.3)]">
            Future.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="font-sans text-base sm:text-lg md:text-[19px] leading-relaxed text-slate-600 dark:text-white/60 max-w-2xl mx-auto mb-6 sm:mb-8 font-medium tracking-wide"
        >
          We partner with ambitious brands to build scalable digital products,
          robust infrastructure, and immersive experiences that drive tomorrow&apos;s
          success.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto mb-8 sm:mb-10"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-display text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto min-w-[190px]"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200/90 bg-white/80 text-slate-900 hover:bg-white shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white font-display text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto min-w-[180px]"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Counter Ribbon */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-3xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="space-y-0.5">
              <p className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                <CountUpNumber target={25} suffix="+" />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Deployed Systems
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                <CountUpNumber target={99.99} decimals={2} suffix="%" />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                SLA Uptime
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                <CountUpNumber target={6} />
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Core Practices
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">
                Tier-1
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Enterprise Clients
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}