"use client";

import { useState } from "react";
import Link from "next/link";

function QuoteForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    growGoal: "",
    supportType: "Select one",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [supportError, setSupportError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (fields.supportType === "Select one") {
      setSupportError(true);
      return;
    }
    setSupportError(false);
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 px-4 space-y-3">
        <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100 mb-2">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-sm font-bold text-zinc-950">Thank You!</h3>
        <p className="text-xs text-zinc-500 leading-relaxed max-w-[240px]">
          Your digital strategy request has been submitted successfully. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700 leading-tight">
          {error}
        </div>
      )}
      <input
        type="text" required placeholder="Name"
        value={fields.name} onChange={(e) => setFields({ ...fields, name: e.target.value })}
        disabled={loading}
        className="w-full rounded-lg border border-[#eae6db] bg-[#FAF8F5] px-3 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-gold focus:outline-none transition-colors disabled:opacity-60"
      />
      <input
        type="email" required placeholder="Email"
        value={fields.email} onChange={(e) => setFields({ ...fields, email: e.target.value })}
        disabled={loading}
        className="w-full rounded-lg border border-[#eae6db] bg-[#FAF8F5] px-3 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-gold focus:outline-none transition-colors disabled:opacity-60"
      />
      <div className="grid grid-cols-2 gap-2">
        <input
          type="text" placeholder="Company"
          value={fields.company} onChange={(e) => setFields({ ...fields, company: e.target.value })}
          disabled={loading}
          className="w-full rounded-lg border border-[#eae6db] bg-[#FAF8F5] px-3 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-gold focus:outline-none transition-colors disabled:opacity-60"
        />
        <input
          type="url" placeholder="Website"
          value={fields.website} onChange={(e) => setFields({ ...fields, website: e.target.value })}
          disabled={loading}
          className="w-full rounded-lg border border-[#eae6db] bg-[#FAF8F5] px-3 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-gold focus:outline-none transition-colors disabled:opacity-60"
        />
      </div>
      <textarea
        rows={3} required placeholder="How can we help? (Tell us about your challenge)"
        value={fields.growGoal} onChange={(e) => setFields({ ...fields, growGoal: e.target.value })}
        disabled={loading}
        className="w-full rounded-lg border border-[#eae6db] bg-[#FAF8F5] px-3 py-2.5 text-xs text-zinc-800 placeholder-zinc-400 focus:border-brand-gold focus:outline-none transition-colors resize-none disabled:opacity-60"
      />
      <div className="relative">
        <label className="block text-[9px] font-bold text-zinc-400 uppercase tracking-wider mb-1">
          Support Type
        </label>
        <button
          type="button"
          onClick={() => !loading && setDropdownOpen(!dropdownOpen)}
          disabled={loading}
          className="w-full text-left rounded-lg bg-[#FAF8F5] border border-[#eae6db] px-3 py-2.5 text-xs text-zinc-800 focus:border-brand-gold focus:outline-none transition-all flex items-center justify-between cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          style={supportError ? { borderColor: "#ef4444" } : undefined}
        >
          <span>{fields.supportType}</span>
          <svg
            className={`h-3 w-3 text-brand-gold pointer-events-none transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        {dropdownOpen && !loading && (
          <div className="absolute left-0 right-0 mt-1 rounded-lg bg-white border border-[#eae6db] shadow-lg z-50 overflow-hidden">
            {["Select one", "Growth Strategy", "Hands on Execution", "Ongoing Growth Partner"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setFields({ ...fields, supportType: option });
                  setDropdownOpen(false);
                  if (option !== "Select one") {
                    setSupportError(false);
                  }
                }}
                className={`w-full text-left px-3 py-2 text-xs transition-all hover:bg-[#FAF8F5] text-zinc-800 cursor-pointer ${fields.supportType === option ? "bg-[#fdf9f2] text-brand-gold-dark font-semibold" : ""}`}
              >
                {option}
              </button>
            ))}
          </div>
        )}
        {supportError && (
          <p className="text-red-500 text-[10px] mt-1 font-medium">
            Please select a support type.
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-brand-gold py-3 text-xs font-bold text-zinc-950 transition-all hover:bg-brand-gold-dark hover:scale-[1.01] min-h-[44px] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <svg className="animate-spin h-4 w-4 text-zinc-950" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          "Let's Talk"
        )}
      </button>
    </form>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#FAF8F5] pt-10 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">

          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-5 sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-brand-gold shrink-0" />
              <span className="text-xs font-bold tracking-widest text-zinc-500 uppercase leading-none">
                Growth Marketing &amp; Advertising
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] mb-5 sm:mb-6">
              Growth <br className="hidden sm:inline" />
              Strategy for <br />
              <span className="text-brand-gold" suppressHydrationWarning>Longterm Results</span>
            </h1>

            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-zinc-600 mb-8 sm:mb-10">
              Build a clear marketing strategy and launch advertising campaigns that move your business forward.
            </p>

            <Link
              href="#process"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 sm:px-8 py-3.5 sm:py-4 text-sm font-semibold text-zinc-950 shadow-sm transition-all hover:bg-brand-gold-dark hover:scale-[1.02] group min-h-[48px]"
            >
              Learn More
              <svg
                className="h-4 w-4 shrink-0 transition-transform group-hover:translate-y-0.5 duration-300"
                fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </Link>
          </div>

          {/* Right Column: Get a Quote Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl border border-[#eae6db] bg-white p-5 sm:p-8 shadow-sm w-full">
              {/* align this on middle */}
              <div className="flex flex-col items-center justify-center text-center mb-6">
                <span className="text-xs font-extrabold text-zinc-800 uppercase tracking-tight">
                  Get Clarity on your Digital Strategy
                </span>
              </div>
              <QuoteForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
