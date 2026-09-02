"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroEntrance() {
  // Container variant to handle cascading children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child's animation
        delayChildren: 0.3,   // Initial delay before first child starts
      },
    },
  };

  // Variants for individual text/button elements
  const itemVariants = {
    hidden: { 
      y: 30,         // Start 30px down
      opacity: 0,    // Fully transparent
      scale: 0.98,   // Slightly scaled down
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring" as const,      // Use spring physics for natural bounce
        stiffness: 100,      // Snap speed
        damping: 18,         // Resistance to bounce
        mass: 0.8,           // Weight of element
      },
    },
  };

  // Specialized variant for the eyebrow badge with a subtle spin
  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        delay: 0.2, // Starts slightly before other items
      }
    }
  };

  return (
    <motion.section 
      className="relative flex flex-col items-center justify-center text-center px-6 py-24 min-h-[90vh] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Zero-G Ambient Orbs */}
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-500/15 via-sky-400/15 to-transparent blur-3xl pointer-events-none rounded-full -z-10"
      />

      {/* 1. Eyebrow Badge */}
      <motion.div
        variants={badgeVariants}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-500/30 bg-sky-50/50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400 text-xs font-semibold tracking-wider uppercase mb-8 backdrop-blur-sm"
      >
        <motion.span 
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" as const }}
          className="w-2.5 h-2.5 rounded-full bg-sky-500"
        />
        Enterprise Software &amp; AI Engineering
      </motion.div>

      {/* 2. Main Headline */}
      <motion.h1
        variants={itemVariants}
        className="max-w-5xl text-5xl md:text-7xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.1] mb-6"
      >
        We engineer scalable digital products, cloud platforms &amp; AI solutions.
      </motion.h1>

      {/* 3. Subtitle */}
      <motion.p
        variants={itemVariants}
        className="max-w-3xl text-xl text-slate-700 dark:text-slate-300 mb-12 leading-relaxed"
      >
        Connectify helps ambitious brands and growing enterprises build high-performance web applications, robust cloud architecture, and production-ready AI tools.
      </motion.p>

      {/* 4. Action Buttons */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap items-center justify-center gap-5"
      >
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-lg shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.04] active:scale-[0.97]"
        >
          Start a Project
          <ArrowRight className="w-5 h-5" />
        </Link>
        <Link
          href="/case-studies"
          className="px-8 py-4 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-medium text-lg transition-all hover:scale-[1.04] active:scale-[0.97]"
        >
          Explore Our Work
        </Link>
      </motion.div>
    </motion.section>
  );
}
