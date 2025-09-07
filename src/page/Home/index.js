"use client";

import { useMotionValue } from "motion/react";
import { useCallback, useEffect, useMemo } from "react";

import { Flight } from "./Flight";
import { Hero } from "./Hero";
import { Introduction } from "./Introduction";
import { Navigation } from "./Navigation";
import { Contact } from "./Contact";

export const Home = function Home() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const mouse = useMemo(() => ({ x: mouseX, y: mouseY }), [mouseX, mouseY]);

  const manageMouseMove = useCallback(
    (e) => {
      mouse.x.set(e.clientX / window.innerWidth);
      mouse.y.set(e.clientY / window.innerHeight);
    },
    [mouse],
  );

  useEffect(() => {
    console.log("MOUSEMOVE initializes");

    window.addEventListener("mousemove", manageMouseMove);
    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, [manageMouseMove]);

  return (
    <div className="flex flex-col">
      <Navigation />
      <Hero mouse={mouse} />

      <Introduction />
      <Flight />
      <Contact />
    </div>
  );
};
