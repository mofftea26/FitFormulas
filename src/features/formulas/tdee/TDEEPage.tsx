import Navbar from "@/components/layout/Navbar/Navbar";
import TDEEForm from "./components/TDEEForm/TDEEForm";
import clsx from "clsx";
import styles from "./TDEEPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import Card from "@/components/ui/Card/Card";

const TDEEPage = () => {
  const { theme } = useTheme();
  const [tdee, setTdee] = useState<number>(0);

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Total Daily Energy Expenditure
        </h1>
        <div className={styles.form}>
          <Card>
            <TDEEForm setTdee={setTdee} />
          </Card>
          {tdee !== 0 && (
            <CalculatorResults
              result={tdee.toString()}
              label="TDEE"
              unit="kcal"
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default TDEEPage;
