import React from "react";
import Loader from "../Loader/Loader.component";

export interface ButtonInterface {
  text: string;
  size: "normal" | "large" | "xl";
  loading: boolean;
  action: (active: any) => void;
}

function DefaultButton(props: ButtonInterface) {
  const { text, action, loading, size } = props;
  return (
    <button
      className={`${
        size === "xl" ? "w-full" : null
      } bg-white text-black p-2 px-4 flex items-center justify-center rounded-md border-2 border-neutral-800 hover:bg-black duration-300 ease-in-out hover:text-white`}
      onClick={action}
    >
      {loading ? <Loader /> : text}
    </button>
  );
}

export const renderDefaultButton = (props: ButtonInterface) => {
  const { text, action, loading, size } = props;
  return (
    <DefaultButton text={text} action={action} loading={loading} size={size} />
  );
};

export default DefaultButton;
