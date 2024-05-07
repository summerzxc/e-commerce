import React from "react";
import Navbar from "./components/_molecule/Navbar";

export default function About() {
  return (
    <div className="max-w-[2160px] px-8 mx-auto">
      <Navbar />
      <div className="w-full flex gap-2">
        <div
          className="w-full h-[500px] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: "url('/images/about-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="w-full h-[500px] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: "url('/images/about-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="w-full h-[500px] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: "url('/images/about-3.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "right",
          }}
        ></div>
      </div>
      <div className="w-full satoshi-medium text-4xl leading-[130%] my-[64px] text-[#888]">
        <p>
          <span className="text-white">Welcome to soleil,</span> your trusted
          source for authentic{" "}
          <span className="text-white">
            Chrome Hearts accessories and wearables.
          </span>{" "}
          Discover genuine craftsmanship and personalized service as you explore
          our curated collection.
        </p>
      </div>
      <div className="h-screen w-full flex gap-2">
        <div
          className="w-full h-[80vh] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: "url('/images/about-4.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="w-full h-[80vh] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: "url('/images/about-5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
