import { smoothSpring } from "@/lib/animation";
import { motion } from "motion/react";

export function SectionSubitemHeader({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-medium text-yellow-500 *:inline">
      {children}
    </span>
  );
}

export function SectionSubitemBody({ children }) {
  return <span> {children}</span>;
}

const variants = {
  hide: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
};

export function SectionSubitem({ children }) {
  return (
    <motion.p
      variants={variants}
      transition={smoothSpring}
      className="*:align-middle"
    >
      {children}
    </motion.p>
  );
}

export function SectionSubgrid({ children }) {
  return (
    <div className="grid md:grid-cols-2 p-4 md:p-10 gap-10">{children}</div>
  );
}
