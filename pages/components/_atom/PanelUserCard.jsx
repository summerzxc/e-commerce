import React from "react";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function PanelUserCard({user}) {
  return (
    <div className="px-2 flex flex-wrap justify-between items-center">
      <div className="flex sm:gap-5 sm:items-center sm:flex-row flex-col">
        <span>#1 </span>
        <span className="">Username: {user.username}</span>
        <span className="">Email: {user.email}</span>
      </div>
      <div className="w-full sm:w-auto flex items-center justify-between gap-5">
        <span>Items Bought: 1</span>
        <button className="text-red-600">
          <AiOutlineUserDelete size={24} />
        </button>
      </div>
    </div>
  );
}
