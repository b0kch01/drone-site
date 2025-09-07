import { useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Box } from "../Box";

export function Boxes({ scrollPosition }) {
  const sectionRef = useRef(null);

  const localScrollPosition = useTransform(
    scrollPosition,
    [100 / 200, 1],
    [0, 1],
  );

  useMotionValueEvent(localScrollPosition, "change", console.log);

  return (
    <div ref={sectionRef} className="flex flex-col p-10 w-full gap-10">
      <div className="flex h-[40vh] gap-4">
        <Box scrollPosition={localScrollPosition} offset={0}>
          <h2 className="text-4xl font-medium">AI Technology</h2>
          <p>Lorem ipsum</p>
        </Box>
      </div>
      <div className="flex h-[40vh] gap-4">
        <Box scrollPosition={localScrollPosition} offset={0.6}>
          <h2 className="text-4xl font-medium">AI Technology</h2>
          <p>Lorem ipsum</p>
        </Box>
      </div>
    </div>
  );
}
