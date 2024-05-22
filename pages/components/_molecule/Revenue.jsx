import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRevenue, selectRevenue } from "../../redux/orderSlice";

export default function Revenue() {
  const dispatch = useDispatch();
  const revenue = useSelector(selectRevenue);
  console.log(revenue)

  useEffect(() => {
    dispatch(fetchRevenue());
  }, [dispatch]);

  return (
    <div className="bg-[#151515] border border-[#222222] rounded-[12px] flex items-center p-4 justify-between">
      <h3 className="text-xl satoshi-bold">REVENUE:</h3>
      {revenue !== null ? (
        <p className="text-2xl satoshi-medium">${revenue.totalsales}</p>
      ) : (
        <p className="text-2xl satoshi-medium">Loading...</p>
      )}
    </div>
  );
}
