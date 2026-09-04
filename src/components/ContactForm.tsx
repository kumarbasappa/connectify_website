"use client";

import { useState } from "react";

const serviceOptions = [
  "Digital Solutions & Product Engineering",
  "Technology Services & Cloud Architecture",
  "Business Advisory & Growth Playbooks",
  "Investment Consulting & Fundraising",
  "Brand Experience & Design Systems",
  "Data Infrastructure & Enterprise AI",
  "Other Enterprise Inquiry",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: serviceOptions[0],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill out all required fields (Name, Work Email, and Message).");
      return;
    }

    if (!formData.email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    setStatus("submitting");

    // Simulate enterprise form submission processing
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      company: "",
      service: serviceOptions[0],
      message: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-inter text-2xl font-bold text-slate-900 dark:text-white">
          Message Received
        </h3>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Thank you for reaching out, <span className="font-semibold text-slate-900 dark:text-white">{formData.name}</span>. Our business engineering team will review your project brief and respond within 24 hours.
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-slate-300 bg-white px-6 py-2.5 font-inter text-xs font-semibold text-slate-900 shadow-xs hover:bg-slate-50 dark:border-white/20 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && errorMessage && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-600 dark:text-rose-400">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
            Full Name <span className="text-brand">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
            Work Email <span className="text-brand">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
            Company / Organization
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Acme Inc."
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
            Project Requirement
          </label>
          <select
            id="contact-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-white/15 dark:bg-slate-900 dark:text-white"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200">
          Project Requirement Details <span className="text-indigo-600 dark:text-indigo-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your objectives, timeline, or architecture requirements..."
          className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-xs focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 py-4 text-center font-sans text-sm font-bold transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 shadow-md"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin text-white dark:text-slate-950" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Processing Request...
          </span>
        ) : (
          <>
            Start a Project
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs text-slate-600 dark:text-slate-400">
        By submitting this form, you agree to our confidential handling of your project brief.
      </p>
    </form>
  );
}
