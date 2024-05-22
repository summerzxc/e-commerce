import React from "react";
import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  GiPrimitiveNecklace,
  GiBigDiamondRing,
  GiCrystalEarrings,
  GiSunglasses,
} from "react-icons/gi";
import PanelProductCategories from "../_atom/PanelProductCategories";
import PanelAddCategory from "../_atom/PanelAddCategory";
import PanelAddProduct from "../_atom/PanelAddProduct";

export default function PanelProducts() {
  return (
    <div className="cursor-pointer bg-[#151515] border border-[#222222] group rounded-[12px] flex flex-col p-4 gap-3">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h3 className="text-xl satoshi-bold">PRODUCTS</h3>
          <GoArrowRight size={28} />
        </div>
        <div
          onClick={() => document.getElementById("products").showModal()}
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
          <div>CURRENT</div>PRODUCTS ON MARKET
        </div>
        <div>10</div>
      </div>
      <dialog id="products" className="modal p-4">
        <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-full lg:w-[1000px]">
          <div className="flex justify-between">
            <h4 className="text-2xl satoshi-bold">PRODUCTS</h4>
            <form method="dialog">
              <button>&#x2715;</button>
            </form>
          </div>
          <div className="flex lg:flex-row flex-col mt-8 gap-8">
            <div className="flex flex-col w-full lg:w-[180px] gap-1">
              <label className="input input-bordered input-sm bg-[#333333] flex items-center gap-2 mb-2">
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
              <button onClick={() => document.getElementById("addProduct").showModal()} className="satoshi-medium bg-emerald-900 hover:bg-emerald-800 duration-300 px-4 py-2 text-[14px] rounded-md flex gap-2 justify-center items-center mb-1">
                <FaPlus className="mt-[2px]" />
                Add Product
              </button>
              <button onClick={() => document.getElementById("addCategory").showModal()} className="satoshi-medium bg-yellow-900 hover:bg-yellow-800 duration-300 px-4 py-2 text-[14px] rounded-md flex gap-2 justify-center items-center mb-4">
                <FaPlus className="mt-[2px]" />
                Add Category
              </button>
              <PanelProductCategories/>
            </div>
            <div className="w-full flex flex-col gap-3">
              <div className="w-full hidden md:flex items-center justify-between text-[#888] satoshi-medium mb-5">
                <span>PRODUCT</span>
                <div className="flex items-center">
                  <span className="w-[100px] flex justify-center">PRICE</span>
                  <span className="w-[100px] flex justify-center">ORDERED</span>
                  <span className="w-[100px] flex justify-center">STOCK</span>
                  <span className="w-[100px] flex justify-center"></span>
                </div>
              </div>
              <div className="w-full flex md:flex-row flex-col md:items-center justify-between">
                <div className="flex md:flex-row flex-col md:items-center gap-3">
                  <div className="w-full sm:w-[200px] md:w-[56px] h-[180px] sm:h-[120px] md:h-[56px] bg-[#cdcdcd] rounded-md"></div>
                  <span className="text-2xl mb-2 satoshi-medium md:text-base md:mb-0">
                    Leather Jacket
                  </span>
                </div>
                <div className="flex md:items-center md:flex-row flex-col w-full md:w-auto">
                  <span className="w-[100px] flex md:justify-center">
                    <span className="md:hidden mr-2 satoshi-medium">
                      Price:{" "}
                    </span>
                    $200
                  </span>
                  <span className="w-[100px] flex md:justify-center">
                    <span className="md:hidden mr-2 satoshi-medium">
                      Ordered:{" "}
                    </span>
                    10
                  </span>
                  <span className="w-[100px] flex md:justify-center">
                    <span className="md:hidden mr-2 satoshi-medium">
                      Stock:{" "}
                    </span>
                    100
                  </span>
                  <div className="mt-4 md:mt-0 sm:w-[200px] md:w-[100px] flex justify-center items-center gap-2">
                    <button className="w-full md:w-auto flex justify-center bg-blue-700 p-2 rounded-md text-blue-300 hover:bg-blue-900">
                      <MdEdit size={20} />
                    </button>
                    <button className="w-full md:w-auto flex justify-center bg-red-700 p-2 rounded-md text-red-300 hover:bg-red-900">
                      <MdDelete size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
      <PanelAddCategory/>
      <PanelAddProduct/>
    </div>
  );
}
