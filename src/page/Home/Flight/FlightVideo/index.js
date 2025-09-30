import { motion, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

export function FlightVideo({ scrollYProgress }) {
  const topVideoOpacity = useTransform(
    scrollYProgress,
    [2 / 4, 3 / 4],
    [1, 0.1],
  );

  const thermalRef = useRef(null);
  const originalRef = useRef(null);

  async function preload(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    (async function loadVideos() {
      const [thermalSrc, originalSrc] = await Promise.all([
        preload("/videos/small-thermal.mp4"),
        preload("/videos/small-car.mp4"),
      ]);
      thermalRef.current.src = thermalSrc;
      originalRef.current.src = originalSrc;
      thermalRef.current.currentTime = 0;
      originalRef.current.currentTime = 0;
      thermalRef.current.play();
      originalRef.current.play();
    })();
  }, []);

  return (
    <>
      <div className="absolute bg-foreground/15 w-full h-full" />
      <video
        ref={thermalRef}
        className="absolute object-cover object-bottom w-full h-full"
        loop={true}
        playsInline
        controls={false}
        muted={true}
      >
        <source src={null} type="video/mp4" />
      </video>
      <motion.video
        ref={originalRef}
        className="absolute object-cover object-bottom w-full h-full"
        style={{ opacity: topVideoOpacity }}
        loop={true}
        playsInline
        controls={false}
        muted={true}
      >
        <source src={null} type="video/mp4" />
      </motion.video>
    </>
  );
}
