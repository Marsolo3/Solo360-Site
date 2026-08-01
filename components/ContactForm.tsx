"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    growGoal: "",
    supportType: "Select one",
  });
  const [submitted, setSubmitted] = useState(false);
  const [supportError, setSupportError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.supportType === "Select one") {
      setSupportError(true);
      return;
    }
    setSupportError(false);
    setSubmitted(true);
    // Form action can be handled later
  };

  return (
    <section id="contact" className="bg-brand-dark py-20 sm:py-28 text-white border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Left Column: Info & Calendar */}
          <div className="lg:col-span-5 flex flex-col justify-start gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 block">
                Let&apos;s Talk
              </span>
              <h2 className="text-4xl font-extrabold tracking-tight text-white leading-tight mb-6">
                Need a clearer path to growth?
              </h2>
              <p className="text-zinc-400 text-base leading-7 mb-8">
                Let&apos;s identify where your biggest opportunities are and determine the smartest next move.
              </p>

              {/* Direct links */}
              <div className="space-y-4">
                <a
                  href="mailto:mattrangel.nv@gmail.com"
                  className="flex items-center justify-between border-b border-zinc-800 pb-3 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="font-semibold text-sm">Email Matt</span>
                  <span>↗</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mattrangel360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-b border-zinc-800 pb-3 text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="font-semibold text-sm">LinkedIn</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Calendar box */}
            <a
              href="https://api.leadconnectorhq.com/widget/booking/0DXdP37sf8SHQSTUyn0e"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-brand-card-dark border border-zinc-850 p-6 hover:border-brand-gold transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-extrabold tracking-widest text-brand-gold uppercase block mb-2">
                    Calendar Integration
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-brand-gold transition-colors duration-300">
                    Book a Strategy Call Directly
                  </h4>
                  <p className="text-xs text-zinc-400 leading-5">
                    Click to choose a date and time that works best for you.
                  </p>
                </div>
                <div className="text-brand-gold text-xl transition-transform group-hover:translate-x-1 duration-300 shrink-0 ml-4">
                  ↗
                </div>
              </div>
            </a>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="rounded-3xl bg-brand-card-dark border border-zinc-850 p-8 sm:p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
                <div className="h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Thank you!</h3>
                <p className="text-zinc-400 text-sm leading-6 max-w-sm">
                  Your message has been received. Matt will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl bg-brand-card-dark border border-zinc-850 p-8 sm:p-10 shadow-lg">

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      className="w-full rounded-xl bg-brand-dark border border-zinc-800 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl bg-brand-dark border border-zinc-800 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full rounded-xl bg-brand-dark border border-zinc-800 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      placeholder="https://..."
                      className="w-full rounded-xl bg-brand-dark border border-zinc-800 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-brand-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <label htmlFor="growGoal" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    How can we help?
                  </label>
                  <textarea
                    id="growGoal"
                    rows={4}
                    required
                    value={formData.growGoal}
                    onChange={(e) => setFormData({ ...formData, growGoal: e.target.value })}
                    placeholder="Tell me about the product, company, or growth challenge."
                    className="w-full rounded-xl bg-brand-dark border border-zinc-800 px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:border-brand-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Select Option */}
                <div className="relative">
                  <label htmlFor="supportType" className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                    What kind of support are you looking for?
                  </label>
                  <input type="hidden" name="supportType" value={formData.supportType} />

                  {/* Custom Dropdown Trigger */}
                  <div className="relative">
                    <button
                      type="button"
                      id="supportType"
                      onClick={() => {
                        const el = document.getElementById("support-options");
                        if (el) el.classList.toggle("hidden");
                      }}
                      className="w-full text-left rounded-xl bg-brand-dark border border-zinc-800 px-4 py-3.5 text-sm text-zinc-300 focus:border-brand-gold focus:outline-none transition-all flex items-center justify-between cursor-pointer"
                      style={supportError ? { borderColor: "#ef4444" } : undefined}
                    >
                      <span>{formData.supportType}</span>
                      <svg
                        className="h-4 w-4 text-brand-gold pointer-events-none transition-transform duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>

                    {/* Custom Dropdown Options List */}
                    <div
                      id="support-options"
                      className="hidden absolute left-0 right-0 mt-2 rounded-xl bg-brand-card-dark border border-zinc-800 shadow-2xl z-50 overflow-hidden"
                    >
                      {["Select one", "Growth Strategy", "Hands on Execution", "Ongoing Growth Partner"].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, supportType: option });
                            if (option !== "Select one") {
                              setSupportError(false);
                            }
                            const el = document.getElementById("support-options");
                            if (el) el.classList.add("hidden");
                          }}
                          className={`w-full text-left px-4 py-3 text-sm transition-all hover:bg-zinc-800 text-zinc-200 hover:text-white cursor-pointer ${formData.supportType === option ? "bg-zinc-800 text-brand-gold font-semibold" : ""
                            }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                  {supportError && (
                    <p className="text-red-500 text-xs mt-2 font-medium">
                      Please select a support option.
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center rounded-xl bg-brand-gold px-5 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-brand-gold-dark shadow-md focus:outline-none hover:scale-[1.01]"
                >
                  Book a Strategy Call <span className="ml-2">↗</span>
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
