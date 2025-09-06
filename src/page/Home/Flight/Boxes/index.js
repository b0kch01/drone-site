import { useScroll } from "motion/react";
import { useRef } from "react";
import { Box } from "../Box";

export function Boxes() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  return (
    <div ref={sectionRef} className="flex flex-col p-10 w-full gap-4">
      <div className="flex h-[35vh] gap-4">
        <Box scrollPosition={scrollYProgress} offset={0} />
        <Box scrollPosition={scrollYProgress} offset={0.2} />
      </div>
      <div className="flex h-[35vh] gap-4">
        <Box scrollPosition={scrollYProgress} offset={0.4} />
        <Box scrollPosition={scrollYProgress} offset={0.6} />
      </div>
    </div>
  );
}
