import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Quest = () => {
  return (
    <div>
      <Navbar/>
      <div className="relative hero-section flex md:justify-between md:px-40 justify-center md:h-[50vh] h-[40vh] items-center text-blue-600 bg-[url('/water.jpg')]  bg-center bg-cover bg-no-repeat"> 
        
      <div className="flex items-center">
      <div className=" hidden md:flex h-10 bg-blue-600 w-0.5 mr-2"></div>
        <h1 className="text-blue-600 font-bold text-2xl items-center text-center">Frequently Ask Questions</h1>
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
      <Footer/>
    </div>
  )
}

export default Quest
