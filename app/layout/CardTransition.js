export const cardVariants1 = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const cardVariants2 = {
  offscreen: {
    opacity: 0,
    y: -100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};
