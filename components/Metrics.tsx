import Image from "next/image";

export default function Metrics() {
  const stats = [
    {
      value: "6+ years",
      label: "Across High Value Media, SMB and Startup Marketing & Advertising",
    },
    {
      value: "124%",
      label: "Increase in Paid Search Conversions",
    },
    {
      value: "$20M+",
      label: "Managed in National Advertising",
    },
    {
      value: "$250K+",
      label: "SEO and Email Revenue Generated",
    },
  ];

  const clientLogos = [
    // src, alt, widthClass, scale — scale compensates for transparent padding in the image file
    { src: "/logo-gosite.png", alt: "Gosite Logo", widthClass: "w-52", scale: "scale-[2.4]" },
    { src: "/logo-statefarm.png", alt: "State Farm Logo", widthClass: "w-52", scale: "scale-[1.3]" },
    { src: "/logo-logicalposition.png", alt: "Logical Position Logo", widthClass: "w-52", scale: "scale-100" },
    { src: "/logo-hiroad.png", alt: "HiRoad Logo", widthClass: "w-52", scale: "scale-[1.3]" },
  ];

  return (
    <section className="border-y border-[#eae6db] bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 lg:divide-x lg:divide-[#eae6db] lg:-mx-8 pb-12 sm:pb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-start px-0 lg:px-8 ${index > 0 && index < 2 ? "pt-10 sm:pt-0" : index >= 2 ? "pt-10 sm:pt-0" : ""
                } ${
                // Bottom border between rows on sm 2-col
                index < 2 ? "sm:border-b lg:border-b-0 sm:pb-10 lg:pb-0 border-[#eae6db]" : ""
                }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 mb-2 sm:mb-3">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm leading-6 text-zinc-500 max-w-xs font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos Subsection */}
        <div className="border-t border-[#eae6db]/60 pt-16">
          <div className="text-center mb-10">
            <span className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">
              Trusted Experience
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 sm:gap-x-14 sm:gap-y-10 md:gap-x-20 lg:gap-x-24">
            {clientLogos.map((logo, idx) => (
              <div key={idx} className={`relative h-16 ${logo.widthClass} opacity-75 hover:opacity-100 transition-all duration-300 hover:scale-105 overflow-hidden`}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="(max-width: 768px) 160px, 220px"
                  className={`object-contain transition-transform duration-300 ${logo.scale}`}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
