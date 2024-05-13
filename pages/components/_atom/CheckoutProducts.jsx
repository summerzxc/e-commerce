import React from "react";
import MiniProduct from "../_molecule/MiniProduct";

export default function CheckoutProducts() {
  return (
    <div className="flex flex-col w-full md:w-[500px] gap-3">
      <div className="flex flex-col gap-5 sm:gap-2 pt-6 pb-4">
        <MiniProduct
          title={"001 - Leather Jacket"}
          quantity={"1"}
          price={"$56"}
        />
        <MiniProduct
          title={"002 - 22K Cross Ring"}
          quantity={"4"}
          price={"$299"}
        />
        <MiniProduct title={"003 - Silk Curf"} quantity={"2"} price={"$99"} />
      </div>
      <div className="w-full h-[1px] bg-[#cdcdcd]"></div>
      <div className="flex flex-col gap-5 text-xl">
        <div>
          <span className="satoshi-medium">Discount:</span> $0.00
        </div>
        <div>
          <span className="satoshi-medium">Subtotal:</span> $0.00
        </div>
        <div className="w-full h-[1px] bg-[#cdcdcd]"></div>
        <div>
          <span className="satoshi-medium">Total:</span> $346.00
        </div>
      </div>
    </div>
  );
}
