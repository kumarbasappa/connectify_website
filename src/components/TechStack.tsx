"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category = "Frontend" | "Backend" | "Database & Storage" | "AI & Cloud";

interface TechItem {
  name: string;
  category: Category;
  description: string;
  badge: string;
}

const techData: TechItem[] = [
  { name: "React", category: "Frontend", description: "Modern UI library for component-driven web interfaces.", badge: "UI" },
  { name: "Next.js", category: "Frontend", description: "App Router framework for SSR and static generation.", badge: "SSR" },
  { name: "TypeScript", category: "Frontend", description: "Strict static typing for scalable enterprise codebases.", badge: "TS" },
  { name: "Tailwind CSS", category: "Frontend", description: "Utility-first styling with zero runtime overhead.", badge: "CSS" },
  { name: "Node.js", category: "Backend", description: "High-concurrency microservices and asynchronous APIs.", badge: "API" },
  { name: "Go / Python", category: "Backend", description: "Low-latency processing engines and telemetry streaming.", badge: "CORE" },
  { name: "PostgreSQL", category: "Database & Storage", description: "ACID-compliant relational database with strong indexing.", badge: "SQL" },
  { name: "MongoDB & Redis", category: "Database & Storage", description: "Distributed document storage and microsecond cache layers.", badge: "NOSQL" },
  { name: "AWS & Docker", category: "AI & Cloud", description: "Container orchestration, auto-scaling ECS, and Terraform IaC.", badge: "INFRA" },
  { name: "PyTorch & OpenAI", category: "AI & Cloud", description: "RAG pipelines, embeddings, and customized LLM microservices.", badge: "AI" },
];

const categories: Category[] = ["Frontend", "Backend", "Database & Storage", "AI & Cloud"];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<Category>("Frontend");
  const filtered = techData.filter((item) => item.category === activeTab);

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-wider text-indigo-500 uppercase">03 / Engineering Stack</span>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-slate-900 dark:text-white">Technology Stack.</h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === cat
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm shadow-sm hover:shadow-xl transition-all"
            >
              <span className="inline-block px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                {item.badge}
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.name}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
