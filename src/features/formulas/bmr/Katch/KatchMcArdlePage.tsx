import KatchMcArdleForm from "./components/KatchMcArdleForm/KatchMcArdleForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./KatchMcArdlePage.module.scss";
import CalculatorResults from "../../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { KatchMcArdleInput } from "@/utils/coreFunctions/bmr/types";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";

const KatchMcArdlePage = () => {
  const [bmr, setBmr] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<KatchMcArdleInput | null>(null);

  return (
    <CalculatorLayout title="Katch-McArdle BMR Calculator">
      <motion.div
        className={clsx(styles.card)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={clsx(styles.face, styles.front)}>
          <KatchMcArdleForm
            onCalculate={(bmr, values) => {
              setFormValues(values);
              setBmr(bmr);
              setIsFlipped(true);
            }}
            onClear={() => {
              setBmr(0);
              setFormValues(null);
              setIsFlipped(false);
            }}
          />
        </div>

        {formValues && (
          <div className={clsx(styles.face, styles.back)}>
            <UserValues values={formValues} />
            <CalculatorResults
              result={bmr.toString()}
              label="BMR"
              unit="kcal"
            />
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

export default KatchMcArdlePage;
