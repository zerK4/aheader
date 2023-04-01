import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const searchBarVariants = {
  open: {
    width: "20rem",
    borderRadius: "0.5rem",
    border: "2px solid #023e8a",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  closed: {
    width: "4rem",
    borderRadius: "8px",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25,
    },
  },
};
const searchTextVariants = {
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
const searchIconVariants = {
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

function SearchBarComponent() {
  const [active, setActive] = useState(false);
  console.log(active);

  return (
    <motion.div
      animate={active ? "open" : "closed"}
      initial="closed"
      variants={searchBarVariants}
      onClick={() => setActive(true)}
      className={`mt-6 bg-black border-2 p-2 border-neutral-800 cursor-pointer select-none`}
    >
      {active ? (
        <div className="flex items-center gap-2">
          <motion.div
            variants={searchIconVariants}
            initial="closed"
            animate={active ? "open" : "closed"}
          >
            <AiOutlineSearch className="text-lg" />
          </motion.div>
          <input
            className="w-full p-2 bg-transparent outline-none border-none"
            autoFocus
          />
          <AiOutlineClose
            onClick={(e) => {
              setActive(false), e.stopPropagation();
            }}
            className="text-xl cursor-pointer text-gray-400"
          />
        </div>
      ) : (
        <motion.div
          variants={searchTextVariants}
          initial="closed"
          animate={active ? "open" : "closed"}
        >
          search
        </motion.div>
      )}
    </motion.div>
  );
}

export default SearchBarComponent;
