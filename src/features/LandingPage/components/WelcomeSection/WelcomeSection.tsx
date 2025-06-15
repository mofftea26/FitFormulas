import TextReveal from "@/components/animatedComponents/TextReveal/TextReveal";
import styles from "./WelcomeSection.module.scss";
import { motion, MotionValue, useTransform } from "framer-motion";
import { ChevronsDown } from "lucide-react";

type WelcomeSectionProps = {
  scrollYProgress: MotionValue<number>;
};

const WelcomeSection = ({ scrollYProgress }: WelcomeSectionProps) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div className={styles.container} style={{ scale, rotate }}>
      <TextReveal
        as="h1"
        text="Welcome to FitFormulas"
        containerClassName={styles.titleContainer}
        textClassName={styles.titleText}
        boxClassName={styles.titleBox}
        duration={1}
      />
      <ChevronsDown className={styles.chevron} />
    </motion.div>
  );
};

export default WelcomeSection;
