import { createLazyFileRoute } from "@tanstack/react-router";
import MifflinStJeorPage from "../../features/formulas/bmr/MifflinStJeorPage";

export const Route = createLazyFileRoute("/dashboard/bmr-mifflin")({
  component: MifflinStJeorPage,
});
