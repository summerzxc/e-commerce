import React from "react";
import { useDispatch } from "react-redux";
import {
  removeOrderItem,
  decrementQuantity,
  incrementQuantity,
} from "../../redux/orderSlice";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function CartProduct({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeOrderItem(item._id));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(item._id));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item._id));
  };

  return (
    <div className="w-full flex justify-between gap-5 flex-wrap items-center">
      <div className="w-full sm:w-auto flex flex-wrap items-center gap-5">
        <div
          className="w-full sm:w-[300px] h-[200px] bg-[#cdcdcd] rounded-[12px]"
          style={{
            backgroundImage: `url(${item.product.images[0]})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <h3 className="text-[32px] bebas">{item.product.name}</h3>
      </div>
      <div className="flex gap-10 items-center">
        <span className="text-lg">
          ${item.product.price} x {item.quantity}
        </span>
        <div className="flex gap-3">
          <button onClick={handleIncrement}>
            <IoIosArrowUp size={20} />
          </button>
          <button onClick={handleDecrement}>
            <IoIosArrowDown size={20} />
          </button>
        </div>
        <button className="text-red-600" onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
}
