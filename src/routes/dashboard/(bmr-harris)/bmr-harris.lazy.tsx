import { createLazyFileRoute } from "@tanstack/react-router";
import HarrisBenedictPage from "../../../features/formulas/bmr/Harris/HarrisBenedictPage";

export const Route = createLazyFileRoute("/dashboard/(bmr-harris)/bmr-harris")({
  component: HarrisBenedictPage,
});
