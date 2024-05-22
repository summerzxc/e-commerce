import React from "react";

export default function PanelAddCategory() {
  return (
    <dialog id="addCategory" className="modal p-4">
      <div className="p-4 rounded-[12px] bg-[#151515] border border-[#222222] w-full sm:w-[400px]">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl satoshi-bold">ADD CATEGORY</h4>
          <form method="dialog">
            <button>&#x2715;</button>
          </form>
        </div>
        <div className="flex flex-col w-full mt-8">
          <label className="input input-bordered input-sm bg-[#333333] flex items-center gap-2 mb-2">
            <input
              type="text"
              className="grow placeholder:text-[#888]"
              placeholder="Category Name"
            />
          </label>
          <button className="satoshi-medium bg-emerald-900 hover:bg-emerald-800 duration-300 px-4 py-2 text-[14px] rounded-md flex gap-2 justify-center items-center">
            Add
          </button>
        </div>
      </div>
    </dialog>
  );
}
