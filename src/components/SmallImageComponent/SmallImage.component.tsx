import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import Loader from "../Loader/Loader.component";

function SmallImageComponent() {
  const { data: { user: { image, name } = { image: "", name: "" } } = {} } =
    useSession();
  return (
    <div>
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
