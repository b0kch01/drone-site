import {
  BatteryFullIcon,
  CpuIcon,
  PanelTopIcon,
  ScanSearchIcon,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Section() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const blur = useTransform(
    scrollYProgress,
    [0, 0.4],
    ["blur(20px)", "blur(0px)"],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ filter: blur, opacity }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <div className="relative m-10">
        <div className="absolute w-1 h-1 bg-foreground top-0 left-0" />
        <div className="absolute w-1 h-1 bg-foreground top-0 right-0" />
        <div className="absolute w-1 h-1 bg-foreground bottom-0 left-0" />
        <div className="absolute w-1 h-1 bg-foreground bottom-0 right-0" />

        <div className="flex flex-col gap-1.5 p-10">
          <h3 className="uppercase font-bold text-xl text-foreground/70 font-mono">
            1 // ai models
          </h3>
          <p className="">
            We pride ourselves in developing cutting-edge computer vision
            research in high-stakes environments cased to create magnificent
            statistical imbalances of quantumn dark-blockchain technology
            pipelines.
          </p>
        </div>

        <div className="flex justify-between">
          <div className="w-1 h-1 bg-foreground" />
          <div className="w-1 h-1 bg-foreground" />
        </div>

        <div className="grid grid-cols-2 p-10 gap-6">
          <p className="*:align-middle">
            <span className="inline-flex items-center gap-1.5 font-medium text-yellow-500">
              <ScanSearchIcon className="inline" height={24} /> Detection
            </span>
            <span> of early signs of malfunctioning</span>
          </p>
          <p className="*:align-middle">
            <span className="inline-flex items-center gap-1.5 font-medium text-yellow-500">
              <BatteryFullIcon className="inline" height={24} />
              Performant Algorithms
            </span>
            <span> of early signs of malfunctioning</span>
          </p>
          <p className="*:align-middle">
            <span className="inline-flex items-center gap-1.5 font-medium text-yellow-500">
              <CpuIcon className="inline" height={24} /> Accelerated
            </span>
            <span> of early signs of malfunctioning</span>
          </p>
          <p className="*:align-middle">
            <span className="inline-flex items-center gap-1.5 font-medium text-yellow-500">
              <PanelTopIcon className="inline" height={24} /> Realtime
              Monitoring
            </span>
            <span> of early signs of malfunctioning</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
