import Navbar from "@/components/layout/Navbar/Navbar";
import MifflinStJeorForm from "./components/MifflinStJeorForm";
import clsx from "clsx";
import styles from "./MifflinStJeorPage.module.scss";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";

const MifflinStJeorPage = () => {
  const { theme } = useTheme();
  return (
    <div className={clsx(styles.page)}>
      <Navbar />
      <main className={clsx(styles.main)}>
        <h1 className={clsx(styles.heading, theme === "dark" && styles.dark)}>
          Mifflin-St Jeor BMR Calculator
        </h1>
        <MifflinStJeorForm />
      </main>
    </div>
  );
};

export default MifflinStJeorPage;
