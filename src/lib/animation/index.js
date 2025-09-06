export const smoothSpring = { type: "spring", visualDuration: 1, bounce: 0 };

export const inViewFadeUp = {
  transition: smoothSpring,
  initial: { opacity: 0, y: 100, filter: "blur(5px)" },
  whileInView: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};
