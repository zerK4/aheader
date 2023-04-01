import { sidebarLinks } from "@/statics/sidebar";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarkCheck } from "react-icons/bs";
import { GoProject } from "react-icons/go";

const iconClass = "text-xl";
const icons = [
  {
    name: "AiOutlineHome",
    icon: <AiOutlineHome className={iconClass} />,
  },
  {
    name: "GoProject",
    icon: <GoProject className={iconClass} />,
  },
  {
    name: "BsBookmarkCheck",
    icon: <BsBookmarkCheck className={iconClass} />,
  },
];

interface UserInterface {
  user: {
    email: string;
    image: string;
    name: string;
  };
}

export const renderUserSpace = (session: UserInterface) => {
  const {
    user: { email, name, image },
  } = session;
  if (!session) {
    return null;
  }
  return (
    <div className="hidden bg-black md:flex flex-col items-center relative rounded-md border-2 border-neutral-800 w-[100%] h-fit text-neutral-400">
      <div className="w-20">
        <Image
          src="/images/cover.avif"
          fill={true}
          alt={name}
          className="bg-black w-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center w-[95%] relative mt-10">
        <Image
          src={image}
          height="80"
          width="80"
          alt={name}
          className="rounded-full border-2 border-neutral-800 z-10 bg-black"
        />
        <div className="absolute top-[60%] flex flex-col items-center w-full bg-[#111111] h-fit rounded-md border-2 border-neutral-800 p-2 shadow-md shadow-neutral-800">
          <div className="justify-around flex w-full">
            <p className="flex flex-col items-center">
              <span className="font-semibold">1322</span>
              <span className="font-semibold text-neutral-600">Followers</span>
            </p>
            <p className="flex flex-col items-center">
              <span className="font-semibold">1322</span>
              <span className="font-semibold text-neutral-600">Following</span>
            </p>
          </div>
          <p className="w-full flex justify-center my-4 font-semibold">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

export const renderLinks = () => {
  return sidebarLinks.map((link, i) => {
    const Icon = icons.map((icon) => {
      return icon.name === link.icon ? (
        <span key={icon.name}>{icon.icon}</span>
      ) : null;
    });
    return (
      <li
        key={i}
        className="flex items-center border-b-[1px] border-neutral-900 justify-between gap-2 p-3 w-full hover:bg-neutral-900 cursor-pointer duration-300 ease-in-out"
      >
        {link.name}
        {Icon}
      </li>
    );
  });
};
