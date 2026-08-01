"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();

  const getHref = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <footer className="bg-brand-dark border-t border-zinc-800 pt-10 sm:pt-12 pb-8 text-zinc-500">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8">

        {/* Top Row: Logo + Nav */}
        <div className="flex flex-col items-center gap-8 pb-8 sm:pb-10 border-b border-zinc-800 md:flex-row md:justify-between">

          {/* Logo */}
          <Link href="/" className="shrink-0 hover:opacity-90 transition-opacity duration-200">
            <Image
              src="/logo-white.svg"
              alt="Solo 360 Digital Growth"
              width={240}
              height={240}
              className="h-[67px] w-auto object-contain -my-5 sm:-my-6"
              style={{ height: "67px", width: "auto" }}
            />
          </Link>

          {/* Nav Links — wraps gracefully on all widths */}
          <nav
            aria-label="Footer navigation"
            className="flex items-center flex-wrap justify-center gap-x-5 gap-y-3 sm:gap-x-6 text-xs font-semibold tracking-wide"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className="text-zinc-400 hover:text-brand-gold transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Row: Copyright + Legal */}
        <div className="flex flex-col items-center gap-4 pt-7 sm:pt-8 text-xs font-medium text-zinc-600 sm:flex-row sm:justify-between">

          <p className="text-center sm:text-left">
            © 2026 Solo 360 Digital Growth. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <Link
              href="/privacy"
              className="hover:text-zinc-300 transition-colors duration-200 whitespace-nowrap"
            >
              Privacy Policy
            </Link>
            <span className="text-zinc-800" aria-hidden="true">|</span>
            <Link
              href="/terms"
              className="hover:text-zinc-300 transition-colors duration-200 whitespace-nowrap"
            >
              Terms &amp; Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
