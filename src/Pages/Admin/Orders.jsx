import React from 'react'

const Orders = () => {
  return (
    <div>
      <div className="header">
        <h1 className="font-bold text-2xl">Order</h1>
        <p className='text-xs text-gray-500'>30 orders found</p>
      </div>
      <div className="flex gap-3 w-[300px] mt-3 justify-between">
        <p className="hover:scale-105 hover:font-medium transition-all duration-400 hover:text-blue-500 text-blue-400 ">All orders</p>
        <p className="hover:scale-105 hover:font-medium transition-all duration-400 hover:text-green-500 text-green-400">Completed</p>
        <p className="hover:scale-105 hover:font-medium transition-all duration-400 hover:text-red-500 text-red-400">Pending</p>
      </div>
      <div className="w-[90%] m-auto">
      <table className="min-w-full mt-5 table-auto border-collapse">
        <thead>
        <tr className="bg-blue-500 text-white">
          <th className="py-3 px-4 text-left">ID</th>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Address</th>
          <th className="py-3 px-4 text-left">Date</th>
          <th className="py-3 px-4 text-left">Product Type</th>
          <th className="py-3 px-4 text-left">Quantity</th>
          <th className="py-3 px-4 text-left">Price</th>
          <th className="py-3 px-4 text-left">Status</th>
          <th className="py-3 px-4 text-left">Action</th>
        </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-blue-100 hover:scale-105 transition-all duration-700">
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Francis</td>
            <td className="py-2 px-4">Afan-Mabe</td>
            <td className="py-2 px-4">20 Feb 2025</td>
            <td className="py-2 px-4">Bottle</td>
            <td className="py-2 px-4">3</td>
            <td className="py-2 px-4">3000Frs</td>
            <td className="py-2 px-4">Pending</td>
            <td className="py-2 px-4">drop down</td>
          </tr>
          <tr className="border-b hover:bg-blue-100 hover:scale-105 transition-all duration-700">
            <td className="py-2 px-4">2</td>
            <td className="py-2 px-4">Rancis</td>
            <td className="py-2 px-4">Afan-Mabe</td>
            <td className="py-2 px-4">27 Feb 2025</td>
            <td className="py-2 px-4">Sachet</td>
            <td className="py-2 px-4">4</td>
            <td className="py-2 px-4">4000Frs</td>
            <td className="py-2 px-4">Pending</td>
            <td className="py-2 px-4">drop down</td>
          </tr>
        </tbody>

      </table>
      </div>
    </div>
  )
}

export default Orders
