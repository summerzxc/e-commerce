"use client";
import React, { useEffect, useState } from "react";
import Menu from "../menu/Menu";
import Cart from "../shop_cart/Cart";
import Link from "next/link";
import Cookies from "js-cookie";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/router";
import { MdExitToApp } from "react-icons/md";

export default function Navbar() {
  const [username, setUsername] = useState(null);
  const router = useRouter();
  let userIdd;
  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      const userId = decodedToken.userId; // Adjust according to your token structure

      userIdd = userId;
      axios
        .get(`http://localhost:4000/api/v1/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const data = response.data;
          if (data && data.username) {
            setUsername(data.username); // Adjust to match your API response
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, []);

  const handleProfile = () => {
    if (username) {
      router.push(`/profile/${userIdd}`); // Adjust to match your profile URL
    }
  };

  return (
    <div className="w-full flex justify-between items-center relative py-[30px] z-[1]">
      <nav className="flex items-center gap-3 text-[14px]">
        <Menu />
        <Link href="/shop" className="hidden md:block">
          SHOP
        </Link>
        {username ? (
          <span
            className="cursor-pointer hidden md:block"
            onClick={handleProfile}
          >
            {username} 👋
          </span>
        ) : (
          <Link href="/auth/login" className="hidden md:block">
            LOG IN
          </Link>
        )}
      </nav>
      <Link
        href="/"
        className="text-5xl absolute left-[50%] transform -translate-x-1/2 tracking-tight bebas"
      >
        soleil
      </Link>
      <div className="flex items-center gap-3">
        <Cart />
        {username ? (
          <span
            className="cursor-pointer"
            onClick={() => {
              Cookies.remove("token");
              router.push("/auth/login");
            }}
          >
            <MdExitToApp size={28}/>
          </span>
        ) : (
          null
        )}
      </div>
    </div>
  );
}
