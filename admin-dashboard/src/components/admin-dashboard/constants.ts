import type { AdminDashboardData, Role } from "@/lib/admin-dashboard";

export const dashboardNavItems = [
  { href: "#overview", label: "Tổng quan" },
  { href: "#operations", label: "Vận hành" },
  { href: "#users", label: "Người dùng" },
  { href: "#citizen-trust", label: "Tin cậy citizen" },
  { href: "#audit-log", label: "Nhật ký tin cậy" },
];

export const userPanels: Array<{
  id: Role;
  title: string;
  description: string;
  accent: string;
}> = [
  {
    id: "admin",
    title: "Admin",
    description: "Nhóm giám sát hệ thống, dữ liệu và điều phối quyền truy cập.",
    accent: "text-[var(--hm-orange)] bg-[rgba(255,119,0,0.1)]",
  },
  {
    id: "staff",
    title: "Staff",
    description:
      "Nhân viên y tế và lực lượng vận hành được cấp quyền truy cập hồ sơ khi cần.",
    accent: "text-[var(--hm-green)] bg-[rgba(0,189,132,0.1)]",
  },
  {
    id: "citizen",
    title: "Citizen",
    description:
      "Người dùng cuối cần theo dõi rõ trạng thái xác thực, hồ sơ và đồng ý bảo mật.",
    accent: "text-[var(--hm-ink)] bg-[rgba(61,61,61,0.08)]",
  },
];

const numberFormatter = new Intl.NumberFormat("vi-VN");

export function formatMetric(value: number | null) {
  return value === null ? "—" : numberFormatter.format(value);
}

export function toneClass(tone: "orange" | "green" | "ink") {
  if (tone === "green") return "text-[var(--hm-green)]";
  if (tone === "ink") return "text-[var(--hm-ink)]";
  return "text-[var(--hm-orange)]";
}

export function getRoleCount(
  data: AdminDashboardData,
  metrics: {
    totalAdmins: number | null;
    totalStaff: number | null;
    totalCitizens: number | null;
  },
  role: Role,
): number | null {
  switch (role) {
    case "admin":
      return metrics.totalAdmins ?? (data.admins.length > 0 ? data.admins.length : null);
    case "staff":
      return metrics.totalStaff ?? (data.staff.length > 0 ? data.staff.length : null);
    case "citizen":
      return metrics.totalCitizens ?? (data.citizens.length > 0 ? data.citizens.length : null);
  }
}
