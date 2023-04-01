import global from "@/state/global";
import React from "react";
import SmallImageComponent from "../SmallImageComponent/SmallImage.component";
import { motion } from "framer-motion";
import { userMenu } from "@/statics/userMenu";
import { menuVariants, userMenuVariants } from "@/lib/motionVariants";
import { IoIosLogOut } from "react-icons/io";
import { useSession } from "next-auth/react";

function UserProfileHeaderComponent() {
  const { data: { user: { email, name } = { email: "", name: "" } } = {} } =
    useSession();
  const {
    userPopup: { active },
  } = global();

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      onClick={(e) => {
        global.setState({ userPopup: { active: !active } }),
          e.stopPropagation();
      }}
      className={`${
        !active && "p-2"
      } flex flex-col items-center gap-2 relative cursor-pointer select-none bg-black border-2 border-neutral-800 overflow-hidden`}
    >
      <SmallImageComponent />
      <div className="">
        {active ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.1,
            }}
            className="flex flex-col gap-2 w-full"
          >
            <ul
              onClick={(e) => e.stopPropagation()}
              className="px-6 w-full pb-4 flex flex-col gap-2 bg-[#111111] shadow-lg shadow-neutral-900 pt-6 cursor-default"
            >
              <li className="w-full z-10">{name}</li>
              <li className="w-full z-10">{email}</li>
            </ul>
            {userMenu?.map((item, i) => (
              <motion.li
                custom={i}
                initial="hidden"
                animate="visible"
                variants={userMenuVariants}
                key={i}
                className="hover:bg-neutral-900 px-4 w-full py-2 flex items-center justify-between"
                onClick={item.action}
              >
                {item.name}
                {item.name === "Logout" ? (
                  <IoIosLogOut className="text-xl" />
                ) : null}
              </motion.li>
            ))}
          </motion.div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default UserProfileHeaderComponent;
