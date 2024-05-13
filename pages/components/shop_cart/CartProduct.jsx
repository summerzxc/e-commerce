import React from "react";

export default function CartProduct() {
  return (
    <div className="w-full flex justify-between gap-5 flex-wrap items-center">
      <div className="w-full sm:w-auto flex flex-wrap items-center gap-5">
        <div
          className="w-full sm:w-[300px] h-[200px] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: "url('/plus-band-ring-1.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h3 className="text-[32px] bebas">Plus Band Ring</h3>
      </div>
      <span className="text-xl">$130</span>
      <button className="text-red-600">Remove</button>
    </div>
  );
}
