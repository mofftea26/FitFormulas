import { createLazyFileRoute } from "@tanstack/react-router";
import TDEEPage from "../../../features/formulas/tdee/TDEEPage";

export const Route = createLazyFileRoute("/dashboard/(tdee)/tdee")({
  component: TDEEPage,
});
