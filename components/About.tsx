import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-20 lg:py-28 border-b border-[#eae6db]">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 lg:items-center">

          {/* Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden border-4 border-white bg-brand-dark shadow-md transition-all duration-500 hover:shadow-xl hover:scale-[1.01]">
              <Image
                src="/matt-headshot-v2.png"
                alt="Matt Rangel — Growth Strategist"
                fill
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 380px"
                className="object-cover object-center"
              />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between rounded-xl bg-black/60 backdrop-blur-md px-3 sm:px-4 py-2.5 sm:py-3 border border-white/10">
                <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-brand-gold uppercase">
                  Matt Rangel, Founder
                </span>
                <a
                  href="https://www.linkedin.com/in/mattrangel360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold hover:text-white transition-colors duration-200 ml-3 flex items-center"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="h-4.5 w-4.5" fill="currentColor" viewBox="0 0 24 24" style={{ width: '18px', height: '18px' }}>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center lg:py-4">
            <div className="text-xs lg:text-sm font-bold uppercase tracking-widest text-brand-gold-dark mb-4 lg:mb-5">
              About Solo360 Digital Growth
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-6 lg:mb-8">
              Grounded in Real Execution
            </h2>

            <div className="space-y-5 sm:space-y-6 lg:space-y-8 text-zinc-600 leading-7 sm:leading-8 lg:leading-9 text-sm sm:text-base lg:text-lg font-medium">
              <p>
                Before founding Solo360, I worked across national advertising, performance marketing, and fast-growing startups. That experience taught me how to connect high-level strategy with practical execution, helping businesses create clearer plans, stronger marketing foundations, and more focused growth.
              </p>
            </div>

            <Link
              href="https://api.leadconnectorhq.com/widget/booking/0DXdP37sf8SHQSTUyn0e"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 sm:mt-10 lg:mt-12 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 sm:px-8 py-3.5 sm:py-4 text-sm lg:text-base font-bold text-zinc-950 shadow-sm transition-all hover:bg-brand-gold-dark hover:scale-[1.02] group min-h-[48px]"
            >
              Book Discovery Call
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
