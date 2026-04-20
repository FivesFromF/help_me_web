import type { LinkItem } from "@/components/sections/home/types";

export function LinkList({
  title,
  links,
  titleClassName,
}: {
  title: string;
  links: LinkItem[];
  titleClassName?: string;
}) {
  return (
    <div className="space-y-5">
      <h3 className={["text-[2rem] font-extrabold text-white", titleClassName].filter(Boolean).join(" ")}>{title}</h3>
      <ul className="space-y-3 text-[1.25rem] text-white/90">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--hm-green)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}