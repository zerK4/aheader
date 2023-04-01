import React from "react";
import { renderLinks, renderUserSpace } from "./Sidebar.container";
import { useSession } from "next-auth/react";

function SidebarComponent() {
  const { data: session, status } = useSession();
  return (
    <div className="bg-black h-screen w-16 md:w-[20rem] border-r-2 p-4 border-neutral-800">
      <div className="h-[12rem]">
        {session ? renderUserSpace(session) : null}
      </div>
      <ul className="flex flex-col mt-10">{renderLinks()}</ul>
    </div>
  );
}

export default SidebarComponent;
