import Image from "next/image";

import { cx } from "@/lib/cx";

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cx("relative", className)}>
      <Image
        alt="HelpMe"
        src="/helpme-logo-local.png"
        width={432}
        height={267}
        priority
        className="h-auto w-full object-contain"
      />
    </div>
  );
}