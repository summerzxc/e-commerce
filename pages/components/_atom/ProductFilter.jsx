import React from "react";

export default function ProductFilter({ toggle, visible }) {
  return (
    <div className="w-full flex items-center justify-between gap-4 flex-wrap">
      <button
        onClick={toggle}
        className={`${
          visible ? "bg-white" : "bg-white/10"
        } px-3 py-1.5 rounded-[4px] text-[14px] satoshi-medium bg-white/10 hover:bg-white hover:text-[#101011] duration-300`}
      >
        Filter: {visible ? "ON" : "OFF"}
      </button>
      <div className="flex items-center gap-2">
        <span className="mr-2">Sort by</span>
        <button className="px-3 py-1.5 rounded-[4px] text-[14px] satoshi-medium bg-white/10 hover:bg-white hover:text-[#101011] duration-300">
          Popular
        </button>
        <button className="px-3 py-1.5 rounded-[4px] text-[14px] satoshi-medium bg-white/10 hover:bg-white hover:text-[#101011] duration-300">
          Latest
        </button>
      </div>
    </div>
  );
}
