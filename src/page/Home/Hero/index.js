"use client";

import { motion, useSpring, useTransform } from "motion/react";
import { memo } from "react";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { TextScramble } from "@/components/motion-primitives/text-scramble";

const R = 20;

export const Hero = memo(function Hero({ mouse }) {
  const mouseX = useSpring(mouse.x);
  const mouseY = useSpring(mouse.y);

  const positionX = useTransform(mouseX, [0, 1], [-R, R]);
  const positionY = useTransform(mouseY, [0, 1], [-R, R]);
  const positionXHeavy = useTransform(mouseX, [0, 1], [-R / 2, R / 2]);
  const positionYHeavy = useTransform(mouseY, [0, 1], [-R / 2, R / 2]);

  return (
    <div className="border-red-500 border-2 min-h-screen flex flex-col items-center justify-center">
      <motion.h1 className="select-none flex flex-col text-center">
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
            className="font-gleam text-9xl font-mono"
            duration={4}
            delay={1}
          >
            Surveillance
          </TextScramble>
        </motion.div>
      </motion.h1>
    </div>
  );
});
