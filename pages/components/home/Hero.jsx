import React from "react";

export default function Hero() {
  return (
    <div
      className="h-screen w-full absolute top-0 left-0 z-[0]"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="min-h-screen w-full absolute top-0 left-0 flex justify-end items-end p-[40px]">
        <h1 className="text-[28px] sm:text-[40px] lg:text-[80px] leading-[110%] text-end satoshi-medium">
          Experience the next <br className="hidden sm:block"/> evolution in fashion
        </h1>
      </div>
    </div>
  );
}
