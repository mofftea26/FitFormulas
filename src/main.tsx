import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/providers/ThemeProvider/ThemeProvider.tsx";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router.tsx";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
