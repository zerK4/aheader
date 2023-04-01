import Image from "next/image";
import React from "react";
import { SessionInterface } from "../UserProfileHeaderComponent/UserProfileHeader.component";

function SmallImageComponent({ session }: SessionInterface) {
  const {
    user: { image, name },
  } = session;
  return (
    <div>
      <Image
        width="50"
        height="50"
        alt={name}
        src={image}
        className="rounded-full"
      />
    </div>
  );
}

export default SmallImageComponent;
