import React from "react";
import ProductCard from "../_atom/ProductCard";

export default function CardContainter({toggle, visible}) {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex items-center justify-between">
      <button onClick={toggle} className={`${visible ? 'bg-[#B068D3]' : 'bg-white/10'} px-3 py-1.5 rounded-[4px] text-[14px] satoshi-medium bg-white/10 hover:bg-[#B068D3] duration-300`}>
            Filter : {visible ? "ON" : "OFF"}
          </button>
        <div className="flex items-center gap-2">
          <span className="mr-2">Sort by</span>
          <button className="px-3 py-1.5 rounded-[4px] text-[14px] satoshi-medium bg-white/10 hover:bg-[#B068D3] duration-300">
            Popular
          </button>
          <button className="px-3 py-1.5 rounded-[4px] text-[14px] satoshi-medium bg-white/10 hover:bg-[#B068D3] duration-300">
            Latest
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-2">
        <ProductCard image="product-1.png" title="Silk Curf" number="003" />
        <ProductCard image="product-1.png" title="Silk Curf" number="003" />
        <ProductCard image="product-1.png" title="Silk Curf" number="003" />
        <ProductCard image="product-1.png" title="Silk Curf" number="003" />
        <ProductCard image="product-1.png" title="Silk Curf" number="003" />
        <ProductCard image="product-1.png" title="Silk Curf" number="003" />
      </div>
    </div>
  );
}
