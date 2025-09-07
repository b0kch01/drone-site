"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { memo, useRef } from "react";

import { TextEffect } from "@/components/motion-primitives/text-effect";
import { TextScramble } from "@/components/motion-primitives/text-scramble";

import { Drone } from "./Drone";
import Image from "next/image";

const R = 20;

const MotionImage = motion(Image);

export const Hero = memo(function Hero({ mouse }) {
  const hero = useRef(null);

  const { scrollYProgress } = useScroll({
    target: hero,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    visualDuration: 0.3,
    bounce: 0,
  });

  const mouseX = useSpring(mouse.x);
  const mouseY = useSpring(mouse.y);

  const positionX = useTransform(mouseX, [0, 1], [-R, R]);
  const positionY = useTransform(mouseY, [0, 1], [-R, R]);
  const positionXHeavy = useTransform(mouseX, [0, 1], [-R / 2, R / 2]);
  const positionYHeavy = useTransform(mouseY, [0, 1], [-R / 2, R / 2]);

  const scrollYOffset = useTransform(smoothScroll, [0.2, 1], ["0", "-15vh"]);
  const scrollGap = useTransform(smoothScroll, [0, 1], ["0", "5vh"]);
  const scrollScale = useTransform(smoothScroll, [0, 1], [1, 0.4]);
  const scrollOpacity = useTransform(scrollYProgress, [0.4, 0.8], [1, 0]);

  const scrollBlur = useTransform(
    smoothScroll,
    [0.2, 1],
    ["blur(0px)", "blur(20px)"],
  );

  return (
    <div ref={hero} className="min-h-[300vh] flex flex-col items-center">
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="fixed pointer-events-none flex items-center justify-center top-0 z-10 w-full h-full faded"
      >
        <MotionImage
          initial={{ y: 20, scale: 1.5, filter: "blur(0px)" }}
          animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0, duration: 4 }}
          className="w-full absolute"
          src="/svg/stars.svg"
          width={0}
          height={0}
          alt=""
        />
        <MotionImage
          initial={{ y: 50, scale: 2, filter: "blur(0px)" }}
          animate={{ y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0, duration: 4 }}
          className="w-[40%] absolute"
          src="/svg/circles.svg"
          width={0}
          height={0}
          alt=""
        />
      </motion.div>

      <Drone scrollY={smoothScroll} />

      <motion.div
        style={{
          y: scrollYOffset,
          scale: scrollScale,
          filter: scrollBlur,
          opacity: scrollOpacity,
        }}
        className="pointer-events-none fixed top-0 min-h-screen flex items-center z-20"
      >
        <motion.h1
          style={{ gap: scrollGap }}
          className="select-none flex flex-col justify-center items-center text-center"
        >
          <TextEffect
            style={{ x: positionX, y: positionY }}
            className="font-gleam text-3xl font-light tracking-tighter"
            preset="fade-in-blur"
            delay={1}
            speedReveal={0.5}
            speedSegment={0.4}
          >
            Welcome to Modern
          </TextEffect>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 1.2, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, delay: 2 }}
          >
            <TextEffect
              style={{ x: positionXHeavy, y: positionYHeavy }}
              per="char"
              preset="slide"
              className="text-[10vw] leading-[10vw] px-2 tracking-tighter"
              delay={2.2}
            >
              Surveillance
            </TextEffect>
          </motion.div>
        </motion.h1>
      </motion.div>
    </div>
  );
});
