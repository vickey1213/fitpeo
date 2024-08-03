import React from 'react'
import OrderStatics from './dashBoardComponents/OrderStatics'
import NetProfit from './dashBoardComponents/NetProfit'
import ActivityGraph from './dashBoardComponents/ActivityGraph'
import Tasks from './dashBoardComponents/Tasks'
import RecentOrders from './dashBoardComponents/RecentOrders'
import CustomerFeedback from './dashBoardComponents/CustomerFeedback'

const DashBoardPage = () => {
  return (
    <div className='w-[92%] h-full mx-auto mt-2 '>
        <h1 className='font-bold text-white text-2xl py-2'>Dashbord</h1>
        <div className='flex gap-5 w-full'>
            <OrderStatics></OrderStatics>
            <NetProfit></NetProfit>
        </div>
        <div className='flex gap-5 w-full my-4'>
            <ActivityGraph></ActivityGraph>
            <Tasks></Tasks>
        </div>

        <div className='flex gap-5 w-full h-96 mb-10'>
            <RecentOrders></RecentOrders>
            <CustomerFeedback></CustomerFeedback>
        </div>
    </div>
  )
}

export default DashBoardPage