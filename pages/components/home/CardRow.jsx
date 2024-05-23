import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../_atom/ProductCard";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "../../redux/productSlice";

export default function CardRow({ title, buttonText, category, currentProductId }) {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter products based on category and limit to three
  const filteredProducts = products
    .filter((product) => product.category === category && product.id !== currentProductId)
    .slice(0, 3);

  return (
    <div className="w-full flex flex-col pb-[40px]">
      <h2 className="bebas text-[32px] md:text-[40px] lg:text-[64px] leading-[110%] mb-4 md:mb-10">
        {title}
      </h2>
      <Link
        href="/shop"
        className="border mb-5 md:mb-12 px-6 py-4 rounded-full hover:bg-[#101011] duration-300 hover:text-white text-black border-white  bg-white w-fit flex items-center gap-2 satoshi-medium text-base md:text-xl "
      >
        {buttonText} <BsArrowRight size={20} />
      </Link>
      <div className="w-full grid-cols-1 lg:grid-cols-3 grid gap-2">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
