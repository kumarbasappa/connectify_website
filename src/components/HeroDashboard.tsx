"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Terminal, Shield, Zap, Activity, CheckCircle2, Lock } from "lucide-react";

export default function HeroDashboard() {
  const [throughput, setThroughput] = useState(2480920);
  const [latency, setLatency] = useState(11.8);
  const [logs, setLogs] = useState([
    "✓ [Edge-Mesh] 120 nodes synced (0.8ms)",
    "✓ [AI-Inference] P99 Latency 11.2ms",
    "✓ [Zero-Trust] Token handshake validated",
  ]);

  // Mouse 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Telemetry stream and log roll
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput((prev) => prev + Math.floor(Math.random() * 1400) - 600);
      setLatency((prev) => Number((11.2 + Math.random() * 0.9).toFixed(1)));
    }, 2000);

    const logPool = [
      "✓ [Edge-Mesh] Cluster load-balanced across 12 zones",
      "✓ [Kafka-Pipeline] Stream ingested: 100k events/sec",
      "✓ [GraphQL-Gateway] Schema cache hit ratio 99.94%",
      "✓ [Auto-Scaler] Provisioned +4 pods in us-east-1",
      "✓ [TLS-1.3] Handshake latency: 1.2ms (Zero Trust)",
    ];

    const logInterval = setInterval(() => {
      const randomLog = logPool[Math.floor(Math.random() * logPool.length)];
      setLogs((prev) => [randomLog, prev[0], prev[1]]);
    }, 3500);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <div
      className="relative mx-auto w-full max-w-xl lg:max-w-none perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
    >
      {/* Multi-Layer Ambient Radial Glow behind Dashboard */}
      <div className="absolute -inset-6 rounded-[44px] bg-gradient-to-r from-brand/30 via-electric/35 to-indigo-600/30 blur-3xl opacity-70 dark:opacity-50 animate-pulse" />

      {/* Floating Orbit Badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -left-6 z-20 hidden sm:flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-800 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/90 dark:text-white"
      >
        <Zap className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
        <span>⚡ Sub-15ms Global Latency</span>
      </motion.div>

      {/* Floating Orbit Badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -bottom-6 -right-6 z-20 hidden sm:flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/90 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-800 shadow-xl backdrop-blur-xl dark:border-white/15 dark:bg-slate-900/90 dark:text-white"
      >
        <Lock className="h-3.5 w-3.5 text-emerald-500" />
        <span>🔒 SOC2 Type II Certified</span>
      </motion.div>

      {/* 3D Holographic Card Container */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-2xl transition-shadow duration-300 dark:border-white/10 dark:bg-[#0b0f17]/95 dark:shadow-indigo-950/50"
      >
        {/* macOS Top Terminal Chrome Bar */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80 animate-pulse" />
            <span className="ml-2 font-mono text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Terminal className="h-3.5 w-3.5 text-brand dark:text-amber-400" />
              connectify-telemetry-cluster-01.internal
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-700 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>aws-us-east-1 · healthy</span>
          </div>
        </div>

        {/* Top Telemetry Metrics Row */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/5 dark:bg-white/5">
            <p className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider dark:text-slate-400">
              System Throughput
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-brand dark:text-electric">
              {(throughput / 1000000).toFixed(2)}M <span className="text-xs text-slate-500 font-normal dark:text-slate-400">req/sec</span>
            </p>
          </div>

          <div className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/5 dark:bg-white/5">
            <p className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider dark:text-slate-400">
              P99 Latency
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-emerald-700 dark:text-emerald-400">
              {latency} <span className="text-xs text-slate-500 font-normal dark:text-slate-400">ms</span>
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-white/5 dark:bg-white/5">
            <p className="font-mono text-[11px] font-bold text-slate-600 uppercase tracking-wider dark:text-slate-400">
              Error Budget
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-indigo-700 dark:text-indigo-400">
              0.001% <span className="text-xs text-slate-500 font-normal dark:text-slate-400">nominal</span>
            </p>
          </div>
        </div>

        {/* Live SVG Streaming Network Area Chart */}
        <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/5 dark:bg-white/5">
          <div className="flex items-center justify-between font-mono text-xs text-slate-700 dark:text-slate-300">
            <span className="font-bold flex items-center gap-1.5">
              <Activity className="h-3.5 w-3.5 text-brand dark:text-electric" />
              REAL-TIME NETWORK LOAD STREAM
            </span>
            <span className="text-brand dark:text-electric font-bold">2.48M req/sec</span>
          </div>

          <div className="mt-3 h-28 w-full overflow-hidden">
            <svg className="h-full w-full overflow-visible" viewBox="0 0 400 90" fill="none">
              <defs>
                <linearGradient id="chartGradientHolo" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 60 Q 40 20, 80 45 T 160 30 T 240 55 T 320 25 T 400 35 L 400 90 L 0 90 Z"
                fill="url(#chartGradientHolo)"
              />
              <path
                d="M 0 60 Q 40 20, 80 45 T 160 30 T 240 55 T 320 25 T 400 35"
                stroke="#6366f1"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                className="animate-wave"
              />
              <circle cx="320" cy="25" r="4" fill="#818cf8" className="animate-ping" />
              <circle cx="320" cy="25" r="3" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* Live Animated Rolling Log Terminal */}
        <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-950 p-3.5 font-mono text-[11px] text-emerald-400 shadow-inner">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[10px] uppercase tracking-wider text-slate-400">
            <span>Live Audit Feeds</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              streaming
            </span>
          </div>

          <div className="mt-2 space-y-1.5 overflow-hidden">
            {logs.map((log, idx) => (
              <motion.div
                key={log + idx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1 - idx * 0.25, x: 0 }}
                transition={{ duration: 0.3 }}
                className="truncate font-mono"
              >
                {log}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
