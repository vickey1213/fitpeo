import React from 'react'
import { ImTarget } from "react-icons/im";
import { FaHamburger } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
const Tasks = () => {
  return (
    <div  className='w-[35%] bg-richblack-800 h-60 rounded-md '>
      <ul className='flex flex-col gap-2 px-9 my-auto'>
        <li className='flex items-center my-2 justify-between'>
          <div className='flex items-center'>
          <div className='w-14 h-14 flex items-center justify-center bg-blue-200 rounded-full'>
            <ImTarget className='text-3xl' />
          </div> 
          <p className='text-2xl px-4 text-white '>Goals</p>
          </div> 
          <div className='w-7 h-7 bg-richblack-400 flex items-center justify-center rounded-full right-0 mr-0'><IoIosArrowForward className='text-white text-2xl'/></div>
        </li>

        <li className='flex items-center my-2 justify-between'>
          <div className='flex items-center'>
          <div className='w-14 h-14 flex items-center justify-center bg-caribbeangreen-200 rounded-full'>
            <FaHamburger className='text-3xl' />
          </div> 
          <p className='text-2xl px-4 text-white '>Popular Dishes</p>
          </div> 
          <div className='w-7 h-7 bg-richblack-400 flex items-center justify-center rounded-full right-0 mr-0'><IoIosArrowForward className='text-white text-2xl'/></div>
        </li>
        
        <li className='flex items-center my-2 justify-between'>
          <div className='flex items-center'>
          <div className='w-14 h-14 flex items-center justify-center bg-brown-300 rounded-full'>
            <BiDish className='text-3xl'/>
          </div> 
          <p className='text-2xl px-4 text-white '>Menus</p>
          </div> 
          <div className='w-7 h-7 bg-richblack-400 flex items-center justify-center rounded-full right-0 mr-0'><IoIosArrowForward className='text-white text-2xl'/></div>
        </li>
        

      </ul>
    </div>
  )
}

export default Tasks