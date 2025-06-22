// src/components/layout/CalculatorLayout/CalculatorLayout.tsx

import Navbar from "@/components/layout/Navbar/Navbar";
import BackButton from "@/components/ui/BackButton/BackButton";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import clsx from "clsx";
import styles from "./CalculatorLayout.module.scss";

type CalculatorLayoutProps = {
  title: string;
  children: React.ReactNode;
  showBackButton?: boolean;
};

const CalculatorLayout = ({
  title,
  children,
  showBackButton = true,
}: CalculatorLayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          {title}
        </h1>
        {showBackButton && <BackButton />}
        {children}
      </main>
    </div>
  );
};

export default CalculatorLayout;
