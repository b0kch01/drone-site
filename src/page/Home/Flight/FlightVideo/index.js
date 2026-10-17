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

  async function preload(url) {
    const res = await fetch(url);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }

  useEffect(() => {
    const original = originalRef.current;
    const thermal = thermalRef.current;
    let cancelled = false;
    let blobUrls = [];

    // play() rejects if the load is interrupted (e.g. on unmount); that's expected
    const play = (video) => video.play().catch(() => {});

    function resetVideos() {
      thermal.currentTime = 0;
      original.currentTime = 0;
      play(original);
      play(thermal);
    }

    (async function loadVideos() {
      blobUrls = await Promise.all([
        preload("/videos/small-car.mp4"),
        preload("/videos/small-thermal.mp4"),
      ]);

      if (cancelled) return blobUrls.forEach(URL.revokeObjectURL);

      [original.src, thermal.src] = blobUrls;

      thermal.addEventListener("ended", resetVideos);
      resetVideos();
    })();

    return () => {
      cancelled = true;
      thermal.removeEventListener("ended", resetVideos);
      blobUrls.forEach(URL.revokeObjectURL);
    };
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
        src={null}
      />
      <motion.video
        ref={originalRef}
        className="absolute object-cover object-bottom w-full h-full"
        style={{ opacity: topVideoOpacity }}
        playsInline
        controls={false}
        muted={true}
        src={null}
      />
    </>
  );
}
