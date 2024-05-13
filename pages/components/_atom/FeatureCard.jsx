import React from "react";
import Image from "next/image";

export default function FeatureCard({ label, number, text, image }) {
  return (
    <div
      className="w-full flex flex-col justify-between h-[300px] lg:h-[500px] xl:h-[70vh] p-3 rounded-[12px] relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/30 absolute w-full h-full left-0 top-0 z-[0]"></div>
      <span className="bg-black/20 w-fit h-fit rounded-full py-2 px-4 z-[1]">
        {label}
      </span>
      <div className="flex gap-3 lg:items-start items-center">
        <span className="bg-black/20 w-fit h-fit rounded-full p-2 pl-[15px] pr-[16px] z-[1]">
          {number}
        </span>
        <p className="text-[16px] text-end z-[1]">{text}</p>
      </div>
    </div>
  );
}
