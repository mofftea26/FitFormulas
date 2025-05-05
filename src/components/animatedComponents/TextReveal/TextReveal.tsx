import { useRef, ElementType, createElement } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import styles from "./TextReveal.module.scss";

type TextRevealProps = {
  text: string;
  as?: ElementType;
  splitBy?: "chars" | "words" | "lines";
  containerClassName?: string;
  boxClassName?: string;
  textClassName?: string;
  duration?: number;
  delay?: number;
};

const TextReveal = ({
  text,
  as = "h1",
  splitBy = "chars",
  containerClassName,
  boxClassName,
  textClassName,
  duration = 2,
  delay = 0,
}: TextRevealProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLElement>(null);

  const isParagraph = as === "p";
  const noRotation = splitBy === "lines" || splitBy === "words";
  const noY = splitBy === "lines";
  const stagger = 0.05;

  useGSAP(() => {
    if (!textRef.current || !containerRef.current) return;

    const split = new SplitText(textRef.current, {
      type: splitBy,
    });

    const targets =
      splitBy === "lines"
        ? split.lines
        : splitBy === "words"
        ? split.words
        : split.chars;

    const box = containerRef.current.querySelector(
      splitBy === "lines" ? ".multi-box" : ".single-box"
    );

    const tl = gsap.timeline({ delay });

    if (box) {
      tl.to(box, {
        xPercent: 101,
        transformOrigin: "left",
        duration: duration * 1.5,
        ease: "power2.out",
      });
    }

    tl.fromTo(
      targets,
      {
        opacity: 0,
        x: 100,
        ...(noRotation ? {} : { rotation: 60 }),
        ...(noY ? {} : { y: 100 }),
      },
      {
        opacity: 1,
        x: 0,
        ...(noRotation ? {} : { rotation: 0 }),
        ...(noY ? {} : { y: 0 }),
        duration: duration * 0.5,
        ease: "back.out(1.4)",
        stagger,
      },
      "<"
    );

    return () => {
      split.revert(); // Clean up
    };
  }, [splitBy, duration, delay]);

  const Tag = as;

  return (
    <div
      className={clsx(
        styles.titleContainer,
        isParagraph && styles.descriptionContainer,
        containerClassName
      )}
      ref={containerRef}
    >
      {splitBy === "lines" ? (
        <div className={styles.linesWrapper}>
          <div className={clsx(styles.titleBox, "multi-box", boxClassName)} />
          {createElement(
            Tag,
            {
              className: clsx(
                styles.titleText,
                isParagraph && styles.descriptionText,
                textClassName
              ),
              ref: textRef,
            },
            text
          )}
        </div>
      ) : (
        <>
          <div className={clsx(styles.titleBox, "single-box", boxClassName)} />
          {createElement(
            Tag,
            {
              className: clsx(
                styles.titleText,
                isParagraph && styles.descriptionText,
                textClassName
              ),
              ref: textRef,
            },
            text
          )}
        </>
      )}
    </div>
  );
};

export default TextReveal;
