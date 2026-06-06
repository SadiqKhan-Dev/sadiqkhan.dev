export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono text-xs text-zinc-500">
            <span className="text-emerald-400">●</span> status: available
          </span>
          <span className="text-zinc-700">/</span>
          <span className="font-mono text-xs text-zinc-500">
            location: remote, global
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-5xl">
          <span className="gradient-text">
            I build AI-native products
          </span>
          <br />
          <span className="text-zinc-100">end-to-end —</span>
          <br />
          <span className="text-zinc-400">from </span>
          <span className="text-emerald-300">model</span>
          <span className="text-zinc-400"> to </span>
          <span className="text-emerald-300">mobile</span>
          <span className="text-zinc-400">,</span>
          <br />
          <span className="text-zinc-400">from </span>
          <span className="text-emerald-300">API</span>
          <span className="text-zinc-400"> to </span>
          <span className="text-emerald-300">App Store</span>
          <span className="text-zinc-500">.</span>
        </h1>

        <p className="mt-10 max-w-2xl text-lg sm:text-xl text-zinc-400 leading-relaxed">
          I&apos;m a full-stack engineer with 5+ years shipping production AI
          products, mobile apps, and scalable web platforms. I specialize in
          LLM integration, RAG systems, and turning ambiguous ideas into
          shipped software.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors"
          >
            See shipped work
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
          >
            Start a conversation
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800/60">
          {[
            { k: "5+", v: "years shipping" },
            { k: "40+", v: "products deployed" },
            { k: "2M+", v: "LLM calls / day" },
            { k: "< 24h", v: "response time" },
          ].map((s) => (
            <div
              key={s.v}
              className="bg-zinc-950 px-6 py-6 sm:py-8"
            >
              <div className="font-mono text-2xl sm:text-3xl font-semibold text-zinc-100">
                {s.k}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-zinc-500">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
