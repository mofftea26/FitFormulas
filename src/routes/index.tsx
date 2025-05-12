import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "../features/LandingPage/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return <LandingPage />;
}
