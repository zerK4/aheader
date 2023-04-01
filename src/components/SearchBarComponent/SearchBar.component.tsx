import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import {
  searchBarVariants,
  searchIconVariants,
  searchTextVariants,
} from "@/lib/motionVariants";
import global from "@/state/global";

function SearchBarComponent() {
  const {
    windowSize,
    sidebarActive,
    setSidebarState,
    searchBarStatus: active,
    setSearchBarStatus: setActive,
  } = global();

  const handleSearchBar = () => {
    if (windowSize <= 1000) {
      setSidebarState(false), setActive(true);
    }
    setActive(true);
  };

  return (
    <motion.div
      animate={active ? "open" : "closed"}
      initial="closed"
      variants={searchBarVariants}
      onClick={() => handleSearchBar()}
      className={`bg-black p-2 cursor-pointer select-none absolute min-w-[10rem] ${
        active ? "left-0" : "left-[35%]"
      }`}
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
          <input className="w-full p-2 bg-transparent outline-none" autoFocus />
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
          Search something
        </motion.div>
      )}
    </motion.div>
  );
}

export default SearchBarComponent;
