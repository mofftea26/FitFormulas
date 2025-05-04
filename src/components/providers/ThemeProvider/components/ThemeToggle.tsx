import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={clsx("text-primary-800 hover:bg-primary-200")}
      variant="outline"
      size="lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <Sun size={16} />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span>Dark Mode</span>
        </>
      )}
    </Button>
  );
}
