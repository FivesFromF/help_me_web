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
    <div className="w-full pt-1 sm:pt-2">
      <div className="flex items-start gap-3 sm:block sm:gap-4">
        <div className="mt-0.5 flex h-[64px] w-[64px] shrink-0 items-center justify-center text-[var(--hm-orange)] sm:mb-4 sm:mt-0 sm:h-[7.125rem] sm:w-auto sm:justify-start">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-[16px] font-bold leading-[1.35] text-[var(--hm-ink)] sm:text-[1.5rem] sm:font-extrabold sm:leading-[1.2]">{title}</h3>
          <p className="mt-1.5 text-[14px] leading-[1.45] text-[var(--hm-muted)] sm:mt-3 sm:text-[1.25rem] sm:leading-[1.7]">{description}</p>
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
    <article className="flex h-full min-h-[224px] flex-col items-center rounded-[20px] border border-[var(--hm-line)] bg-white px-4 py-3 text-center xl:px-7 xl:py-6">
      <div className="flex h-[65px] items-center justify-center xl:h-[104px]">{icon}</div>
      <p className="mt-1 text-[18px] font-bold leading-none text-[var(--hm-line)] xl:mt-2 xl:text-[2rem] xl:font-extrabold">{number}</p>
      <h3 className="mt-1 text-[18px] font-bold leading-[1.2] text-[var(--hm-ink)] xl:mt-3 xl:text-[2rem] xl:font-extrabold xl:leading-none">{title}</h3>
      <p className="mt-2 max-w-[104px] text-[14px] leading-[1.45] text-[var(--hm-muted)] xl:mt-4 xl:max-w-[10rem] xl:text-[1.25rem] xl:leading-[1.55]">
        {description}
      </p>
    </article>
  );
}

