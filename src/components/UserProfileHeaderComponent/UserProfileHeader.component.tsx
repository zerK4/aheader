import global from "@/state/global";
import React from "react";
import SmallImageComponent from "../SmallImageComponent/SmallImage.component";
import UserPopupComponent from "../UserPopupComponent/UserPopup.component";

function UserProfileHeaderComponent() {
  const {
    userPopup: { active },
  } = global();

  return (
    <div
      onClick={(e) => {
        global.setState({ userPopup: { active: !active } }),
          e.stopPropagation();
      }}
      className="flex items-center gap-2 p-2 relative cursor-pointer select-none bg-black rounded-full border-2 border-neutral-800"
    >
      <UserPopupComponent />
      <SmallImageComponent />
    </div>
  );
}

export default UserProfileHeaderComponent;
