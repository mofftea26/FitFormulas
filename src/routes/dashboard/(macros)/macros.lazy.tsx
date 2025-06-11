import { createLazyFileRoute } from "@tanstack/react-router";
import MacrosPage from "../../../features/formulas/macros/MacrosPage";

export const Route = createLazyFileRoute("/dashboard/(macros)/macros")({
  component: MacrosPage,
});
