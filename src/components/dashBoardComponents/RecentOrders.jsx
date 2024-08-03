import React from 'react'
const {RecentOrdersDetails} = require('../../dataDashBoard/recentOrderDetails')

const RecentOrders = () => {
  return (
    <div className='w-[65%] bg-richblack-800 rounded-md'>
        <h1 className='text-white text-xl font-medium py-2 px-2'>Recent Orders</h1>
        <div>
            <ul className='text-white'>
                <li className='text-sm flex justify-between px-6'>
                    <p className='w-[35%]'>Customer</p>
                    <p className='w-[25%]'>Order No.</p>
                    <p className='w-[25%]'>Amount</p>
                    <p className='w-[15%]'>Status</p>
                </li>
                {
                    RecentOrdersDetails.map((data,index)=>
                    <>
                       <li className='w-[95%] h-[2px] bg-richblack-600 mx-auto my-2'></li>
                       <li className='flex justify-between px-6'>
                          <p className='w-[35%] flex items-center'><img className="rounded-full w-7 mx-1 " src={`https://randomuser.me/api/portraits/thumb/men/5${index}.jpg`} alt="img"></img><span className='px-2'>{data.name}</span></p>
                          <p className='w-[25%]'>{Math.round((Math.random()*100000))}</p>
                          <p className='w-[25%]'>{(Math.random()*500).toFixed(2)}$</p>
                          <p className='w-[15%]'>{data.status}</p>
                        </li>
                    </>
                    )
                }
                

            </ul>
        </div>
    </div>
  )
}

export default RecentOrders