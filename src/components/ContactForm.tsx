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
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-inter text-2xl font-bold text-foreground">
          Message Received
        </h3>
        <p className="mt-2 text-sm text-muted">
          Thank you for reaching out, <span className="font-semibold text-foreground">{formData.name}</span>. Our business engineering team will review your project brief and respond within 24 hours.
        </p>
        <div className="mt-6">
          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-black/20 bg-background px-6 py-2.5 font-inter text-xs font-semibold text-foreground hover:bg-surface dark:border-white/20"
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
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs font-semibold text-rose-500">
          {errorMessage}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
            Full Name <span className="text-brand">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-white/5"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
            Work Email <span className="text-brand">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@company.com"
            className="mt-2 w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-white/5"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
            Company / Organization
          </label>
          <input
            id="contact-company"
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Acme Enterprise"
            className="mt-2 w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-white/5"
          />
        </div>

        <div>
          <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
            Primary Area of Interest
          </label>
          <select
            id="contact-service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="mt-2 w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-sm text-foreground focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-white/5"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-background text-foreground">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-foreground/80">
          Project Brief / Message <span className="text-brand">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your objectives, timeline, or architecture requirements..."
          className="mt-2 w-full rounded-xl border border-black/15 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-white/15 dark:bg-white/5"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="group flex w-full items-center justify-center gap-3 rounded-full btn-glow py-4 text-center font-inter text-sm font-semibold disabled:opacity-50"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 animate-spin text-brand" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending Enquiry...
          </span>
        ) : (
          <>
            Submit Business Brief
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

      <p className="text-center text-[11px] text-muted">
        By submitting this form, you agree to our confidential handling of your project brief.
      </p>
    </form>
  );
}