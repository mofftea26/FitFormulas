import BodyCompositionForm from "./components/BodyCompositionForm/BodyCompositionForm";
import UserValues from "./components/UserValues/UserValues";
import clsx from "clsx";
import styles from "./BodyCompositionPage.module.scss";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import { motion } from "framer-motion";
import type { BodyFatInput } from "@/utils/coreFunctions/body-composition/types";
import { truncateTo2Digits } from "@/utils/helpers/helperFunctions";
import CalculatorLayout from "@/components/layout/PageLayouts/CalculatorLayout/CalculatorLayout";

const BodyCompositionPage = () => {
  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const [leanMass, setLeanMass] = useState<number | null>(null);
  const [fatMass, setFatMass] = useState<number | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formValues, setFormValues] = useState<
    (BodyFatInput & { weight: number }) | null
  >(null);

  return (
    <CalculatorLayout title="Body Composition Calculator">
      <motion.div
        className={clsx(styles.card)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={clsx(styles.face, styles.front)}>
          <BodyCompositionForm
            onCalculate={(bf, lm, fm, values) => {
              setBodyFat(bf);
              setLeanMass(lm);
              setFatMass(fm);
              setFormValues(values);
              setIsFlipped(true);
            }}
            onClear={() => {
              setBodyFat(null);
              setLeanMass(null);
              setFatMass(null);
              setFormValues(null);
              setIsFlipped(false);
            }}
          />
        </div>

        {formValues && (
          <div className={clsx(styles.face, styles.back)}>
            <UserValues values={formValues} />
            {bodyFat !== null && bodyFat !== 0 && (
              <CalculatorResults
                result={truncateTo2Digits(bodyFat).toString()}
                label="Body Fat %"
                unit="%"
              />
            )}
            {leanMass !== null && leanMass !== 0 && (
              <CalculatorResults
                result={truncateTo2Digits(leanMass).toString()}
                label="Lean Body Mass"
                unit="kg"
              />
            )}
            {fatMass !== null && fatMass !== 0 && (
              <CalculatorResults
                result={truncateTo2Digits(fatMass).toString()}
                label="Fat Mass"
                unit="kg"
              />
            )}
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

export default BodyCompositionPage;
