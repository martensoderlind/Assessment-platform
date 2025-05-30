import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/courses")({
  component: ProfileCourses,
});

function ProfileCourses() {
  return (
    <div>
      <h1>My Courses</h1>
    </div>
  );
}
