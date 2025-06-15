import Navbar from "@/components/layout/Navbar/Navbar";
import MacrosForm from "./components/MacrosForm/MacrosForm";
import clsx from "clsx";
import styles from "./MacrosPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import Card from "@/components/ui/Card/Card";

export type MacroResults = {
  protein: number;
  fats: number;
  carbs: number;
};

const MacrosPage = () => {
  const { theme } = useTheme();
  const [macros, setMacros] = useState<MacroResults | null>(null);

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Macronutrient Calculator
        </h1>
        <div className={styles.form}>
          <Card>
            <MacrosForm setMacros={setMacros} />
          </Card>
          {macros &&
            macros.protein !== 0 &&
            macros.fats !== 0 &&
            macros.carbs !== 0 && (
              <div className={styles.results}>
                <CalculatorResults
                  result={macros.protein.toString()}
                  label="Protein"
                  unit="g"
                />
                <CalculatorResults
                  result={macros.fats.toString()}
                  label="Fats"
                  unit="g"
                />
                <CalculatorResults
                  result={macros.carbs.toString()}
                  label="Carbs"
                  unit="g"
                />
              </div>
            )}
        </div>
      </main>
    </div>
  );
};

export default MacrosPage;
