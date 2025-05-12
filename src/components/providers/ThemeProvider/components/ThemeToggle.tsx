import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./ThemeToggle.module.scss";

type ThemeToggleProps = {
  className?: string;
  buttonType?: "icon" | "text";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, buttonType = "text", ...rest }, ref) => {
    const { theme, setTheme } = useTheme();

    const isDark = theme === "dark";

    return (
      <button
        type="button"
        ref={ref}
        {...rest}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={clsx(
          className,
          styles.toggle,
          buttonType === "icon" && styles.iconSize
        )}
      >
        {isDark ? <Sun size={16} /> : <Moon size={16} />}
        {buttonType === "text" && (
          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
        )}
      </button>
    );
  }
);
