import { Bell, FileText, GraduationCap } from "lucide-react";
import type { Activity } from "../types";

type Props = {
  activity: Activity;
};

export default function RecentActivity({ activity }: Props) {
  return (
    <div className="flex items-start space-x-3">
      <div
        className={`p-1.5 rounded-full ${
          activity.type === "assignment"
            ? "bg-blue-50"
            : activity.type === "announcement"
              ? "bg-green-50"
              : "bg-purple-50"
        }`}
      >
        {activity.type === "assignment" && (
          <FileText className="h-3 w-3 text-blue-600" />
        )}
        {activity.type === "announcement" && (
          <Bell className="h-3 w-3 text-green-600" />
        )}
        {activity.type === "grade" && (
          <GraduationCap className="h-3 w-3 text-purple-600" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">
          {activity.title}
        </p>
        <p className="text-xs text-gray-500">{activity.time}</p>
      </div>
    </div>
  );
}
