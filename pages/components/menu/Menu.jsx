"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { TbMenu } from "react-icons/tb";

const menuLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/shop",
    label: "Shop",
  },
  {
    path: "/bundles",
    label: "Bundles",
  },
  {
    path: "/about",
    label: "About",
  },
];

export default function Menu() {
  const container = useRef();
  const [open, setOpen] = useState(false);
  const tl = useRef();
  const toggleMenu = () => setOpen(!open);
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
        <div className="cursor-pointer" onClick={toggleMenu}>
          <p className="hidden md:block">MENU</p>
          <TbMenu size={28} className="md:hidden" />
        </div>
      </div>
      <div className="menu-overlay fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#202022] text-white z-[2] flex flex-col p-8 md:p-[64px] justify-between">
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item bebas text-[40px] md:text-[56px] lg:text-[80px] leading-[85%]" key={index}>
                <div
                  className="menu-link-item-holder py-1"
                  onClick={toggleMenu}
                >
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p className="leading-[100%] cursor-pointer text-[32px] md:text-[40px] lg:text-[80px] hover:rotate-12 duration-300">
              &#x2715;
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 md:flex-row md:items-center justify-between">
          <h1 className="bebas text-[64px] md:text-[100px] lg:text-[200px] tracking-tighter leading-[80%]">
            soleil . co
          </h1>
          <div
            className="w-full lg:w-[500px] h-[120px] md:h-[160px] rounded-[12px]"
            style={{
              backgroundImage: `url('/images/menu-photo.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
