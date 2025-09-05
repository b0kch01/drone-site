"use client";

import { useMotionValue } from "motion/react";
import { useCallback, useEffect, useMemo, useState } from "react";

import { Hero } from "./Hero";
import { Navigation } from "./Navigation";

export const Home = function Home() {
  const [z, setZ] = useState(0);

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

      <button onClick={() => setZ((now) => now + 1)}>{z}</button>

      <div className="h-[500vh]" />
    </div>
  );
};
