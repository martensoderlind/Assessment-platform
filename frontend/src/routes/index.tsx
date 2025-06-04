import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../features/components/landing-page";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <LandingPage />
    </div>
  );
}
