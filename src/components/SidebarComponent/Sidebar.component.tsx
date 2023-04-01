import { renderLinks, renderUserSpace } from "./Sidebar.container";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import global from "@/state/global";
import { motion } from "framer-motion";
import { sidebarButtonVariant, sidebarVariant } from "@/lib/motionVariants";

function SidebarComponent() {
  const { data: session, status } = useSession();
  const { sidebarActive, setSidebarState } = global();
  const [windowWitdh, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      windowWitdh <= 800 ? setSidebarState(false) : setSidebarState(true);
    });
  }, [windowWitdh]);

  return (
    <motion.div
      variants={sidebarVariant}
      animate={sidebarActive ? "visible" : "hidden"}
      className={`${
        sidebarActive ? "p-4" : "p-1"
      } bg-black h-screen border-r-2 border-neutral-800 relative overflow-hidden`}
    >
      <div className="h-[12rem]">
        {renderUserSpace({
          session: session,
          sidebarActive: sidebarActive,
        })}
      </div>
      <ul className="flex flex-col mt-10">{renderLinks(sidebarActive)}</ul>
      <motion.button
        variants={sidebarButtonVariant}
        animate={sidebarActive ? "open" : "closed"}
        onClick={() => setSidebarState(!sidebarActive)}
        className="absolute bottom-4 right-1 rounded-full bg-white border-2 border-neutral-800 p-2 text-black"
      >
        {<AiOutlineArrowRight />}
      </motion.button>
    </motion.div>
  );
}

export default SidebarComponent;
