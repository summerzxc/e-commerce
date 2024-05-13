"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { RiShoppingBagFill } from "react-icons/ri";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CartProduct from "./CartProduct";

export default function Cart() {
  const container = useRef();
  const [open, setOpen] = useState(false);
  const tl = useRef();
  const toggleCart = () => setOpen(!open);

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
    } else {
      tl.current.reverse();
    }
  }, [open]);

  return (
    <div className="menu-container" ref={container}>
      <div className="menu-bar">
        <div className="cursor-pointer" onClick={toggleCart}>
          <RiShoppingBagFill size={28} />
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#202022] text-white z-[2] flex flex-col p-8 md:p-[64px] overflow-hidden">
        <div className="w-full flex items-center justify-between">
          <div className="text-[40px] md:text-[100px] bebas leading-[100%]">Your Cart</div>
          <div className="menu-close" onClick={toggleCart}>
            <p className="leading-[100%] cursor-pointer text-[32px] md:text-[40px] lg:text-[80px] hover:rotate-12 duration-300">
              &#x2715;
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3 mt-[60px] lg:mt-[100px]">
          <CartProduct />
        </div>
      </div>
    </div>
  );
}
