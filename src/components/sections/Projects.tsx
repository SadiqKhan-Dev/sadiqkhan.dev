import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 border-t border-zinc-800/60"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="03 / Projects"
          title="Four products. Real metrics. Real lessons."
          description="Not tutorials, not clone apps. Each of these shipped to real users and either made money, saved time, or both."
        />

        <div className="space-y-16">
          {projects.map((project, i) => (
            <article
              key={project.id}
              id={project.id}
              className="group relative scroll-mt-24"
            >
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-zinc-500">
                      {String(i + 1).padStart(2, "0")} /
                    </span>
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/60 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-zinc-400">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-100">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-zinc-400 text-base leading-relaxed">
                    {project.hook}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-6">
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                      Problem
                    </div>
                    <p className="text-zinc-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                      Stack
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-md border border-zinc-800 bg-zinc-900/40 px-2.5 py-1 font-mono text-xs text-zinc-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                      Key engineering decisions
                    </div>
                    <ul className="space-y-2">
                      {project.decisions.map((d, idx) => (
                        <li
                          key={idx}
                          className="flex gap-3 text-zinc-300 text-[15px] leading-relaxed"
                        >
                          <span className="text-emerald-400 mt-1.5 shrink-0">
                            ▸
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 mb-2">
                        Impact
                      </div>
                      <p className="text-zinc-200 text-sm leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5">
                      <div className="font-mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                        Lessons
                      </div>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {project.lessons}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {i < projects.length - 1 ? (
                <div className="mt-16 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
