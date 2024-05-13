import React from "react";
import Navbar from "./components/_molecule/Navbar";
import TitleComponent from "./components/_atom/TitleComponent";
import MiniProduct from "./components/_molecule/MiniProduct";
import Image from "next/image";
import ChildCare from "./components/_atom/ChildCare";
import Footer from "./components/_molecule/Footer";
import CardDetail from "./components/_atom/CardDetail";
import CheckoutProducts from "./components/_atom/CheckoutProducts";
import Head from "next/head";
export default function Checkout() {
  return (
    <div className="max-w-[2160px] min-h-screen px-8 mx-auto">
      <Head>
        <title>Soleil - Checkout</title>
      </Head>
      <Navbar />
      <TitleComponent title={"Checkout"} />
      <div className="mt-8 flex justify-center items-center lg:items-start flex-col lg:flex-row gap-[64px]">
        <CheckoutProducts />
        <CardDetail />
      </div>
      <div className="py-[30px]"></div>
      <ChildCare />
      <Footer />
    </div>
  );
}
