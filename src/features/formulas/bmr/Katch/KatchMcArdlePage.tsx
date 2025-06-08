import Navbar from "@/components/layout/Navbar/Navbar";
import KatchMcArdleForm from "./components/KatchMcArdleForm/KatchMcArdleForm";
import clsx from "clsx";
import styles from "./KatchMcArdlePage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../../components/CalculatorResults/CalculatorResults";
import { useState } from "react";

const KatchMcArdlePage = () => {
  const { theme } = useTheme();
  const [bmr, setBmr] = useState<number>(0);
  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Katch-McArdle BMR Calculator
        </h1>
        <div className={styles.form}>
          <KatchMcArdleForm setBmr={setBmr} />
          <CalculatorResults result={bmr.toString()} label="BMR" unit="kcal" />
        </div>
      </main>
    </div>
  );
};

export default KatchMcArdlePage;
