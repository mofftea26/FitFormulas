import TextReveal from "@/components/animatedComponents/TextReveal/TextReveal";
import clsx from "clsx";
import { useRef } from "react";
import useCtaAnimation from "./hooks/useCtaAnimation";
import styles from "./LandingPage.module.scss";
import { ThemeToggle } from "@/components/providers/ThemeProvider/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/providers/ThemeProvider/ThemeProvider";
const LandingPage = () => {
  const { theme } = useTheme();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);

  useCtaAnimation({ ref: buttonRef });
  useCtaAnimation({ ref: themeToggleRef, delay: 0.1 });
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
    </div>
  );
};

export default LandingPage;
