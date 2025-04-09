import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="flex flex-wrap items-start justify-between md:px-30 px-10 py-8">
        
        <div className="flex flex-col items-start mb-6">
          <div className="logo flex items-center mb-4">
            <img src="./icon.png" alt="Logo" className="h-10 w-10 mr-2" />
            <h1 className='text-2xl font-bold'>BERI <span className="text-blue-600">SOIF</span></h1>
          </div>
          <ul className="flex flex-col space-y-2">
            <li className="text-sm hover:text-blue-400 transition duration-300">Lorem ipsum dolor sit amet</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Lorem ipsum dolor sit amet</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Lorem ipsum dolor sit amet</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Lorem ipsum dolor sit amet</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6">
          <h2 className='text-xl font-bold text-blue-500 mb-2'>Information</h2>
          <ul className="flex flex-col space-y-2">
            <li className="text-sm hover:text-blue-400 transition duration-300">Contact Us</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">About Us</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Delivery Info</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Terms and Conditions</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6">
          <h2 className='text-xl font-bold text-blue-500 mb-2'>Our Services</h2>
          <ul className="flex flex-col space-y-2">
            <li className="text-sm hover:text-blue-400 transition duration-300">Service 1</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Service 2</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Service 3</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Service 4</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6">
          <h2 className='text-xl font-bold text-blue-500 mb-2'>Recent News</h2>
          <ul className="flex flex-col space-y-2">
            <li className="text-sm hover:text-blue-400 transition duration-300">News Item 1</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">News Item 2</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">News Item 3</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">News Item 4</li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6">
          <h2 className='text-xl font-bold text-blue-500 mb-2'>Get In Touch</h2>
          <ul className="flex flex-col space-y-2">
            <li className="text-sm hover:text-blue-400 transition duration-300">Contact Us</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Support</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Feedback</li>
            <li className="text-sm hover:text-blue-400 transition duration-300">Careers</li>
          </ul>
        </div>
      </div>
      
      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-sm">© 2023 BERI SOIF. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;