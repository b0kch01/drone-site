import { motion, stagger, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { smoothSpring } from "@/lib/animation";

import {
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from "./SectionHeader";
import { SectionSeparator } from "./SectionSeparator";
import {
  SectionSubgrid,
  SectionSubitem,
  SectionSubitemBody,
  SectionSubitemHeader,
} from "./SectionSubgrid";

function Section({ children }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 1], [0, 1, 1, 0]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["blur(10px)", "blur(0px)"],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ filter: blur, opacity, scale }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <motion.div
        className="relative md:m-10 m-4 max-w-2xl"
        initial="hide"
        whileInView="show"
        viewport={{ amount: "some", margin: "0% 0% -33% 0%" }}
        transition={{ delayChildren: stagger(0.1) }}
      >
        <div className="absolute w-1 h-1 bg-foreground top-0 left-0" />
        <div className="absolute w-1 h-1 bg-foreground top-0 right-0" />
        <div className="absolute w-1 h-1 bg-foreground bottom-0 left-0" />
        <div className="absolute w-1 h-1 bg-foreground bottom-0 right-0" />

        {children}
      </motion.div>
    </motion.div>
  );
}

Section.Header = SectionHeader;
Section.Description = SectionDescription;
Section.Title = SectionTitle;
Section.Separator = SectionSeparator;
Section.Subgrid = SectionSubgrid;
Section.Subitem = SectionSubitem;
Section.SubitemBody = SectionSubitemBody;
Section.SubitemHeader = SectionSubitemHeader;

export { Section };
