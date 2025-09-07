import { cubicBezier, motion, useTransform } from "motion/react";

export function Box({ scrollPosition, offset, children }) {
  const opacity = useTransform(scrollPosition, [offset, 0.4 + offset], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="flex flex-col p-8 flex-1 bg-neutral-950 border border-white/5 rounded-lg"
    >
      {children}
    </motion.div>
  );
}
