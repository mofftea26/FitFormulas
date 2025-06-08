import { createLazyFileRoute } from "@tanstack/react-router";
import MifflinStJeorPage from "../../../features/formulas/bmr/Mifflin/MifflinStJeorPage";

export const Route = createLazyFileRoute(
  "/dashboard/(bmr-mifflin)/bmr-mifflin"
)({
  component: MifflinStJeorPage,
});
