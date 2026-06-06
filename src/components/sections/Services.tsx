import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 border-t border-zinc-800/60 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="04 / Services"
          title="What I take on, and how it usually goes."
          description="Outcome-focused engagements. No retainers, no mystery. You know what you're getting and what it costs before we start."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="group relative rounded-2xl border border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 to-zinc-950 p-7 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="font-mono text-xs text-emerald-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <svg
                  className="h-5 w-5 text-zinc-700 group-hover:text-emerald-400 transition-colors"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M4 12L12 4M6 4h6v6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed text-[15px]">
                {service.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
