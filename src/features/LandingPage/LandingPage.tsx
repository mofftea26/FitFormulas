import { useLenis } from "@/hooks/useLenis";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import CTASection from "./components/CTASection/CTASection";
import WelcomeSection from "./components/WelcomeSection/WelcomeSection";
import useCtaAnimation from "./hooks/useCtaAnimation";
import styles from "./LandingPage.module.scss";
import useRootHeightByRoute from "./hooks/useRootHeightByRoute";

const LandingPage = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const themeToggleRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useCtaAnimation({ ref: buttonRef });
  useCtaAnimation({ ref: themeToggleRef, delay: 0.1 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useLenis();
  useRootHeightByRoute();

  return (
    <main className={styles.container} ref={containerRef}>
      <WelcomeSection scrollYProgress={scrollYProgress} />
      <CTASection scrollYProgress={scrollYProgress} />
    </main>
  );
};

export default LandingPage;
