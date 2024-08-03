import React from "react";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
const { orderDetails } = require("../../dataDashBoard/orderDetails");

const OrderStatics = () => {
  console.log(orderDetails);
  return (
    <div className="w-[65%] border  flex justify-between">
      <>
        {orderDetails.map((data, index) => (
          <div
            className="w-48 h-32 bg-richblack-800 rounded-md flex flex-col relative"
            key={index}
          >
            <div className="py-2 px-2 bg-caribbeangreen-700 max-w-fit rounded-md my-2 ml-2">
              <TbShoppingBagCheck className="text-2xl" />
            </div>
            <p className="text-sm font-bold text-richblack-50 px-2 mb-3">
              {data.label}
            </p>
            <p className="text-white px-2 text-xl">{data.numberItems}</p>
            <div className="absolute bottom-0 right-1 flex items-center">
              {data.increment > 0 ? (
                <>
                  <MdArrowDropUp className="text-caribbeangreen-300 text-3xl" />
                  <p className="text-caribbeangreen-300 font-bold">
                    {data.increment} %{" "}
                  </p>
                </>
              ) : (
                <>
                  <MdArrowDropDown className="text-pink-500 text-3xl" />
                  <p className="text-pink-500 font-bold">{data.increment} % </p>
                </>
              )}
            </div>
          </div>
        ))}
      </>
    </div>
  );
};

export default OrderStatics;
