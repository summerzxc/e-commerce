import React from "react";
import Image from "next/image";

export default function FeatureCard({ label, number, text, image }) {
  return (
    <div
      className="w-full flex flex-col justify-between h-[70vh] p-3 rounded-[12px] relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="bg-black/20 w-fit h-fit rounded-full py-2 px-4">
        {label}
      </span>
      <div className="flex gap-3">
        <span className="bg-black/20 w-fit h-fit rounded-full p-2 pl-[15px] pr-[16px]">
          {number}
        </span>
        <p className="text-[14px] text-end">{text}</p>
      </div>
    </div>
  );
}
