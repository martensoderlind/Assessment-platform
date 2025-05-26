import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentActivity from "./recent-activity";
import UpcomingScheduleContainer from "./upcoming-schedule-container";
import StudentQuickActions from "./student-quick-actions";

export default function StudentDashboardSidebar() {
  const recentActivity = [
    {
      type: "assignment",
      title: "Matematik - Algebra uppgift",
      time: "2 timmar sedan",
      status: "pending",
    },
    {
      type: "announcement",
      title: "Ny läsanvisning i Svenska",
      time: "4 timmar sedan",
      status: "new",
    },
    {
      type: "grade",
      title: "Historia - Essä bedömd",
      time: "1 dag sedan",
      status: "completed",
    },
  ];
  return (
    <div className="space-y-6">
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="text-base">Recent activities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentActivity.map((activity, index) => (
            <RecentActivity key={index} activity={activity} />
          ))}
        </CardContent>
      </Card>
      <UpcomingScheduleContainer />
      <StudentQuickActions />
    </div>
  );
}
