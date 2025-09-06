import { cubicBezier, motion, useTransform } from "motion/react";

export function Box({ scrollPosition, offset }) {
  const y = useTransform(scrollPosition, [0, 1], [`${offset * 50}vh`, "0vh"]);
  const opacity = useTransform(
    scrollPosition,
    [offset, 0.4 + offset],
    [0.2, 1],
  );

  return (
    <motion.div
      style={{ y, opacity }}
      className="flex flex-col justify-center items-center flex-1 bg-neutral-950 border border-white/5 rounded-lg"
    >
      Hello, World!
    </motion.div>
  );
}
