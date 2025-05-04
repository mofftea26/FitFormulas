import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

const useCtaAnimation = (buttonRef: RefObject<HTMLButtonElement | null>) => {
  useGSAP(() => {
    if (!buttonRef?.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      buttonRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(0.8, 0.3)",
        stagger: 0.2,
        delay: 1.5,
      }
    ).fromTo(
      buttonRef.current,
      { scaleX: 1.5, scaleY: 0.5 },
      {
        scaleX: 1,
        scaleY: 1,
        duration: 1.5,
        ease: "elastic.out(0.8, 0.3)",
        stagger: 0.2,
      },
      "<"
    );
  });
};

export default useCtaAnimation;
