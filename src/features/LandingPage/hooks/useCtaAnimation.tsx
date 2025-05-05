import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";
type UseCtaAnimationProps = {
  ref: RefObject<HTMLButtonElement | null>;
  delay?: number;
};
const useCtaAnimation = ({ ref, delay = 0 }: UseCtaAnimationProps) => {
  useGSAP(() => {
    if (!ref?.current) return;
    const tl = gsap.timeline();
    tl.fromTo(
      ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(0.8, 0.3)",
        stagger: 0.2,
        delay: 1.5 + delay,
      }
    ).fromTo(
      ref.current,
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
