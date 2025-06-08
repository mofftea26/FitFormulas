import { createLazyFileRoute } from "@tanstack/react-router";
import MifflinStJeorPage from "../../../features/formulas/bmr/Mifflin/MifflinStJeorPage";

export const Route = createLazyFileRoute("/dashboard/(tdee)/tdee")({
  component: MifflinStJeorPage,
});
