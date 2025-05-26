import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentActivity from "./recent-activity";
import UpcomingScheduleContainer from "./upcoming-schedule-container";
import StudentQuickActions from "./student-quick-actions";

export default function StudentDashboardSidebar() {
  const recentActivity = [
    {
      type: "assignment",
      title: "Math - Algebra assignment",
      time: "2 hours ago",
      status: "pending",
    },
    {
      type: "announcement",
      title: "new reading assignment",
      time: "4 hours ago",
      status: "new",
    },
    {
      type: "grade",
      title: "History - essay graded",
      time: "1 day ago",
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
