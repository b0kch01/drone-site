"use client";

import { motion, useMotionValueEvent, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

const N_FRAMES = 254;

const getFrame = (frame) =>
  `/drone_frames_high/drone_vid${frame.toString().padStart(3, "0")}.jpg`;

export function Drone({ scrollY }) {
  const frames = useRef([]);
  const context = useRef(null);

  const scale = useTransform(scrollY, [0, 1], [0.6, 1]);
  const positionY = useTransform(scrollY, [0, 1], ["30vh", "0vh"]);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const index = Math.max(
      0,
      Math.min(Math.ceil(N_FRAMES * latestValue), N_FRAMES - 1),
    );
    context.current?.drawImage(frames.current[index], 0, 0);
  });

  useEffect(() => {
    console.log("Preloading images");
    for (let i = 0; i < N_FRAMES; ++i) {
      const img = new Image();
      img.src = getFrame(i);
      frames.current.push(img);
    }

    const canvas = document.getElementById("drone");
    context.current = canvas.getContext("2d");

    canvas.width = 1500;
    canvas.height = 500;

    frames.current[0].onload = () => {
      context.current.drawImage(frames.current[0], 0, 0);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, y: "-5vh", filter: "blur(10px)", opacity: 0 }}
      animate={{ scale: 1, y: 0, filter: "blur(0px)", opacity: 1 }}
      transition={{ type: "spring", visualDuration: 2, bounce: 0, delay: 2 }}
      className="overflow-hidden sticky left-0 top-0 h-screen w-full flex items-center justify-center mb-[-50vh]"
    >
      <motion.canvas
        style={{ scale, y: positionY }}
        className="md:w-full"
        id="drone"
      />
    </motion.div>
  );
}
