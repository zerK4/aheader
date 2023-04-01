import global from "@/state/global";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Loader from "../Loader/Loader.component";

function SmallImageComponent() {
  const { data: { user: { image, name } = { image: "", name: "" } } = {} } =
    useSession();
  const {
    userPopup: { active },
  } = global();
  return (
    <div
      className={`${
        active ? "absolute left-2 top-2 opacity-30" : null
      } ease-in-out duration-300`}
    >
      {!image ? (
        <Loader />
      ) : (
        <Image
          width="30"
          height="30"
          alt={name}
          src={image}
          className="rounded-full"
        />
      )}
    </div>
  );
}

export default SmallImageComponent;
