import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative hero-section flex md:justify-between md:px-40 justify-center md:h-[100vh] h-[50vh] items-center text-blue-600 bg-[url('/water.jpg')] bg-cover bg-center">
        <div className="text-center md:justify-items-start">
          <button className="bg-blue-600 rounded-sm my-5 hover:bg-blue-700 transition-all duration-700 px-3 py-1 text-white font-semibold cursor-pointer">
            Water is Nothing But Life
          </button>
          <div className="my-3">
            <h1 className='text-4xl md:text-start md:text-7xl font-bold '>Mineral Water</h1>
            <h1 className='text-4xl md:text-7xl font-bold '>With Great Taste</h1>
          </div>
          <p className='py-5 px-2.5 text-sm md:text-start text-blue-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae maxime iure nesciunt odio? Deserunt mollitia sit sint!</p>
          <button className='my-5 bg-blue-600 rounded-sm hover:bg-blue-700 transition-all duration-700 px-3 py-1 text-white font-semibold cursor-pointer'>
            Read More
          </button>
        </div>
        <div className="hidden md:flex">
          <img src="/waterbg.png" className='' alt="" />
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
    {/* History content */}
      <div className="history flex items-center justify-between  md:px-30 px-10">
      <div className="hidden md:flex">
          <img src="/waterbg.png" className='' alt="" />
        </div>
        <div className="cards items-start w-lg ">
            <h1 className=" font-bold md:text-3xl text-2xl text-blue-600 py-2">BeriSoif</h1>
            <p className="py-2 text-sm">BeriSoif Water Company is dedicated to providing high-quality drinking water that meets the needs of its diverse customer base. Established with a commitment to purity and sustainability, BeriSoif sources its water from pristine natural springs, ensuring that every drop is rich in essential minerals and free from contaminants.</p>
            <h3 className="py-2 text-sm font-semibold">The company prides itself on its state-of-the-art purification processes, which adhere to the highest industry standards. This commitment to quality not only guarantees safe drinking water but also enhances the taste, making it a favorite among consumers.</h3>
            <p className="py-2 text-sm">BeriSoif is also deeply committed to environmental sustainability. The company implements eco-friendly practices, from sourcing to packaging, to minimize its carbon footprint. Additionally, BeriSoif actively engages in community initiatives, promoting water conservation and providing educational resources about the importance of hydration and healthy living.</p>
            <button className='my-2 bg-blue-600 rounded-sm hover:bg-blue-700 transition-all duration-700 px-3 py-1 text-white font-semibold cursor-pointer'>
            Read More
          </button>

        </div>
      </div>

    {/* Products content */}
      <div className="products items-center mx-auto px-10 py-5">
        <h1 className="text-blue-600 font-bold text-2xl text-center">OUR PRODUCTS</h1>
        <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <div className="cards py-10 flex flex-wrap justify-between">
                <div className="relative flex flex-col text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl my-2 w-96">
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

                <div className="relative flex my-2 flex-col text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
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

                <div className="relative my-2 flex flex-col text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
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

                <div className="relative my-2 flex flex-col text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
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

                <div className="relative my-2 flex flex-col text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
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

                <div className="relative my-2 flex flex-col text-gray-700 bg-white hover:shadow-2xl shadow-md bg-clip-border rounded-xl w-96">
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
      </div>

    {/* Delivery service content */}
    <div className="delivery-service flex text-white justify-between md:px-30 px-10 py-20 relative bg-[url('./deli.jpg')] bg-center bg-cover bg-no-repeat">
    <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
    <div className="relative z-10 flex flex-col justify-center items-start">
        <h3 className="font-bold text-3xl md:text-4xl pt-5">Water Delivery 20K.m. </h3>
        <h3 className="font-bold text-3xl md:text-4xl pb-3">Free Service</h3>
        <p className="py-2 items-start w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente illo quo ut quaerat provident nesciunt laudantium dolorem.</p>
        <button className="my-5 bg-white hover:shadow-2xl hover:border-blue-700 border border-blue-500 transition-all duration-500 text-blue-600 rounded-2xl px-5 py-1">Read More</button>
    </div>
    <div className="hidden md:flex relative z-10">
        <img src="./delivery.png" alt="Delivery" className="object-contain" />
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
    {/* Reviews content */}
    <div className="reviews px-10 md:px-20 text-center mb-20">
    <h1 className="text-blue-600 font-bold text-2xl pb-5">Customer Reviews</h1>
<div className="cards flex flex-wrap justify-between">
    <div className="card px-5 py-6 max-w-sm hover:shadow-2xl transition-all duration-600 shadow-lg rounded-2xl">
        <div className="icons flex justify-between mb-4">
            <img src="./quotes.png" alt="Quotes" className="h-6 w-6" />
            <div className="stars flex">
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
            </div>
        </div>
        <p className="text-gray-700 py-5">
            "I absolutely love this water! The taste is refreshing, and the delivery service is top-notch. Highly recommend!"
        </p>
        <div className="flex justify-center">
            <img src="./review.jpg" alt="Reviewer" className="rounded-full h-12 w-12 border-2 border-blue-600" />
        </div>
    </div>

    <div className="card px-5 py-6 max-w-sm hover:shadow-2xl transition-all duration-600 shadow-lg rounded-2xl">
        <div className="icons flex justify-between mb-4">
            <img src="./quotes.png" alt="Quotes" className="h-6 w-6" />
            <div className="stars flex">
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
            </div>
        </div>
        <p className="text-gray-700 py-5">
            "I absolutely love this water! The taste is refreshing, and the delivery service is top-notch. Highly recommend!"
        </p>
        <div className="flex justify-center">
            <img src="./review.jpg" alt="Reviewer" className="rounded-full h-12 w-12 border-2 border-blue-600" />
        </div>
    </div>

    <div className="card px-5 py-6 max-w-sm hover:shadow-2xl transition-all duration-600 shadow-lg rounded-2xl">
        <div className="icons flex justify-between mb-4">
            <img src="./quotes.png" alt="Quotes" className="h-6 w-6" />
            <div className="stars flex">
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
                <img src="./star.png" alt="Star" className="h-6 w-6" />
            </div>
        </div>
        <p className="text-gray-700 py-5">
            "I absolutely love this water! The taste is refreshing, and the delivery service is top-notch. Highly recommend!"
        </p>
        <div className="flex justify-center">
            <img src="./review.jpg" alt="Reviewer" className="rounded-full h-12 w-12 border-2 border-blue-600" />
        </div>
    </div>
</div>
</div>
      <Footer/>
    </div>
  );
}

export default Landingpage;