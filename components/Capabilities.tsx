export default function Capabilities() {
  const categories = [
    {
      title: "Strategy & Positioning",
      items: [
        "Market and customer research",
        "Brand positioning and messaging",
        "Competitive analysis",
        "Marketing priorities",
      ],
    },
    {
      title: "Growth Marketing",
      items: [
        "Website and conversion strategy",
        "Content & campaign planning",
        "CRM & automation",
        "Lead generation",
      ],
    },
    {
      title: "Paid Advertising",
      items: [
        "Paid search and social",
        "Media planning and budgeting",
        "Audience targeting",
        "Ad creative",
      ],
    },
    {
      title: "Fractional Support",
      items: [
        "Ongoing strategic guidance",
        "Team management",
        "Execution oversight",
        "Performance reporting",
      ],
    },
  ];

  return (
    <section id="services" className="bg-brand-dark py-16 sm:py-20 lg:py-28 text-white">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4">
            Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 sm:mb-6">
            Built Around Your Goals
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-400">
            Clarify what&apos;s holding the business back, build the right plan, and execute the work needed to drive results.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="rounded-2xl border border-zinc-800 bg-brand-card-dark p-6 sm:p-8 lg:p-10 shadow-lg hover:border-brand-gold/50 transition-all duration-300 group"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-brand-gold mb-5 sm:mb-6 border-b border-zinc-800 pb-4 group-hover:text-brand-gold-dark transition-colors duration-300">
                {cat.title}
              </h3>

              <ul className="space-y-3 sm:space-y-4">
                {cat.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3">
                    <svg
                      className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold mt-0.5 shrink-0"
                      fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-zinc-100 text-sm sm:text-base font-medium leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
