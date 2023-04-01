import { renderDefaultButton } from "@/components/DefaultButtonComponent/DefaultButton.component";
import SidebarComponent from "@/components/SidebarComponent/Sidebar.component";
import UserProfileHeaderComponent from "@/components/UserProfileHeaderComponent/UserProfileHeader.component";
import global from "@/state/global";
import { useSession } from "next-auth/react";
import React from "react";
import LoginPopup from "../../components/LoginPopup/LoginPopup.component";

function MainLayout({ children }: any) {
  const { data: session = {} } = useSession();
  const {
    loginPopup: { setActive },
    completeOverflowOff,
    setActiveOverflowOff,
  } = global();

  const renderUserComponent = () => {
    if (!session) {
      return (
        <div className="">
          {renderDefaultButton({
            text: "Login",
            loading: false,
            size: "normal",
            action: () => {
              setActive(true), setActiveOverflowOff(!completeOverflowOff);
            },
          })}
        </div>
      );
    }
    return <UserProfileHeaderComponent session={session} />;
  };

  return (
    <>
      <div className="absolute right-2 top-2">{renderUserComponent()}</div>
      <LoginPopup />
      <div className="flex">
        <SidebarComponent />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}

export default MainLayout;
