import { formatMetric } from "@/components/admin-dashboard/constants";
import { EmptyState } from "@/components/admin-dashboard/ui/empty-state";
import { SectionHeading } from "@/components/admin-dashboard/ui/section-heading";
import {
  MetricStrip,
  MetricStripItem,
  MetaBlock,
  TablePanel,
} from "@/components/admin-dashboard/ui/primitives";
import type { AuditLog } from "@/lib/admin-dashboard";

export function AuditTrustSection({
  auditLogs,
  auditEvents,
  profileViewEvents,
  consentEvents,
}: {
  auditLogs: AuditLog[];
  auditEvents: number | null;
  profileViewEvents: number | null;
  consentEvents: number | null;
}) {
  return (
    <section id="audit-log" className="space-y-6">
      <SectionHeading
        eyebrow="Nhật ký tin cậy"
        title="Lịch sử truy cập hồ sơ và các mốc đồng ý bảo mật"
        description="Dùng bố cục bảng thay cho danh sách thẻ rời. Về lâu dài khu vực này sẽ dễ thêm sort, bộ lọc và các action mức hàng hơn."
      />

      <MetricStrip columns={3}>
        <MetricStripItem
          label="Tổng audit events"
          value={formatMetric(auditEvents)}
          detail="Đếm từ `auditLogs.length`."
          tone="ink"
        />
        <MetricStripItem
          label="Lượt xem hồ sơ"
          value={formatMetric(profileViewEvents)}
          detail="Lọc từ `eventType` hoặc `details` có ngữ nghĩa xem hồ sơ."
          tone="orange"
        />
        <MetricStripItem
          label="Lượt đồng ý bảo mật"
          value={formatMetric(consentEvents)}
          detail="Lọc từ `eventType` hoặc `details` có ngữ nghĩa consent."
          tone="green"
        />
      </MetricStrip>

      <TablePanel
        title="Audit log"
        subtitle="Sẵn sàng nhận bản ghi audit thật từ backend mà không cần thay đổi lại cấu trúc giao diện."
        columns={["Event type", "Actor ID", "Resource ID", "Timestamp"]}
      >
        {auditLogs.length > 0 ? (
          <div className="divide-y divide-[var(--hm-line)]">
            {auditLogs.map((log) => (
              <AuditLogRow key={log.id} log={log} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Chưa có bản ghi audit"
            description="Khi backend đẩy `auditLogs`, giao diện này sẽ hiển thị ai xem của ai, ai bị xem, thời điểm, phương thức và các mốc đồng ý chính sách bảo mật."
          />
        )}
      </TablePanel>
    </section>
  );
}

function AuditLogRow({ log }: { log: AuditLog }) {
  return (
    <article className="dashboard-row px-5 py-5 sm:px-6">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)_minmax(0,0.9fr)_minmax(0,1.5fr)] xl:items-start">
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--hm-muted)]">
            Event type
          </p>
          <div className="mt-2 inline-flex rounded-full bg-[rgba(61,61,61,0.08)] px-3 py-1.5 text-sm font-medium text-[var(--hm-ink)]">
            {log.eventType}
          </div>
        </div>

        <MetaBlock label="Actor ID" value={log.actorId} />
        <MetaBlock label="Resource ID" value={log.resourceId} />
        <div className="grid gap-3 sm:grid-cols-[auto_1fr] xl:grid-cols-1">
          <MetaBlock label="Timestamp" value={log.timestamp || "Chưa có timestamp"} />
          <MetaBlock label="Details" value={log.details} />
        </div>
      </div>
    </article>
  );
}
