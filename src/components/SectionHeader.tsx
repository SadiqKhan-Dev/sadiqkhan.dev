export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-16">
      <div className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400 mb-4">
        {eyebrow}
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100 max-w-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
