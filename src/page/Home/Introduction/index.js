import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Introduction() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(5px)", "blur(0px)"],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={sectionRef}
      className="relative flex flex-col items-center min-h-[200vh]"
    >
      <div className="sticky overflow-hidden top-0 flex flex-col items-center justify-center min-h-screen">
        <motion.h1
          className="text-2xl lg:text-5xl md:text-4xl text-center tracking-tighter leading-[1.1] p-5 text-foreground/50 max-w-6xl"
          style={{ opacity, scale, filter: blur }}
        >
          <span className="text-foreground">Myotis</span> brings
          state-of-the-art autonomy and AI computer vision to drones. Our
          modular payload transforms standard UAVs into first-responder assets,
          delivering on-edge intelligence and secure, mission-critical insights
          without reliance on the cloud.
        </motion.h1>
      </div>

      <span id="tech" className="z-[-5] bottom-0 absolute min-h-screen" />
    </div>
  );
}
