import React from 'react';
import { Helmet } from "react-helmet-async";


//components
import OurBeliefs from '../../Components/BlogCom/OurBeliefs';

const TheSabbath = () => {
  return (
    <>
      <Helmet>
        <title>The Sabbath | Kahawa Wendani SDA Church</title>
      </Helmet>
      <body className='mt-[60px] lg:mt-0 bg-[#F8F8F8] pb-[10px]'>
        <div className='bg-fixed relative bg-cover bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
          style={{backgroundImage: "url(https://images.unsplash.com/photo-1593485589800-579b43749b15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
        >
          <div className='absolute inset-0 flex flex-col items-center justify-center '>
            <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] w-[70%] md:w-[50%] border-gray-500'>
              <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>The Sabbath - Then and Now</h1>
            </div>
          </div>
        </div>

        <section className='mt-[50px] '>
          <div className='w-[90%] mx-auto md:flex justify-center '>
            <div className='basis-[70%]'>
              <div className='border-[10px] border-white w-[95%] h-[450px]'>
                <img 
                  src='https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='the sabbath'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* Right Side */}
            <div className='basis-[30%]'>
              <OurBeliefs />
            </div>
          </div>
        </section>
      </body>
    </>
  )
}

export default TheSabbath;