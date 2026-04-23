import { formatMetric } from "@/components/admin-dashboard/constants";
import { CheckIcon } from "@/components/admin-dashboard/icons";
import { integrationNotes } from "@/lib/admin-dashboard";

import { SectionHeading } from "@/components/admin-dashboard/ui/section-heading";
import { MetricCard } from "@/components/admin-dashboard/ui/primitives";

export function OperationsSection({
  totalAdmins,
  totalStaff,
  totalCitizens,
  auditEvents,
}: {
  totalAdmins: number | null;
  totalStaff: number | null;
  totalCitizens: number | null;
  auditEvents: number | null;
}) {
  return (
    <section
      id="operations"
      className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]"
    >
      <section className="dashboard-panel reveal-rise px-5 py-6 sm:px-6">
        <SectionHeading
          eyebrow="Vận hành"
          title="Bộ chỉ số dành cho người trực"
          description="Màn hình đầu tiên ưu tiên quyết định: bao nhiêu người dùng, citizen đã xác thực đến đâu, và nhật ký truy cập đang có tín hiệu gì."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Admin"
            value={formatMetric(totalAdmins)}
            description="Đọc từ `stats.totalAdmins` hoặc `admins.length`."
            tone="orange"
          />
          <MetricCard
            label="Staff"
            value={formatMetric(totalStaff)}
            description="Đọc từ `stats.totalStaff` hoặc `staff.length`."
            tone="green"
          />
          <MetricCard
            label="Citizen"
            value={formatMetric(totalCitizens)}
            description="Đọc từ `stats.totalCitizens` hoặc `citizens.length`."
            tone="ink"
          />
          <MetricCard
            label="Audit logs"
            value={formatMetric(auditEvents)}
            description="Đếm tổng số bản ghi trong `auditLogs`."
            tone="orange"
          />
        </div>
      </section>

      <section className="dashboard-panel reveal-rise overflow-hidden">
        <div className="border-b border-[var(--hm-line)] px-5 py-5 sm:px-6">
          <SectionHeading
            eyebrow="Kết nối"
            title="Khung dữ liệu đã sẵn sàng"
            description="Không chèn dữ liệu demo. Các điểm nối backend đã được tách thành types và metric helpers để giảm việc sửa UI khi API vào."
          />
        </div>

        <div className="space-y-3 px-5 py-5 sm:px-6">
          {integrationNotes.map((note) => (
            <div
              key={note}
              className="dashboard-subpanel flex items-start gap-3 px-4 py-4"
            >
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[rgba(255,119,0,0.12)] text-[var(--hm-orange)]">
                <CheckIcon className="h-4 w-4" />
              </span>
              <p className="text-sm leading-6 text-[var(--hm-muted)]">{note}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
