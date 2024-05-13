import React from "react";

export default function AboutTopImg() {
  return (
    <div className="w-full flex gap-2">
      <div
        className="hidden md:block w-full h-[500px] bg-[#cdcdcd] rounded-[12px]"
        style={{
          backgroundImage: "url('/images/about-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="block md:hidden lg:block w-full h-[300px] md:h-[500px] bg-[#cdcdcd] rounded-[12px]"
        style={{
          backgroundImage: "url('/images/about-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        className="hidden md:block w-full h-[500px] bg-[#cdcdcd] rounded-[12px]"
        style={{
          backgroundImage: "url('/images/about-3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      ></div>
    </div>
  );
}
