import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, selectCategories } from "../../redux/categorySlice";

export default function PanelProductCategories() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-wrap lg:flex-nowrap lg:flex-col flex-row gap-1">
      {categories.map((category) => (
        <button
          key={category.id}
          className="satoshi-medium border border-white hover:text-[#151515] hover:bg-white duration-300 px-4 py-2 text-[14px] rounded-md flex justify-center items-center gap-2"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
