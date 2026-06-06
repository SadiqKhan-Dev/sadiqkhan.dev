import { SectionHeader } from "@/components/SectionHeader";
import { signatureSkills, stackGroups } from "@/lib/data";

export function Stack() {
  return (
    <section
      id="stack"
      className="relative py-24 sm:py-32 border-t border-zinc-800/60 bg-zinc-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="02 / Stack"
          title="The tools I reach for, and why."
          description="Stack lists are noise. What matters is knowing when to use what, and what to avoid. Here's how I think about the layers I work in every day."
        />

        <div className="mb-16">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-6">
            Signature skills
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {signatureSkills.map((s, i) => (
              <div
                key={s.name}
                className="relative rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.03] p-6 overflow-hidden"
              >
                <div className="absolute top-0 right-0 font-mono text-[10px] text-emerald-400/40 px-3 py-2">
                  0{i + 1}
                </div>
                <h4 className="text-lg font-semibold text-zinc-100 mb-3">
                  {s.name}
                </h4>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {stackGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500 mb-5 flex items-center gap-3">
                <span className="text-emerald-400">▍</span>
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
                  >
                    <div className="text-zinc-100 font-medium mb-1.5">
                      {skill.name}
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
