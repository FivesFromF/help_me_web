import { formatMetric } from "@/components/admin-dashboard/constants";
import { ClockIcon } from "@/components/admin-dashboard/icons";
import {
  MetricStrip,
  MetricStripItem,
  StatusChip,
} from "@/components/admin-dashboard/ui/primitives";

export function OverviewSection({
  totalUsers,
  emergencyEventsToday,
  verifiedCitizens,
  consentedCitizens,
  lastUpdated,
}: {
  totalUsers: number | null;
  emergencyEventsToday: number | null;
  verifiedCitizens: number | null;
  consentedCitizens: number | null;
  lastUpdated: string | null;
}) {
  return (
    <section id="overview" className="dashboard-panel reveal-rise overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
        <div className="border-b border-[var(--hm-line)] px-5 py-6 sm:px-7 lg:border-b-0 lg:border-r lg:py-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[var(--hm-muted)]">
            Tổng quan điều phối
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-[var(--hm-ink)] sm:text-[3.4rem]">
            Một dashboard đủ gọn cho vận hành, đủ rõ để đọc trạng thái hồ sơ trong
            vài giây.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--hm-muted)] sm:text-base">
            Bố cục ưu tiên hệ điều hành thay vì marketing: tổng quan, danh sách
            người dùng, cờ tin cậy của citizen và nhật ký truy cập nằm trên cùng một
            tuyến đọc, hoạt động tốt trên desktop lẫn mobile web.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <StatusChip label="Admin" detail="quản trị hệ thống" tone="orange" />
            <StatusChip label="Staff" detail="truy cập có kiểm soát" tone="green" />
            <StatusChip label="Citizen" detail="theo dõi cờ tin cậy" tone="ink" />
          </div>
        </div>

        <div className="dashboard-grid-pattern px-5 py-6 sm:px-7 lg:py-7">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--hm-muted)]">
            Tín hiệu nhanh
          </p>

          <div className="mt-5">
            <MetricStrip columns={2}>
              <MetricStripItem
                label="Tổng người dùng"
                value={formatMetric(totalUsers)}
                detail="Tự tính từ stats hoặc mảng người dùng khi backend đã nối."
                tone="ink"
              />
              <MetricStripItem
                label="Sự cố hôm nay"
                value={formatMetric(emergencyEventsToday)}
                detail="Map từ `emergencyEventsToday` trong endpoint thống kê."
                tone="orange"
              />
              <MetricStripItem
                label="Citizen đã xác thực"
                value={formatMetric(verifiedCitizens)}
                detail="Đếm trực tiếp từ `citizens[].isVerified`."
                tone="green"
              />
              <MetricStripItem
                label="Consent đã ghi nhận"
                value={formatMetric(consentedCitizens)}
                detail="Đếm trực tiếp từ `citizens[].consentRegulation`."
                tone="green"
              />
            </MetricStrip>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--hm-line)] bg-white px-3 py-2 text-sm text-[var(--hm-muted)]">
            <ClockIcon className="h-4 w-4 text-[var(--hm-orange)]" />
            {lastUpdated
              ? `Cập nhật ${lastUpdated}`
              : "Chưa có dấu thời gian từ backend"}
          </div>
        </div>
      </div>
    </section>
  );
}
