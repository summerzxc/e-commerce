import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-10 items-end py-[80px] justify-between">
      <div className="flex items-center gap-10">
        <h1 className="text-[100px] md:text-[200px] tracking-tighter bebas leading-[80%]">
          soleil
        </h1>
        <ul className="text-[14px] sm:text-base flex flex-col">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/faq">FAQ</Link>
        </ul>
      </div>
      <div className="flex flex-col satoshi-medium text-lg md:text-xl text-end">
        <span>support@soleil.com</span>
        <span>@soleil.fashion</span>
      </div>
    </div>
  );
}
