import global from "../../state/global";
import React from "react";
import { motion } from "framer-motion";
import { userMenu } from "../../statics/userMenu";
import { IoIosLogOut } from "react-icons/io";
import { userMenuVariants } from "@/lib/motionVariants";
import { useSession } from "next-auth/react";

function UserPopupComponent() {
  const { data: { user: { name, email } = { name: "", email: "" } } = {} } =
    useSession();
  const {
    userPopup: { active },
  } = global();

  if (!active || !name) {
    return null;
  }

  return (
    <motion.div
      onClick={(e) => e.stopPropagation()}
      initial={{ height: 0, opacity: 0, display: "none" }}
      animate={{ height: "fit-content", opacity: 1, display: "flex" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute top-[120%] right-0 bg-black pb-6 w-[15rem] rounded-lg border-2 border-neutral-900"
    >
      <div className="flex flex-col gap-2 w-full">
        <ul className="px-4 pb-4 flex flex-col gap-2 bg-[#111111] shadow-lg shadow-neutral-900 pt-6">
          <li className="w-full">{name}</li>
          <li className="w-full">{email}</li>
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
      </div>
    </motion.div>
  );
}

export default UserPopupComponent;
