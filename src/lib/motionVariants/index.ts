export const userMenuVariants = {
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.2,
        ease: "easeOut",
      },
    }),
    hidden: { opacity: 0, y: -50 },
  };