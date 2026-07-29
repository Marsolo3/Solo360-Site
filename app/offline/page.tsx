import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Offline | Solo 360 Digital Growth",
  description: "It looks like you're offline. Check your connection and try again.",
  robots: { index: false, follow: false },
};

export default function OfflinePage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: #121214;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            color: #ffffff;
          }
          .icon-ring {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: rgba(207, 184, 139, 0.12);
            border: 1.5px solid rgba(207, 184, 139, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 28px;
          }
          .tag {
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #cfb88b;
            margin-bottom: 14px;
          }
          h1 {
            font-size: clamp(1.75rem, 5vw, 2.5rem);
            font-weight: 800;
            text-align: center;
            line-height: 1.15;
            margin-bottom: 14px;
            letter-spacing: -0.02em;
          }
          p.sub {
            color: #71717a;
            font-size: clamp(0.875rem, 2.5vw, 1rem);
            text-align: center;
            line-height: 1.6;
            max-width: 360px;
            margin-bottom: 36px;
          }
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            background: #cfb88b;
            color: #111;
            border: none;
            border-radius: 999px;
            padding: 14px 32px;
            font-size: 14px;
            font-weight: 700;
            cursor: pointer;
            width: 100%;
            max-width: 280px;
            min-height: 52px;
            transition: background 0.2s ease;
            margin-bottom: 24px;
          }
          .btn:hover { background: #b69c6b; }
          .contact {
            font-size: 12px;
            color: #52525b;
            text-align: center;
          }
          .contact a {
            color: #cfb88b;
            text-decoration: none;
            font-weight: 600;
          }
        `}</style>
      </head>
      <body>
        <div className="icon-ring">
          <svg
            width="36" height="36" viewBox="0 0 24 24"
            fill="none" stroke="#cfb88b"
            strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
          >
            <path d="M1 6s3.5-4 11-4 11 4 11 4" />
            <path d="M5 10s2-2.5 7-2.5S19 10 19 10" />
            <path d="M9 14s1-.5 3-.5 3 .5 3 .5" />
            <line x1="3" y1="3" x2="21" y2="21" />
          </svg>
        </div>

        <p className="tag">No Connection</p>

        <h1>You&apos;re offline</h1>

        <p className="sub">
          It looks like you lost your internet connection.
          Check your Wi-Fi or mobile data and try again.
        </p>

        <button className="btn" id="retry-btn">
          Try Again ↻
        </button>

        <p className="contact">
          Need to reach us?{" "}
          <a href="mailto:info@solo360.co">info@solo360.co</a>
        </p>

        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.getElementById('retry-btn').addEventListener('click', function() {
                window.location.reload();
              });
              window.addEventListener('online', function() {
                window.location.href = '/';
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
