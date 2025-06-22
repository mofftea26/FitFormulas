import { createLazyFileRoute } from "@tanstack/react-router";
import MicrosPage from "../../../features/formulas/micros/MicrosPage";

export const Route = createLazyFileRoute("/dashboard/(micros)/micros")({
  component: MicrosPage,
});
