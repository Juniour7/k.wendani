import React from 'react';
import { Helmet } from 'react-helmet-async';

const AdventureresClub = () => {
  return (
    <>
        <Helmet>
            <title>Adventurers Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] pb-[50px]'>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={require('../../Assets/SlideShow/IMG_0956.JPG')} alt='adevntureres' className='w-full h-full object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-50'>
                    <div className='absolute bottom-[24%] left-[10%] text-white'>
                        <h1 className='text-3xl md:text-7xl font-semibold'>Adventurers Club</h1>
                        <hr className='border border-[#F0B323] w-[40%] mt-[10px]'></hr>
                    </div>
                </div>
            </section>

            <section className='mt-[50px] w-[90%] mx-auto md:flex gap-3 mb-[20px]'>
                <div className='basis-[50%] text-md space-y-4'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
                </div>
                <div className='basis-[40%]'>
                    <img src={require('../../Assets/SlideShow/IMG_0956.JPG')} alt='adevntureres' className='w-full h-full object-cover' />
                </div>
            </section>

            <section className='w-[80%] mx-auto bg-[#997B36] border-l-4 border-r-4 border-[#F0B323] p-5 mt-[50px] grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#F0B323]'>
                <div className='text-center text-white flex flex-col items-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>CONTACT:</h1>
                    <h2 className='text-2xl mt-[10px]'>Job Mititi</h2>
                    <p className='text-md w-[50%] mx-auto'>
                        Director, Kahawa Wendani SDA Church Adventurers
                    </p>
                    <div className='flex gap-2'>
                        <h2 className='text-xl'>Phone:</h2>
                        <a href='tel:' className='my-auto text-md hover:text-[#00162E] transition-colors duration-200'>
                            0716794363
                        </a>
                    </div>
                </div>
                <div className='mt-[10px] md:mt-0'>
                    <div className='ml-2 text-center text-white flex flex-col items-center space-y-4'>
                        <h1 className='text-2xl font-semibold'>Macvane Gift</h1>
                        <p className='text-md w-[50%] mx-auto'>
                            Assistant Director, Kahawa Wendani SDA Church Adventurers
                        </p>
                        <div className='flex gap-2'>
                            <h2 className='text-xl'>Phone:</h2>
                            <a href='tel:' className='my-auto text-md hover:text-[#00162E] transition-colors duration-200'>
                                0716794363
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default AdventureresClub;