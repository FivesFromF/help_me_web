import Image from "next/image";

import { AppleMark } from "@/components/homepage-icons";
import { cx } from "@/lib/cx";

export function StoreButton({
  store,
  href,
  border = false,
  className,
}: {
  store: "google" | "apple";
  href: string;
  border?: boolean;
  className?: string;
}) {
  const label = store === "google" ? "Google Play" : "App Store";
  const icon =
    store === "google" ? (
      <Image
        alt=""
        aria-hidden="true"
        src="/playstore-icon.png"
        width={26}
        height={30}
        className="h-[1.875rem] w-[1.625rem] object-contain"
      />
    ) : (
      <AppleMark className="h-[54px] w-[50px]" />
    );

  return (
    <a
      href={href}
      className={cx(
        "inline-flex h-[50px] min-w-[12rem] items-center justify-center gap-3 rounded-[10px] bg-white px-[1.15rem] text-[1.5rem] font-extrabold leading-none tracking-[-0.033em] text-[var(--hm-ink)] shadow-[0_1px_1px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5",
        border && "border border-[var(--hm-line)]",
        className,
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2",
      )}
    >
      <span className="flex h-[1.875rem] w-[1.625rem] shrink-0 items-center justify-center text-inherit">
        {icon}
      </span>
      <span className="whitespace-nowrap">{label}</span>
    </a>
  );
}