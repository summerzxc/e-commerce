import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import axiosInstance from "@/utils/axiosInstance";
import Navbar from "../components/_molecule/Navbar";
import Footer from "../components/_molecule/Footer";
import ChildCare from "../components/_atom/ChildCare";
import CardRow from "../components/home/CardRow";
import ProductPhoto from "../components/_molecule/ProductPhoto";
import { fetchProductById, selectProductById } from "../redux/productSlice"; // Import your actions and selectors
import { FiMinus, FiPlus } from "react-icons/fi";
import Head from "next/head";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

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

  const handleAddToCart = async () => {
    try {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/auth/login");
        return;
      }

      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;

      const response = await axiosInstance.post("/orders/add-to-cart", {
        userId,
        productId: id,
        quantity: productQuantity,
      });

      alert("Product added to cart successfully!");
      setProductQuantity(1);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert("You have already added this item to the cart");
      } else {
        console.log(error);
      }
    }
  };

  if (!product) {
    return (
      <div className="w-full h-screen flex justify-center items-center text-3xl bebas">
        Loading ...
      </div>
    );
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
            <h2 className="text-[32px] md:text-[64px] bebas tracking-tight leading-[110%]">
              {product.name}
            </h2>
            <span className="text-3xl">$ {product.price}</span>
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
            <button
              className="border-white border duration-300 hover:text-[#101011] hover:bg-white py-3 rounded-md text-[14px]"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {product && (
        <CardRow
          title="Related Products"
          buttonText="See More"
          category={product.category}
          currentProductId={id} // Pass the ID of the current product
        />
      )}
      <ChildCare />
      <Footer />
    </div>
  );
}
