import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-wrap items-start justify-between md:px-30 px-10 py-10">
     
        <div className=" flex flex-col items-start">
            <div className="logo flex items-center">
            <img src="./icon.png" alt="" className="h-10 w-10" />
            <h1 className='text-xl font-bold'>BERI <span className="text-blue-600">SOIF</span></h1>
        </div>
        <ul className="flex flex-col py-2">
            <li className="py-1 text-sm">Lorem ipsum dolor sit amet </li>
            <li className="py-1 text-sm">Lorem ipsum dolor sit amet </li>
            <li className="py-1 text-sm">Lorem ipsum dolor sit amet </li>
            <li className="py-1 text-sm">Lorem ipsum dolor sit amet </li>
        </ul>
        </div>

        <div className=" flex flex-col items-start">
            <div className="logo flex items-center">
            <h1 className='text-xl font-bold text-blue-500'>Information</h1>
        </div>
        <ul className="flex flex-col py-2">
            <li className="py-1 text-sm">Contact Us </li>
            <li className="py-1 text-sm">About Us</li>
            <li className="py-1 text-sm">Delivery Info </li>
            <li className="py-1 text-sm">Terms and Conditions </li>
        </ul>
        </div>

        <div className=" flex flex-col items-start">
            <div className="logo flex items-center">
            <h1 className='text-xl font-bold text-blue-500'>Our Services</h1>
        </div>
        <ul className="flex flex-col py-2">
            <li className="py-1 text-sm">Contact Us </li>
            <li className="py-1 text-sm">About Us</li>
            <li className="py-1 text-sm">Delivery Info </li>
            <li className="py-1 text-sm">Terms and Conditions </li>
        </ul>
        </div>

        <div className=" flex flex-col items-start">
            <div className="logo flex items-center">
            <h1 className='text-xl font-bold text-blue-500'>Recent News</h1>
        </div>
        <ul className="flex flex-col py-2">
            <li className="py-1 text-sm">Contact Us </li>
            <li className="py-1 text-sm">About Us</li>
            <li className="py-1 text-sm">Delivery Info </li>
            <li className="py-1 text-sm">Terms and Conditions </li>
        </ul>
        </div>

        <div className=" flex flex-col items-start">
            <div className="logo flex items-center">
            <h1 className='text-xl font-bold text-blue-500'>Get In Touch</h1>
        </div>
        <ul className="flex flex-col py-2">
            <li className="py-1 text-sm">Contact Us </li>
            <li className="py-1 text-sm">About Us</li>
            <li className="py-1 text-sm">Delivery Info </li>
            <li className="py-1 text-sm">Terms and Conditions </li>
        </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer
