export const cardVariants = (delay, isVisible) => {
  return {
    hidden: {
      opacity: isVisible ? 0 : 1,
      y:0,
    },
    show: {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? -100 : 0,
      x:0,
      transition: {
        delay: delay,
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 1,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};
