import React from "react";

export default function Footer() {
  return (
    <div className="w-full flex items-end py-[80px] justify-between">
      <div className="flex items-center gap-10">
        <h1 className="text-[200px] tracking-tighter bebas leading-[80%]">
          soleil
        </h1>
        <ul>
          <li>Shop</li>
          <li>Bundles</li>
          <li>About Us</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="flex flex-col satoshi-bold text-xl text-end">
        <span>support@soleil.com</span>
        <span>@soleil.fashion</span>
      </div>
    </div>
  );
}
