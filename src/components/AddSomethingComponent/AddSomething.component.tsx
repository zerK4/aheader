import React, { useState } from "react";
import { motion } from "framer-motion";
import { doSomethingButtonsVariants } from "@/lib/motionVariants";
import global from "@/state/global";
import {
  BsPostcardHeart,
  BsCodeSlash,
  BsCardImage,
  BsCameraVideo,
} from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { BiTask } from "react-icons/bi";

const addSomethingButtons = [
  {
    name: "Post",
    icon: <BsPostcardHeart />,
  },
  {
    name: "Project",
    icon: <AiOutlineProject />,
  },
  {
    name: "Task",
    icon: <BiTask />,
  },
  {
    name: "Code",
    icon: <BsCodeSlash />,
  },
  {
    name: "Image",
    icon: <BsCardImage />,
  },
  {
    name: "Video",
    icon: <BsCameraVideo />,
  },
];

function AddSomethingComponent() {
  const { addSomething: active } = global();
  const [hover, setHover] = useState("");
  return (
    <div
      className={`w-full h-[3rem] p-2 flex items-center gap-2 rounded-bl-md rounded-br-md`}
    >
      {addSomethingButtons.map((button, i) => (
        <motion.button
          onMouseOver={() => setHover(button.name)}
          onMouseOut={() => setHover("")}
          custom={i}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
          variants={doSomethingButtonsVariants}
          key={i}
          className="text-2xl text-gray-400 hover:bg-neutral-900 p-2 rounded-md relative"
        >
          {button.icon}
          {hover === button.name ? (
            <span className="absolute top-[100%] text-sm left-0 bg-black p-1">
              {button.name}
            </span>
          ) : null}
        </motion.button>
      ))}
    </div>
  );
}

export default AddSomethingComponent;
