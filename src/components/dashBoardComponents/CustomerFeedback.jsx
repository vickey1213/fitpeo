import React from "react";
import { FaStar } from "react-icons/fa";
import {
  RecentOrdersDetails,
  comments,
} from "../../dataDashBoard/recentOrderDetails";

const CustomerFeedback = () => {
  var array = ["", "", "", "", ""];
  return (
    <div className="w-[35%] bg-richblack-800 rounded-md h-full">
      <h1 className="text-white text-xl font-medium py-2 px-2">
        Customer's Feedback
      </h1>
      <div className="overflow-hidden max-h-[80%] overflow-y-scroll">
        {RecentOrdersDetails.map((data, index) => (
          <div key={index}>
            <div className="px-2 py-4 ">
              <p className="w-[35%] flex items-center text-white">
                <img
                  className="rounded-full w-7 mx-1 "
                  src={`https://randomuser.me/api/portraits/thumb/men/5${index}.jpg`}
                  alt={`Profile of ${data.name}`}
                ></img>
                <span className="px-2">{data.name}</span>
              </p>
              <div className="flex  mt-2 gap-1">
                {array.map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`${
                      starIndex === 4 ? "text-white" : "text-brown-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-richblack-500 py-2 text-sm">
                {comments[index]}
              </p>
            </div>
            <div className="h-[2px] w-[95%] bg-richblack-500 mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerFeedback;
