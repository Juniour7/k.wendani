import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  return (
    <>
        <Helmet>
            <title>Our Blogs | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body>
            <div className='bg-fixed relative bg-cover bg-center md:bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1725384800555-f0d477e084da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute inset-0 flex flex-col items-center justify-center '>
                    <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] md:w-[40%] border-gray-500'>
                        <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>Our Blogs</h1>
                    </div>
                </div>
            </div>

        </body>
    </>
  )
}

export default Blogs;