import React from "react";
import { IoSearch } from "react-icons/io5";
import CategoryAccordion from "../_atom/CategoryAccordion";

export default function Filter() {  
  return (
    <div className="flex flex-col px-4 gap-5 w-[360px] mr-4">
      <div className="flex items-center p-3 gap-3 bg-[#333333] rounded-[12px] w-fit">
        <IoSearch />
        <input
          type="text"
          placeholder="Search Products"
          className="w-[280px] bg-transparent border-none outline-none text-lg placeholder:text-[#888]"
        />
      </div>
      <CategoryAccordion title={"Category"} answer={"hello world"}/>
    </div>
  );
}
