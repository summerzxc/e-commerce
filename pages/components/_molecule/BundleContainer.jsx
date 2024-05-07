import React from "react";
import BundleCard from "../_atom/BundleCard";

export default function BundleContainer() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 my-8">
      <BundleCard image="product-1.png" title="Silk Curf" number="003" />
      <BundleCard image="product-1.png" title="Silk Curf" number="003" />
      <BundleCard image="product-1.png" title="Silk Curf" number="003" />
      <BundleCard image="product-1.png" title="Silk Curf" number="003" />
    </div>
  );
}
