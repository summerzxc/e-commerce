import React from "react";
import { IoSearch } from "react-icons/io5";
import CategoryAccordion from "../_atom/CategoryAccordion";

export default function Filter() {  
  return (
    <div className="w-full flex flex-col gap-5 mr-4">
      <div className="w-full flex items-center p-3 gap-3 bg-[#333333] rounded-[12px]">
        <IoSearch />
        <input
          type="text"
          placeholder="Search Products"
          className="bg-transparent border-none outline-none text-lg placeholder:text-[#888] w-full"
        />
      </div>
      <CategoryAccordion title={"Category"} answer={"hello world"}/>
    </div>
  );
}
