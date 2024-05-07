import React, { useState } from "react";
import Navbar from "./components/_molecule/Navbar";
import Footer from "./components/_molecule/Footer";
import ChildCare from "./components/_atom/ChildCare";
import CardRow from "./components/home/CardRow";
import ProductPhoto from "./components/_molecule/ProductPhoto";

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
      <div className="flex w-full gap-10 my-10">
        <ProductPhoto />
        <div className="w-full flex flex-col">
          <h2 className="text-[64px] bebas tracking-tight">
            001 - Plus Band Ring
          </h2>
          <div className="w-full flex gap-8 flex-col">
            <div className="flex flex-col gap-3">
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
            <div className="flex flex-col gap-4 p-5 rounded-[12px] border border-[#696969]">
              <label className="form-control w-full">
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
                    className="px-4 py-2 text-2xl border-r border-[#4E5052]"
                  >
                    -
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
                    className="p-4 py-2 text-2xl border-l border-[#4E5052]"
                  >
                    +
                  </button>
                </div>
              </label>

              <button className="mt-4 w-full border-white border hover:border-[#B068D3] duration-300 hover:text-white hover:bg-[#B068D3] py-3 rounded-md text-[14px]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <CardRow title="Related Products" buttonText="See More" />
      <ChildCare />
      <Footer />
    </div>
  );
}
