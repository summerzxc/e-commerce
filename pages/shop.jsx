import React from "react";
import Navbar from "./components/_molecule/Navbar";
import TitleComponent from "./components/_atom/TitleComponent";
import ChildCare from "./components/_atom/ChildCare";
import Footer from "./components/_molecule/Footer";
import Filter from "./components/_molecule/Filter";
import CardContainter from "./components/_molecule/CardContainter";

export default function Shop() {
  const [isFilterVisible, setIsFilterVisible] = React.useState(false);

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };
  return (
    <div className="max-w-[2160px] px-8 mx-auto">
      <Navbar />
      <TitleComponent title="Product Shop" />
      <div className="w-full flex py-8">
        <div
          className={`transition-transform transform ${
            isFilterVisible ? "translate-x-0 visible" : "hidden -translate-x-full"
          } flex-none w-1/4`}
        >
          <Filter />
        </div>
        <CardContainter toggle={toggleFilterVisibility} visible={isFilterVisible}/>
        {/* <button
          onClick={toggleFilterVisibility}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isFilterVisible ? "Hide Filter" : "Show Filter"}
        </button> */}
      </div>
      <ChildCare />
      <Footer />
    </div>
  );
}
