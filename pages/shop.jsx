import React, { useState } from "react";
import Navbar from "./components/_molecule/Navbar";
import TitleComponent from "./components/_atom/TitleComponent";
import ChildCare from "./components/_atom/ChildCare";
import Footer from "./components/_molecule/Footer";
import Filter from "./components/_molecule/Filter";
import CardContainer from "./components/_molecule/CardContainer";
import Head from "next/head";

export default function Shop() {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleFilterVisibility = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleCategorySelect = (category) => {
    if (category === "All") {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
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
            isFilterVisible
              ? "translate-x-0 visible"
              : "hidden -translate-x-full"
          } flex-none w-full`}
        >
          <Filter onCategorySelect={handleCategorySelect} onSearch={handleSearch}/>
        </div>
        <CardContainer
          toggle={toggleFilterVisibility}
          visible={isFilterVisible}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />
      </div>
      <ChildCare />
      <Footer />
    </div>
  );
}
