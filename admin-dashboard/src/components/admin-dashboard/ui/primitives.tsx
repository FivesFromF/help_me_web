import type { ReactNode } from "react";

import { toneClass } from "@/components/admin-dashboard/constants";

export function StatusChip({
  label,
  detail,
  tone,
}: {
  label: string;
  detail: string;
  tone: "orange" | "green" | "ink";
}) {
  return (
    <div className="rounded-full border border-[var(--hm-line)] bg-white px-4 py-3">
      <div className={`text-sm font-semibold ${toneClass(tone)}`}>{label}</div>
      <div className="mt-1 text-sm text-[var(--hm-muted)]">{detail}</div>
    </div>
  );
}

export function MetricCard({
  label,
  value,
  description,
  tone,
}: {
  label: string;
  value: string;
  description: string;
  tone: "orange" | "green" | "ink";
}) {
  return (
    <article className="dashboard-subpanel px-4 py-4">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--hm-muted)]">
        {label}
      </p>
      <div className={`mt-3 text-4xl font-semibold tracking-[-0.05em] ${toneClass(tone)}`}>
        {value}
      </div>
      <p className="mt-2 text-sm leading-6 text-[var(--hm-muted)]">{description}</p>
    </article>
  );
}

export function MetricStrip({
  children,
  columns = 3,
}: {
  children: ReactNode;
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 2
      ? "lg:grid-cols-2"
      : columns === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return <div className={`dashboard-metric-strip grid ${gridClass}`}>{children}</div>;
}

export function MetricStripItem({
  label,
  value,
  detail,
  tone,
}: {
  label: string;
  value: string;
  detail: string;
  tone: "orange" | "green" | "ink";
}) {
  return (
    <article className="dashboard-metric-item px-5 py-5 sm:px-6">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[var(--hm-muted)]">
        {label}
      </p>
      <div className={`mt-3 text-3xl font-semibold tracking-[-0.05em] ${toneClass(tone)}`}>
        {value}
      </div>
      <p className="mt-2 text-sm leading-6 text-[var(--hm-muted)]">{detail}</p>
    </article>
  );
}

export function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--hm-muted)]">
        {label}
      </p>
      <p className="mt-1 text-sm leading-6 text-[var(--hm-ink)]">{value}</p>
    </div>
  );
}

export function TablePanel({
  title,
  subtitle,
  toolbar,
  columns,
  children,
}: {
  title: string;
  subtitle: string;
  toolbar?: ReactNode;
  columns: string[];
  children: ReactNode;
}) {
  return (
    <section className="dashboard-panel overflow-hidden">
      <div className="border-b border-[var(--hm-line)] px-5 py-5 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold tracking-[-0.03em] text-[var(--hm-ink)]">
              {title}
            </p>
            <p className="mt-1 text-sm leading-6 text-[var(--hm-muted)]">{subtitle}</p>
          </div>
          {toolbar}
        </div>
      </div>

      <div className="hidden grid-cols-4 gap-4 border-b border-[var(--hm-line)] bg-[rgba(255,255,255,0.78)] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--hm-muted)] lg:grid">
        {columns.map((column) => (
          <div key={column}>{column}</div>
        ))}
      </div>

      <div>{children}</div>
    </section>
  );
}
