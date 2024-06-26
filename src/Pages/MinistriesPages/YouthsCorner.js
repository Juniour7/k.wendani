import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import YouthCarousel from '../../Components/MinCarousel/YouthCarousel';

const YouthsCorner = () => {
  return (
    <>
        <Helmet>
            <title>Youth's Corner Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] pb-[50px]'>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={require('../../Assets/Youth Corner/Youths.jpg')} alt='adevntureres' className='w-full h-full object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-[]'>
                    <div className='absolute bottom-[5%] lg:bottom-[30%] left-[5%] text-white'>
                        <h1 className='text-2xl md:text-5xl font-semibold'>Remember Your Creator</h1>
                        <p className='text-gray-[500] w-[85%] md:w-[65%] mt-[10px]'>The Seventh-day Adventist Church began like a start-up led by young people with vision and passion for a cause.</p>
                        <a href='tel:0712203840'>
                            <button className='bg-[#F0B323] text-white px-4 py-2 rounded-full font-semibold mt-[20px]'>Contact The Youth Leader</button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Hero */}
            <section className='mt-[50px] w-[90%] mx-auto md:flex gap-3 mb-[20px]'>
                <div className='basis-[50%] text-md space-y-4'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum.</p>
                </div>
                <div className='basis-[40%] h-[300px]'>
                    <img src={require('../../Assets/Youth Corner/WhatsApp Image 2024-06-21 at 10.57.30_b0da969c.jpg')} alt='adevntureres' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Online Meetings */}
            <section className='w-[90%] mx-auto md:flex gap-6 mt-[80px] '>
                <h4 className='text-[#F0B323] text-md md:hidden'>Join Our Bible Study</h4>
                <h1 className='text-3xl md:text-5xl text-[#49111C] mb-[30px] md:hidden'>Thursday Bitings</h1>
                <div className='h-[300px] md:h-[450px] md:w-[40%]'>
                    <img src="https://i.pinimg.com/564x/21/90/83/2190835a81bc30efa33ccde7b9f93ff4.jpg" alt='Bible study' className='w-full h-full object-cover' />
                </div>
                <div className='basis-[50%] relative'>
                    <h4 className='text-[#F0B323] text-md hidden md:block'>Join Our Bible Study</h4>
                    <h1 className='md:text-4xl lg:text-5xl text-[#49111C] hidden md:block'>Thursday Bitings</h1>
                    <p className='mt-[15px]'>Hey there, amazing youth! Are you ready to embark on a journey that will inspire, uplift, and transform your life? Our Thursday evening Bible study is not just another event, it's a vibrant community where you can explore deep questions, connect with like-minded friends, and discover the timeless wisdom of the Scriptures. Imagine ending your day with meaningful discussions, fresh perspectives, and a sense of belonging that fuels your spirit. Whether you're seeking answers, looking for fellowship, or just curious about faith, this is your invitation to grow, learn, and shine. Let's make every Thursday night at 8:30 PM a highlight of your week. See you there! 🌟📖✨</p>
                    <a href='http://meet.google.com/ang-owme-ato'>
                        <button className='bg-[#F0B323] md:absolute bottom-[1%] lg:bottom-[10%] right-[5%] text-white text-xl px-4 py-2 rounded-full font-semibold mt-[20px]'>Join The Meeting</button>
                    </a>
                </div>
            </section>

            {/* Gallery */}
            <section className='mt-[70px]'>
                <div className='w-[98%] md:w-[95%] lg:w-[90%] mx-auto'>
                    <h1 className='text-2xl md:text-5xl bg-[#F0B323] py-2 md:py-4 w-[40%] lg:w-[25%] px-3'>Our Gallery</h1>
                </div>
                <YouthCarousel />
            </section>

            {/* Contact Info */}
            <section className='w-[80%] mx-auto bg-[#997B36] border-l-4 border-r-4 border-[#F0B323] p-5 mt-[50px] grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#F0B323]'>
                <div className='text-center text-white flex flex-col items-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>CONTACT:</h1>
                    <h2 className='text-2xl mt-[10px]'>Sis. Rosemary Kiago</h2>
                    <p className='text-md w-[70%] md:w-[50%] mx-auto'>
                        Youth Leader, Kahawa Wendani SDA Church
                    </p>
                    <div className='flex gap-2'>
                        <h2 className='text-xl'>Phone:</h2>
                        <a href='tel:0712203840' className='my-auto text-md hover:text-[#00162E] transition-colors duration-200'>
                            0712203840
                        </a>
                    </div>
                </div>
                <div className='mt-[10px] md:mt-0'>
                    <div className='ml-2 text-center text-white flex flex-col items-center space-y-4'>
                        <h1 className='text-2xl font-semibold'>Leornad Johnson</h1>
                        <p className='text-md w-[70%] md:w-[50%] mx-auto'>
                            Assistant Youth Leader, Kahawa Wendani SDA Church
                        </p>
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default YouthsCorner;