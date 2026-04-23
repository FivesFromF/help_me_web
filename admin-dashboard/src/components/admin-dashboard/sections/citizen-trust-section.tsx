import { formatMetric } from "@/components/admin-dashboard/constants";
import { EmptyState } from "@/components/admin-dashboard/ui/empty-state";
import { SectionHeading } from "@/components/admin-dashboard/ui/section-heading";
import {
  MetricStrip,
  MetricStripItem,
  TablePanel,
} from "@/components/admin-dashboard/ui/primitives";
import type { CitizenProfile } from "@/lib/admin-dashboard";

export function CitizenTrustSection({
  citizens,
  verifiedCitizens,
  profileUpdatedCitizens,
  consentedCitizens,
}: {
  citizens: CitizenProfile[];
  verifiedCitizens: number | null;
  profileUpdatedCitizens: number | null;
  consentedCitizens: number | null;
}) {
  return (
    <section id="citizen-trust" className="space-y-6">
      <SectionHeading
        eyebrow="Tin cậy citizen"
        title="Ba cờ bắt buộc để staff truy cập hồ sơ an toàn"
        description="Khối này tách chỉ số tổng quan khỏi bảng chi tiết. Trên desktop là bảng rõ cột; trên mobile vẫn giữ được cấu trúc bằng các cụm meta thay vì thẻ bo tròn chồng lên nhau."
      />

      <MetricStrip columns={3}>
        <MetricStripItem
          label="Đã xác thực CCCD"
          value={formatMetric(verifiedCitizens)}
          detail="Bind từ `citizens[].isVerified`."
          tone="green"
        />
        <MetricStripItem
          label="Đã cập nhật hồ sơ y tế"
          value={formatMetric(profileUpdatedCitizens)}
          detail="Bind từ `citizens[].isProfileUpdated`."
          tone="orange"
        />
        <MetricStripItem
          label="Đã đồng ý bảo mật"
          value={formatMetric(consentedCitizens)}
          detail="Bind từ `citizens[].consentRegulation`."
          tone="green"
        />
      </MetricStrip>

      <TablePanel
        title="Citizen trust"
        subtitle="Riêng citizen phải thấy rõ `isVerified`, `isProfileUpdated` và `consentRegulation`."
        columns={["Citizen", "is_verified", "is_profile_updated", "consent_regulation"]}
      >
        {citizens.length > 0 ? (
          <div className="divide-y divide-[var(--hm-line)]">
            {citizens.map((citizen) => (
              <CitizenTrustRow key={citizen.id} citizen={citizen} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="Chưa có dữ liệu citizen"
            description="Khi mảng `citizens` được nối với backend, khu vực này sẽ hiển thị từng công dân kèm ba trạng thái tin cậy bắt buộc."
          />
        )}
      </TablePanel>
    </section>
  );
}

function CitizenTrustRow({ citizen }: { citizen: CitizenProfile }) {
  return (
    <article className="dashboard-row px-5 py-5 sm:px-6">
      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)_minmax(0,0.9fr)_minmax(0,0.95fr)] xl:items-start">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-base font-semibold text-[var(--hm-ink)]">
              {citizen.fullName}
            </p>
            <span className="rounded-full bg-[rgba(61,61,61,0.08)] px-2.5 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--hm-ink)]">
              {citizen.id}
            </span>
          </div>
          <p className="mt-1 text-sm text-[var(--hm-muted)]">{citizen.email}</p>
          <p className="mt-1 text-sm text-[var(--hm-muted)]">
            {citizen.address || "Chưa có địa chỉ từ backend"}
          </p>
        </div>

        <TrustFlag
          label="is_verified"
          active={citizen.isVerified}
          positive="Đã xác thực"
          negative="Chưa xác thực"
        />
        <TrustFlag
          label="is_profile_updated"
          active={citizen.isProfileUpdated}
          positive="Đã cập nhật"
          negative="Chưa cập nhật"
        />
        <TrustFlag
          label="consent_regulation"
          active={citizen.consentRegulation}
          positive="Đã đồng ý"
          negative="Chưa đồng ý"
        />
      </div>
    </article>
  );
}

function TrustFlag({
  label,
  active,
  positive,
  negative,
}: {
  label: string;
  active: boolean;
  positive: string;
  negative: string;
}) {
  return (
    <div>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[var(--hm-muted)]">
        {label}
      </p>
      <div
        className={`mt-2 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-medium ${
          active
            ? "border-[rgba(0,189,132,0.18)] bg-[rgba(0,189,132,0.08)] text-[var(--hm-green)]"
            : "border-[rgba(255,119,0,0.18)] bg-[rgba(255,119,0,0.08)] text-[var(--hm-orange)]"
        }`}
      >
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            active ? "bg-[var(--hm-green)]" : "bg-[var(--hm-orange)]"
          }`}
        />
        {active ? positive : negative}
      </div>
    </div>
  );
}
