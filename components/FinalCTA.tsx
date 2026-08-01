import Link from "next/link";

export default function FinalCTA() {
  return (
    <section id="contact" className="bg-brand-dark py-14 sm:py-20 lg:py-24 text-white">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-card-dark border border-zinc-800 px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16 shadow-2xl">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            {/* Text */}
            <div className="max-w-xl">
              <span className="text-[10px] font-extrabold tracking-widest text-brand-gold uppercase">
                Get Clarity
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mt-3 mb-3 sm:mb-4">
                Growth Starts with Strategy
              </h2>
              <p className="text-sm font-medium text-zinc-400">
                Get results that drive revenue.
              </p>
            </div>

            {/* CTA Button — full width on mobile */}
            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="https://api.leadconnectorhq.com/widget/booking/0DXdP37sf8SHQSTUyn0e"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full lg:w-auto items-center justify-center rounded-full bg-brand-gold px-8 py-4 text-sm font-bold text-zinc-950 transition-all hover:bg-brand-gold-dark hover:scale-[1.02] min-h-[52px]"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
