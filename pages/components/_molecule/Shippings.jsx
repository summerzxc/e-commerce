import React, { useState } from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";

export default function Shippings() {
  const [currentTab, setCurrentTab] = useState("pending");

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <div className="cursor-pointer bg-[#151515] border border-[#222222] group rounded-[12px] flex flex-col p-4 gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl satoshi-bold">SHIPPINGS</h3>
          <GoArrowRight size={28} />
        </div>
        <div
          onClick={() => document.getElementById("shippings").showModal()}
          className="w-[20px] h-[20px] group-hover:w-fit duration-500 ease-in-out group-hover:h-fit group-hover:p-2 rounded-full bg-white mt-1"
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
      <dialog id="shippings" className="modal p-4">
        <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-full lg:w-[800px]">
          <div className="flex justify-between">
            <h4 className="text-2xl satoshi-bold">SHIPPINGS</h4>
            <form method="dialog">
              <button>&#x2715;</button>
            </form>
          </div>
          <div className=" flex flex-col gap-1 mt-8 w-full">
            <div className="flex gap-2 w-full">
              <button
                className={`w-full satoshi-medium ${
                  currentTab === "pending"
                    ? "bg-yellow-700 hover:bg-yellow-600"
                    : "bg-[#333333]"
                } duration-300 px-4 py-2 text-[14px] rounded-md`}
                onClick={() => handleTabChange("pending")}
              >
                Pending
              </button>
              <button
                className={`w-full satoshi-medium ${
                  currentTab === "shipped"
                    ? "bg-emerald-900 hover:bg-emerald-800"
                    : "bg-[#333333]"
                } duration-300 px-4 py-2 text-[14px] rounded-md`}
                onClick={() => handleTabChange("shipped")}
              >
                Shipped
              </button>
            </div>
          </div>

          <div className="w-full flex md:flex-row flex-col gap-5 mt-8">
            <div
              className={`w-full  ${currentTab !== "pending" ? "hidden" : ""}`}
            >
              <h4 className="hidden md:block text-lg satoshi-medium text-[#888] mb-3">
                PENDING
              </h4>
              <label className="input input-bordered input-sm bg-[#333333] flex items-center gap-2 mb-4">
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
              <div className="flex flex-col gap-2">
                <div
                  onClick={() => document.getElementById("order").showModal()}
                  className="w-full flex justify-between items-center py-1.5 border border-yellow-700 px-3 rounded-md"
                >
                  <span>Order #1123</span>
                  <span>by xsle</span>
                </div>
                <div className="w-full flex justify-between items-center py-1.5 border border-yellow-700 px-3 rounded-md">
                  <span>Order #313</span>
                  <span>by le</span>
                </div>
                <div className="w-full flex justify-between items-center py-1.5 border border-yellow-700 px-3 rounded-md">
                  <span>Order #1423</span>
                  <span>by rel</span>
                </div>
              </div>
            </div>
            <div
              className={`w-full  ${currentTab !== "shipped" ? "hidden" : ""}`}
            >
              <h4 className="hidden md:block text-lg satoshi-medium text-[#888] mb-3">
                SHIPPED
              </h4>
              <label className="input input-bordered input-sm bg-[#333333] flex items-center gap-2 mb-4">
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
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center py-1.5 border border-emerald-700 px-3 rounded-md">
                  <span>Order #141</span>
                  <span>by xsle</span>
                </div>
                <div className="w-full flex justify-between items-center py-1.5 border border-emerald-700 px-3 rounded-md">
                  <span>Order #113</span>
                  <span>by hus</span>
                </div>
                <div className="w-full flex justify-between items-center py-1.5 border border-emerald-700 px-3 rounded-md">
                  <span>Order #23</span>
                  <span>by xsqm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <dialog id="order" className="modal">
        <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-[800px]">
          <div className="flex justify-between">
            <h4 className="text-2xl satoshi-bold">ORDER #231</h4>
            <form method="dialog">
              <button>&#x2715;</button>
            </form>
          </div>
          <div className="w-full mt-8 flex flex-col">
            <div className="w-full flex items-center justify-between text-[#888] satoshi-medium mb-5">
              <span>PRODUCT</span>
              <div className="flex items-center">
                <span className="w-[100px] flex justify-center">PRICE</span>
                <span className="w-[100px] flex justify-center">ORDERED</span>
                <span className="w-[100px] flex justify-center">STOCK</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-[56px] h-[56px] bg-[#cdcdcd] rounded-md"></div>
                <span>Leather Jacket</span>
              </div>
              <div className="flex items-center">
                <span className="w-[100px] flex justify-center">$200</span>
                <span className="w-[100px] flex justify-center">10</span>
                <span className="w-[100px] flex justify-center">100</span>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
