import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, selectCategories } from "../../redux/categorySlice";
// import {
//   GiPrimitiveNecklace,
//   GiBigDiamondRing,
//   GiCrystalEarrings,
//   GiSunglasses,
// } from "react-icons/gi";

const CategoryAccordion = ({ title, onCategorySelect }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span>{title}</span>
        <svg
          className="fill-white shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-outtext-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden py-5 flex flex-wrap gap-2">
          <div
            onClick={() => handleCategoryClick("All")}
            className="cursor-pointer p-4 flex flex-col items-center gap-2 border rounded-[8px] border-[#696969] w-[100px]"
          >
            <span>all</span>
          </div>
          {categories.map((category) => (
            <div
              onClick={() => handleCategoryClick(category._id)}
              className="cursor-pointer p-4 flex flex-col items-center gap-2 border rounded-[8px] border-[#696969] w-[100px]"
            >
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryAccordion;
