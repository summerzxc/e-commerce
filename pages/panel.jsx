import React, { useState } from "react";
import Revenue from "./components/_molecule/Revenue";
import Customers from "./components/_molecule/Customers";
import PanelProducts from "./components/_molecule/PanelProducts";
import Shippings from "./components/_molecule/Shippings";
import Head from "next/head";
export default function Panel() {
  return (
    <div
      className="min-h-screen w-full flex sm:flex-row flex-col gap-10 justify-between p-6"
      style={{
        backgroundImage: "url('/images/panel-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Head>
        <title>Soleil - Panel</title>
      </Head>
      <div className="flex flex-col justify-between">
        <span className="text-white bebas text-5xl">soleil.co</span>
        <p className="mt-3 sm:mt-0 text-2xl sm:text-4xl">
          Authentic Luxury, Personalized Service.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full sm:w-[400px]">
        <Revenue />
        <Customers />
        <PanelProducts />
        <Shippings />
      </div>
    </div>
  );
}
