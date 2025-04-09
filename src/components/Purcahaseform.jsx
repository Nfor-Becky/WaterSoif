import React from 'react'

const Purcahaseform = () => {
  return (
    <div className="relative md:bg-[url('./drops.jpg')] bg-center h-screen bg-cover bg-no-repeat flex items-center justify-center">
      <div className="absolute inset-0 md:bg-black opacity-50 z-0"></div>
      <div className="relative flex items-center md:h-fit h-[40vh] md:max-w-5xl  bg-white rounded-xl md:shadow-lg z-10">

        <div className="md:flex-1 md:p-5 w-[500px] p-10 md:shadow-none shadow-2xl">
          <form action="" className="">
            <h1 className="text-blue-500 text-2xl text-center font-bold">Get Product</h1>
            <div className='py-2'>
              <label htmlFor="username" className="block font-medium">Username</label>
              <input 
                type="text" 
                id="username" 
                className="border  rounded outline-none p-2 w-full" 
                placeholder='username' 
                required 
              />
            </div>
            <div className='pb-2'>
              <label htmlFor="" className="block font-medium">Quantity</label>
              <input 
                type="text" 
                id="text" 
                className="border rounded outline-none p-2 w-full" 
                placeholder='How many do you need' 
                required 
              />
            </div>
            <div className='pb-2'>
              <label htmlFor="username" className="block font-medium">Momo Phone Number</label>
              <input 
                type="number" 
                id="number" 
                className="border rounded outline-none p-2 w-full" 
                placeholder='momo number' 
                required 
              />
            </div>
            <div className='pb-2'>
              <label htmlFor="username" className="block font-medium">Home Address</label>
              <input 
                type="text" 
                id="address" 
                className="border rounded outline-none p-2 w-full" 
                placeholder='address' 
                required 
              />
            </div>
            <div className='pb-4'>
              <label htmlFor="" className="block font-medium">Amount</label>
              <input 
                type="number" 
                id="" 
                className="border rounded outline-none p-2 w-full" 
                placeholder='Amount in frs' 
                required 
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 transition-all duration-500 rounded hover:bg-blue-600 ">
              Make Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Purcahaseform
