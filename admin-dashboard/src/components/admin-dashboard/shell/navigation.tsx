import { dashboardNavItems } from "@/components/admin-dashboard/constants";
import { BrandLockup } from "@/components/admin-dashboard/shell/brand-lockup";

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hm-line)] bg-[rgba(255,253,250,0.94)] backdrop-blur xl:hidden">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <BrandLockup />

        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[rgba(255,119,0,0.18)] bg-white px-4 py-2 text-sm font-medium text-[var(--hm-ink)] shadow-[var(--hm-shadow-soft)] [&::-webkit-details-marker]:hidden">
            <span className="relative h-3.5 w-4">
              <span className="absolute left-0 top-0 h-[1.8px] w-full rounded-full bg-current transition-transform duration-200 group-open:translate-y-[6px] group-open:rotate-45" />
              <span className="absolute left-0 top-[6px] h-[1.8px] w-full rounded-full bg-current transition-opacity duration-200 group-open:opacity-0" />
              <span className="absolute left-0 top-[12px] h-[1.8px] w-full rounded-full bg-current transition-transform duration-200 group-open:-translate-y-[6px] group-open:-rotate-45" />
            </span>
            Điều hướng
          </summary>

          <div className="mobile-sheet absolute right-0 top-[calc(100%+0.85rem)] w-[min(22rem,calc(100vw-2rem))] rounded-[1.1rem] border border-[var(--hm-line)] bg-[rgba(255,255,255,0.96)] p-4 shadow-[var(--hm-shadow)] backdrop-blur">
            <div className="space-y-2">
              {dashboardNavItems.map((item) => (
                <a key={item.href} href={item.href} className="dashboard-nav-item">
                  <span className="h-2 w-2 rounded-full bg-[var(--hm-orange)]" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function DesktopSidebar() {
  return (
    <aside className="dashboard-panel hidden self-start overflow-hidden xl:sticky xl:top-6 xl:block">
      <div className="border-b border-[var(--hm-line)] px-6 py-6">
        <BrandLockup />
      </div>

      <div className="px-5 py-5">
        <nav className="space-y-2">
          {dashboardNavItems.map((item) => (
            <a key={item.href} href={item.href} className="dashboard-nav-item">
              <span className="h-2 w-2 rounded-full bg-[var(--hm-orange)]" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-8 rounded-[1rem] bg-[linear-gradient(180deg,rgba(255,119,0,0.08),rgba(255,255,255,0.9))] p-4">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--hm-muted)]">
            Trạng thái dữ liệu
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--hm-muted)]">
            Dashboard đang dùng hợp đồng dữ liệu rỗng, không chèn dữ liệu giả. Khi nối
            backend, các bảng và chỉ số sẽ hiển thị ngay trên cấu trúc này.
          </p>
        </div>
      </div>
    </aside>
  );
}
