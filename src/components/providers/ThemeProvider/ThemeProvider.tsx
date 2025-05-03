import { createContext, use, useEffect, useState, type ReactNode } from "react";
import { getItem, setItem } from "../../../utils/localStorage";

type Theme = "light" | "dark" | "system";

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

const ThemeContext = createContext<ThemeProviderState>({
  theme: "system",
  setTheme: () => {},
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "fitformulas-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => getItem(storageKey) ?? defaultTheme
  );

  useEffect(() => {
    const root = document.documentElement;

    const resolveSystemTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    const appliedTheme = theme === "system" ? resolveSystemTheme() : theme;

    root.setAttribute("data-theme", appliedTheme);
    setItem(storageKey, appliedTheme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => {
        const systemTheme = resolveSystemTheme();
        root.setAttribute("data-theme", systemTheme);
        setItem(storageKey, systemTheme);
      };
      mediaQuery.addEventListener("change", onChange);
      return () => mediaQuery.removeEventListener("change", onChange);
    }
  }, [theme, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = use(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
