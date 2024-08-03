import React from "react";
import { IoMdHome } from "react-icons/io";
import { BsFileBarGraph } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { CiWallet } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
const SideBar = () => {
  return (
    <div className="w-[5%]  bg-richblack-700 min-h-screen">
      <ul className="w-full flex flex-col gap-5 my-5 h-full ">
        <li className="w-full flex h-8  items-center hover:cursor-pointer">
          <div className="bg-blue-200 h-full w-1 rounded-md"></div>
          <IoMdHome className="text-blue-200 text-2xl mx-auto" />
        </li>
        <li className="w-full flex h-8  items-center hover:cursor-pointer">
          <div className="bg-transparent h-full w-1"></div>
          <BsFileBarGraph className="text-richblack-400 text-2xl mx-auto" />
        </li>
        <li className="w-full flex h-8  items-center hover:cursor-pointer">
          <div className="bg-transparent h-full w-1"></div>
          <BiTask className="text-richblack-400 text-2xl mx-auto" />
        </li>
        <li className="w-full flex h-8  items-center hover:cursor-pointer">
          <div className="bg-transparent h-full w-1"></div>
          <CiWallet className="text-richblack-400 text-2xl mx-auto" />
        </li>
        <li className="w-full flex h-8  items-center hover:cursor-pointer">
          <div className="bg-transparent h-full w-1"></div>
          <IoBagCheckOutline className="text-richblack-400 text-2xl mx-auto" />
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
