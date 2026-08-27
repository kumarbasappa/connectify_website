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

// Full-Bleed Edge-to-Edge 3D Particle Mesh Physics Canvas
function InteractiveParticleMeshCanvas() {
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
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    const isDark =
      theme === "dark" || document.documentElement.classList.contains("dark");

    type Particle = {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      phase: number;
      color: string;
    };

    const lightParticleColors = ["#4338ca", "#0284c7", "#6366f1", "#0284c7"];
    const darkParticleColors = ["#38bdf8", "#c084fc", "#06b6d4", "#a855f7"];
    const particlePalette = isDark ? darkParticleColors : lightParticleColors;

    let particles: Particle[] = [];

    const initParticles = () => {
      particles = [];
      const colSpacing = 48;
      const rowSpacing = 48;
      const cols = Math.floor(width / colSpacing);
      const rows = Math.floor(height / rowSpacing);

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const bx = (width / cols) * c + (Math.random() - 0.5) * 16;
          const by = (height / rows) * r + (Math.random() - 0.5) * 16;
          const color =
            particlePalette[Math.floor(Math.random() * particlePalette.length)];

          particles.push({
            baseX: bx,
            baseY: by,
            x: bx,
            y: by,
            vx: 0,
            vy: 0,
            radius: Math.random() * 2.2 + 1.6,
            phase: Math.random() * Math.PI * 2,
            color: color,
          });
        }
      }
    };

    initParticles();
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      // Lerp mouse tracking with spring damping
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // 1. Full-Bleed Dynamic Radial Spotlight following Cursor
      if (mouse.x > 0 && mouse.y > 0) {
        const spotlight = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          380
        );
        if (isDark) {
          spotlight.addColorStop(0, "rgba(56, 189, 248, 0.2)");
          spotlight.addColorStop(0.5, "rgba(192, 132, 252, 0.1)");
          spotlight.addColorStop(1, "rgba(8, 12, 20, 0)");
        } else {
          spotlight.addColorStop(0, "rgba(99, 102, 241, 0.12)");
          spotlight.addColorStop(0.5, "rgba(2, 132, 199, 0.06)");
          spotlight.addColorStop(1, "rgba(248, 250, 252, 0)");
        }
        ctx.fillStyle = spotlight;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Full-Bleed Physics & Particle Simulation Loop
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Organic sinusoidal wave oscillation
        const waveX = Math.sin(time + p.phase) * 6;
        const waveY = Math.cos(time * 0.8 + p.phase) * 6;
        const targetX = p.baseX + waveX;
        const targetY = p.baseY + waveY;

        // Mouse Repulsion & Spring Distortion Physics
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;

          if (dist < maxDist) {
            const force = (1 - dist / maxDist) * 38;
            const angle = Math.atan2(dy, dx);
            p.vx -= Math.cos(angle) * force * 0.12;
            p.vy -= Math.sin(angle) * force * 0.12;

            // Draw magnetic cursor connector lines
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? "rgba(56, 189, 248, 0.35)"
              : "rgba(67, 56, 202, 0.28)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Spring return to wave equilibrium
        p.vx += (targetX - p.x) * 0.04;
        p.vy += (targetY - p.y) * 0.04;
        p.vx *= 0.88; // Damping
        p.vy *= 0.88;

        p.x += p.vx;
        p.y += p.vy;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = isDark ? 0.9 : 0.85;
        if (isDark) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
        }
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inter-particle connective vectors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const pdx = p.x - p2.x;
          const pdy = p.y - p2.y;
          const pdist = Math.sqrt(pdx * pdx + pdy * pdy);

          if (pdist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? "rgba(56, 189, 248, 0.3)"
              : "rgba(67, 56, 202, 0.22)";
            ctx.globalAlpha = (1 - pdist / 130) * (isDark ? 0.3 : 0.22);
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1.0;
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
    <section className="relative w-full min-h-[90vh] lg:min-h-screen overflow-hidden flex flex-col justify-between pt-32 pb-20 md:pt-40 md:pb-24 bg-[#f8fafc] dark:bg-[#080c14] transition-colors duration-300">
      {/* Full-Bleed Edge-to-Edge 3D Particle Mesh Physics Canvas */}
      <InteractiveParticleMeshCanvas />

      {/* Central Masking Radial Vignette for High Text Contrast */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#f8fafc]/40 to-[#f8fafc] dark:via-[#080c14]/40 dark:to-[#080c14]" />

      {/* Floating Glassmorphic Value Prop Orbiters (4 Corner Cards) */}
      <div className="hidden xl:flex absolute top-[24%] left-[6%] rounded-2xl p-4 items-center space-x-4 z-10 w-[240px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none animate-pulse">
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

      <div className="hidden xl:flex absolute bottom-[22%] left-[8%] rounded-2xl p-4 items-center space-x-4 z-10 w-[220px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
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

      <div className="hidden xl:flex absolute top-[28%] right-[6%] rounded-2xl p-4 items-center space-x-4 z-10 w-[240px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
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

      <div className="hidden xl:flex absolute bottom-[24%] right-[8%] rounded-2xl p-4 items-center space-x-4 z-10 w-[220px] border border-slate-200/90 bg-white/90 backdrop-blur-xl shadow-lg shadow-indigo-950/5 dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none">
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
      <div className="relative z-20 w-full max-w-[1050px] mx-auto px-6 flex flex-col items-center text-center my-auto">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-slate-300/80 bg-slate-900/5 text-slate-800 shadow-xs backdrop-blur-md mb-8 dark:border-white/10 dark:bg-white/[0.04] dark:text-amber-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-amber-400" />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] font-extrabold">
            NEXT-GEN INFRASTRUCTURE &amp; AI
          </span>
        </motion.div>

        {/* Dynamic Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-[76px] lg:text-[84px] md:leading-[1.05] md:tracking-[-0.04em] font-extrabold text-slate-950 dark:text-white mb-8"
        >
          <span className="font-semibold text-slate-950 dark:text-white/90">
            We are not just building Tech{" "}
            <span className="text-slate-400 dark:text-white/40 font-light">—</span>
          </span>
          <br />
          <span className="font-extrabold text-slate-950 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-white/60">
            We are building{" "}
          </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-sky-600 to-violet-600 dark:from-[#d2bbff] dark:to-[#b68cff] drop-shadow-[0_0_25px_rgba(79,70,229,0.25)] dark:drop-shadow-[0_0_25px_rgba(124,58,237,0.3)]">
            Future.
          </span>
        </motion.h1>

        {/* Subtitle Copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-[20px] leading-relaxed text-slate-600 dark:text-white/60 max-w-2xl mx-auto mb-10 font-medium tracking-wide"
        >
          We partner with ambitious brands to build scalable digital products,
          robust infrastructure, and immersive experiences that drive tomorrow&apos;s
          success.
        </motion.p>

        {/* Magnetic Interactive Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-display text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.03] w-full sm:w-auto min-w-[190px]"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-200/90 bg-white/80 text-slate-900 hover:bg-white shadow-xs backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-white font-display text-[15px] font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto min-w-[180px]"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Stats Counter Ribbon Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-slate-900/80 dark:shadow-none"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                <CountUpNumber target={25} suffix="+" />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Deployed Systems
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                <CountUpNumber target={99.99} decimals={2} suffix="%" />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                SLA Uptime
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                <CountUpNumber target={6} />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Core Practices
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">
                Tier-1
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-600 dark:text-slate-300">
                Enterprise Clients
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}