import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maintenance Mode — Sadiq Khan",
  description:
    "We're currently performing scheduled maintenance. We'll be back shortly.",
  keywords: ["maintenance", "scheduled maintenance", "down for maintenance"],
  authors: [{ name: "Sadiq Khan" }],
  robots: { index: false, follow: false },
  openGraph: {
    title: "Maintenance Mode — Sadiq Khan",
    description:
      "We're currently performing scheduled maintenance. We'll be back shortly.",
    type: "website",
  },
};

function GearIcon() {
  return (
    <svg
      className="maintenance-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="maintenance-subicon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="maintenance-subicon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function MaintenancePage() {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="maintenance-body" suppressHydrationWarning>
        <div className="maintenance-container">
          <div className="maintenance-grid-bg" aria-hidden="true" />

          <div className="maintenance-content">
            <div className="maintenance-icon-wrapper">
              <div className="maintenance-icon-glow" aria-hidden="true" />
              <GearIcon />
            </div>

            <div className="maintenance-badge">Scheduled Maintenance</div>

            <h1 className="maintenance-title">
              We&apos;ll Be Back
              <span className="maintenance-title-accent"> Soon</span>
            </h1>

            <p className="maintenance-description">
              We&apos;re currently performing scheduled maintenance to improve
              our services. We expect to be back shortly. Thank you for your
              patience.
            </p>

            <div className="maintenance-info-cards">
              <div className="maintenance-info-card">
                <ClockIcon />
                <div>
                  <p className="maintenance-info-label">Estimated Return</p>
                  <p className="maintenance-info-value">Shortly</p>
                </div>
              </div>

              <div className="maintenance-info-card">
                <MailIcon />
                <div>
                  <p className="maintenance-info-label">Need Help?</p>
                  <a
                    href="mailto:hello@sadiqkhan.dev"
                    className="maintenance-info-link"
                  >
                    hello@sadiqkhan.dev
                  </a>
                </div>
              </div>
            </div>

            <div className="maintenance-status">
              <span className="maintenance-status-dot" aria-hidden="true" />
              <span>Status: Under Maintenance</span>
            </div>
          </div>

          <footer className="maintenance-footer">
            <p>&copy; {new Date().getFullYear()} Sadiq Khan. All rights reserved.</p>
          </footer>
        </div>

        <style>{`
          :root {
            --maintenance-bg: #09090b;
            --maintenance-fg: #fafafa;
            --maintenance-accent: #34d399;
            --maintenance-accent-dim: #10b981;
            --maintenance-border: #27272a;
            --maintenance-muted: #18181b;
            --maintenance-muted-fg: #a1a1aa;
          }

          @media (prefers-color-scheme: light) {
            :root {
              --maintenance-bg: #fafafa;
              --maintenance-fg: #09090b;
              --maintenance-accent: #059669;
              --maintenance-accent-dim: #047857;
              --maintenance-border: #e4e4e7;
              --maintenance-muted: #f4f4f5;
              --maintenance-muted-fg: #71717a;
            }
          }

          .maintenance-body {
            margin: 0;
            padding: 0;
            background: var(--maintenance-bg);
            color: var(--maintenance-fg);
            font-family: var(--font-geist-sans), system-ui, -apple-system, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            min-height: 100vh;
            overflow-x: hidden;
          }

          .maintenance-container {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
          }

          .maintenance-grid-bg {
            position: fixed;
            inset: 0;
            background-image:
              linear-gradient(to right, color-mix(in oklch, var(--maintenance-fg) 4%, transparent) 1px, transparent 1px),
              linear-gradient(to bottom, color-mix(in oklch, var(--maintenance-fg) 4%, transparent) 1px, transparent 1px);
            background-size: 48px 48px;
            mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%);
            -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 0%, black 30%, transparent 80%);
            pointer-events: none;
          }

          .maintenance-content {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            max-width: 560px;
            animation: maintenance-fade-in 0.8s ease-out both;
          }

          .maintenance-icon-wrapper {
            position: relative;
            margin-bottom: 2rem;
          }

          .maintenance-icon {
            width: 56px;
            height: 56px;
            color: var(--maintenance-accent);
            animation: maintenance-spin 8s linear infinite;
          }

          .maintenance-icon-glow {
            position: absolute;
            inset: -16px;
            background: radial-gradient(circle, color-mix(in oklch, var(--maintenance-accent) 15%, transparent) 0%, transparent 70%);
            border-radius: 50%;
            animation: maintenance-pulse-glow 3s ease-in-out infinite;
          }

          .maintenance-badge {
            display: inline-flex;
            align-items: center;
            padding: 0.375rem 1rem;
            margin-bottom: 1.5rem;
            font-size: 0.75rem;
            font-weight: 500;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            color: var(--maintenance-accent);
            background: color-mix(in oklch, var(--maintenance-accent) 10%, transparent);
            border: 1px solid color-mix(in oklch, var(--maintenance-accent) 20%, transparent);
            border-radius: 9999px;
            animation: maintenance-fade-in 0.8s ease-out 0.1s both;
          }

          .maintenance-title {
            font-size: clamp(2.5rem, 6vw, 4rem);
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin: 0 0 1.5rem;
            color: var(--maintenance-fg);
            animation: maintenance-slide-up 0.8s ease-out 0.2s both;
          }

          .maintenance-title-accent {
            background: linear-gradient(135deg, var(--maintenance-accent) 0%, var(--maintenance-accent-dim) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
          }

          .maintenance-description {
            font-size: 1.125rem;
            line-height: 1.7;
            color: var(--maintenance-muted-fg);
            margin: 0 0 2.5rem;
            max-width: 440px;
            animation: maintenance-slide-up 0.8s ease-out 0.3s both;
          }

          .maintenance-info-cards {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            animation: maintenance-slide-up 0.8s ease-out 0.4s both;
          }

          .maintenance-info-card {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1rem 1.25rem;
            background: var(--maintenance-muted);
            border: 1px solid var(--maintenance-border);
            border-radius: 12px;
            text-align: left;
          }

          .maintenance-subicon {
            width: 20px;
            height: 20px;
            color: var(--maintenance-accent);
            flex-shrink: 0;
          }

          .maintenance-info-label {
            font-size: 0.75rem;
            color: var(--maintenance-muted-fg);
            margin: 0 0 0.125rem;
          }

          .maintenance-info-value {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--maintenance-fg);
            margin: 0;
          }

          .maintenance-info-link {
            font-size: 0.875rem;
            font-weight: 600;
            color: var(--maintenance-accent);
            text-decoration: none;
            transition: opacity 0.2s ease;
          }

          .maintenance-info-link:hover {
            opacity: 0.8;
          }

          .maintenance-status {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            font-size: 0.8125rem;
            color: var(--maintenance-muted-fg);
            background: var(--maintenance-muted);
            border: 1px solid var(--maintenance-border);
            border-radius: 8px;
            animation: maintenance-slide-up 0.8s ease-out 0.5s both;
          }

          .maintenance-status-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #f59e0b;
            animation: maintenance-blink 2s ease-in-out infinite;
          }

          .maintenance-footer {
            position: absolute;
            bottom: 2rem;
            font-size: 0.8125rem;
            color: var(--maintenance-muted-fg);
            animation: maintenance-fade-in 0.8s ease-out 0.6s both;
          }

          @keyframes maintenance-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes maintenance-slide-up {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes maintenance-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @keyframes maintenance-pulse-glow {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }

          @keyframes maintenance-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }

          @media (max-width: 640px) {
            .maintenance-info-cards {
              flex-direction: column;
              width: 100%;
            }

            .maintenance-info-card {
              width: 100%;
              box-sizing: border-box;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .maintenance-icon,
            .maintenance-icon-glow,
            .maintenance-status-dot {
              animation: none;
            }

            .maintenance-content,
            .maintenance-badge,
            .maintenance-title,
            .maintenance-description,
            .maintenance-info-cards,
            .maintenance-status,
            .maintenance-footer {
              animation: none;
              opacity: 1;
              transform: none;
            }
          }
        `}</style>
      </body>
    </html>
  );
}
