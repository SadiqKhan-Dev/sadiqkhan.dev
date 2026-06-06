import { SectionHeader } from "@/components/SectionHeader";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 border-t border-zinc-800/60 bg-zinc-950"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 mb-6">
          06 / Contact
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-100 leading-[1.05]">
          Let&apos;s talk about
          <br />
          <span className="gradient-accent">what you&apos;re building.</span>
        </h2>

        <p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          The fastest way to reach me is{" "}
          <a
            href="mailto:hello@sadiqkhan.dev"
            className="text-emerald-300 underline decoration-emerald-400/30 underline-offset-4 hover:decoration-emerald-400 transition-colors"
          >
            hello@sadiqkhan.dev
          </a>
          . I read everything and reply within 24 hours on weekdays.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@sadiqkhan.dev"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-7 py-3.5 text-sm font-semibold text-zinc-950 hover:bg-emerald-300 transition-colors"
          >
            Send a brief
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
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-7 py-3.5 text-sm font-semibold text-zinc-100 hover:border-zinc-500 hover:bg-zinc-900 transition-all"
          >
            Review the work first
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-px bg-zinc-800/60 rounded-2xl overflow-hidden border border-zinc-800/60">
          <div className="bg-zinc-950 px-6 py-5 text-left">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-1">
              Response
            </div>
            <div className="text-zinc-100 font-medium">Within 24 hours</div>
          </div>
          <div className="bg-zinc-950 px-6 py-5 text-left">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-1">
              Capacity
            </div>
            <div className="text-zinc-100 font-medium">2–3 new projects</div>
          </div>
          <div className="bg-zinc-950 px-6 py-5 text-left">
            <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-1">
              Window
            </div>
            <div className="text-zinc-100 font-medium">Q2 2026 onward</div>
          </div>
        </div>

        <p className="mt-12 text-sm text-zinc-500 max-w-xl mx-auto">
          If I can&apos;t help, I&apos;ll point you to someone who can.
          That&apos;s the deal.
        </p>
      </div>
    </section>
  );
}
