import React from 'react';
import Image from 'next/image';

export default function CardDetail() {
  return (
    <div className="mt-6 flex flex-col justify-between p-4 rounded-[12px] w-full sm:w-[500px] bg-[#151515] border border-[#222222]">
          <h4 className="text-3xl satoshi-bold">Card Details</h4>
          <div className="flex items-center gap-2 py-4">
            <Image
              src="/images/visa.png"
              width={70}
              height={40}
              alt="visa logo"
            />
            <Image
              src="/images/mastercard.png"
              width={70}
              height={40}
              alt="visa logo"
            />
            <Image
              src="/images/paypal.png"
              width={70}
              height={40}
              alt="visa logo"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Card Holder Name</span>
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered bg-[#151515]"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Card Number</span>
              </div>
              <input
                type="text"
                placeholder="**** **** **** ****"
                className="input input-bordered bg-[#151515]"
              />
            </label>
            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-8">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Expiry Date</span>
                </div>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="input input-bordered bg-[#151515]"
                />
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">CVV</span>
                </div>
                <input
                  type="text"
                  placeholder="***"
                  className="input input-bordered bg-[#151515]"
                />
              </label>
            </div>
            <button className="btn btn-outline satoshi-medium mt-8">
              Place Order
            </button>
          </div>
        </div>
  )
}
