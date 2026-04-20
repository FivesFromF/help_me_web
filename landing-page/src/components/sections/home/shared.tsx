import type { ReactNode } from "react";
import Image from "next/image";

import { cx } from "@/lib/cx";

import type { Step } from "./types";

export function NavPill({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-5 py-3 text-[1.55rem] font-extrabold transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2",
        active
          ? "bg-[var(--hm-soft)] text-[var(--hm-orange)]"
          : "text-[var(--hm-ink)] hover:bg-[var(--hm-soft)]/70 hover:text-[var(--hm-orange)]",
      )}
    >
      <span className="text-current">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

export function HeroInfo({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="pt-1 sm:pt-2">
      <div className="flex items-start gap-4 sm:block">
        <div className="mt-1 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center text-[var(--hm-orange)] sm:mb-4 sm:mt-0 sm:h-[7.125rem] sm:w-auto sm:justify-start">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-[1.45rem] font-extrabold leading-[1.2] text-[var(--hm-ink)] sm:text-[1.5rem]">{title}</h3>
          <p className="mt-2 text-[1.2rem] leading-[1.5] text-[var(--hm-muted)] sm:mt-3 sm:text-[1.25rem] sm:leading-[1.7]">{description}</p>
        </div>
      </div>
    </div>
  );
}

export function HeroPhoneCollage({ className }: { className?: string }) {
  return (
    <div className={cx("relative mx-auto aspect-[3314/3464] w-full max-w-[41rem] sm:max-w-[45rem] xl:mr-0 xl:max-w-[52rem]", className)}>
      <Image
        alt="HelpMe hero phones collage"
        src="/hero-frame-410.png"
        width={3314}
        height={3464}
        priority
        sizes="(max-width: 640px) 84vw, (max-width: 1280px) 42vw, 32vw"
        className="h-auto w-full object-contain drop-shadow-[0_32px_72px_rgba(18,18,18,0.22)]"
      />
    </div>
  );
}

export function StepCard({ number, title, description, icon }: Step) {
  return (
    <article className="flex h-full flex-col items-center rounded-[20px] border border-[var(--hm-line)] bg-white px-7 py-6 text-center">
      <div className="flex h-[104px] items-center justify-center">{icon}</div>
      <p className="mt-2 text-[2rem] font-extrabold text-[var(--hm-line)]">{number}</p>
      <h3 className="mt-3 text-[2rem] font-extrabold leading-none text-[var(--hm-ink)]">{title}</h3>
      <p className="mt-4 max-w-[10rem] text-[1.25rem] leading-[1.55] text-[var(--hm-muted)]">
        {description}
      </p>
    </article>
  );
}

