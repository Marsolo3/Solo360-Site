import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import PWAManager from "@/components/PWAManager";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",      // non-blocking font load
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ── Viewport / PWA theme configuration ─────────────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)",  color: "#121214" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,          // allow pinch-zoom for accessibility
  userScalable: true,
  viewportFit: "cover",     // handles iPhone notch / Dynamic Island
};

// ── SEO + PWA metadata ──────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://solo-360-digital-growth.vercel.app"),
  title: {
    default: "Solo 360 Digital Growth — Growth Marketing & Advertising",
    template: "%s | Solo 360 Digital Growth",
  },
  description:
    "Growth marketing strategy, advertising campaigns, and digital growth consulting. Build a clear plan and launch campaigns that move your business forward.",
  keywords: [
    "growth marketing",
    "digital advertising",
    "marketing strategy",
    "marketing consultant",
    "paid search",
    "Google Ads",
    "fractional CMO",
    "business growth",
    "Solo 360",
  ],
  authors: [{ name: "Matt Rangel", url: "https://solo360.co" }],
  creator: "Solo 360 Digital Growth",
  publisher: "Solo 360 Digital Growth",
  category: "Business",
  applicationName: "Solo 360",

  // ── Manifest ──
  manifest: "/manifest.json",

  // ── Favicons & Apple Icons ──
  icons: {
    icon: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo-icon.svg",
  },

  // ── OpenGraph ──
  openGraph: {
    type: "website",
    url: "https://solo360.co",
    siteName: "Solo 360 Digital Growth",
    title: "Solo 360 Digital Growth — Growth Marketing & Advertising",
    description:
      "Build a clear marketing strategy and launch advertising campaigns that move your business forward.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Solo 360 Digital Growth",
      },
    ],
    locale: "en_US",
  },

  // ── Twitter ──
  twitter: {
    card: "summary_large_image",
    title: "Solo 360 Digital Growth — Growth Marketing & Advertising",
    description:
      "Build a clear marketing strategy and launch advertising campaigns that move your business forward.",
    images: ["/og-image.png"],
  },

  // ── PWA / iOS Safari specific ──
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Solo 360",
    startupImage: [
      { url: "/icons/icon-512x512.png" },
    ],
  },

  // ── Robots ──
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* iOS PWA — prevents bounce/rubber-band scroll on standalone */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Solo 360" />
        <meta name="format-detection" content="telephone=no" />
        {/* MS Tile */}
        <meta name="msapplication-TileColor" content="#FAF8F5" />
        <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
        <meta name="msapplication-config" content="none" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://solo360.co/#organization",
                  "name": "Solo 360 Digital Growth",
                  "url": "https://solo360.co",
                  "logo": {
                    "@type": "ImageObject",
                    "@id": "https://solo360.co/#logo",
                    "url": "https://solo360.co/logo.png",
                    "caption": "Solo 360 Digital Growth Logo"
                  },
                  "image": {
                    "@id": "https://solo360.co/#logo"
                  },
                  "sameAs": [
                    "https://www.linkedin.com/in/mattrangel360"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://solo360.co/#website",
                  "url": "https://solo360.co",
                  "name": "Solo 360 Digital Growth",
                  "publisher": {
                    "@id": "https://solo360.co/#organization"
                  },
                  "inLanguage": "en-US"
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://solo360.co/#service",
                  "name": "Solo 360 Digital Growth",
                  "image": "https://solo360.co/logo.png",
                  "url": "https://solo360.co",
                  "telephone": "",
                  "priceRange": "$$$",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Las Vegas",
                    "addressRegion": "NV",
                    "addressCountry": "US"
                  },
                  "founder": {
                    "@type": "Person",
                    "name": "Matt Rangel",
                    "jobTitle": "Growth Strategist & Marketing Consultant",
                    "sameAs": "https://www.linkedin.com/in/mattrangel360"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col overscroll-none" suppressHydrationWarning>
        <PWAManager />
        <ScrollToTop />
        {children}

        {/* Analytics — after-interactive, non-blocking */}
        <Script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_254c5a1af2d8461a91cfa6879f56193c"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BBEHD25MWP"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BBEHD25MWP');
          `}
        </Script>
      </body>
    </html>
  );
}
