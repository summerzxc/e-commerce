import React, { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import ProductCard from "../_atom/ProductCard";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectProducts } from "../../redux/productSlice";

export default function HomeCardRow() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter featured products and limit to three
  const featuredProducts = products
    .filter((product) => product.isFeatured)
    .slice(0, 3);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <h2 className="satoshi-medium text-[32px] md:text-[40px] lg:text-[64px] leading-[110%] mb-10">
        Explore Our Handpicked Selections &<br />
        <span className="bebas">Find Your Perfect Fit</span>
      </h2>
      <Link
        href="/shop"
        className="mb-12 px-6 py-4 rounded-full border border-white hover:bg-[#101011] duration-300 hover:text-white text-black bg-white w-fit flex items-center gap-2 satoshi-medium text-base md:text-xl "
      >
        Shop Products <BsArrowRight size={20} />
      </Link>
      <div className="w-full grid-cols-1 lg:grid-cols-3 grid gap-2">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
