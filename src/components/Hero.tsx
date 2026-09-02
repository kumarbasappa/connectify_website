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
  Cpu,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { AntiGravityElement } from "./AntiGravity";

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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Split headline for word-by-word reveal stagger
  const line1Words = ["We", "are", "not", "just", "building", "Tech"];
  const line2Words = ["We", "are", "building"];
  const line3Words = ["the", "Future."];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden flex flex-col justify-center items-center pt-16 pb-40 bg-[#f8fafc] dark:bg-[#080c14] transition-colors duration-300"
    >
      {/* Full-Bleed Canvas */}
      <FluidWarpGridCanvas />

      {/* Multi-Color Ambient Glow Mesh with Zero-G Drift Keyframes */}
      <motion.div
        animate={{ y: [0, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Light Mode Glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] dark:hidden" />
        <div className="absolute top-1/3 -left-32 w-[500px] h-[400px] bg-violet-500/12 rounded-full blur-[120px] dark:hidden" />
        <div className="absolute top-1/4 -right-32 w-[500px] h-[400px] bg-cyan-400/10 rounded-full blur-[120px] dark:hidden" />

        {/* Dark Mode Cyber Glows */}
        <div className="hidden dark:block absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[550px] bg-indigo-500/25 rounded-full blur-[130px]" />
        <div className="hidden dark:block absolute top-1/3 -left-32 w-[550px] h-[450px] bg-cyan-400/20 rounded-full blur-[130px]" />
        <div className="hidden dark:block absolute top-1/4 -right-32 w-[550px] h-[450px] bg-fuchsia-500/20 rounded-full blur-[130px]" />
      </motion.div>

      {/* Dynamic Cursor-Follow Radial Glow */}
      <div
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 opacity-60 dark:opacity-40"
        style={{
          background: `radial-gradient(650px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(99,102,241,0.14), transparent 80%)`,
        }}
      />

      {/* Main Hero Content Container - Optically centered upward with pb-40 clearance */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="relative z-20 w-full max-w-[980px] mx-auto px-4 flex flex-col items-center text-center my-auto"
      >
        {/* Status Pill Badge with Animated Radar Ping & Zero-G Drift */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mb-5 md:mb-6 mt-4"
        >
          <AntiGravityElement floatDistance={8} floatDuration={5} floatDelay={0.2} intensity={0.18}>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-slate-300/80 bg-slate-900/5 text-slate-800 shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-cyan-300">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 opacity-40" />
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-extrabold">
                ENTERPRISE SOFTWARE &amp; AI ENGINEERING
              </span>
            </div>
          </AntiGravityElement>
        </motion.div>

        {/* Scaled Responsive Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[64px] md:leading-[1.12] md:tracking-[-0.03em] font-extrabold text-slate-950 dark:text-white mb-6 sm:mb-8 max-w-4xl sm:max-w-5xl"
        >
          We engineer scalable digital products,{" "}
          <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 dark:from-cyan-300 dark:via-indigo-300 dark:to-fuchsia-400 bg-clip-text text-transparent">
            cloud platforms &amp; AI solutions.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
          className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-slate-600 dark:text-white/80 max-w-2xl sm:max-w-3xl mx-auto mb-8 md:mb-10 font-medium tracking-wide"
        >
          Connectify helps ambitious brands and growing enterprises build high-performance web applications, robust cloud architecture, and production-ready AI tools.
        </motion.p>

        {/* CTAs with Anti-Gravity Magnetic Pull */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mt-2"
        >
          <AntiGravityElement floatDistance={12} floatDuration={4.8} intensity={0.3} scaleOnHover={1.04}>
            <div className="relative group w-full sm:w-auto">
              {/* Animated Pulsing Glow Backdrop */}
              <motion.div
                animate={{ opacity: [0.4, 0.85, 0.4], scale: [0.97, 1.04, 0.97] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-md opacity-60 dark:from-cyan-400 dark:via-indigo-500 dark:to-fuchsia-500"
              />
              <Link
                href="/contact"
                aria-label="Start a Project with Connectify"
                className="relative group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-400 text-white shadow-lg shadow-indigo-500/25 dark:from-cyan-500 dark:via-indigo-500 dark:to-fuchsia-500 dark:hover:from-cyan-400 dark:hover:via-indigo-400 dark:hover:to-fuchsia-400 dark:shadow-cyan-500/25 font-display text-[14px] font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-[180px]"
              >
                <span>Start a Project</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </AntiGravityElement>

          <AntiGravityElement floatDistance={10} floatDuration={5.5} floatDelay={0.4} intensity={0.25} scaleOnHover={1.03}>
            <Link
              href="/case-studies"
              aria-label="Explore Our Case Studies"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-slate-300 dark:border-white/20 hover:border-indigo-400 dark:hover:border-cyan-400 bg-white/80 dark:bg-white/5 text-slate-900 dark:text-white hover:bg-white dark:hover:bg-white/10 shadow-xs backdrop-blur-md font-display text-[14px] font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-[170px]"
            >
              Explore Our Work
            </Link>
          </AntiGravityElement>
        </motion.div>

        {/* Counter Ribbon - Commented out per request */}
        {/*
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 14 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-2xl border border-slate-200/90 bg-white/90 p-4 sm:p-5 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="space-y-0.5">
              <p className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                <CountUpNumber target={25} suffix="+" />
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Deployed Systems
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                <CountUpNumber target={99.99} decimals={2} suffix="%" />
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                SLA Uptime
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                <CountUpNumber target={6} />
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Core Practices
              </p>
            </div>

            <div className="space-y-0.5">
              <p className="font-mono text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                Tier-1
              </p>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Enterprise Clients
              </p>
            </div>
          </div>
        </motion.div>
        */}
      </motion.div>

      {/* Floating Enterprise Tech Badge 1 (Cloud Native) - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          transform: `translate3d(${(cursorPos.x / 1200 - 0.5) * -10}px, ${(cursorPos.y / 800 - 0.5) * -10}px, 0)`,
        }}
        className="hidden xl:flex absolute top-24 left-8 xl:left-12 z-10 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/75 p-3.5 shadow-xl backdrop-blur-xl transition-transform duration-300 ease-out dark:border-white/10 dark:bg-slate-900/75 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400 border border-indigo-500/20">
            <Cpu className="h-4 w-4" />
          </div>
          <div className="text-left">
            <p className="font-display text-xs font-bold text-slate-900 dark:text-white">Cloud Native</p>
            <p className="font-mono text-[10px] font-semibold text-slate-500 dark:text-slate-400">Scalable Microservices</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Enterprise Tech Badge 2 (AI Engineering) - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{
          transform: `translate3d(${(cursorPos.x / 1200 - 0.5) * 10}px, ${(cursorPos.y / 800 - 0.5) * 10}px, 0)`,
        }}
        className="hidden xl:flex absolute bottom-28 right-8 xl:right-12 z-10 items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/75 p-3.5 shadow-xl backdrop-blur-xl transition-transform duration-300 ease-out dark:border-white/10 dark:bg-slate-900/75 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:bg-amber-500/10 dark:text-amber-400 border border-sky-500/20">
            <Sparkles className="h-4 w-4" />
          </div>
          <div className="text-left">
            <p className="font-display text-xs font-bold text-slate-900 dark:text-white">AI Engineering</p>
            <p className="font-mono text-[10px] font-semibold text-slate-500 dark:text-slate-400">Intelligent Workflows</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}