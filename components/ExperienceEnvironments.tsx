import React from "react";

export default function ExperienceEnvironments() {
  const items = [
    {
      title: "National Advertising",
      desc: "Managed complex, full-funnel campaigns and multimillion-dollar budgets for Fortune 500 brands across major media platforms.",
      icon: (
        <svg className="h-8 w-8 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h16.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      title: "Performance Marketing",
      desc: "Built and optimized paid ads strategies focused on conversions, efficiency, and measurable customer acquisition.",
      icon: (
        <svg className="h-8 w-8 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      ),
    },
    {
      title: "Startup Growth",
      desc: "Executed inside growing tech company, supporting business development, go-to-market, and customer acquisition efforts.",
      icon: (
        <svg className="h-8 w-8 text-brand-gold-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 border-b border-[#eae6db]">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4 block">
            Real World Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-5 sm:mb-6">
            Harnessing Learning to Fuel Your Business
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600">
            Different environments. Different challenges. The same goal: growth.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start text-left p-6 sm:p-8 bg-[#FAF8F5] rounded-2xl border border-[#eae6db]/60 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="h-14 w-14 rounded-full bg-brand-gold/10 flex items-center justify-center mb-5 shrink-0">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
