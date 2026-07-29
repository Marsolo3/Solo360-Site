export default function SelectedExperience() {
  const experiences = [
    {
      tag: "ENTERPRISE",
      tagColor: "text-blue-600 bg-blue-50/50 border-blue-100",
      title: "Enterprise Media Strategy",
      desc: "Supported national media strategy and activation across video, streaming, digital media, paid search, and major media platforms.",
      stat: "National Advertising",
      statColor: "text-blue-700",
    },
    {
      tag: "PERFORMANCE",
      tagColor: "text-emerald-600 bg-emerald-50/50 border-emerald-100",
      title: "Performance Marketing",
      desc: "Managed approximately $70,000 per month in Google Ads spend and increase conversions by 124% while improving efficiency.",
      stat: "+124% conversions",
      statColor: "text-emerald-700",
    },
    {
      tag: "GROWTH SYSTEMS",
      tagColor: "text-amber-600 bg-amber-50/50 border-amber-100",
      title: "Business Growth Systems",
      desc: "Built websites, lead-generation campaigns, tracking systems, local SEO strategies, and CRM workflows for growing businesses.",
      stat: "$12-$15 CPL",
      statColor: "text-amber-700",
    },
  ];

  return (
    <section id="experience" className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#eae6db]">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4">
            Selected Experience
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-5 sm:mb-6">
            Strategy grounded in real execution
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600">
            Leading Solo360 with experience in national advertising, startup performance marketing, and hands-on digital growth for local SMB's.
          </p>
        </div>

        {/* Experience Rows */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row lg:items-center justify-between rounded-2xl border border-[#eae6db] bg-white p-5 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 gap-4 sm:gap-6"
            >
              {/* Badge */}
              <div className="lg:w-40 shrink-0">
                <span
                  className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-bold tracking-wider border uppercase ${exp.tagColor}`}
                >
                  {exp.tag}
                </span>
              </div>

              {/* Title & Desc */}
              <div className="flex-1 min-w-0 lg:px-6">
                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-1.5 sm:mb-2">{exp.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500 font-medium">{exp.desc}</p>
              </div>

              {/* Stat */}
              <div className="lg:w-56 shrink-0 lg:text-right">
                <span className={`text-sm sm:text-base font-bold tracking-tight ${exp.statColor}`}>
                  {exp.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
