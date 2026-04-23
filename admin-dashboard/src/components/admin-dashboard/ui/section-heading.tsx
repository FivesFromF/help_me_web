export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--hm-muted)]">
        {eyebrow}
      </p>
      <h2 className="text-[1.9rem] font-semibold tracking-[-0.045em] text-[var(--hm-ink)] sm:text-[2.35rem]">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-7 text-[var(--hm-muted)] sm:text-base">
        {description}
      </p>
    </div>
  );
}
