import type { ReactNode } from "react";

function BaseIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function PulseIcon({ className }: { className?: string }) {
  return (
    <BaseIcon className={className}>
      <path d="M3 12h4l2.2-5 3.3 10 2.2-5H21" />
    </BaseIcon>
  );
}

export function ClockIcon({ className }: { className?: string }) {
  return (
    <BaseIcon className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.8 1.6" />
    </BaseIcon>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <BaseIcon className={className}>
      <path d="m5 12.5 4.2 4.2L19 7.3" />
    </BaseIcon>
  );
}
