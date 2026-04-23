import type { ReactNode } from "react";

import {
  formatMetric,
  getRoleCount,
  userPanels,
} from "@/components/admin-dashboard/constants";
import { EmptyState } from "@/components/admin-dashboard/ui/empty-state";
import { SectionHeading } from "@/components/admin-dashboard/ui/section-heading";
import {
  MetaBlock,
  TablePanel,
} from "@/components/admin-dashboard/ui/primitives";
import type {
  AdminDashboardData,
  AdminProfile,
  StaffProfile,
} from "@/lib/admin-dashboard";

export function UsersSection({
  data,
  metrics,
}: {
  data: AdminDashboardData;
  metrics: {
    totalAdmins: number | null;
    totalStaff: number | null;
    totalCitizens: number | null;
  };
}) {
  return (
    <section id="users" className="space-y-6">
      <SectionHeading
        eyebrow="Người dùng"
        title="Một mặt điều hành cho admin, staff và citizen"
        description="Giao diện được chia theo vai trò thay vì theo kiểu thẻ trang trí. Khối đếm ở trên cùng, dữ liệu chi tiết đi theo bảng để dễ mở rộng cho filter, sort và pagination."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {userPanels.map((panel) => {
          const count = getRoleCount(data, metrics, panel.id);

          return (
            <article key={panel.id} className="dashboard-panel px-5 py-5 sm:px-6">
              <div
                className={`inline-flex rounded-full px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${panel.accent}`}
              >
                {panel.title}
              </div>
              <div className="mt-5 flex items-end justify-between gap-4">
                <p className="text-4xl font-semibold tracking-[-0.05em] text-[var(--hm-ink)]">
                  {formatMetric(count)}
                </p>
                <span className="text-sm text-[var(--hm-muted)]">
                  {count !== null ? "đã kết nối" : "chưa kết nối"}
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-[var(--hm-muted)]">
                {panel.description}
              </p>
            </article>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <UserTablePanel
          title="Admin"
          subtitle="Sẵn sàng để map từ mảng `admins`."
          rows={data.admins}
          columns={["Họ tên", "Email", "Khởi tạo", "Trạng thái"]}
          renderRow={(admin) => <AdminRow key={admin.id} admin={admin} />}
          emptyLabel="Chưa có dữ liệu admin."
        />
        <UserTablePanel
          title="Staff"
          subtitle="Sẵn sàng để map từ mảng `staff`."
          rows={data.staff}
          columns={["Họ tên", "Đơn vị", "Trạng thái", "Khởi tạo"]}
          renderRow={(staff) => <StaffRow key={staff.id} staff={staff} />}
          emptyLabel="Chưa có dữ liệu staff."
        />
      </div>
    </section>
  );
}

function UserTablePanel<T>({
  title,
  subtitle,
  rows,
  columns,
  renderRow,
  emptyLabel,
}: {
  title: string;
  subtitle: string;
  rows: T[];
  columns: string[];
  renderRow: (row: T) => ReactNode;
  emptyLabel: string;
}) {
  return (
    <TablePanel title={title} subtitle={subtitle} columns={columns}>
      {rows.length > 0 ? (
        <div className="divide-y divide-[var(--hm-line)]">{rows.map(renderRow)}</div>
      ) : (
        <EmptyState
          title={emptyLabel}
          description="Danh sách này sẽ hiển thị ngay khi friend của bạn map dữ liệu thật vào mảng tương ứng."
          compact
        />
      )}
    </TablePanel>
  );
}

function AdminRow({ admin }: { admin: AdminProfile }) {
  return (
    <article className="dashboard-row px-5 py-4 sm:px-6">
      <div className="grid gap-3 lg:grid-cols-4 lg:items-center">
        <MetaBlock label="Họ tên" value={admin.fullName} />
        <MetaBlock label="Email" value={admin.email} />
        <MetaBlock label="Khởi tạo" value={admin.createdAt || "Chưa có thời gian"} />
        <MetaBlock label="Trạng thái" value="Hoạt động" />
      </div>
    </article>
  );
}

function StaffRow({ staff }: { staff: StaffProfile }) {
  return (
    <article className="dashboard-row px-5 py-4 sm:px-6">
      <div className="grid gap-3 lg:grid-cols-4 lg:items-center">
        <MetaBlock label="Họ tên" value={staff.fullName} />
        <MetaBlock
          label="Đơn vị"
          value={
            [staff.hospitalName, staff.department].filter(Boolean).join(" · ") ||
            "Chưa có đơn vị"
          }
        />
        <MetaBlock label="Trạng thái" value={staff.status} />
        <MetaBlock label="Khởi tạo" value={staff.createdAt || "Chưa có thời gian"} />
      </div>
    </article>
  );
}
