import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import Button from "../../../ui/Button/Button";
import styles from "./ThemeToggle.module.scss";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={styles.themeToggle}
      variant="default"
      size="medium"
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
