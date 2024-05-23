"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { RiShoppingBagFill } from "react-icons/ri";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CartProduct from "./CartProduct";
import { fetchOrderItems, selectOrderItems } from "../../redux/orderSlice";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { BsArrowRight } from "react-icons/bs";

export default function Cart() {
  const container = useRef();
  const [open, setOpen] = useState(false);
  const tl = useRef();
  const toggleCart = () => setOpen(!open);
  const dispatch = useDispatch();
  const orderItems = useSelector(selectOrderItems);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { y: 75 });

      tl.current = gsap
        .timeline({ pause: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (open) {
      tl.current.play();
      dispatch(fetchOrderItems());
    } else {
      tl.current.reverse();
    }
  }, [open, dispatch]);

  const getUserIdFromToken = () => {
    const token = Cookies.get("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      return decodedToken.userId;
    }
    return null;
  };

  const userId = getUserIdFromToken();
  const userOrderItems = orderItems.filter((item) => item.user === userId);

  const calculateTotal = () => {
    return userOrderItems.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    );
  };
  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="cursor-pointer" onClick={toggleCart}>
          <RiShoppingBagFill size={28} />
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#202022] justify-between text-white z-[2] flex flex-col p-8 md:p-[64px] overflow-hidden">
        <div className="w-full flex items-center justify-between">
          <div className="text-[40px] md:text-[100px] bebas leading-[100%]">
            Your Cart
          </div>
          <div className="menu-close" onClick={toggleCart}>
            <p className="leading-[100%] cursor-pointer text-[32px] md:text-[40px] lg:text-[80px] hover:rotate-12 duration-300">
              &#x2715;
            </p>
          </div>
        </div>
        <div className="my-4 w-full flex flex-col gap-10 sm:gap-3 overflow-y-auto flex-grow cart-product-scroll pr-8">
          {userOrderItems.map((item) => (
            <CartProduct key={item._id} item={item} />
          ))}
        </div>
        <div className="w-full flex justify-between mt-4 border-t pt-8 items-center">
          <h3 className="sm:text-2xl">Total: ${calculateTotal()}</h3>
          <button className="border px-6 py-4 rounded-full hover:bg-[#202022] duration-300 hover:text-white text-black border-white  bg-white w-fit flex items-center gap-2 satoshi-medium text-base md:text-xl ">
            Checkout <BsArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
