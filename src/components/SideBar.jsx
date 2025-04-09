import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='bg-blue-600 h-screen flex flex-col border-r-1 border-white py-5 text-center cursor-pointer'>
      <h1 className='pb-10 px-10 font-bold text-white text-3xl'>Beri Soif</h1>
      <ul className="">
        <li className="mb-3">
          <Link to="/admin" className="block hover:bg-blue-700/50 px-5 py-3 text-lg text-white font-semibold rounded-sm transition-all duration-300">
            Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/client" className="block hover:bg-blue-700/50 px-5 py-3 text-lg text-white font-semibold rounded-sm transition-all duration-300">
            Customers
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/order" className="block hover:bg-blue-700/50 px-5 py-3 text-lg text-white font-semibold rounded-sm transition-all duration-300">
            Orders
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/inventory" className="block hover:bg-blue-700/50 px-5 py-3 text-lg text-white font-semibold rounded-sm transition-all duration-300">
            Inventory
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/report" className="block hover:bg-blue-700/50 px-5 py-3 text-lg text-white font-semibold rounded-sm transition-all duration-300">
            Production Metrics
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/admin/sale" className="block hover:bg-blue-700/50 px-5 py-3 text-lg text-white font-semibold rounded-sm transition-all duration-300">
            Sales Forecasting
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;