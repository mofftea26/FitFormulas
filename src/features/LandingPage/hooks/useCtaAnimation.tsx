import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

type UseCtaAnimationProps = {
  ref: RefObject<HTMLElement | null>;
  delay?: number;
};

const useCtaAnimation = ({ ref, delay = 0 }: UseCtaAnimationProps) => {
  useGSAP(() => {
    if (!ref?.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top 75%", // Animation starts when element top reaches bottom of viewport
        end: "bottom top", // Animation ends when element bottom leaves top of viewport
        toggleActions: "play reverse play reverse", // Plays on enter, reverses on leave
      },
    });

    tl.fromTo(
      ref.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic.out(0.8, 0.3)",
        delay,
      }
    ).fromTo(
      ref.current,
      { scaleX: 1.5, scaleY: 0.5 },
      {
        scaleX: 1,
        scaleY: 1,
        duration: 1.5,
        ease: "elastic.out(0.8, 0.3)",
      },
      "<"
    );
  }, [ref, delay]);
};

export default useCtaAnimation;
