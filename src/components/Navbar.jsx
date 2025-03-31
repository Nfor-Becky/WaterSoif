import React, { useState } from 'react'
import menuIcon from '../assets/menu.png';
import crossIcon from '../assets/cross.png';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

  return (
    <div className='flex justify-between mx-5 my-3 items-center cursor-pointer'>
      <div className="logo flex items-center">
        <img src="./icon.png" alt="" className="h-10 w-10" />
        <h1 className='text-3xl font-bold'>BERI <span className="text-blue-600">SOIF</span></h1>
      </div>
      {/* Desktop Navigation*/}
      <div className="links md:flex hidden justify-between items-center">
        <ul className="md:flex  justify-between ">
            <li className="pr-3 text-blue-600 hover:text-blue-600 transition-all duration-700">Home</li>
            <li className="pr-3 hover:text-blue-600 transition-all duration-700 ">About US</li>
            <li className="pr-3 hover:text-blue-600 transition-all duration-700">Our Products</li>
            <li className="pr-3 hover:text-blue-600 transition-all duration-700">FAQs</li>
            <li className="pr-3 hover:text-blue-600 transition-all duration-700">Contact Us</li>
        </ul>
        <button className='bg-blue-600 rounded-sm hover:bg-blue-700 transition-all duration-700 px-3 py-1 text-white font-semibold cursor-pointer'>SignUp</button>
      </div>

      {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='md:hidden cursor-pointer '>
            {nav ? (
                <img src={crossIcon} alt='close menu' className='h-6 w-6'/>
            ):(
                <img src={menuIcon} alt='Open menu' className='h-6 w-6'/>
            )}
        </div>

        {/* Mobile Navigation Menu */}
            <ul className={`fixed md:hidden font-semibold left-0 top-0 w-[40%] h-full px-5 bg-blue-600 ease-in-out duration-600 z-50
                 ${nav ? 'translate-x-0':'-translate-x-full' }`}
                  role='navigation' 
                  aria-hidden={!nav}>
        {/* Mobile Logo */}
        <li className="pr-3 text-blue-600 hover:text-blue-600 transition-all duration-700">Home</li>
            <li className="py-2 text-white transition-all duration-700 ">About US</li>
            <li className="py-2 text-white transition-all duration-700">Our Products</li>
            <li className="py-2 text-white transition-all duration-700">FAQs</li>
            <li className="py-2 text-white transition-all duration-700">Contact Us</li>
            <button className='bg-white rounded-sm my-2 transition-all duration-700 px-5 py-2 text-blue-600 font-semibold cursor-pointer'>SignUp</button>
            </ul>




    </div>
  )
}

export default Navbar
