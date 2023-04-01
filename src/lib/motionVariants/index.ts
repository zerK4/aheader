export const userMenuVariants = {
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hidden: { opacity: 0, y: -50 },
  };