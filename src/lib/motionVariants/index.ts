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

  export const sidebarVariants = {
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hidden: { opacity: 0, x: -500 },
  };

  export const menuVariants = {
    hidden: {
      opacity: 1,
      height: "3rem",
      width: "3rem",
      borderRadius: "50px",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    visible: {
      opacity: 1,
      borderRadius: "10px",
      height: "23rem",
      width: "15rem",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.1,
      },
    },
  };
  
  export const searchBarVariants = {
    open: {
      marginTop: '10rem',
      width: "100%",
      borderRadius: "0.5rem",
      border: "2px solid #023e8a",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    closed: {
      width: "10rem",
      borderRadius: "8px",
      border: "2px solid black",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
  };
  export const searchTextVariants = {
    open: {
      opacity: 0,
      transition: {
        delay: 0.3,
      },
    },
    closed: {
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
  };
  export const searchIconVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: "-100px",
      transition: {
        delay: 0.3,
      },
    },
  };


export const sidebarButtonVariant = {
  open: {
    rotate: 180,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 500,
      damping: 50,
    },
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 500,
      damping: 50,
    },
  },
};

export const sidebarVariant = {
  hidden: {
    opacity: 1,
    width: "3rem",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    width: "20rem",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const userSpaceVariant = {
  hidden: {
    opacity: 1,
    x: -500,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const userSpaceLinksVariant = {
  hidden: {
    opacity: 1,
    x: -500,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const addSomethingSpace = {
  hidden: {
    height: "3.9rem",
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  visible: {
    height: "7rem",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const doSomethingButtonsVariants = {
  visible: (i: any) => ({
    opacity: 1,
    y: 5,
    transition: {
      delay: i * 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  hidden: { opacity: 0, y: -200 },
};