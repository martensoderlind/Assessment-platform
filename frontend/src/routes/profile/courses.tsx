import CoursesDashboard from "@/src/features/courses/components/coourses-dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/courses")({
  component: ProfileCourses,
});

function ProfileCourses() {
  return (
    <div>
      <CoursesDashboard />
    </div>
  );
}
