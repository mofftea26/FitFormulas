import TextReveal from "@/components/animatedComponents/TextReveal/TextReveal";
import { Button } from "@/components/ui/button";
import styles from "./CTASection.module.scss";
import clsx from "clsx";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
import useCtaAnimation from "../../hooks/useCtaAnimation";
import { useRef } from "react";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { motion, MotionValue, useTransform } from "framer-motion";

const CTASection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const { theme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);

  useCtaAnimation({ ref: buttonRef });
  useCtaAnimation({ ref: themeToggleRef, delay: 0.1 });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-1/2 bg-primary-50 z-10"
      style={{ scale, rotate }}
    >
      <TextReveal
        as="h1"
        text="FitFormulas"
        containerClassName={styles.titleContainer}
        textClassName={styles.titleText}
        duration={0.7}
        delay={0}
      />
      <TextReveal
        as="p"
        splitBy="lines"
        textClassName={"text-sm"}
        text="Your personalized fitness & nutrition SaaS — calculate BMR, macros,
  micros, body composition, and more."
        duration={1}
        delay={0.8}
      />
      <div className="flex items-center gap-2">
        <Button
          className={clsx(
            styles.button,
            styles.cta,
            theme === "dark" && styles.darkCta,
            "px-7 py-5"
          )}
          variant="default"
          ref={buttonRef}
          size="lg"
        >
          Get Started
        </Button>
        <ThemeToggle ref={themeToggleRef} className={clsx(styles.button)} />
      </div>
    </motion.div>
  );
};

export default CTASection;
