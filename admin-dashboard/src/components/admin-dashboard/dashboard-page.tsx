import { AuditTrustSection } from "@/components/admin-dashboard/sections/audit-trust-section";
import { CitizenTrustSection } from "@/components/admin-dashboard/sections/citizen-trust-section";
import { OperationsSection } from "@/components/admin-dashboard/sections/operations-section";
import { OverviewSection } from "@/components/admin-dashboard/sections/overview-section";
import { UsersSection } from "@/components/admin-dashboard/sections/users-section";
import {
  DesktopSidebar,
  MobileHeader,
} from "@/components/admin-dashboard/shell/navigation";
import {
  createEmptyDashboardData,
  getDashboardMetrics,
} from "@/lib/admin-dashboard";

const data = createEmptyDashboardData();
const metrics = getDashboardMetrics(data);

export function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,240,227,0.9),transparent_30%),linear-gradient(180deg,#fffdf9_0%,#fff8f1_46%,#fff 100%)] text-[var(--hm-ink)]">
      <MobileHeader />

      <div className="mx-auto max-w-[1600px] px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-10 lg:pt-6">
        <div className="grid gap-6 xl:grid-cols-[288px_minmax(0,1fr)]">
          <DesktopSidebar />

          <div className="space-y-6">
            <OverviewSection
              totalUsers={metrics.totalUsers}
              emergencyEventsToday={metrics.emergencyEventsToday}
              verifiedCitizens={metrics.verifiedCitizens}
              consentedCitizens={metrics.consentedCitizens}
              lastUpdated={data.lastUpdated}
            />

            <OperationsSection
              totalAdmins={metrics.totalAdmins}
              totalStaff={metrics.totalStaff}
              totalCitizens={metrics.totalCitizens}
              auditEvents={metrics.auditEvents}
            />

            <UsersSection data={data} metrics={metrics} />

            <CitizenTrustSection
              citizens={data.citizens}
              verifiedCitizens={metrics.verifiedCitizens}
              profileUpdatedCitizens={metrics.profileUpdatedCitizens}
              consentedCitizens={metrics.consentedCitizens}
            />

            <AuditTrustSection
              auditLogs={data.auditLogs}
              auditEvents={metrics.auditEvents}
              profileViewEvents={metrics.profileViewEvents}
              consentEvents={metrics.consentEvents}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
