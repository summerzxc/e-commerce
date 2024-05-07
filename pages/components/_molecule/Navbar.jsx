import React from "react";
import { RiShoppingBagFill } from "react-icons/ri";
import Menu from "../menu/Menu";
import Cart from "../shop_cart/Cart";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center relative py-[30px]">
      <nav className="flex items-center gap-3 text-[14px]">
        <Link href="/shop">SHOP</Link>
        <Link href="/bundles">BUNDLES</Link>
        <Menu />
      </nav>
      <Link
        href="/"
        className="text-5xl absolute left-[50%] transform -translate-x-1/2 tracking-tight bebas"
      >
        soleil
      </Link>
      <Cart />
    </div>
  );
}
