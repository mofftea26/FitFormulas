import MicrosForm from "./components/MicrosForm/MicrosForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./MicrosPage.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import type { MicrosInput } from "@/utils/coreFunctions/micros/types";
import type { MicronutrientRecommendations } from "@/utils/coreFunctions/micros/types";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";

const MicrosPage = () => {
  const [recs, setRecs] = useState<MicronutrientRecommendations | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<MicrosInput | null>(null);

  return (
    <CalculatorLayout title="Micronutrient Recommendations">
      <motion.div
        className={clsx(styles.card)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={clsx(styles.face, styles.front)}>
          <MicrosForm
            onCalculate={(res, values) => {
              setRecs(res);
              setFormValues(values);
              setIsFlipped(true);
            }}
            onClear={() => {
              setRecs(null);
              setFormValues(null);
              setIsFlipped(false);
            }}
          />
        </div>

        {recs && formValues && (
          <div className={clsx(styles.face, styles.back)}>
            <UserValues values={formValues} />
            <ul className={styles.results}>
              {Object.entries(recs).map(([nutrient, val]) => (
                <li key={nutrient}>
                  <strong>{nutrient}:</strong> {val}
                </li>
              ))}
            </ul>
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

export default MicrosPage;
