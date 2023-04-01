import { sidebarLinks } from "@/statics/sidebar";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { motion } from "framer-motion";
import { sidebarVariants, userSpaceVariant } from "@/lib/motionVariants";
import Loader from "../Loader/Loader.component";

const iconClass = "text-xl";
const icons = [
  {
    name: "AiOutlineHome",
    icon: <AiOutlineHome className={iconClass} />,
  },
  {
    name: "GoProject",
    icon: <GoProject className={iconClass} />,
  },
  {
    name: "BsBookmarkCheck",
    icon: <BsBookmarkCheck className={iconClass} />,
  },
];

interface UserInterface {
  session: {
    user: {
      email: string;
      image: string;
      name: string;
    };
  };
  sidebarActive: boolean;
}

export const renderUserSpace = (props: UserInterface) => {
  const {
    session: {
      user: { email, name, image } = { email: "", name: "", image: "" },
    } = {},
    sidebarActive,
  } = props;

  return (
    <motion.div
      variants={userSpaceVariant}
      animate={sidebarActive ? "visible" : "hidden"}
      className={` bg-black flex-col items-center relative rounded-md border-2 border-neutral-800 w-[100%] h-fit text-neutral-400`}
    >
      <div className="w-20">
        <Image
          src="/images/cover.avif"
          fill={true}
          alt={name}
          className="bg-black w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-[95%] relative mt-10">
        {!image ? (
          <div className="w-[4rem] h-[4rem] flex items-center justify-center rounded-full z-30">
            <Loader />
          </div>
        ) : (
          <Image
            src={image}
            height="80"
            width="80"
            alt={name}
            className="rounded-full border-2 border-neutral-800 z-10 bg-black"
          />
        )}
        <div className="absolute top-[60%] flex flex-col items-center w-full bg-[#111111] h-fit rounded-md border-2 border-neutral-800 p-2 shadow-md shadow-neutral-800">
          <div className="justify-around flex w-full">
            <p className="flex flex-col items-center">
              <span className="font-semibold">1322</span>
              <span className="font-semibold text-neutral-600">Followers</span>
            </p>
            <p className="flex flex-col items-center">
              <span className="font-semibold">1322</span>
              <span className="font-semibold text-neutral-600">Following</span>
            </p>
          </div>
          <p className="w-full flex justify-center my-4 font-semibold">
            {name}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export const renderLinks = (sidebarActive: boolean) => {
  return sidebarLinks.map((link, i) => {
    const Icon = icons.map((icon) => {
      return icon.name === link.icon ? (
        <motion.span key={icon.name}>{icon.icon}</motion.span>
      ) : null;
    });
    return (
      <motion.li
        custom={i}
        initial="hidden"
        animate="visible"
        variants={sidebarVariants}
        key={i}
        className={`${
          sidebarActive
            ? "p-3 justify-between gap-2"
            : "py-2 mb-2 justify-center"
        } flex items-center border-b-[1px] border-neutral-900 w-full hover:bg-neutral-900 cursor-pointer duration-300 ease-in-out`}
      >
        <motion.span
          variants={sidebarVariants}
          animate={sidebarActive ? "visible" : "hidden"}
        >
          {sidebarActive ? link.name : null}
        </motion.span>
        <span>{Icon}</span>
      </motion.li>
    );
  });
};
