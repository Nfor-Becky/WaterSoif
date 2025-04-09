import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInventoryItem, deleteInventoryItem, updateInventory } from '../../store/appSlice';

const Inventory = () => {
  const dispatch = useDispatch();
  const inventoryItems = useSelector(state => state.app.inventoryItems);

  const [productType, setProductType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [productionShift, setProductionShift] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the next ID based on existing items
    const nextId = inventoryItems.length > 0 
        ? Math.max(...inventoryItems.map(item => item.id)) + 1 
        : 1; // Start with 1 if there are no items

    const newItem = {
      id: nextId,
      productType,
      quantity: Number(quantity),
      productionDate,
      productionShift,
    };

    dispatch(addInventoryItem(newItem));
    
    // Reset form fields
    setProductType('');
    setQuantity('');
    setProductionDate('');
    setProductionShift('');
  };

  return (
    <div>
      <div className="header mb-5">
        <h1 className="font-bold text-2xl">Inventory Level</h1>
        <p className='text-xs text-gray-500'>Current Inventory Level</p>
      </div>
      <div className="min-w-full h-fit rounded-2xl p-5 bg-gray-200">
        <form onSubmit={handleSubmit} className="flex justify-between">
          <div>
            <select 
              className="bg-white outline-none p-2 rounded-sm w-[200px]"
              required
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Product Type</option>
              <option value="Sachet">Sachet</option>
              <option value="Bottle">Bottle</option>
            </select>
          </div>

          <div>
            <input
              type="number"
              className='bg-white outline-none p-2 rounded-sm w-[200px]'
              placeholder='Quantity'
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="date"
              className='bg-white outline-none p-2 rounded-sm w-[200px]'
              value={productionDate}
              onChange={(e) => setProductionDate(e.target.value)}
              required
            />
          </div>

          <div>
            <select 
              className="bg-white outline-none p-2 rounded-sm w-[200px]"
              required
              value={productionShift}
              onChange={(e) => setProductionShift(e.target.value)}
            >
              <option value="">Production Shift</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
            </select>
          </div>

          <div>
            <button className='w-full hover:bg-blue-600 bg-blue-500 transition-all duration-500 text-white p-2 rounded'
              type='submit'>Submit</button>
          </div>
        </form>
      </div>

      <div className="w-[90%] m-auto">
        <table className="min-w-full mt-5 table-auto border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Product Type</th>
              <th className="py-3 px-4 text-left">Quantity</th>
              <th className="py-3 px-4 text-left">Production Date</th>
              <th className="py-3 px-4 text-left">Production Shift</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {inventoryItems.map(item => (
              <tr key={item.id} className="border-b hover:bg-blue-100 hover:scale-105 transition-all duration-700">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.productType}</td>
                <td className="py-2 px-4">{item.quantity}</td>
                <td className="py-2 px-4">{item.productionDate}</td>
                <td className="py-2 px-4">{item.productionShift}</td>
                <td className="py-2 px-4 flex">
                  <button onClick={() => dispatch(deleteInventoryItem(item.id))} className='bg-red-500 py-2 px-2 rounded-sm mr-5'>
                    <img src='/remove.png' alt="Delete" className='w-6 h-6 '/>
                  </button>
                  <button onClick={() => dispatch(updateInventory(item.id))} className='bg-green-500 py-2 px-2 rounded-sm mr-5'>
                    <img src="/refresh.png" alt="" className='w-6 h-6' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;