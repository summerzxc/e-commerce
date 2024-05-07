import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen w-full absolute top-0 left-0 z-[-1]">
      <video
        src="/videos/preview_video.mp4"
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
      />
      <div className="min-h-screen w-full absolute top-0 left-0 tb-gradient"></div>
      <div className="min-h-screen w-full absolute top-0 left-0 flex justify-end items-end p-[40px]">
        <h1 className="text-[80px] leading-[110%] text-end satoshi-medium">
          Experience the next <br /> evolution in fashion
        </h1>
      </div>
    </div>
  );
}
