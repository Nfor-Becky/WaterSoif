import React from 'react'
import SideBar from '../../components/SideBar'
import Dashboard from './Dashboard'
import Clients from './Clients';
import Inventory from './Inventory';
import Orders from './Orders';
import Sales from './Sales';
import Reports from './Reports';
import { Route, Routes } from 'react-router-dom'


const Admin = () => {
  return (
    <div>
      <div className="flex h-full ">
        <div className=""><SideBar/></div>
        <div className="flex-1 w-full gap-1 justify-between m-5"> 
          <Routes>
          <Route index element={<Dashboard />} />  {/* Default to Dashboard */}
          <Route path="client" element={<Clients />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="order" element={<Orders />} />
          <Route path="sale" element={<Sales />} />
          <Route path="report" element={<Reports />} />
          </Routes>    
      </div>
      </div>
    </div>
  )
}

export default Admin
