export type Role = "admin" | "staff" | "citizen";

export type AdminProfile = {
  id: string;
  cognitoId?: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
  createdAt?: string;
};

export type StaffProfile = {
  id: string;
  cognitoId?: string;
  email: string;
  fullName: string;
  phone?: string;
  avatarUrl?: string;
  hospitalName: string;
  department?: string;
  status: string;
  createdAt?: string;
};

export type CitizenProfile = {
  id: string;
  cognitoId?: string;
  email: string;
  fullName: string;
  phone?: string;
  avatarUrl?: string;
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  cccdNumber?: string;
  isProfileUpdated: boolean;
  isVerified: boolean;
  firstDeclareProfile: boolean;
  consentRegulation: boolean;
  createdAt?: string;
};

export type DashboardStats = {
  totalCitizens: number;
  totalStaff: number;
  totalAdmins: number;
  emergencyEventsToday: number;
};

export type AuditLog = {
  id: string;
  eventType: string;
  actorId: string;
  resourceId: string;
  details: string;
  timestamp?: string;
};

export type AdminDashboardData = {
  stats: DashboardStats | null;
  admins: AdminProfile[];
  staff: StaffProfile[];
  citizens: CitizenProfile[];
  auditLogs: AuditLog[];
  lastUpdated: string | null;
};

/**
 * Backend contract map for later wiring:
 * - POST /admin/stats -> stats
 * - POST /admin/logs -> auditLogs
 * - admins, staff, citizens are intentionally empty until list endpoints
 *   or a composed dashboard endpoint is added.
 */
export function createEmptyDashboardData(): AdminDashboardData {
  return {
    stats: null,
    admins: [],
    staff: [],
    citizens: [],
    auditLogs: [],
    lastUpdated: null,
  };
}

export type DashboardMetrics = {
  totalUsers: number | null;
  totalAdmins: number | null;
  totalStaff: number | null;
  totalCitizens: number | null;
  emergencyEventsToday: number | null;
  verifiedCitizens: number | null;
  profileUpdatedCitizens: number | null;
  consentedCitizens: number | null;
  auditEvents: number | null;
  consentEvents: number | null;
  profileViewEvents: number | null;
};

function valueOrNull(value: number) {
  return value > 0 ? value : null;
}

export function getDashboardMetrics(
  data: AdminDashboardData,
): DashboardMetrics {
  const totalAdmins =
    data.admins.length > 0 ? data.admins.length : data.stats?.totalAdmins ?? null;
  const totalStaff =
    data.staff.length > 0 ? data.staff.length : data.stats?.totalStaff ?? null;
  const totalCitizens =
    data.citizens.length > 0
      ? data.citizens.length
      : data.stats?.totalCitizens ?? null;

  const totalUsers =
    totalAdmins !== null && totalStaff !== null && totalCitizens !== null
      ? totalAdmins + totalStaff + totalCitizens
      : null;

  const verifiedCitizens =
    data.citizens.length > 0
      ? valueOrNull(data.citizens.filter((citizen) => citizen.isVerified).length)
      : null;
  const profileUpdatedCitizens =
    data.citizens.length > 0
      ? valueOrNull(
          data.citizens.filter((citizen) => citizen.isProfileUpdated).length,
        )
      : null;
  const consentedCitizens =
    data.citizens.length > 0
      ? valueOrNull(
          data.citizens.filter((citizen) => citizen.consentRegulation).length,
        )
      : null;

  const auditEvents = valueOrNull(data.auditLogs.length);
  const consentEvents = valueOrNull(
    data.auditLogs.filter((log) => isConsentEvent(log.eventType, log.details)).length,
  );
  const profileViewEvents = valueOrNull(
    data.auditLogs.filter((log) => isProfileViewEvent(log.eventType, log.details)).length,
  );

  return {
    totalUsers,
    totalAdmins,
    totalStaff,
    totalCitizens,
    emergencyEventsToday: data.stats?.emergencyEventsToday ?? null,
    verifiedCitizens,
    profileUpdatedCitizens,
    consentedCitizens,
    auditEvents,
    consentEvents,
    profileViewEvents,
  };
}

export function isConsentEvent(eventType: string, details: string) {
  const normalized = `${eventType} ${details}`.toLowerCase();
  return (
    normalized.includes("consent") ||
    normalized.includes("privacy") ||
    normalized.includes("policy") ||
    normalized.includes("bao mat") ||
    normalized.includes("đồng ý") ||
    normalized.includes("dong y")
  );
}

export function isProfileViewEvent(eventType: string, details: string) {
  const normalized = `${eventType} ${details}`.toLowerCase();
  return (
    normalized.includes("view") ||
    normalized.includes("access") ||
    normalized.includes("profile") ||
    normalized.includes("medical") ||
    normalized.includes("xem")
  );
}

export const integrationNotes = [
  "Kết nối `stats` từ `POST /admin/stats` để bật các chỉ số tổng quan và sự cố trong ngày.",
  "Kết nối `auditLogs` từ `POST /admin/logs` để hiển thị lịch sử xem hồ sơ và các mốc đồng ý bảo mật.",
  "Bổ sung danh sách `admins`, `staff`, `citizens` từ backend để mở các bảng người dùng và các cờ tin cậy.",
];
