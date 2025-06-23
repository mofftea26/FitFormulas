import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

/**
 * Sets the #root height to "auto" on the landing page ("/")
 * and to "100dvh" on all other routes.
 */
const useRootHeightByRoute = () => {
  const location = useLocation();

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    const isLandingPage = location.pathname === "/";
    root.style.height = isLandingPage ? "auto" : "100dvh";
  }, [location]);
};

export default useRootHeightByRoute;
