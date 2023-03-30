import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { RiLoginBoxFill, RiLogoutBoxRFill } from "react-icons/ri";
import Link from "next/link";

function Header() {
  const { data: session, status } = useSession();

  const iconClass = "hover:text-white duration-300 ease-in-out cursor-pointer";

  return (
    <div className="flex items-center justify-between h-[5rem] px-6">
      aheader
      {status === "authenticated" ? (
        <button onClick={() => signOut()} className={iconClass}>
          Logout
        </button>
      ) : (
        <Link href="/login">
          <button className={iconClass}>Login</button>
        </Link>
      )}
    </div>
  );
}

export default Header;
