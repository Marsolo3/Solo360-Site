/**
 * Solo 360 Digital Growth — Production Service Worker
 * Strategy: Network-first for navigation, Cache-first for assets, SWR for bundles.
 */

const CACHE_VERSION = "solo360-v2";
const ASSET_CACHE   = `${CACHE_VERSION}-assets`;
const STATIC_CACHE  = `${CACHE_VERSION}-static`;
const MISC_CACHE    = `${CACHE_VERSION}-misc`;
const ALL_CACHES    = [CACHE_VERSION, ASSET_CACHE, STATIC_CACHE, MISC_CACHE];

const PRECACHE_URLS = [
  "/",
  "/offline",
  "/manifest.json",
  "/logo.png",
  "/apple-touch-icon.png",
  "/favicon-32x32.png",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

// ── INSTALL ──────────────────────────────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE ─────────────────────────────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => !ALL_CACHES.includes(k))
            .map((k) => caches.delete(k))
        )
      )
      .then(() => self.clients.claim())
  );
});

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip: non-GET, DevTools, analytics, 3rd-party tracking
  if (
    request.method !== "GET" ||
    url.protocol === "chrome-extension:" ||
    url.hostname.includes("google-analytics") ||
    url.hostname.includes("googletagmanager") ||
    url.hostname.includes("msgsndr") ||
    url.hostname.includes("leadconnectorhq")
  ) {
    return;
  }

  // ── NAVIGATION: Network-first → offline fallback ──
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE_VERSION).then((c) => c.put(request, clone));
          }
          return res;
        })
        .catch(() =>
          caches
            .match(request)
            .then((cached) => cached || caches.match("/offline"))
        )
    );
    return;
  }

  // ── FONTS & IMAGES: Cache-first ──
  if (
    /\.(?:png|jpe?g|svg|gif|webp|avif|ico|woff2?|ttf|otf|eot)$/i.test(url.pathname) ||
    url.hostname.includes("fonts.googleapis") ||
    url.hostname.includes("fonts.gstatic")
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((res) => {
            if (res.ok || res.type === "opaque") {
              const clone = res.clone();
              caches.open(ASSET_CACHE).then((c) => c.put(request, clone));
            }
            return res;
          })
      )
    );
    return;
  }

  // ── JS / CSS BUNDLES: Stale-While-Revalidate ──
  if (/\.(?:js|css)$/i.test(url.pathname) || url.pathname.includes("/_next/")) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) =>
        cache.match(request).then((cached) => {
          const networkFetch = fetch(request).then((res) => {
            if (res.ok) cache.put(request, res.clone());
            return res;
          });
          return cached || networkFetch;
        })
      )
    );
    return;
  }

  // ── EVERYTHING ELSE: Network-first ──
  event.respondWith(
    fetch(request)
      .then((res) => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(MISC_CACHE).then((c) => c.put(request, clone));
        }
        return res;
      })
      .catch(() => caches.match(request))
  );
});

// ── MESSAGE: Allow app to trigger SW update ───────────────────────────────────
self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
