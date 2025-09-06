import { cn } from "@/lib/utils";

import styles from "./styles.module.css";

export function Navigation() {
  return (
    <header
      className={cn(
        "fixed top-0 p-4 flex w-full justify-center items-center z-50",
        styles.navBlur,
      )}
    >
      <div className="text-lg font-mono">
        <a href="#">Drone Co.</a>
      </div>

      <div className="grow" />

      <div
        className={cn("absolute flex text-center text-sm *:px-2", styles.links)}
      >
        <a href="#">About</a>
        <a href="#tech">Tech</a>
        <a href="#">Team</a>
        <a href="#">Contact</a>
      </div>

      <div>
        <a
          className="text-sm font-medium bg-white rounded-full py-1.5 px-4 text-black"
          href="#"
        >
          Book a Demo
        </a>
      </div>
    </header>
  );
}
