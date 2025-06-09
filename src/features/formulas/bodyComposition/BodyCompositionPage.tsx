import Navbar from "@/components/layout/Navbar/Navbar";
import BodyCompositionForm from "./components/BodyCompositionForm/BodyCompositionForm";
import clsx from "clsx";
import styles from "./BodyCompositionPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../components/CalculatorResults/CalculatorResults";
import { useState } from "react";
import Card from "@/components/ui/Card/Card";

const BodyCompositionPage = () => {
  const { theme } = useTheme();

  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const [leanMass, setLeanMass] = useState<number | null>(null);
  const [fatMass, setFatMass] = useState<number | null>(null);

  const handleEstimate = (
    bodyFat: number,
    leanMass: number,
    fatMass: number
  ) => {
    setBodyFat(bodyFat);
    setLeanMass(leanMass);
    setFatMass(fatMass);
  };

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Body Composition Calculator
        </h1>
        <div className={styles.formContainer}>
          <Card className={styles.form}>
            <BodyCompositionForm onEstimate={handleEstimate} />
          </Card>
          <div className={styles.results}>
            {bodyFat !== null && (
              <CalculatorResults
                result={bodyFat.toString()}
                label="Body Fat %"
                unit="%"
              />
            )}
            {leanMass !== null && (
              <CalculatorResults
                result={leanMass.toString()}
                label="Lean Body Mass"
                unit="kg"
              />
            )}
            {fatMass !== null && (
              <CalculatorResults
                result={fatMass.toString()}
                label="Fat Mass"
                unit="kg"
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BodyCompositionPage;
