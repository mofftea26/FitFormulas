import React from "react";
import { useMemo, useRef } from "react";

export const useSplitText = (
  text: string,
  splitBy: "chars" | "words" | "lines" = "chars"
) => {
  const refs = useRef<React.RefObject<HTMLSpanElement | null>[]>([]);

  const items = useMemo(() => {
    refs.current = [];

    if (splitBy === "lines") {
      return text.split("\n").map((line, i) => {
        const lineRef = React.createRef<HTMLSpanElement>();
        refs.current.push(lineRef);
        return {
          id: i,
          value: line,
          ref: lineRef,
        };
      });
    }

    const split = splitBy === "words" ? text.split(" ") : text.split("");
    return split.map((value, i) => {
      const ref = React.createRef<HTMLSpanElement>();
      refs.current.push(ref);
      return {
        id: i,
        value: value + (splitBy === "words" ? " " : ""),
        ref,
      };
    });
  }, [text, splitBy]);

  return { items };
};
