import TextReveal from "@/components/animatedComponents/TextReveal/TextReveal";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import useCtaAnimation from "../../hooks/useCtaAnimation";
import styles from "./CTASection.module.scss";

const CTASection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
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
        <Link to="/dashboard">
          <button className={clsx(styles.button, styles.cta)} ref={buttonRef}>
            Get Started
          </button>
        </Link>
        <ThemeToggle
          ref={themeToggleRef}
          className={clsx(styles.button)}
          buttonType="icon"
        />
      </div>
    </motion.div>
  );
};

export default CTASection;
