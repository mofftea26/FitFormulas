import TextReveal from "@/components/animatedComponents/TextReveal/TextReveal";
import clsx from "clsx";
import { useRef } from "react";
import useCtaAnimation from "./hooks/useCtaAnimation";
import styles from "./LandingPage.module.scss";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  useCtaAnimation(buttonRef);
  return (
    <div className={styles.container}>
      <h1 className="text-primary-500">FitFormulas</h1>
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
        className={clsx(styles.cta, "mb-2 text-primary-200")}
        variant="default"
        ref={buttonRef}
      >
        Get Started
      </Button>
      <ThemeToggle />
    </div>
  );
};

export default LandingPage;
