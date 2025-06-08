import { createLazyFileRoute } from "@tanstack/react-router";
import KatchMcArdlePage from "../../../features/formulas/bmr/Katch/KatchMcArdlePage";

export const Route = createLazyFileRoute("/dashboard/(bmr-katch)/bmr-katch")({
  component: KatchMcArdlePage,
});
