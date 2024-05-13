import React from "react";

export default function ProductCard({image, title, number}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="bg-[#cdcdcd] w-full h-[240px] sm:h-[300px] rounded-[12px]"></div>
      <span>{number} - {title}</span>
    </div>
  );
}
