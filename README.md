# Solo 360 Digital Growth

Professional agency landing page and progressive web application for Solo 360 Digital Growth, built with Next.js, React, TypeScript, and Tailwind CSS. The application showcases growth marketing capabilities, selected case experiences, engagement frameworks, and houses a direct marketing consultation calendar scheduling funnel.

## Overview

This application serves as the primary digital touchpoint for Solo 360 Digital Growth. It provides prospective clients with details on marketing strategy, paid advertising capabilities, fractional CMO support, and project workflows. It includes PWA support enabling users to install the website onto mobile and desktop devices with complete offline page fallbacks.

## Features

### Web App & PWA Capabilities
- **Installability**: Custom non-intrusive installation banner built with browser installer triggers.
- **Service Worker Caching**: Offline navigation shell, cache-first media loading, stale-while-revalidate bundle delivery, and network-first page caching.
- **Offline Mode**: Standalone offline destination route (`/offline`) which automatically checks connectivity status and reloads when network access is recovered.
- **Native Polish**: Prevented Safari rubber-band bouncing, customized mobile theme colors for light/dark viewports, configured safe-area layouts, and integrated customized thin scrollbar styling.

### User Interface & Layout
- **Responsive Layout**: Fluid breakpoints configured for screen scales ranging from 320px devices up to large desktop monitors.
- **Navigation Drawer**: Viewport-independent mobile navigation panel rendered as a portal sibling to bypass layout stacking constraints.
- **Interactive Forms**: Lead generation quote form and dynamic engagement inquiry capture.

### Integrations
- **GoHighLevel (GHL) / LeadConnector**: Dynamic calendar scheduling widget integration.
- **Google Analytics (G4)**: Web traffic tracking scripts.

## Tech Stack

| Category | Technology |
|---|---|
| Frontend Framework | Next.js (App Router, Version 16.2) |
| Rendering Engine | React (Version 19.2) |
| Language | TypeScript (Version 5.x) |
| Styling | Tailwind CSS (Version 4.x) with PostCSS |
| Offline / Service Worker | Serwist CLI Configurator |
| Image Processing | Sharp (for icon compilation) |

## Project Structure

```
Solo-360-Digital-Growth/
├── app/                  # Next.js App Router entry points and layout systems
│   ├── offline/          # Offline fallback routing destination page
│   ├── privacy/          # Privacy Policy legal document page
│   ├── terms/            # Terms & Conditions legal document page
│   ├── globals.css       # Core Tailwind base rules, animations, custom scrollbar utilities
│   ├── layout.tsx        # Base markup, viewport rules, metadata configuration, PWA elements
│   └── page.tsx          # Homepage view layout integrating lazy-loaded sections
├── components/           # Custom reusable presentation blocks
│   ├── About.tsx         # Founder biography block
│   ├── Capabilities.tsx  # Service offerings cards
│   ├── ContactForm.tsx   # Interactive inquiry submit fields
│   ├── Header.tsx        # Desktop navbar & custom responsive drawer overlay portal
│   ├── Metrics.tsx       # Stats tracking numbers and collaborator logo grid
│   ├── PWAManager.tsx    # Service worker controller, update toasts, and offline notifications
│   └── WhySolo360.tsx    # Strategic values feature block
├── public/               # Static media resources
│   ├── icons/            # Multiresolution PWA and browser tab brand favicons
│   ├── logo.png          # Official brand logo asset
│   └── sw.js             # Compiled production service worker file
└── scripts/              # Local build scripts
    └── generate-icons.js # Sharp-based PWA icon generator script
```

## Architecture

- **Rendering Pipeline**: The application utilizes Next.js static site generation (SSG) for all main pages (`/`, `/privacy`, `/terms`, `/offline`).
- **Code Splitting**: Dynamic loading via `next/dynamic` is configured for all below-the-fold landing page modules, reducing initial JavaScript load times.
- **Caching Mechanism**: The custom Service Worker (`public/sw.js`) intercepts HTTP fetch calls to serve static assets cache-first while preserving network connectivity for external calendar APIs.

## Getting Started

### Prerequisites
- Node.js (Version 20 or higher)
- npm (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Solo-360-Digital-Growth
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Compile a production build:
   ```bash
   npm run build
   ```
