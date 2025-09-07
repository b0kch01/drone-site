import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useSpring,
} from "motion/react";
import { useRef } from "react";
import { Box } from "./Box";
import { Boxes } from "./Boxes";
import { Section } from "./Section";

export function Flight() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    visualDuration: 0.3,
    bounce: 0.2,
  });

  const width = useTransform(smoothScroll, [0, 1 / 4], ["100%", "50%"]);

  return (
    <div ref={sectionRef}>
      <motion.div
        style={{ width }}
        className="pointer-events-auto gap-6 flex h-screen sticky top-0 items-center"
      >
        <motion.div className="h-full">
          <video
            className="object-cover w-full h-full"
            loop={true}
            autoPlay
            muted={true}
          >
            <source src="/videos/flight.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div className="h-full">
          <video
            className="object-cover object-[70%] w-full h-full"
            loop={true}
            autoPlay
            muted={true}
          >
            <source src="/videos/takeoff.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
      <div className="ml-[50vw]">
        <Section scrollProgress={scrollYProgress} />
        <Section scrollProgress={scrollYProgress} />
      </div>
    </div>
  );
}
