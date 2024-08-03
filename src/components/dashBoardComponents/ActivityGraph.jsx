import React, { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const ActivityGraph = () => {
  const acitivityArray = ["0", "5k", "10k", "15k"];
  const horioztalArray = [5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27];
  const graphValues = [];
  for (let i = 0; i < 22; i++) {
    graphValues.push(Math.round(Math.random() * 100));
  }
  const [graphValuess] = useState(graphValues);

  return (
    <div className="w-[65%] bg-richblack-800 h-60 rounded-md px-4 py-2 ">
      <div className="w-full flex justify-between">
        <p className="text-xl font-semibold text-white">Activity</p>
        <p className="bg-richblack-600 hover:cursor-pointer shadow-sm rounded-xl text-black text-sm text-center px-3 py-1 flex items-center">
          <span className="text-sm font-semibold text-white">Weekly</span>
          <MdArrowDropDown className="text-xl text-white" />
        </p>
      </div>
      <div className="relative h-full flex flex-col">
        <ul className="flex flex-col gap-3 mt-8">
          {acitivityArray
            .map((data, index) => (
              <li className="flex items-center gap-4" key={index}>
                <p className="w-9 text-richblack-200">{data}</p>{" "}
                <div className="w-full h-[2px] bg-richblack-500"></div>
              </li>
            ))
            .reverse()}
        </ul>
        <ul className="flex text-richblack-200 justify-between ml-14">
          {horioztalArray.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
        <ul className="flex absolute left-14 top-5 justify-between gap-3 h-[60%] place-items-end">
          {graphValuess.map((data, index) => (
            <li
              key={index}
              className="w-[22px] bg-blue-200 rounded-2xl"
              style={{ height: `${data}%` }}
            ></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActivityGraph;
