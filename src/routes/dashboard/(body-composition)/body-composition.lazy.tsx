import { createLazyFileRoute } from "@tanstack/react-router";
import BodyCompositionPage from "@/features/formulas/bodyComposition/BodyCompositionPage";

export const Route = createLazyFileRoute(
  "/dashboard/(body-composition)/body-composition"
)({
  component: BodyCompositionPage,
});
