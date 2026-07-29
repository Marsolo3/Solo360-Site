export default function Testimonials() {
  const testimonials = [
    {
      quote: "This was a great experience, the work we did together exceeded my expectations. From start to finish the whole process was easy and enjoyable.",
      author: "Mark",
      role: "Founder and Business Coach",
    },
    {
      quote: "Very satisfied. Solo360 is very personable, communicative, and competent. They are a trusted partner who delivers what is promise on time.",
      author: "Lennox",
      role: "Insurance Agency",
    },
    {
      quote: "Solo360 is easy to work with. They are on time and listened to our needs from the start to develop their own strategy for us.",
      author: "Chris",
      role: "Gym Owner",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#eae6db]">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="text-xs font-bold uppercase tracking-widest text-brand-gold-dark mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-5 sm:mb-6">
            Client Feedback
          </h2>
          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-zinc-600">
            Creating clear marketing strategies, stronger foundations, and a more focused path to growth.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl border border-[#eae6db] bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Quote icon/mark decorator */}
              <div className="text-brand-gold/20 text-5xl font-serif absolute top-4 right-6 pointer-events-none select-none">
                “
              </div>

              {/* Quote text */}
              <div className="flex-1">
                <p className="text-zinc-700 text-sm sm:text-base leading-relaxed mb-6 font-medium italic relative z-10">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#f4f1ea] mt-auto">
                <div className="font-bold text-zinc-900 text-sm sm:text-base">
                  {item.author}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5">
                  {item.role}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
