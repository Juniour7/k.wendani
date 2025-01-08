import React from 'react';
import { Helmet } from 'react-helmet-async';

// Images
import Image from '../Assets/Logos/WhatsApp Image 2024-06-13 at 07.24.10_8ccff282.jpg';

const Giving = () => {
  return (
    <>
        <Helmet>
            <title>Giving | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='mt-[60px] lg:mt-0 w-full bg-[#F8F8F8] pb-[50px]'>
            <div className='bg-fixed relative bg-cover bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1534951009808-766178b47a4f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <div className=' py-5 md:py-7  border-t-[0.2px] border-b-[0.2px]  w-[50%] mx-auto'>
                        <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>GIVING</h1>
                    </div>
                </div>
            </div>

            <section className='w-[97%] md:w-[90%] lg:w-[95%] mx-auto p-'>
                <div className='mt-5'>
                    <h4 className='text-[#F0B323] text-md font-["Roboto"]'>Worship In Giving</h4>
                    <h1 className='text-2xl md:text-5xl'>Church Account Info</h1>
                    <p className='text-sm md:text-md'>After payment indicate the M-pesa ref. Code  in the Envelope.</p>
                </div>
                <div className='mt-5 md:mt-[70px] h-[220px] md:h-[400px] lg:h-screen w-full'>
                    <img src={Image} alt='church account info' className='w-full h-full' />
                </div>
            </section>
        </body>
    </>
  )
}

export default Giving;