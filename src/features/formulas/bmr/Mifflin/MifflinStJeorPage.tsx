import MifflinStJeorForm from "./components/MifflinStJeorForm/MifflinStJeorForm";
import clsx from "clsx";
import styles from "./MifflinStJeorPage.module.scss";
import CalculatorResults from "../../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { MifflinStJeorInput } from "@/utils/coreFunctions/bmr/types";
import UserValues from "./components/UserValues/UserValues";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";

const MifflinStJeorPage = () => {
  const [bmr, setBmr] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<MifflinStJeorInput | null>(null);

  return (
    <CalculatorLayout title="Mifflin-St Jeor BMR Calculator">
      <motion.div
        className={clsx(styles.card)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Face: Form */}
        <div className={clsx(styles.face, styles.front)}>
          <MifflinStJeorForm
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

export default MifflinStJeorPage;
