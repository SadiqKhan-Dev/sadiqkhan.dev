import Link from "next/link";
import { navLinks } from "@/lib/data";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-zinc-100 hover:text-emerald-300 transition-colors"
        >
          <span className="text-emerald-400">~/</span>sadiq
          <span className="text-zinc-500">.khan</span>
          <span className="text-zinc-600 animate-pulse">▍</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/team"
            className="ml-1 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors rounded-md"
          >
            Team
          </Link>
          <Link
            href="/pay"
            className="ml-1 px-3 py-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors rounded-md font-medium"
          >
            Pay
          </Link>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-4 py-1.5 text-sm font-medium text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-400/50 transition-all"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          Available
        </a>
      </div>
    </header>
  );
}
