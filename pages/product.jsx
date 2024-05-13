import React, { useState } from "react";
import Navbar from "./components/_molecule/Navbar";
import Footer from "./components/_molecule/Footer";
import ChildCare from "./components/_atom/ChildCare";
import CardRow from "./components/home/CardRow";
import ProductPhoto from "./components/_molecule/ProductPhoto";

import { FiMinus, FiPlus } from "react-icons/fi";



export default function Product() {
  const [productQuantity, setProductQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setProductQuantity(Math.max(1, value));
    }
  };

  const incrementQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };

  const decrementQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  return (
    <div className="max-w-[2160px] px-8 mx-auto">
      <Navbar />
      <div className="flex w-full lg:flex-row flex-col gap-10 my-10">
        <ProductPhoto />
        <div className="w-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-[32px] md:text-[64px] bebas tracking-tight">
              001 - Plus Band Ring
            </h2>
            <div className="flex flex-col gap-3 text-[#888]">
              <p>
                This Chrome Hearts plus band ring is a perfect example of a
                minimalist design Chrome Hearts ring. This ring features a
                rounded edge and evenly spaced Chrome Hearts plus motifs along
                the band of the ring.
              </p>
              <p>
                The curved surface of the ring allows the ring to show off the
                silver’s natural luster and shine to create a beautiful effect.
              </p>
              <p>
                The Chrome Hearts plus motifs add a balanced feeling to the ring
                such that the feeling is very pleasant. We recommend this ring
                both as a co-ordinating piece and as a ring between lovers.
              </p>
            </div>
          </div>
          <div className="w-fit flex gap-4 mt-8 flex-col">
            <div className="flex flex-wrap items-center gap-4 ">
              <label className="form-control w-[200px]">
                <div className="label">
                  <span className="label-text">Option</span>
                </div>
                <select className="select select-bordered bg-[#383838]">
                  <option disabled selected>
                    Choose your size
                  </option>
                  <option>US 4</option>
                  <option>US 5</option>
                  <option>US 6</option>
                  <option>US 7</option>
                  <option>US 8</option>
                  <option>US 9</option>
                  <option>US 10</option>
                </select>
              </label>
              <label className="form-control w-[200px]">
                <div className="label">
                  <span className="label-text">Quantity</span>
                </div>
                <div className="flex border border-[#4E5052] rounded-md justify-between items-center bg-[#383838]">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-3 border-r border-[#4E5052]"
                  >
                    <FiMinus size={20}/>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={productQuantity}
                    onChange={handleQuantityChange}
                    className="text-lg bg-transparent text-center w-full outline-none deesh-doosh"
                  />
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-3 border-l border-[#4E5052]"
                  >
                    <FiPlus size={20}/>
                  </button>
                </div>
              </label>
            </div>
            <button className="border-white border duration-300 hover:text-[#101011] hover:bg-white py-3 rounded-md text-[14px]">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <CardRow title="Related Products" buttonText="See More" />
      <ChildCare />
      <Footer />
    </div>
  );
}
