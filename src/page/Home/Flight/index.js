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

  const height = useTransform(smoothScroll, [0, 0.5], ["100vh", "80vh"]);
  const width = useTransform(smoothScroll, [0, 0.5], ["100%", "50%"]);

  return (
    <div ref={sectionRef} className="min-h-[420vh]">
      <motion.div
        style={{ width, height }}
        className="pointer-events-auto gap-6 flex min-h-screen sticky top-0 items-center"
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
      <div className="h-[200vh] border border-red-500" />
      <div className="sticky top-0 flex items-center ml-[50vw] min-h-screen">
        <Boxes />
      </div>
    </div>
  );
}
