import React from "react";
import { useSession } from "next-auth/react";
import global from "@/state/global";
import LoginPopup from "../LoginPopup/LoginPopup.component";
import UserProfileHeaderComponent from "../UserProfileHeaderComponent/UserProfileHeader.component";
import { renderDefaultButton } from "../DefaultButtonComponent/DefaultButton.component";

function Header() {
  const { data: session, status } = useSession();
  const {
    loginPopup: { setActive },
    completeOverflowOff,
    setActiveOverflowOff,
  } = global();

  return (
    <div className="flex items-center justify-between h-[6rem] px-6 bg-black">
      aheader
      {status === "authenticated" ? (
        <UserProfileHeaderComponent session={session} />
      ) : (
        renderDefaultButton({
          text: "Login",
          loading: false,
          size: "normal",
          action: () => {
            setActive(true), setActiveOverflowOff(!completeOverflowOff);
          },
        })
      )}
    </div>
  );
}

export default Header;
