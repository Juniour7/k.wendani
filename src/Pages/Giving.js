import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Giving = () => {
  return (
    <>
        <Helmet>
            <title>Giving | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='mt-[60px] lg:mt-[100px] w-full bg-[#F8F8F8] pb-[50px]'>
            <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52'>
                <div className='text-center absolute top-[30%] left-[25%] md:left-[40%] text-md'>
                    <Link to="/" className='hover:text-[#F0B323] mr-3'>Home /</Link>
                    <Link className='text-[#F0B323]'>Worship In Giving</Link>
                    <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>Giving</h1>
                </div>
            </section>
            <section className='w-[97%] md:w-[90%] lg:w-[95%] mx-auto p-'>
                <div className='mt-5'>
                    <h4 className='text-[#F0B323] text-md font-["Roboto"]'>Worship In Giving</h4>
                    <h1 className='text-2xl md:text-5xl'>Church Account Info</h1>
                    <p className='text-sm md:text-md'>After payment indicate the M-pesa ref. Code  in the Envelope.</p>
                </div>
                <div className='mt-5 md:mt-[70px] h-[180px] md:h-[400px] lg:h-screen w-full'>
                    <img src={require('../Assets/Logos/WhatsApp Image 2024-06-13 at 07.24.10_8ccff282.jpg')} alt='church account info' className='w-full h-full object-cover' />
                </div>
            </section>
        </body>
    </>
  )
}

export default Giving;