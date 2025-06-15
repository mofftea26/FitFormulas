import Navbar from "@/components/layout/Navbar/Navbar";
import TDEEForm from "./components/TDEEForm/TDEEForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./TDEEPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { TDEEInput } from "@/utils/coreFunctions/tdee/types";

const TDEEPage = () => {
  const { theme } = useTheme();
  const [tdee, setTdee] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<TDEEInput | null>(null);

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Total Daily Energy Expenditure
        </h1>

        <motion.div
          className={clsx(styles.card)}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className={clsx(styles.face, styles.front)}>
            <TDEEForm
              onCalculate={(val, values) => {
                setFormValues(values);
                setTdee(val);
                setIsFlipped(true);
              }}
              onClear={() => {
                setTdee(0);
                setFormValues(null);
                setIsFlipped(false);
              }}
            />
          </div>

          {formValues && (
            <div className={clsx(styles.face, styles.back)}>
              <UserValues values={formValues} />
              <CalculatorResults result={tdee.toString()} label="TDEE" unit="kcal" />
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

export default TDEEPage;
