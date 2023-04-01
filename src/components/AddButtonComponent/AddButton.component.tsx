import global from "@/state/global";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function AddButtonComponent() {
  const { addSomething, setAddSomething } = global();
  return (
    <button
      onClick={() => setAddSomething(!addSomething)}
      className="p-3 hover:bg-neutral-900 rounded-md ease-in-out duration-200"
    >
      <AiOutlinePlus className="text-xl" />
    </button>
  );
}

export default AddButtonComponent;
