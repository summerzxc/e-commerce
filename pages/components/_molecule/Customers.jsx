import React from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { AiOutlineUserDelete } from "react-icons/ai";

export default function Customers() {
  return (
    <div className="cursor-pointer bg-[#151515] border border-[#222222] group rounded-[12px] flex flex-col p-4 gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl satoshi-bold">CUSTOMERS</h3>
          <GoArrowRight size={28} />
        </div>
        <div
          onClick={() => document.getElementById("customers").showModal()}
          className="w-[20px] h-[20px] group-hover:w-fit duration-500 ease-out group-hover:h-fit group-hover:p-2 rounded-full bg-white mt-1"
        >
          <GoArrowUpRight
            size={32}
            className="duration-300 ease-out group-hover:opacity-100 text-black opacity-0"
          />
        </div>
      </div>
      <div className="border-t w-full mt-[40px]"></div>
      <div className="flex justify-between items-end">
        <div className="leading-[110%]">
          <div>CURRENT</div>CUSTOMERS
        </div>
        <div>748</div>
      </div>
      <dialog id="customers" className="modal p-4">
        <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-full lg:w-[800px]">
          <div className="flex justify-between">
            <h4 className="text-2xl satoshi-bold">CUSTOMERS</h4>
            <form method="dialog">
              <button>&#x2715;</button>
            </form>
          </div>
          <div className="mt-8">
            <label className="input input-bordered input-sm bg-[#333333]  flex items-center gap-2">
              <input
                type="text"
                className="grow placeholder:text-[#888]"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="mt-4 flex flex-col gap-4 border rounded-[12px] p-2 border-[#222222]">
            <div className="px-2 flex flex-wrap justify-between items-center">
              <div className="flex sm:gap-5 sm:items-center sm:flex-row flex-col">
                <span>#1 </span>
                <span className="">Username: bazii</span>
                <span className="">Email: bazraa@gmail.com</span>
              </div>
              <div className="w-full sm:w-auto flex items-center justify-between gap-5">
                <span>Items Bought: 1</span>
                <button className="text-red-600">
                  <AiOutlineUserDelete size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
