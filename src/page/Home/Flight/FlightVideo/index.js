import { sleep } from "@/lib/utils";
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
  const thermalSourceRef = useRef(null);
  const originalSourceRef = useRef(null);

  async function preload(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    function resetVideos() {
      thermalRef.current.currentTime = 0;
      originalRef.current.currentTime = 0;
      originalRef.current.play();
      thermalRef.current.play();
    }

    (async function loadVideos() {
      const [thermalSrc, originalSrc] = await Promise.all([
        preload("/videos/small-car.mp4"),
        preload("/videos/small-thermal.mp4"),
      ]);

      if (thermalSourceRef.current) thermalSourceRef.current.src = thermalSrc;
      if (originalSourceRef.current)
        originalSourceRef.current.src = originalSrc;

      console.log("Loaded footage", thermalSourceRef.current.src);
      console.log("Loaded footage", originalSourceRef.current.src);

      thermalRef.current?.addEventListener("ended", resetVideos);
      resetVideos();
    })();
  }, []);

  return (
    <>
      <div className="absolute bg-foreground/15 w-full h-full" />
      <video
        ref={thermalRef}
        className="absolute object-cover object-bottom w-full h-full"
        playsInline
        controls={false}
        muted={true}
      >
        <source ref={thermalSourceRef} src={null} type="video/mp4" />
      </video>
      <motion.video
        ref={originalRef}
        className="absolute object-cover object-bottom w-full h-full"
        style={{ opacity: topVideoOpacity }}
        playsInline
        controls={false}
        muted={true}
      >
        <source ref={originalSourceRef} src={null} type="video/mp4" />
      </motion.video>
    </>
  );
}
