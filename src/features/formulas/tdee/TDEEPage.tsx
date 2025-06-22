import TDEEForm from "./components/TDEEForm/TDEEForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./TDEEPage.module.scss";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";
import { TDEEInput } from "@/utils/coreFunctions";

const TDEEPage = () => {
  const [tdee, setTdee] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<TDEEInput | null>(null);

  return (
    <CalculatorLayout title="Total Daily Energy Expenditure">
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
            <CalculatorResults
              result={tdee.toString()}
              label="TDEE"
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

export default TDEEPage;
