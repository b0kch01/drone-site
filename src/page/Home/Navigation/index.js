import Image from "next/image";
import { ArrowBigDown, ArrowDown, ArrowDownIcon } from "lucide-react";

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
        <a href="#" className="flex gap-2">
          <Image
            width={0}
            height={0}
            alt=""
            className="w-5"
            src="/svg/logo.svg"
          />{" "}
          MYOTIS
        </a>
      </div>

      <div className="grow" />

      <div
        className={cn(
          "hidden sm:flex absolute text-center text-sm *:px-2",
          styles.links,
        )}
      >
        <a href="#">Home</a>
        <a href="#tech">Technology</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <a
          className="group flex text-sm font-medium items-center bg-white py-1.5 px-4 text-black rounded"
          href="#contact"
        >
          Book a Demo
          <ArrowDownIcon
            width={14}
            height={14}
            strokeWidth={2.5}
            className="w-0 -rotate-90 group-hover:ml-1 group-hover:rotate-0 group-hover:w-[14px] transition-all"
          />
        </a>
      </div>
    </header>
  );
}
