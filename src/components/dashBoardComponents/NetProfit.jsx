import React from "react";
import { MdArrowDropUp } from "react-icons/md";

const NetProfit = () => {
  return (
    <div className="w-[35%] bg-richblack-800 rounded-md flex flex-col justify-between px-2 relative">
      <p className="text-sm text-richblack-100 py-2">Net Profit</p>
      <p className="text-4xl text-white font-bold">$6759.25</p>
      <div className="flex items-center">
        <MdArrowDropUp className="text-caribbeangreen-300 text-3xl" />
        <p className="text-caribbeangreen-300 font-bold">3% </p>
      </div>
      <div>
        <div class="progress">
          <span
            class="title timer"
            data-from="0"
            data-to="70"
            data-speed="1500"
          >
            70
          </span>
          <div class="overlay"></div>
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <p className="text-sm text-richblack-50 absolute right-0 bottom-0 py-1">
          The value here has been rounded off.
        </p>
      </div>
    </div>
  );
};

export default NetProfit;
