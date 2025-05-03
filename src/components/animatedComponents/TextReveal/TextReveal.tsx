import { useLayoutEffect, useRef, ElementType, createElement } from "react";
import gsap from "gsap";
import clsx from "clsx";
import { useSplitText } from "@/hooks/useSplitText";
import styles from "./TextReveal.module.scss";

type TextRevealProps = {
  text: string;
  as?: ElementType;
  splitBy?: "chars" | "words" | "lines";
  containerClassName?: string;
  boxClassName?: string;
  textClassName?: string;
  duration?: number; // total per block
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
  const { items } = useSplitText(text, splitBy);

  const isParagraph = as === "p";
  const noRotation = splitBy === "lines" || splitBy === "words";
  const noY = splitBy === "lines";
  const stagger = 0.1;
  const boxDur =
    splitBy === "lines"
      ? duration * 0.6
      : duration * 0.6 + (items.length - 1) * stagger;
  const textDur = duration * 0.4;

  useLayoutEffect(() => {
    if (!containerRef.current || !items.every((item) => item.ref.current))
      return;

    const tl = gsap.timeline({ delay });

    if (splitBy === "lines") {
      items.forEach((item, i) => {
        const box = containerRef.current?.querySelector(`.box-${i}`);
        if (!box || !item.ref.current) return;

        tl.to(box, {
          xPercent: 101,
          transformOrigin: "left",
          duration: boxDur,
          ease: "power2.out",
        });

        tl.fromTo(
          item.ref.current,
          {
            opacity: 0,
            x: 100,
            ...(noRotation ? {} : { rotation: 120 }),
            ...(noY ? {} : { y: 10 }),
          },
          {
            opacity: 1,
            x: 0,
            ...(noRotation ? {} : { rotation: 0 }),
            ...(noY ? {} : { y: 0 }),
            duration: textDur,
            ease: "back.out(1.4)",
          },
          "<"
        );
      });
    } else {
      const all = items.map((item) => item.ref.current);
      const box = containerRef.current?.querySelector(".single-box");
      if (!box) return;
      tl.to(box, {
        xPercent: 101,
        transformOrigin: "left",
        duration: boxDur,
        ease: "power3.out",
      }).fromTo(
        all,
        {
          opacity: 0,
          x: 100,
          ...(noRotation ? {} : { rotation: 120 }),
          ...(noY ? {} : { y: 10 }),
        },
        {
          opacity: 1,
          x: 0,
          ...(noRotation ? {} : { rotation: 0 }),
          ...(noY ? {} : { y: 0 }),
          duration: textDur,
          stagger,
        },
        "<"
      );
    }
  }, [items, splitBy, as, duration, delay]);

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
          {items.map((item, i) => (
            <div className={styles.lineGroup} key={item.id}>
              <div
                className={clsx(styles.titleBox, `box-${i}`, boxClassName)}
              />
              {createElement(
                Tag,
                {
                  className: clsx(
                    styles.titleText,
                    isParagraph && styles.descriptionText,
                    textClassName
                  ),
                  ref: item.ref,
                },
                item.value
              )}
            </div>
          ))}
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
            },
            items.map((item) => (
              <span key={item.id} ref={item.ref}>
                {item.value}
              </span>
            ))
          )}
        </>
      )}
    </div>
  );
};

export default TextReveal;
