import TextReveal from "@/components/animatedComponents/TextReveal/TextReveal";
import Button from "@/components/ui/Button/Button";
import clsx from "clsx";
import { useRef } from "react";
import useCtaAnimation from "./hooks/useCtaAnimation";
import styles from "./LandingPage.module.scss";
const LandingPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useCtaAnimation(buttonRef);
  return (
    <div className={styles.container}>
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
        textClassName={styles.descriptionText}
        containerClassName={styles.descriptionContainer}
        text="Your personalized fitness & nutrition SaaS — calculate BMR, macros,
        micros, body composition, and more."
        duration={1}
        delay={0.8}
      />
      <Button
        className={clsx(styles.cta)}
        variant="default"
        size="large"
        ref={buttonRef}
      >
        Get Started
      </Button>
    </div>
  );
};

export default LandingPage;
