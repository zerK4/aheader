import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import {
  searchBarVariants,
  searchIconVariants,
  searchTextVariants,
} from "@/lib/motionVariants";

function SearchBarComponent() {
  const [active, setActive] = useState(false);

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
