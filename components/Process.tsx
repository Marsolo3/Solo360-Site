export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      desc: "Understand the business, customer, current performance, and primary growth constraint.",
    },
    {
      num: "02",
      title: "Prioritize",
      desc: "Identify the highest-impact opportunities instead of chasing every possible tactic.",
    },
    {
      num: "03",
      title: "Build",
      desc: "Create the strategy, messaging, campaigns, systems, and assets needed to move forward.",
    },
    {
      num: "04",
      title: "Optimize",
      desc: "Measure performance, learn from the market, and improve on what's working.",
    },
  ];

  return (
    <section id="process" className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#eae6db]">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-5 sm:mb-6">
            Simple and Focused Growth
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600">
            We identify what is limiting growth, focus on the highest-impact opportunity, execute the right work, and improve it using real performance data.
          </p>
        </div>

        {/* 4-Column Grid — stacks on mobile, 2-col on tablet, 4-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-0 gap-y-10 sm:gap-y-12 lg:gap-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative flex flex-col justify-between group px-4 sm:px-6 lg:px-8 ${index < steps.length - 1 ? "lg:border-r border-[#eae6db]" : ""
                } ${
                // On sm 2-col, first row gets bottom border
                index < 2 ? "sm:border-b lg:border-b-0 border-[#eae6db] sm:pb-10 lg:pb-0" : ""
                }`}
            >
              {/* Number + Arrow */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-[#eae6db]">
                <span className="text-sm font-bold text-brand-gold">{step.num}</span>
                {index < steps.length - 1 && (
                  <span className="hidden lg:inline text-brand-gold font-bold group-hover:translate-x-2 transition-transform duration-300">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                )}
              </div>

              {/* Title & Desc */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
