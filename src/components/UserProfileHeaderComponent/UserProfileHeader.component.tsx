import global from "@/state/global";
import React from "react";
import SmallImageComponent from "../SmallImageComponent/SmallImage.component";
import UserPopupComponent from "../UserPopupComponent/UserPopup.component";

export interface SessionInterface {
  session: {
    user: {
      email: string;
      image: string;
      name: string;
    };
  };
}

function UserProfileHeaderComponent({ session }: SessionInterface) {
  const {
    userPopup: { active },
  } = global();

  return (
    <div
      onClick={(e) => {
        global.setState({ userPopup: { active: !active } }),
          e.stopPropagation();
      }}
      className="flex items-center gap-2 p-2 relative cursor-pointer select-none"
    >
      <UserPopupComponent session={session} />
      <SmallImageComponent session={session} />
      {session.user.name}
    </div>
  );
}

export default UserProfileHeaderComponent;
