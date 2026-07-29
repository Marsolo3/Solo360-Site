export default function WhySolo360() {
  const blocks = [
    {
      num: "01",
      title: "Strategy before tactics",
      desc: "Identify what is actually limiting growth before recommending another channel, campaign, or tool.",
    },
    {
      num: "02",
      title: "Connected, marketing + advertising",
      desc: "Positioning, messaging, media, and execution work from one focused plan instead of operating separately.",
    },
    {
      num: "03",
      title: "Direct strategic partnership",
      desc: "Your work directly with an experienced professional to who finds the right people to get the work done.",
    },
    {
      num: "04",
      title: "Data driven decisions",
      desc: "Every campaign feeds back into your strategy, what worked, what didn't, and what's next to drive revenue.",
    },
  ];

  return (
    <section id="why-solo360" className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4">
            Why Solo360
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-5 sm:mb-6">
            From Strategy to Revenue
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600">
            Solo360 combines marketing strategy, advertising experience, and focused execution to help businesses make smarter decisions, build momentum, and create long-term growth.
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#eae6db] rounded-3xl overflow-hidden bg-white shadow-sm divide-y divide-[#eae6db] sm:divide-x sm:divide-y-0">
          {blocks.map((block, idx) => (
            <div
              key={idx}
              className={`p-7 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[200px] sm:min-h-[220px] transition-all duration-500 ease-out hover:bg-zinc-50/50 hover:scale-[1.01] hover:shadow-lg cursor-pointer group animate-fade-in-up ${idx === 1 ? "animation-delay-200" : idx === 2 ? "animation-delay-300" : idx === 3 ? "animation-delay-400" : ""
                } ${
                // top-row items get bottom border on sm grid
                idx < 2 ? "sm:border-b sm:border-[#eae6db]" : ""
                }`}
            >
              <div className="text-xs font-bold text-brand-gold mb-5 sm:mb-6 transition-transform duration-500 group-hover:-translate-y-1">
                {block.num}
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 mb-2 sm:mb-3 group-hover:text-brand-gold-dark transition-colors duration-300">
                  {block.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{block.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
