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
    <motion.div
      className="h-1/2 bg-primary-500 sticky top-0 z-0 flex items-center justify-center flex-col gap-4"
      style={{ scale, rotate }}
    >
      <TextReveal
        as="h1"
        text="Welcome to FitFormulas"
        containerClassName={styles.titleContainer}
        textClassName={styles.titleText}
        boxClassName={styles.titleBox}
        duration={1}
      />
      <ChevronsDown className="w-20 h-20 text-primary-50 mt-auto animate-bounce" />
    </motion.div>
  );
};

export default WelcomeSection;
