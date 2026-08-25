"use client";

import { useEffect, useState } from "react";

export default function HeroDashboard() {
  const [throughput, setThroughput] = useState(2480920);
  const [latency, setLatency] = useState(11.8);

  // Live telemetry pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput((prev) => prev + Math.floor(Math.random() * 1200) - 500);
      setLatency((prev) => Number((11.4 + Math.random() * 0.8).toFixed(1)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Ambient Radial Glow behind Dashboard */}
      <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-r from-brand/20 via-electric/25 to-brand-deep/20 blur-3xl opacity-60 dark:opacity-40" />

      {/* 2.5D Product UI Dashboard Container */}
      <div className="relative rounded-2xl border border-black/10 bg-card-bg/95 p-5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-brand/40 dark:border-white/10 dark:bg-[#121927]/95 dark:shadow-indigo-950/40">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-rose-500/80" />
            <div className="h-3 w-3 rounded-full bg-amber-500/80" />
            <div className="h-3 w-3 rounded-full bg-emerald-500/80 animate-pulse" />
            <span className="ml-2 font-mono text-xs font-semibold text-muted">
              connectify-telemetry-cluster-01.internal
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>99.998% UPTIME SLA</span>
          </div>
        </div>

        {/* Top Telemetry Metric Cards */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-black/5 bg-surface/70 p-3.5 dark:border-white/5 dark:bg-white/5">
            <p className="font-mono text-[11px] font-semibold text-muted uppercase tracking-wider">
              System Throughput
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-brand dark:text-electric">
              {(throughput / 1000000).toFixed(2)}M <span className="text-xs text-muted font-normal">req/sec</span>
            </p>
          </div>

          <div className="rounded-xl border border-black/5 bg-surface/70 p-3.5 dark:border-white/5 dark:bg-white/5">
            <p className="font-mono text-[11px] font-semibold text-muted uppercase tracking-wider">
              P99 Latency
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-emerald-600 dark:text-emerald-400">
              {latency} <span className="text-xs text-muted font-normal">ms</span>
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 rounded-xl border border-black/5 bg-surface/70 p-3.5 dark:border-white/5 dark:bg-white/5">
            <p className="font-mono text-[11px] font-semibold text-muted uppercase tracking-wider">
              Error Budget
            </p>
            <p className="mt-1 font-mono text-lg font-bold text-indigo-600 dark:text-indigo-400">
              0.001% <span className="text-xs text-muted font-normal">nominal</span>
            </p>
          </div>
        </div>

        {/* Live Sparkline Graph & Data Stream */}
        <div className="mt-4 rounded-xl border border-black/5 bg-surface/50 p-4 dark:border-white/5 dark:bg-white/5">
          <div className="flex items-center justify-between font-mono text-xs text-muted">
            <span>REAL-TIME TRAFFIC LOAD</span>
            <span className="text-brand dark:text-electric font-semibold">2.48M req/sec</span>
          </div>

          {/* SVG Sparkline Graph with Continuous Wave Animation */}
          <div className="mt-3 h-24 w-full">
            <svg className="h-full w-full overflow-visible" viewBox="0 0 400 90" fill="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 60 Q 40 20, 80 45 T 160 30 T 240 55 T 320 25 T 400 35 L 400 90 L 0 90 Z"
                fill="url(#chartGradient)"
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

        {/* Micro System Feeds */}
        <div className="mt-4 space-y-2 font-mono text-[11px]">
          <div className="flex items-center justify-between rounded-lg border border-black/5 bg-surface/90 px-3 py-2 text-foreground/80 dark:border-white/5 dark:bg-white/5 dark:text-white/80">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Kubernetes Core Mesh</span>
            </div>
            <span className="text-emerald-500 font-semibold">120 Nodes Active</span>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-black/5 bg-surface/90 px-3 py-2 text-foreground/80 dark:border-white/5 dark:bg-white/5 dark:text-white/80">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              <span>Kafka Event Pipeline</span>
            </div>
            <span className="text-brand dark:text-electric font-semibold">0ms Lag</span>
          </div>
        </div>
      </div>
    </div>
  );
}
