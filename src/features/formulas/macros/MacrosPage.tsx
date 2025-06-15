import Navbar from "@/components/layout/Navbar/Navbar";
import MacrosForm from "./components/MacrosForm/MacrosForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./MacrosPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { MacroInput } from "@/utils/coreFunctions/macros/types";

export type MacroResults = {
  protein: number;
  fats: number;
  carbs: number;
};

const MacrosPage = () => {
  const { theme } = useTheme();
  const [macros, setMacros] = useState<MacroResults | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<MacroInput | null>(null);

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Macronutrient Calculator
        </h1>
        <motion.div
          className={clsx(styles.card)}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={clsx(styles.face, styles.front)}>
            <MacrosForm
              onCalculate={(res, values) => {
                setMacros(res);
                setFormValues(values);
                setIsFlipped(true);
              }}
              onClear={() => {
                setMacros(null);
                setFormValues(null);
                setIsFlipped(false);
              }}
            />
          </div>

          {macros && formValues && (
            <div className={clsx(styles.face, styles.back)}>
              <UserValues values={formValues} />
              <div className={styles.results}>
                <CalculatorResults result={macros.protein.toString()} label="Protein" unit="g" />
                <CalculatorResults result={macros.fats.toString()} label="Fats" unit="g" />
                <CalculatorResults result={macros.carbs.toString()} label="Carbs" unit="g" />
              </div>
              <button
                onClick={() => setIsFlipped(false)}
                className={clsx(styles.btnOutline)}
              >
                Go Back
              </button>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default MacrosPage;
