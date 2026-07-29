"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/**
 * PWAManager
 * - Registers service worker
 * - Shows a non-intrusive "Install App" banner
 * - Shows update-available toast when new SW is waiting
 * - Shows offline/online status indicator
 */

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function PWAManager() {
  const [installPrompt, setInstallPrompt]   = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall]       = useState(false);
  const [showUpdate, setShowUpdate]         = useState(false);
  const [isOffline, setIsOffline]           = useState(false);
  const [showOfflineBar, setShowOfflineBar] = useState(false);
  const [waitingWorker, setWaitingWorker]   = useState<ServiceWorker | null>(null);

  useEffect(() => {
    // ── Service Worker Registration ──────────────────────────────────────
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js", { scope: "/" })
        .then((registration) => {
          // Check for waiting worker (update available)
          if (registration.waiting) {
            setWaitingWorker(registration.waiting);
            setShowUpdate(true);
          }

          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing;
            if (!newWorker) return;
            newWorker.addEventListener("statechange", () => {
              if (
                newWorker.state === "installed" &&
                navigator.serviceWorker.controller
              ) {
                setWaitingWorker(newWorker);
                setShowUpdate(true);
              }
            });
          });
        })
        .catch(() => {
          // SW registration failed silently — don't break the page
        });

      // Reload when new SW takes control
      navigator.serviceWorker.addEventListener("controllerchange", () => {
        window.location.reload();
      });
    }

    // ── Install Prompt ────────────────────────────────────────────────────
    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      // Show banner after 30 seconds (non-intrusive)
      setTimeout(() => setShowInstall(true), 30_000);
    };
    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // ── Online / Offline Detection ────────────────────────────────────────
    const handleOffline = () => {
      setIsOffline(true);
      setShowOfflineBar(true);
    };
    const handleOnline = () => {
      setIsOffline(false);
      // Keep bar visible briefly to show "reconnected"
      setTimeout(() => setShowOfflineBar(false), 3000);
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    // Initial check — deferred to avoid setState-in-effect lint error
    setTimeout(() => {
      if (!navigator.onLine) {
        setIsOffline(true);
        setShowOfflineBar(true);
      }
    }, 0);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") setShowInstall(false);
    setInstallPrompt(null);
  };

  const handleUpdate = () => {
    if (waitingWorker) {
      waitingWorker.postMessage({ type: "SKIP_WAITING" });
    }
    setShowUpdate(false);
  };

  return (
    <>
      {/* ── Offline / Online bar ── */}
      {showOfflineBar && (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            padding: "10px 16px",
            background: isOffline ? "#1c1c1f" : "#166534",
            color: isOffline ? "#cfb88b" : "#bbf7d0",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.04em",
            transition: "background 0.4s ease",
            borderBottom: `1px solid ${isOffline ? "#3f3f46" : "#15803d"}`,
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {isOffline ? (
              <><path d="M1 6s3.5-4 11-4 11 4 11 4"/><path d="M5 10s2-2.5 7-2.5S19 10 19 10"/><line x1="3" y1="3" x2="21" y2="21"/></>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            )}
          </svg>
          {isOffline ? "You're offline — showing cached content" : "Back online"}
        </div>
      )}

      {/* ── Install App Banner ── */}
      {showInstall && (
        <div
          role="dialog"
          aria-label="Install Solo 360 app"
          className="pwa-install-banner"
          style={{
            position: "fixed",
            bottom: 24,
            left: 16,
            right: 16,
            zIndex: 99998,
            background: "#ffffff",
            border: "1px solid #eae6db",
            borderRadius: 20,
            padding: "16px 20px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          {/* Icon */}
          <Image
            src="/logo-icon.svg"
            alt="Solo 360"
            width={48}
            height={48}
            style={{ borderRadius: 12, flexShrink: 0 }}
          />
          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "#09090b" }}>
              Install Solo 360
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "#71717a" }}>
              Add to home screen for quick access
            </p>
          </div>
          {/* Actions */}
          <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
            <button
              onClick={() => setShowInstall(false)}
              style={{ background: "none", border: "none", color: "#a1a1aa", fontSize: 12, cursor: "pointer", padding: "4px 8px", fontWeight: 600 }}
              aria-label="Dismiss install banner"
            >
              Later
            </button>
            <button
              onClick={handleInstall}
              style={{ background: "#cfb88b", border: "none", color: "#111", fontSize: 12, fontWeight: 700, borderRadius: 999, padding: "8px 16px", cursor: "pointer" }}
            >
              Install
            </button>
          </div>
          {/* Close */}
          <button
            onClick={() => setShowInstall(false)}
            style={{ position: "absolute", top: 10, right: 12, background: "none", border: "none", color: "#a1a1aa", fontSize: 16, cursor: "pointer", lineHeight: 1 }}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}

      {/* ── Update Available Toast ── */}
      {showUpdate && (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            position: "fixed",
            bottom: 24,
            right: 16,
            zIndex: 99999,
            background: "#121214",
            border: "1px solid #3f3f46",
            borderRadius: 16,
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
            maxWidth: 320,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontSize: 12, fontWeight: 700, color: "#ffffff" }}>
              Update available
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 11, color: "#71717a" }}>
              Refresh to get the latest version
            </p>
          </div>
          <button
            onClick={handleUpdate}
            style={{ background: "#cfb88b", border: "none", color: "#111", fontSize: 11, fontWeight: 700, borderRadius: 999, padding: "7px 14px", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Refresh
          </button>
        </div>
      )}
    </>
  );
}
