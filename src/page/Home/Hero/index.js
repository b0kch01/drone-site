"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { memo, useRef } from "react";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { TextScramble } from "@/components/motion-primitives/text-scramble";

import { Drone } from "./Drone";

const R = 20;

export const Hero = memo(function Hero({ mouse }) {
  const hero = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end end"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    visualDuration: 0.4,
    bounce: 0,
  });

  const mouseX = useSpring(mouse.x);
  const mouseY = useSpring(mouse.y);

  const positionX = useTransform(mouseX, [0, 1], [-R, R]);
  const positionY = useTransform(mouseY, [0, 1], [-R, R]);
  const positionXHeavy = useTransform(mouseX, [0, 1], [-R / 2, R / 2]);
  const positionYHeavy = useTransform(mouseY, [0, 1], [-R / 2, R / 2]);

  const scrollYOffset = useTransform(scrollYProgress, [0, 1], ["0", "80vh"]);
  const scrollGap = useTransform(smoothScroll, [0, 1], ["0", "10vh"]);
  const scrollScale = useTransform(smoothScroll, [0, 1], [1, 0.8]);
  const scrollBlur = useTransform(
    smoothScroll,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  return (
    <div
      ref={hero}
      className="border-red-500 border-2 min-h-[200vh] flex flex-col items-center"
    >
      <Drone scrollY={smoothScroll} />

      <motion.div
        style={{ y: scrollYOffset, scale: scrollScale, filter: scrollBlur }}
        className="absolute top-0 min-h-screen flex items-center"
      >
        <motion.h1
          style={{ gap: scrollGap }}
          className="select-none flex flex-col text-center"
        >
          <TextEffect
            style={{ x: positionX, y: positionY }}
            className="font-gleam text-3xl font-light tracking-tighter"
            preset="fade-in-blur"
            delay={1}
            speedReveal={0.5}
            speedSegment={0.4}
          >
            Tap Into Modern
          </TextEffect>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 1.2, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 2 }}
          >
            <TextScramble
              style={{ x: positionXHeavy, y: positionYHeavy }}
              className="font-gleam font-mono text-[10vw] leading-[10vw] uppercase px-2 tracking-tighter"
              duration={4}
              delay={1}
            >
              Surveillance
            </TextScramble>
          </motion.div>
        </motion.h1>
      </motion.div>
    </div>
  );
});
