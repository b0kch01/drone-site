import { TextScramble } from "@/components/motion-primitives/text-scramble";
import { useInView } from "motion/react";
import { useRef } from "react";

export function SectionTitle({ children }) {
  const headerRef = useRef(null);
  const inView = useInView(headerRef);

  return (
    <h3
      ref={headerRef}
      className="uppercase font-bold text-xl text-foreground/50 font-mono"
    >
      <TextScramble characterSet="01-_ " duration={1} trigger={inView}>
        {children}
      </TextScramble>
    </h3>
  );
}

export function SectionDescription({ children }) {
  return <p className="text-lg">{children}</p>;
}

export function SectionHeader({ children }) {
  return <div className="flex flex-col gap-3 p-10">{children}</div>;
}
