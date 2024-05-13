import React from "react";
import Navbar from "./components/_molecule/Navbar";
import TitleComponent from "./components/_atom/TitleComponent";
import ChildCare from "./components/_atom/ChildCare";
import Footer from "./components/_molecule/Footer";
import Filter from "./components/_molecule/Filter";
import CardContainter from "./components/_molecule/CardContainter";
import Head from 'next/head';


export default function Shop() {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className="max-w-[2160px] px-8 mx-auto">
      <Head>
        <title>Soleil - Shop</title>
      </Head>
      <Navbar />
      <TitleComponent title="Product Shop" />
      <div className="w-full flex flex-col py-8">
        <div
          className={`transition-transform transform ${
            isFilterVisible ? "translate-x-0 visible" : "hidden -translate-x-full"
          } flex-none w-full`}
        >
          <Filter />
        </div>
        <CardContainter toggle={toggleFilterVisibility} visible={isFilterVisible}/>
      </div>
      <ChildCare />
      <Footer />
    </div>
  );
}
