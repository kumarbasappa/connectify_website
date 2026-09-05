"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { AntiGravityElement } from "./AntiGravity";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion && videoRef.current) {
      videoRef.current.pause();
    }
  }, [shouldReduceMotion]);

  return (
    <section className="relative flex w-full min-h-svh min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f7f8fc] pt-12 pb-32 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Light mode: soft lavender mesh (no blend modes meant for dark canvases) */}
      <div className="pointer-events-none absolute inset-0 z-0 dark:hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[#f7f8fc]" />
        <div className="absolute -top-28 left-1/2 h-[460px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-200/45 via-sky-100/40 to-violet-100/35 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="absolute -right-10 top-1/3 h-64 w-64 rounded-full bg-violet-100/40 blur-3xl" />
        <svg
          className="absolute inset-x-0 bottom-0 h-40 w-full text-indigo-200/50"
          viewBox="0 0 1440 160"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 110 C 240 60, 480 150, 720 100 C 960 50, 1200 130, 1440 80 L 1440 160 L 0 160 Z"
            fill="currentColor"
            opacity="0.35"
          />
          <path
            d="M0 90 C 200 140, 440 40, 720 90 C 1000 140, 1240 50, 1440 95"
            stroke="currentColor"
            strokeWidth="1.25"
            fill="none"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* Dark mode: full-bleed cinematic video */}
      <video
        ref={videoRef}
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full object-cover dark:block"
      >
        <source src="/newhero-1080.mp4" type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 z-10 hidden bg-slate-950/65 backdrop-blur-[1px] dark:block" />
      <div className="pointer-events-none absolute inset-0 z-10 hidden bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 dark:block" />

      {/* Main Hero Content Container */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : "hidden"}
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.12,
              delayChildren: shouldReduceMotion ? 0 : 0.05,
            },
          },
        }}
        className="relative z-20 mx-auto my-auto flex w-full max-w-[980px] -translate-y-2 flex-col items-center px-6 pb-20 text-center sm:pb-28 md:-translate-y-4"
      >
        {/* 1. Top-Middle Centered Brand Logo Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.25, 1, 0.5, 1] }
          }
          className="mb-4 sm:mb-5"
        >
          <AntiGravityElement
            floatDistance={shouldReduceMotion ? 0 : 10}
            floatDuration={4.5}
            intensity={shouldReduceMotion ? 0 : 0.25}
          >
            <div className="group relative inline-flex items-center justify-center rounded-2xl border border-slate-200/90 bg-white/85 px-6 py-3 shadow-lg shadow-slate-900/5 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-brand/40 dark:border-white/20 dark:bg-slate-900/70 dark:shadow-2xl dark:hover:border-electric/60">
              <div className="absolute -inset-1 -z-10 hidden rounded-2xl bg-gradient-to-r from-brand via-electric to-brand-deep opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-75 dark:block" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo-purple.png"
                alt="Connectify Brand Logo"
                className="h-7 w-auto object-contain sm:h-9 dark:hidden"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo-white.png"
                alt="Connectify Brand Logo"
                className="hidden h-7 w-auto object-contain drop-shadow-md sm:h-9 dark:block"
              />
            </div>
          </AntiGravityElement>
        </motion.div>

        {/* Status Pill Eyebrow Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.25, 1, 0.5, 1] }
          }
          className="mb-5 md:mb-6"
        >
          <AntiGravityElement
            floatDistance={shouldReduceMotion ? 0 : 8}
            floatDuration={5.2}
            floatDelay={0.5}
            intensity={shouldReduceMotion ? 0 : 0.18}
          >
            <div className="inline-flex items-center space-x-2 rounded-full border border-slate-200/90 bg-white/80 px-3.5 py-1.5 text-slate-800 shadow-sm backdrop-blur-md dark:border-white/20 dark:bg-slate-900/60 dark:text-white dark:shadow-xs">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-sm dark:shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-brand dark:text-electric" />
              <span className="font-mono text-xs font-extrabold uppercase tracking-[0.2em] text-brand dark:text-electric">
                ENTERPRISE SOFTWARE &amp; AI ENGINEERING
              </span>
            </div>
          </AntiGravityElement>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
          }
          className="font-display mb-6 max-w-4xl text-4xl font-extrabold text-slate-950 sm:mb-8 sm:max-w-5xl sm:text-6xl md:text-7xl md:leading-[1.08] md:tracking-[-0.03em] lg:text-[76px] dark:text-white dark:drop-shadow-md"
        >
          Build What&apos;s Next
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: [0.25, 1, 0.5, 1] }
          }
          className="font-sans mx-auto mb-8 max-w-2xl text-base font-medium leading-relaxed tracking-wide text-slate-600 sm:max-w-3xl sm:text-lg md:mb-10 md:text-xl dark:text-slate-200/90 dark:drop-shadow-sm"
        >
          We design, build, and scale digital platforms backed by strategic business and capital advisory.
        </motion.p>

        {/* CTA Buttons Container */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="mt-2 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-5"
        >
          {/* Primary CTA: View Projects */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.55, ease: [0.25, 1, 0.5, 1] }
            }
            className="w-full sm:w-auto"
          >
            <AntiGravityElement
              floatDistance={shouldReduceMotion ? 0 : 12}
              floatDuration={4.8}
              intensity={shouldReduceMotion ? 0 : 0.3}
              scaleOnHover={1.04}
            >
              <div className="group relative w-full sm:w-auto">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { opacity: [0.4, 0.85, 0.4], scale: [0.97, 1.04, 0.97] }
                  }
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 hidden rounded-full bg-gradient-to-r from-electric via-brand to-brand-deep opacity-60 blur-md dark:block"
                />
                <Link
                  href="/services"
                  aria-label="View Projects"
                  className="font-display relative inline-flex w-full min-w-[180px] items-center justify-center rounded-full bg-gradient-to-r from-brand via-brand-deep to-electric px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:opacity-95 sm:w-auto dark:shadow-brand/25"
                >
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </AntiGravityElement>
          </motion.div>

          {/* Secondary CTA: Case Studies */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
              show: { opacity: 1, y: 0 },
            }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.55, ease: [0.25, 1, 0.5, 1] }
            }
            className="w-full sm:w-auto"
          >
            <AntiGravityElement
              floatDistance={shouldReduceMotion ? 0 : 10}
              floatDuration={5.5}
              floatDelay={0.4}
              intensity={shouldReduceMotion ? 0 : 0.25}
              scaleOnHover={1.03}
            >
              <Link
                href="/case-studies"
                aria-label="Case Studies"
                className="font-display inline-flex w-full min-w-[170px] items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-[14px] font-semibold text-slate-900 shadow-sm transition-all duration-300 hover:border-brand/40 hover:bg-slate-50 sm:w-auto dark:border-white/25 dark:bg-white/10 dark:text-white dark:shadow-xs dark:backdrop-blur-md dark:hover:border-electric dark:hover:bg-white/20"
              >
                Case Studies
              </Link>
            </AntiGravityElement>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
