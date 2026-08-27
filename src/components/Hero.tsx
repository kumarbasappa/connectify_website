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

// WebGL Interactive Fluid Background Shader (Stitch Hero Evolution)
function WebGLShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animFrameId: number;

    function syncSize() {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    syncSize();
    const observer = new ResizeObserver(syncSize);
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    const isDark =
      theme === "dark" || document.documentElement.classList.contains("dark");

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsDark = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
          vec2 uv = v_texCoord;
          vec2 mouse = u_mouse / u_resolution;
          
          vec3 color1 = vec3(0.486, 0.227, 0.929); // #7c3aed
          vec3 color2 = vec3(0.02, 0.02, 0.04);   // #05050a
          
          float noise = sin(uv.x * 10.0 + u_time * 0.5) * cos(uv.y * 8.0 - u_time * 0.3);
          noise += sin(uv.x * 5.0 - u_time * 0.2) * 0.5;
          
          float dist = distance(uv, mouse);
          float glow = 1.0 - smoothstep(0.0, 0.6, dist);
          
          vec3 finalColor = mix(color2, color1, noise * 0.2 + 0.1);
          finalColor += color1 * glow * 0.35;
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const fsLight = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
          vec2 uv = v_texCoord;
          vec2 mouse = u_mouse / u_resolution;
          
          vec3 color1 = vec3(0.388, 0.275, 0.902); // #6346e6
          vec3 color2 = vec3(0.973, 0.976, 1.0);   // #f8f9ff
          
          float noise = sin(uv.x * 10.0 + u_time * 0.4) * cos(uv.y * 8.0 - u_time * 0.25);
          noise += sin(uv.x * 5.0 - u_time * 0.15) * 0.4;
          
          float dist = distance(uv, mouse);
          float glow = 1.0 - smoothstep(0.0, 0.55, dist);
          
          vec3 finalColor = mix(color2, color1, noise * 0.08 + 0.03);
          finalColor += color1 * glow * 0.12;
          
          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    function createShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const vertexShader = createShader(gl.VERTEX_SHADER, vs);
    const fragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      isDark ? fsDark : fsLight
    );

    if (!vertexShader || !fragmentShader) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vertexShader);
    gl.attachShader(prog, fragmentShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    function render(t: number) {
      if (!gl || !canvas) return;
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animFrameId = requestAnimationFrame(render);
    }

    animFrameId = requestAnimationFrame(render);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, [theme]);

  return (
    <div className="absolute inset-0 z-0 opacity-80 pointer-events-none mix-blend-screen overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex flex-col items-center justify-center bg-[#f8f9ff] dark:bg-[#05050a] transition-colors duration-300">
      {/* Light Leaks & Geometric Ambient Accents */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Grid Blueprint Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04] dark:opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* WebGL Shader Interactive Canvas */}
      <WebGLShaderBackground />

      {/* Floating Value Prop Glass Cards (4 Corner Orbiters) */}
      <div className="hidden xl:flex absolute top-[24%] left-[6%] rounded-2xl p-4 items-center space-x-4 z-10 w-[240px] border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-white/[0.03] animate-pulse">
        <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        </div>
        <div>
          <p className="text-[11px] text-slate-500 dark:text-white/50 font-semibold uppercase tracking-widest mb-0.5">
            Real-Time
          </p>
          <p className="text-[14px] font-semibold text-slate-900 dark:text-white/90">
            Analytics Engine
          </p>
        </div>
      </div>

      <div className="hidden xl:flex absolute bottom-[22%] left-[8%] rounded-2xl p-4 items-center space-x-4 z-10 w-[220px] border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-slate-900 dark:text-white/90 mb-0.5">
            Bank Grade
          </p>
          <p className="text-[11px] text-emerald-600 dark:text-[#4ade80] font-semibold flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-ping" />
            Protected
          </p>
        </div>
      </div>

      <div className="hidden xl:flex absolute top-[28%] right-[6%] rounded-2xl p-4 items-center space-x-4 z-10 w-[240px] border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
          <CloudCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-300" />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-slate-900 dark:text-white/90 mb-0.5">
            Global Scalability
          </p>
          <p className="text-[11px] text-slate-500 dark:text-white/50 font-semibold uppercase tracking-widest">
            Cloud Native
          </p>
        </div>
      </div>

      <div className="hidden xl:flex absolute bottom-[24%] right-[8%] rounded-2xl p-4 items-center space-x-4 z-10 w-[220px] border border-slate-200/80 bg-white/80 backdrop-blur-xl shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
        <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-300" />
        </div>
        <div>
          <p className="text-[14px] font-semibold text-slate-900 dark:text-white/90 mb-0.5">
            99.9% Uptime
          </p>
          <p className="text-[11px] text-slate-500 dark:text-white/50 font-semibold uppercase tracking-widest">
            SLA Guarantee
          </p>
        </div>
      </div>

      {/* Main Stitch Hero Content Container */}
      <div className="relative z-20 w-full max-w-[1050px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Next-Gen Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-slate-300/80 bg-white/80 shadow-xs backdrop-blur-md mb-8 dark:border-white/10 dark:bg-white/[0.04]"
        >
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
          <span className="font-mono text-[11px] text-slate-700 dark:text-white/80 uppercase tracking-[0.2em] font-bold">
            NEXT-GEN INFRASTRUCTURE &amp; AI
          </span>
        </motion.div>

        {/* Stitch Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-[76px] lg:text-[84px] md:leading-[1.05] md:tracking-[-0.04em] font-extrabold text-slate-900 dark:text-white mb-8"
        >
          <span className="font-semibold text-slate-900/90 dark:text-white/90">
            We are not just building Tech{" "}
            <span className="text-slate-400 dark:text-white/40 font-light">—</span>
          </span>
          <br />
          <span className="font-extrabold text-slate-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-white dark:via-white dark:to-white/60">
            We are building{" "}
          </span>
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 dark:from-[#d2bbff] dark:to-[#b68cff] drop-shadow-[0_0_25px_rgba(124,58,237,0.3)]">
            Future.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-sans text-base sm:text-lg md:text-[20px] leading-relaxed text-slate-600 dark:text-white/60 max-w-2xl mx-auto mb-10 font-normal tracking-wide"
        >
          We partner with ambitious brands to build scalable digital products,
          robust infrastructure, and immersive experiences that drive tomorrow&apos;s
          success.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white dark:bg-white dark:text-black font-display text-[15px] font-semibold rounded-full hover:bg-slate-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-xl w-full sm:w-auto min-w-[190px]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-300/80 bg-white/70 text-slate-900 dark:border-white/10 dark:bg-white/5 dark:text-white font-display text-[15px] font-semibold rounded-full hover:bg-white dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-md w-full sm:w-auto min-w-[180px]"
          >
            Our Services
          </Link>
        </motion.div>

        {/* Integrated Stats Ribbon Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 w-full rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xl backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-slate-900/80"
        >
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-purple-600 dark:text-purple-400 sm:text-4xl">
                <CountUpNumber target={25} suffix="+" />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                Deployed Systems
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 sm:text-4xl">
                <CountUpNumber target={99.99} decimals={2} suffix="%" />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                SLA Uptime
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 sm:text-4xl">
                <CountUpNumber target={6} />
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                Core Practices
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-3xl font-extrabold text-amber-600 dark:text-amber-400 sm:text-4xl">
                Tier-1
              </p>
              <p className="font-mono text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-300">
                Enterprise Clients
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}