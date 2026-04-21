import Image from "next/image";

import { AppleMark } from "@/components/homepage-icons";
import { cx } from "@/lib/cx";

export function StoreButton({
	store,
	href,
	border = false,
	compact = false,
	className,
}: {
	store: "google" | "apple";
	href: string;
	border?: boolean;
	compact?: boolean;
	className?: string;
}) {
	const label = store === "google" ? "Google Play" : "App Store";
	const iconSlotClass =
		store === "google"
			? compact
				? "h-[18px] w-[16px]"
				: "h-[1.6rem] w-[1.35rem] sm:h-[1.875rem] sm:w-[1.625rem]"
			: compact
				? "h-[30px] w-[28px]"
				: "h-[2.25rem] w-[2.05rem] sm:h-[1.875rem] sm:w-[1.625rem]";
	const icon =
		store === "google" ? (
			<Image
				alt=""
				aria-hidden="true"
				src="/playstore-icon.png"
				width={26}
				height={30}
				className={
					compact
						? "h-[18px] w-[16px] object-contain"
						: "h-[1.6rem] w-[1.35rem] object-contain sm:h-[1.875rem] sm:w-[1.625rem]"
				}
			/>
		) : (
			<AppleMark
				className={
					compact
						? "h-[30px] w-[28px]"
						: "h-[2.55rem] w-[2.3rem] scale-[1.18] sm:h-[54px] sm:w-[50px] sm:scale-100"
				}
			/>
		);

	return (
		<a
			href={href}
			className={cx(
				compact
					? "inline-flex h-[40px] min-w-[140px] items-center justify-center gap-2 rounded-[8px] bg-white px-3 text-[18px] font-bold leading-none tracking-[-0.028em] text-[var(--hm-ink)] shadow-[0_1px_1px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
					: "inline-flex h-[48px] min-w-[10.5rem] items-center justify-center gap-2 rounded-[10px] bg-white px-[1rem] text-[1.3rem] font-extrabold leading-none tracking-[-0.028em] text-[var(--hm-ink)] shadow-[0_1px_1px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-[50px] sm:min-w-[12rem] sm:gap-3 sm:px-[1.15rem] sm:text-[1.5rem] sm:tracking-[-0.033em]",
				border && "border border-[var(--hm-line)]",
				className,
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--hm-focus-blue)] focus-visible:ring-offset-2",
			)}
		>
			<span className={cx("flex shrink-0 items-center justify-center text-inherit", iconSlotClass)}>
				{icon}
			</span>
			<span className="whitespace-nowrap">{label}</span>
		</a>
	);
}
