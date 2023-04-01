import global from "@/state/global";

export interface UserMenuItem {
  name: string;
  action?: () => void;
}

export const userMenu: UserMenuItem[] = [
  {
    name: "Dashboard",
  },
  {
    name: "Settings",
  },
  {
    name: "Profile",
  },
  {
    name: "Github",
  },
  {
    name: "Teams",
  },
  {
    name: "Logout",
    action: global.getState().logout
  },
];
