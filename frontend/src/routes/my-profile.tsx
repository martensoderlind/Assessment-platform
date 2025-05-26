import { createFileRoute } from "@tanstack/react-router";
import SchoolPlatformLanding from "../features/student/components/student-dashboard";

export const Route = createFileRoute("/my-profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SchoolPlatformLanding />
    </div>
  );
}
