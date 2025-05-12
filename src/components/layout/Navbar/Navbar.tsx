import { Link } from "@tanstack/react-router";
import styles from "./Navbar.module.scss";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import clsx from "clsx";

const Navbar = () => {
  const { theme } = useTheme();
  return (
    <nav className={clsx(styles.navbar, theme === "dark" && styles.dark)}>
      <div className={styles.container}>
        <Link to="/dashboard" className={styles.brand}>
          FitFormulas
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link to="/dashboard" activeProps={{ className: styles.active }}>
              Dashboard
            </Link>
          </li>
        </ul>
        <ThemeToggle className={styles.themeToggle} buttonType="icon" />
      </div>
    </nav>
  );
};

export default Navbar;
