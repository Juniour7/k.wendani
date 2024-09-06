import React from 'react'
import { Helmet } from 'react-helmet-async';

//components
import OurBeliefs from '../../Components/BlogCom/OurBeliefs';

const HowPrayer = () => {
  return (
    <>
        <Helmet>
            <title>How Does Prayer Work? | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='mt-[60px] lg:mt-0 bg-[#F8F8F8] pb-[20px]'>
            <div className='bg-fixed relative bg-cover bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1543525238-54e3d131f7ca?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute inset-0 flex flex-col items-center justify-center '>
                    <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] w-[60%] md:w-[50%] border-gray-500'>
                        <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>How Does Prayer Work?</h1>
                    </div>
                </div>
            </div>
            
            <section className='mt-[50px]'>
                <div className='w-[90%] mx-auto md:flex justify-center'>
                    <div className='basis-[70%]'>

                    </div>
                    <div className='basis-[30%]'>
                        <OurBeliefs />
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default HowPrayer;