import { Moon, Sun } from "lucide-react";
import { useTheme } from "../ThemeProvider";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { forwardRef } from "react";

type ThemeToggleProps = {
  className?: string;
  type?: "icon" | "text";
} & React.ComponentProps<typeof Button>;

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  (props, ref) => {
    const { theme, setTheme } = useTheme();

    return (
      <Button
        className={clsx(
          props.className,
          "text-primary-500 hover:bg-primary-500 hover:text-primary-50"
        )}
        variant="outline"
        size={props.type === "icon" ? "icon" : "lg"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        ref={ref}
      >
        {theme === "dark" ? (
          <>
            <Sun size={16} />
            {props.type === "text" && <span>Light Mode</span>}
          </>
        ) : (
          <>
            <Moon size={16} />
            {props.type === "text" && <span>Dark Mode</span>}
          </>
        )}
      </Button>
    );
  }
);
