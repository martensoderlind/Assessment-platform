import StudentHeader from "./student-header";
import StudentWelcomeMessage from "./student-welcome-message";
import StudentDashboardSidebar from "./student-dashboard-sidebar";
import MyCourses from "./my-courses";
import StudentStatsContainer from "./student-stats-container";
import StudentFunctionality from "./student-functionality";

export default function SchoolPlatformLanding() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StudentHeader />
      <main className="container mx-auto px-4 py-8">
        <StudentWelcomeMessage />
        <StudentStatsContainer />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <StudentFunctionality />
            <MyCourses />
          </div>
          <StudentDashboardSidebar />
        </div>
      </main>
    </div>
  );
}
