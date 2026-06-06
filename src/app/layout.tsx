import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sadiq Khan — Full-Stack AI Engineer",
  description:
    "Senior full-stack engineer shipping AI-native products, mobile apps, and scalable web platforms. LLM integration, RAG systems, and end-to-end product engineering.",
  keywords: [
    "Full-Stack Engineer",
    "AI Engineer",
    "Next.js",
    "React Native",
    "RAG",
    "LLM",
    "TypeScript",
  ],
  authors: [{ name: "Sadiq Khan" }],
  openGraph: {
    title: "Sadiq Khan — Full-Stack AI Engineer",
    description:
      "I build AI-native products end-to-end — from model to mobile, from API to App Store.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-400/20 selection:text-emerald-200">
        {children}
      </body>
    </html>
  );
}
