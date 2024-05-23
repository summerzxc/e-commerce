import React from "react";
import { AiOutlineUserDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";

export default function PanelUserCard({ user }) {
  const dispatch = useDispatch();

  const handleRemoveUser = () => {
    dispatch(removeUser(user.id));
  };

  return (
    <div className="px-2 flex flex-wrap justify-between items-center">
      <div className="flex sm:gap-5 sm:items-center sm:flex-row flex-col">
        <span>#1 </span>
        <span className="">Username: {user.username}</span>
        <span className="">Email: {user.email}</span>
      </div>
      <div className="w-full sm:w-auto flex items-center justify-between gap-5">
        <button
          className="text-red-600"
          onClick={() => document.getElementById("removeUser").showModal()}
        >
          <AiOutlineUserDelete size={24} />
        </button>
      </div>
      <dialog id="removeUser" className="modal p-4">
        <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-full lg:w-[300px]">
          <div className="flex justify-between items-center">
            <h4 className="text-lg satoshi-bold">REMOVE USER</h4>
            <form method="dialog">
              <button>&#x2715;</button>
            </form>
          </div>
          <p className="text-[14px] mt-8 text-[#888]">
            Are you sure you want to remove this user?
          </p>
          <div className="mt-6 w-full flex gap-3">
            <form method="dialog" className="w-full">
              <button className="w-full satoshi-medium bg-gray-900 hover:bg-gray-800 duration-300 px-4 py-2 text-[14px] rounded-md flex gap-2 justify-center items-center">
                 Cancel
              </button>
            </form>

            <button
              onClick={handleRemoveUser}
              className="w-full satoshi-medium bg-red-900 hover:bg-red-800 duration-300 px-4 py-2 text-[14px] rounded-md flex gap-2 justify-center items-center"
            >
              Remove
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
