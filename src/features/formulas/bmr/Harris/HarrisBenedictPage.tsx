import HarrisBenedictForm from "./components/HarrisBenedictForm/HarrisBenedictForm";
import clsx from "clsx";
import styles from "./HarrisBenedictPage.module.scss";
import CalculatorResults from "../../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { HarrisBenedictInput } from "@/utils/coreFunctions/bmr/types";
import UserValues from "./components/UserValues/UserValues";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";

const HarrisBenedictPage = () => {
  const [bmr, setBmr] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<HarrisBenedictInput | null>(null);

  return (
    <CalculatorLayout title="Harris-Benedict BMR Calculator">
      <motion.div
        className={clsx(styles.card)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Face: Form */}
        <div className={clsx(styles.face, styles.front)}>
          <HarrisBenedictForm
            onCalculate={(bmr, values) => {
              setFormValues(values);
              setBmr(bmr);
              setIsFlipped(true);
            }}
            onClear={() => {
              setBmr(0);
              setFormValues(null);
              setIsFlipped(false); // unflip
            }}
          />
        </div>

        {/* Back Face: Result + Entered Values */}
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

export default HarrisBenedictPage;
