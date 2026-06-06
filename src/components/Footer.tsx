export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-zinc-500">
          <span className="text-emerald-400">$</span> built with Next.js
          <span className="text-zinc-700 mx-2">·</span>
          Tailwind v4
          <span className="text-zinc-700 mx-2">·</span>
          TypeScript
        </div>
        <div className="font-mono text-xs text-zinc-500">
          © {new Date().getFullYear()} Sadiq Khan. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
