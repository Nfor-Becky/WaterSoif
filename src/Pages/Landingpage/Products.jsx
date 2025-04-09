import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Products = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative hero-section flex md:justify-between md:px-40 justify-center md:h-[50vh] h-[40vh] items-center text-blue-600 bg-[url('/water.jpg')]  bg-center bg-cover bg-no-repeat"> 
        
      <div className="flex items-center">
      <div className=" hidden md:flex h-10 bg-blue-600 w-0.5 mr-2"></div>
      <h1 className="text-blue-600 font-bold text-2xl items-center text-center">OUR PRODUCTS</h1>
      </div>
        {/* Wave SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-20"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff" 
            d="M0,128L30,128C60,128,120,128,180,138.7C240,149,300,171,360,160C420,149,480,107,540,85.3C600,64,660,64,720,85.3C780,107,840,149,900,170.7C960,192,1020,192,1080,176C1140,160,1200,128,1260,117.3C1320,107,1380,117,1410,122.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V128Z"
          ></path>
        </svg>
      </div>


      <div className="cards py-10 px-10 flex flex-wrap justify-between">
                <div className="relative hover:scale-105 flex flex-col text-gray-700 transition-all duration-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl my-2 w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-800 bg-white bg-clip-border rounded-xl h-60">
                        <img
                            src="/sachet.jpg"
                            alt="Mineral Water"
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                1000 CFA
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                Mineral Water Big Bottle
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 opacity-75">
                            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center text-blue-600 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-blue-600/10 hover:shadow-blue-600/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>      
                </div>

                <div className="relative hover:scale-105 flex my-2 flex-col transition-all duration-700 text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-800 bg-white bg-clip-border rounded-xl h-60">
                        <img
                            src="/blt.png"
                            alt="Mineral Water"
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                1000 CFA
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                Mineral Water Big Bottle
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 opacity-75">
                            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center text-blue-600 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-blue-600/10 hover:shadow-blue-600/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>      
                </div>

                <div className="relative hover:scale-105 my-2 flex flex-col text-gray-700 transition-all duration-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-800 bg-white bg-clip-border rounded-xl h-60">
                        <img
                            src="/download.jpg"
                            alt="Mineral Water"
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                1000 CFA
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                Mineral Water Big Bottle
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 opacity-75">
                            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center text-blue-600 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-blue-600/10 hover:shadow-blue-600/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>      
                </div>

                <div className="relative hover:scale-105 my-2 flex flex-col text-gray-700 transition-all duration-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-800 bg-white bg-clip-border rounded-xl h-60">
                        <img
                            src="/sach.jpg"
                            alt="Mineral Water"
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                1000 CFA
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                Mineral Water Big Bottle
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 opacity-75">
                            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center text-blue-600 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-blue-600/10 hover:shadow-blue-600/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>      
                </div>

                <div className="relative hover:scale-105 my-2 flex flex-col text-gray-700 transition-all duration-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-800 bg-white bg-clip-border rounded-xl h-60">
                        <img
                            src="/Hielo.jpg"
                            alt="Mineral Water"
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                1000 CFA
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                Mineral Water Big Bottle
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 opacity-75">
                            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center text-blue-600 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-blue-600/10 hover:shadow-blue-600/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>      
                </div>

                <div className="relative hover:scale-105 my-2 flex flex-col transition-all duration-700 text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-800 bg-white bg-clip-border rounded-xl h-60">
                        <img
                            src="/cont.jpg"
                            alt="Mineral Water"
                            className="object-cover w-full h-full" />
                    </div>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                1000 CFA
                            </p>
                            <p className="block font-sans text-base font-medium leading-relaxed text-blue-600">
                                Mineral Water Big Bottle
                            </p>
                        </div>
                        <p className="block font-sans text-sm font-normal leading-normal text-gray-600 opacity-75">
                            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur adipisicing elit
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <button
                            className="align-middle select-none font-sans font-bold text-center text-blue-600 uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-blue-600/10 hover:shadow-blue-600/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            type="button">
                            Add to Cart
                        </button>
                    </div>      
                </div>

        </div>

      <Footer/>
    </div>
  )
}

export default Products
