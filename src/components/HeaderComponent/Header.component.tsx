import React from "react";
import AddButtonComponent from "../AddButtonComponent/AddButton.component";
import AddSomethingComponent from "../AddSomethingComponent/AddSomething.component";
import SearchBarComponent from "../SearchBarComponent/SearchBar.component";
import { motion } from "framer-motion";
import { addSomethingSpace } from "@/lib/motionVariants";
import global from "@/state/global";

function HeaderComponent() {
  const { addSomething: active } = global();
  return (
    <div className="absolute top-2 w-full h-fit flex flex-col items-center justify-center">
      <motion.div
        variants={addSomethingSpace}
        initial="closed"
        animate={active ? "visible" : "hidden"}
        className="w-[50%] bg-black rounded-md p-2 flex flex-col items-start relative border-2 border-neutral-800"
      >
        <div className="flex">
          <AddButtonComponent />
          <SearchBarComponent />
        </div>
        <AddSomethingComponent />
      </motion.div>
    </div>
  );
}

export default HeaderComponent;
