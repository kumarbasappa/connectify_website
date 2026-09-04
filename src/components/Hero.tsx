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
    <section className="relative w-full min-h-svh min-h-screen overflow-hidden flex flex-col justify-center items-center pt-12 pb-32 bg-slate-950 text-white transition-colors duration-300">
      {/* Full-Bleed Background Video */}
      <video
        ref={videoRef}
        autoPlay={!shouldReduceMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover pointer-events-none"
      >
        <source src="/newhero-1080.mp4" type="video/mp4" />
      </video>

      {/* Subtle Overlay Scrims for WCAG AA Contrast */}
      <div className="absolute inset-0 z-10 bg-slate-950/45 dark:bg-slate-950/65 backdrop-blur-[1px] pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80 pointer-events-none" />

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
        className="relative z-20 w-full max-w-[980px] mx-auto px-6 flex flex-col items-center text-center my-auto -translate-y-2 md:-translate-y-4 pb-20 sm:pb-28"
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
            <div className="group relative inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-white/20 bg-slate-900/70 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 hover:border-electric/60">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand via-electric to-brand-deep blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/connectifylogo-white.png"
                alt="Connectify Brand Logo"
                className="h-7 sm:h-9 w-auto object-contain drop-shadow-md"
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
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-slate-900/60 text-white shadow-xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 opacity-40" />
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              </span>
              <Sparkles className="w-3.5 h-3.5 text-electric" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] font-extrabold text-electric">
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
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] md:leading-[1.08] md:tracking-[-0.03em] font-extrabold text-white mb-6 sm:mb-8 max-w-4xl sm:max-w-5xl drop-shadow-md"
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
          className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-slate-200/90 max-w-2xl sm:max-w-3xl mx-auto mb-8 md:mb-10 font-medium tracking-wide drop-shadow-sm"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mt-2"
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
              <div className="relative group w-full sm:w-auto">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? {}
                      : { opacity: [0.4, 0.85, 0.4], scale: [0.97, 1.04, 0.97] }
                  }
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-1 rounded-full bg-gradient-to-r from-electric via-brand to-brand-deep blur-md opacity-60"
                />
                <Link
                  href="/services"
                  aria-label="View Projects"
                  className="relative group inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-brand via-brand-deep to-electric hover:opacity-95 text-white shadow-lg shadow-brand/25 font-display text-[14px] font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-[180px]"
                >
                  <span>View Projects</span>
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/25 hover:border-electric bg-white/10 text-white hover:bg-white/20 shadow-xs backdrop-blur-md font-display text-[14px] font-semibold rounded-full transition-all duration-300 w-full sm:w-auto min-w-[170px]"
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
