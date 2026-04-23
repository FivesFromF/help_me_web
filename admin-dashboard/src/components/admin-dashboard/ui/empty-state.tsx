import { PulseIcon } from "@/components/admin-dashboard/icons";

export function EmptyState({
  title,
  description,
  compact = false,
}: {
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`empty-state-surface flex flex-col items-center justify-center px-5 py-6 text-center sm:px-6 ${
        compact ? "min-h-[180px]" : "min-h-[240px]"
      }`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,119,0,0.1)] text-[var(--hm-orange)]">
        <PulseIcon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[var(--hm-ink)]">
        {title}
      </p>
      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--hm-muted)]">
        {description}
      </p>
    </div>
  );
}
