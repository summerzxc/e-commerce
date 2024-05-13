import React from "react";

export default function MiniProduct({ image, title, price, quantity }) {
  return (
    <div className="w-full flex sm:items-center sm:flex-row flex-col justify-between">
      <div className="w-full flex sm:items-center sm:flex-row flex-col">
        <div className="w-full sm:w-[100px] h-[200px] sm:h-[100px] bg-[#cdcdcd] rounded-[12px]"></div>
        <div className="sm:ml-8 bebas text-2xl">
          {title} <span className="satoshi-medium">x </span>
          {quantity}
        </div>
      </div>
      <span className="bebas text-2xl">{price}</span>
    </div>
  );
}
