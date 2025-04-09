import React from 'react'

const Dashboard = () => {
  return (
    <div>

      <div className="flex bg-blue-500 justify-between p-5 mb-10 rounded-2xl">
        <div className="w-[250px] h-[100px] bg-white flex flex-col items-start transition-all duration-700 transform hover:scale-105 hover:shadow-2xl shadow-md bg-clip-border py-5 px-10 rounded-2xl">
            <p className="">Total water produced</p>
            <p className="font-bold">193</p>
        </div>
        <div className="w-[250px] h-[100px] bg-white flex flex-col items-start transition-all duration-700 transform hover:scale-105 hover:shadow-2xl shadow-md bg-clip-border py-5 px-10 rounded-2xl">
            <p className="">Current Inventory level</p>
            <p className="font-bold">193</p>
        </div>
        <div className="w-[250px] h-[100px] bg-white flex flex-col items-start transition-all duration-700 transform hover:scale-105 hover:shadow-2xl shadow-md bg-clip-border py-5 px-10 rounded-2xl">
            <p className="">Production Efficiency</p>
            <p className="font-bold">193</p>
        </div>
        <div className="w-[250px] h-[100px] bg-white flex flex-col items-start transition-all duration-700 transform hover:scale-105 hover:shadow-2xl shadow-md bg-clip-border py-5 px-10 rounded-2xl">
            <p className="">Total products in stock</p>
            <p className="font-bold">193</p>
        </div>
      </div>

      <div className="flex justify-between">

        <div className=" w-[500px] h-[300px] items-start hover:scale-105 transition-all duration-700 mb-5 shadow-2xl bg-white rounded-2xl">
        <h3 className='font-medium '>Recent Deliveries Stats</h3>

        </div>

        <div className="w-[500px] h-[300px] p-5 mb-5 hover:scale-105 shadow-2xl transition-all duration-700 bg-white rounded-2xl">
              <h3 className='font-semibold text-lg mb-4'>Recent Deliveries Stats</h3>
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className='bg-blue-500 text-white'>
                    <th className='py-3 px-4 text-left'>Name</th>
                    <th className='py-3 px-4 text-left'>Address</th>
                    <th className='py-3 px-4 text-left'>Time</th>
                    <th className='py-3 px-4 text-left'>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b hover:bg-blue-100 transition-colors'>
                    <td className='py-2 px-4'>Francis</td>
                    <td className='py-2 px-4'>AFan-Mabe</td>
                    <td className='py-2 px-4'>12:30</td>
                    <td className='py-2 px-4 text-yellow-600 font-semibold'>Pending</td>
                  </tr>
                  <tr className='border-b hover:bg-blue-100 transition-colors'>
                    <td className='py-2 px-4'>Francis</td>
                    <td className='py-2 px-4'>AFan-Mabe</td>
                    <td className='py-2 px-4'>12:30</td>
                    <td className='py-2 px-4 text-green-600 font-semibold'>Completed</td>
                  </tr>
                </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
