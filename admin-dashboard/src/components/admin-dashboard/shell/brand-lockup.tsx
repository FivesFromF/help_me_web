import { PulseIcon } from "@/components/admin-dashboard/icons";

export function BrandLockup() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-[1.05rem] bg-[linear-gradient(135deg,var(--hm-orange),#ff9f47)] text-white shadow-[0_14px_28px_rgba(255,119,0,0.22)]">
        <PulseIcon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--hm-muted)]">
          HelpMe
        </p>
        <p className="text-base font-semibold tracking-[-0.03em] text-[var(--hm-ink)]">
          Admin Dashboard
        </p>
      </div>
    </div>
  );
}
