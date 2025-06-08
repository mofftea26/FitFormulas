import Navbar from "@/components/layout/Navbar/Navbar";
import MifflinStJeorForm from "./components/MifflinStJeorForm/MifflinStJeorForm";
import clsx from "clsx";
import styles from "./MifflinStJeorPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import CalculatorResults from "../../components/CalculatorResults/CalculatorResults";
import { useState } from "react";

const MifflinStJeorPage = () => {
  const { theme } = useTheme();
  const [bmr, setBmr] = useState<number>(0);

  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Mifflin-St Jeor BMR Calculator
        </h1>
        <div className={styles.form}>
          <MifflinStJeorForm setBmr={setBmr} />
          <CalculatorResults result={bmr.toString()} label="BMR" unit="kcal" />
        </div>
      </main>
    </div>
  );
};

export default MifflinStJeorPage;
