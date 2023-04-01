import { getProviders, signIn, getSession } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import global from "../../state/global";
import Loader from "@/components/Loader/Loader.component";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { renderDefaultButton } from "../DefaultButtonComponent/DefaultButton.component";

export default function Login() {
  const {
    loading,
    login,
    providers,
    loginPopup: { active, setActive },
    getProviders,
    setActiveOverflowOff,
  } = global();

  useEffect(() => {
    getProviders();
  }, [getProviders]);

  if (!active) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setActive(false);
        setActiveOverflowOff(false);
      }}
      className="absolute top-0 left-0 w-screen h-screen flex items-center justify-center bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#111111] dark:border-neutral-700 z-10"
      >
        <div className="p-4 flex items-center justify-center border-b-2 border-neutral-800">
          <AiFillGithub className="text-[10rem]" />
        </div>
        <div className="">
          <h5 className="px-6 py-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Github login
          </h5>
          <p className="px-6 pb-6 font-normal text-gray-700 dark:text-gray-400">
            At the moment we support only github login.
          </p>
          {Object.values(providers).map((provider, i) => (
            <div
              key={i}
              className="flex justify-center items-center py-10 bg-black p-6 rounded-br-md rounded-bl-md border-t-2 border-neutral-800"
            >
              {renderDefaultButton({
                text: "Sign in with GitHub",
                loading: loading,
                size: "xl",
                action: () => login(provider),
              })}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
