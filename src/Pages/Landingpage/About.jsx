import React from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

const About = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative hero-section flex md:justify-between md:px-40 justify-center md:h-[50vh] h-[40vh] items-center text-blue-600 bg-[url('/water.jpg')]  bg-center bg-cover bg-no-repeat"> 
        
      <div className="flex items-center">
      <div className=" hidden md:flex h-10 bg-blue-600 w-0.5 mr-2"></div>
        <h1 className="text-blue-600 font-bold text-2xl items-center text-center">About Us</h1>
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

    {/* About */}
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

      <Footer/>
    </div>
  )
}

export default About
