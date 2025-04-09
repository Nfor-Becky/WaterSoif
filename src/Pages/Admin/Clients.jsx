import React from 'react'

const Clients = () => {
  return (
    <div>
      <div className="header">
        <h1 className="font-bold text-2xl">Customers</h1>
        <p className='text-xs text-gray-500'>All Customers</p>
      </div>
    <div className="w-[90%] m-auto">
      <table className="min-w-full mt-5 table-auto border-collapse">
        <thead>
        <tr className="bg-blue-500 text-white">
          <th className="py-3 px-4 text-left">ID</th>
          <th className="py-3 px-4 text-left">Name</th>
          <th className="py-3 px-4 text-left">Address</th>
          <th className="py-3 px-4 text-left">Date of creation</th>
          <th className="py-3 px-4 text-left">Action</th>
        </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-blue-100 hover:scale-105 transition-all duration-700">
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Francis</td>
            <td className="py-2 px-4">Afan-Mabe</td>
            <td className="py-2 px-4">20 Feb 2025</td>
            <td className="py-2 px-4">drop down</td>
          </tr>
          <tr className="border-b hover:bg-blue-100 hover:scale-105 transition-all duration-700">
            <td className="py-2 px-4">2</td>
            <td className="py-2 px-4">Rancis</td>
            <td className="py-2 px-4">Afan-Mabe</td>
            <td className="py-2 px-4">27 Feb 2025</td>
            <td className="py-2 px-4">drop down</td>
          </tr>
        </tbody>

      </table>
      </div>
    </div>
  )
}

export default Clients
