import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../_atom/ProductCard";

export default function CardRow({title, buttonText}) {
  return (
    <div className="h-screen w-full flex flex-col">
      <h2 className="bebas text-[64px] leading-[110%] mb-10">
        {title}
      </h2>
      <a href="" className="mb-12 px-6 py-4 rounded-full hover:bg-[#B068D3] duration-300 hover:text-white text-black bg-white w-fit flex items-center gap-2 satoshi-medium text-xl ">{buttonText} <BsArrowRight size={20}/></a>
      <div className="w-full grid-cols-3 grid gap-2">
            <ProductCard image="product-1.png" title="Leather Jacket" number="001"/>
            <ProductCard image="product-1.png" title="Denim Jeans" number="002"/>
            <ProductCard image="product-1.png" title="Silk Curf" number="003"/>
      </div>
    </div>
  );
}
