import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 border-t border-zinc-800/60"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="05 / Testimonials"
          title="Words from people who hired me."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-7 flex flex-col"
            >
              <svg
                className="h-7 w-7 text-emerald-400/40 mb-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
              </svg>
              <blockquote className="text-zinc-300 leading-relaxed text-[15px] flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-zinc-800">
                <div className="text-zinc-100 font-medium text-sm">
                  {t.name}
                </div>
                <div className="text-zinc-500 text-xs mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
