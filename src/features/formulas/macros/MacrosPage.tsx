import MacrosForm from "./components/MacrosForm/MacrosForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./MacrosPage.module.scss";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { MacroInput } from "@/utils/coreFunctions/macros/types";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";

export type MacroResults = {
  protein: { grams: number; kcal: number };
  fats: { grams: number; kcal: number };
  carbs: { grams: number; kcal: number };
};

const MacrosPage = () => {
  const [macros, setMacros] = useState<MacroResults | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<MacroInput | null>(null);

  return (
    <CalculatorLayout title="Macronutrient Calculator">
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
            <div className={styles.resultsContainer}>
              <div className={styles.results}>
                <CalculatorResults
                  result={macros.protein.grams.toString()}
                  label="Protein"
                  unit="g"
                />
                <CalculatorResults
                  result={macros.fats.grams.toString()}
                  label="Fats"
                  unit="g"
                />
                <CalculatorResults
                  result={macros.carbs.grams.toString()}
                  label="Carbs"
                  unit="g"
                />
              </div>
              <div className={styles.results}>
                <CalculatorResults
                  result={macros.protein.kcal.toString()}
                  label="Protein"
                  unit="kcal"
                />
                <CalculatorResults
                  result={macros.fats.kcal.toString()}
                  label="Fats"
                  unit="kcal"
                />
                <CalculatorResults
                  result={macros.carbs.kcal.toString()}
                  label="Carbs"
                  unit="kcal"
                />
              </div>
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
    </CalculatorLayout>
  );
};

export default MacrosPage;
