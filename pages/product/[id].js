import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/_molecule/Navbar";
import Footer from "../components/_molecule/Footer";
import ChildCare from "../components/_atom/ChildCare";
import CardRow from "../components/home/CardRow";
import ProductPhoto from "../components/_molecule/ProductPhoto";
import { fetchProductById, selectProductById } from "../redux/productSlice"; // Import your actions and selectors
import { FiMinus, FiPlus } from "react-icons/fi";
import Head from "next/head";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const product = useSelector((state) => selectProductById(state, id)); // Use a selector to get the product by ID
  const [productQuantity, setProductQuantity] = useState(1);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id)); // Fetch the product by ID when the component mounts
    }
  }, [id, dispatch]);

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

  if (!product) {
    return <div
      className="w-full h-screen flex justify-center items-center text-3xl bebas">Loading...</div>;
  }

  return (
    <div className="max-w-[2160px] px-8 mx-auto">
      <Head>
        <title>Soleil - {product.name}</title>
      </Head>
      <Navbar />
      <div className="flex w-full lg:flex-row flex-col gap-10 my-10">
        <ProductPhoto images={product.images} />
        <div className="w-full flex flex-col justify-between">
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-[32px] md:text-[64px] bebas tracking-tight">
              {product.name}
            </h2>
            <div className="flex flex-col gap-3 text-[#888]">
              <p>{product.description}</p>
              {product.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
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
                  {product.sizes.map((size, index) => (
                    <option key={index}>{size}</option>
                  ))}
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
                    <FiMinus size={20} />
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
                    <FiPlus size={20} />
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
