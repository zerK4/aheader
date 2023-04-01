import global from "../../state/global";
import React from "react";
import { motion } from "framer-motion";
import { userMenu } from "../../statics/userMenu";
import { SessionInterface } from "../UserProfileHeaderComponent/UserProfileHeader.component";
import { IoIosLogOut } from "react-icons/io";

function UserPopupComponent({ session }: SessionInterface) {
  const {
    userPopup: { active },
  } = global();
  const {
    user: { email, name },
  } = session;

  if (!active) {
    return null;
  }

  const userMenuVariants = {
    visible: (i: any) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    hidden: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ height: 0, opacity: 0, display: "none" }}
      animate={{ height: "fit-content", opacity: 1, display: "flex" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute top-[100%] right-0 bg-black pb-6 w-fit rounded-lg border-2 border-neutral-900"
    >
      <div className="flex flex-col gap-2">
        <ul className="px-4 pb-4 flex flex-col gap-2 bg-[#111111] shadow-lg shadow-neutral-900 pt-6">
          <li className="w-full">{name}</li>
          <li className="w-full">{email}</li>
        </ul>
        {userMenu.map((item, i) => (
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
      </div>
    </motion.div>
  );
}

export default UserPopupComponent;
