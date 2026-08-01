import Link from "next/link";

export default function Engagements() {
  const cards = [
    {
      title: "Growth Strategy",
      desc: "We evaluate your positioning, customer journey, advertising, marketing channels, and current systems to determine what should happen next.",
      bullets: [
        "Business and market review",
        "Positioning analysis",
        "Customer acquisition analysis",
        "Marketing & advertising strategy",
        "90 Day roadmap",
        "Execution recommendations",
      ],
      linkText: "Strategize",
      highlight: false,
    },
    {
      title: "Hands on Execution",
      desc: "Once the strategy is clear, Solo360 can lead the implementation and bring in the right specialists based on the opportunity.",
      bullets: [
        "Paid advertising and lead generation",
        "CRM, automation, and follow-up systems",
        "SEO and search visibility",
        "Content and social campaigns",
        "Landing pages and conversion improvements",
        "Brand creative and video production",
      ],
      linkText: "Execute",
      tag: "POPULAR OPTION",
      highlight: true,
    },
    {
      title: "Ongoing Management",
      desc: "Solo360 works alongside your team to review performance, prioritize new opportunities, and coordinate the execution needed to maintain momentum.",
      bullets: [
        "Monthly growth planning",
        "Campaign and channel guidance",
        "Performance audits",
        "Budget and priority decisions",
        "Team and vendor coordination",
        "Execution oversight",
      ],
      linkText: "Manage",
      highlight: false,
    },
  ];

  return (
    <section className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#eae6db]">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4">
            Engagements
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-5 sm:mb-6">
            Plan. Execute. Grow.
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600">
            Every engagement begins by identifying what is limiting growth and where the strongest opportunities exist. From there, Solo360 can build the strategy, lead the execution, or support your team over time.
          </p>
        </div>

        {/* 3-Column Grid — stacks on mobile, 2-col on md, 3-col on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 lg:p-10 bg-white transition-all duration-300 shadow-sm hover:shadow-lg ${card.highlight
                ? "border-brand-gold ring-1 ring-brand-gold/40 md:scale-[1.01]"
                : "border-[#eae6db] hover:border-brand-gold/40"
                }`}
            >
              {/* Highlight Tag */}
              {card.tag && (
                <span className="absolute -top-3 left-8 sm:left-10 rounded-full bg-brand-gold px-3.5 py-1 text-[9px] font-extrabold tracking-wider text-zinc-950 uppercase whitespace-nowrap">
                  {card.tag}
                </span>
              )}

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3 sm:mb-4">{card.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 font-medium mb-6 sm:mb-8">{card.desc}</p>

                <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                  {card.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold mt-0.5 shrink-0"
                        fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-zinc-700 text-sm font-semibold leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Link */}
              <div className="border-t border-[#eae6db] pt-5 sm:pt-6 mt-auto">
                <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mb-2">
                  Based on Industry
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center text-sm font-bold text-brand-gold-dark hover:text-zinc-950 transition-colors group min-h-[44px]"
                >
                  {card.linkText}
                  <span className="ml-1.5 flex items-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
