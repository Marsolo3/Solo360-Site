"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Active section tracking on scroll
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["home", "services", "experience", "about", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id === "home" ? "home" : id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px" } // trigger active state when section takes middle area of screen
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  // Dynamic link resolver: if on a subpage like /privacy or /terms, prepend / to anchor hashes
  const getHref = (href: string) => {
    return pathname === "/" ? href : `/${href}`;
  };

  return (
    <>
      {/* ─── Top Bar ─── */}
      <header className="sticky top-0 z-40 w-full border-b border-[#eae6db] bg-[#FAF8F5]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-24 items-center justify-between px-6 lg:px-8">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3" onClick={close}>
            <Image
              src="/logo-dark.svg"
              alt="Solo 360 Digital Growth Logo"
              width={320}
              height={80}
              className="h-24 w-auto object-contain -my-7"
              style={{ height: "96px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const targetId = link.href.replace("#", "");
              const isActive = activeSection === targetId;
              return (
                <Link
                  key={link.href}
                  href={getHref(link.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive
                    ? "text-brand-gold-dark border-b-2 border-brand-gold pb-1"
                    : "text-zinc-600 hover:text-zinc-950"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="https://api.leadconnectorhq.com/widget/booking/0DXdP37sf8SHQSTUyn0e"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-zinc-800"
            >
              Book Strategy Call
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#eae6db] bg-white md:hidden text-zinc-900 hover:bg-zinc-50 transition-colors"
            aria-label="Open navigation menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </header>

      {/* ─── Mobile Drawer — rendered OUTSIDE <header> to escape backdrop-filter stacking context ─── */}

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(3px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 9999,
          width: "300px",
          maxWidth: "85vw",
          background: "#ffffff",
          boxShadow: "-4px 0 40px rgba(0,0,0,0.15)",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Drawer Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid #eae6db" }}>
          <Image
            src="/logo-dark.svg"
            alt="Solo 360 Digital Growth"
            width={320}
            height={80}
            className="h-24 w-auto object-contain -my-7"
            style={{ height: "96px", width: "auto" }}
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: "1px solid #eae6db", background: "#fff", cursor: "pointer", color: "#52525b" }}
          >
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <nav style={{ flex: 1, overflowY: "auto", padding: "28px 16px" }}>
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: "#a1a1aa", textTransform: "uppercase", marginBottom: 12, paddingLeft: 8 }}>
            Navigation
          </p>
          {navLinks.map((link) => {
            const targetId = link.href.replace("#", "");
            const isActive = activeSection === targetId;
            return (
              <Link
                key={link.href}
                href={getHref(link.href)}
                onClick={(e) => {
                  close();
                  if (link.href.startsWith("#") && pathname === "/") {
                    e.preventDefault();
                    document.body.style.overflow = "";
                    setTimeout(() => {
                      const element = document.getElementById(targetId);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "13px 12px",
                  borderRadius: 12,
                  marginBottom: 4,
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 600,
                  color: isActive ? "#b69c6b" : "#3f3f46",
                  backgroundColor: isActive ? "#FAF8F5" : "transparent",
                  transition: "all 0.15s ease",
                }}
                className="hover:bg-[#FAF8F5] hover:text-[#b69c6b]"
              >
                <span>{link.label}</span>
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke={isActive ? "#b69c6b" : "#d4d4d8"}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            );
          })}
        </nav>

        {/* Drawer Footer CTA */}
        <div style={{ padding: "20px 24px", borderTop: "1px solid #eae6db", background: "#FAF8F5" }}>
          <p style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: "#a1a1aa", textTransform: "uppercase", marginBottom: 12 }}>
            Ready to grow?
          </p>
          <Link
            href="https://api.leadconnectorhq.com/widget/booking/0DXdP37sf8SHQSTUyn0e"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", borderRadius: 999, background: "#cfb88b", padding: "14px 0", fontSize: 13, fontWeight: 700, color: "#111", textDecoration: "none", transition: "all 0.2s ease" }}
            className="hover:bg-[#b69c6b]"
          >
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </>
  );
}
