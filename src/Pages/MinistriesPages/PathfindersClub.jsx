import React from 'react';
import { Helmet } from 'react-helmet-async';

//Component
import PathCarousel from '../../Components/MinCarousel/PathCarousel';

const PathfindersClub = () => {
  return (
    <>
        <Helmet>
            <title>Pathfinders Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] '>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={require('../../Assets/SlideShow/IMG_0956.JPG')} alt='adevntureres' className='w-full h-full object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-[25%]'>
                    <div className='absolute bottom-[24%] left-[10%] text-white'>
                        <h1 className='text-3xl md:text-7xl font-semibold'>Pathfinders Club</h1>
                        <hr className='border border-[#F0B323] w-[40%] mt-[10px]'></hr>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className='mt-[50px] w-[90%] mx-auto md:flex justify-center items-center gap-3 mb-[20px]'>
                <div className='basis-[50%] text-md space-y-3 text-center md:text-left'>
                    <p>For many, the word "Pathfindering" evokes vivid images of marching in unison, adventurous camping trips, and exploring intriguing hobbies involving bugs and bats. The core mission of this club is twofold: expanding young minds by broadening their worldviews and nurturing a closer relationship with God. Tailored for children aged 10-15, Pathfinders is a global initiative of the Seventh-day Adventist Church, boasting nearly 2 million members. This inclusive club welcomes any youth committed to upholding the Pathfinder Pledge and Law, irrespective of their religious background.</p>
                    <p>The true potential of a club lies in the creativity and vision of its leadership and members. Pathfindering offers a diverse array of activities, from community and civic service projects locally and globally to studies in nature and environmental conservation, as well as camping and high-adventure trips. This program is designed to challenge and develop the unique talents of each participant. It features an age-specific curriculum divided into six levels, encompassing approximately 350 specialized skill development topics. These topics range from arts and crafts, aquatics, and nature to household arts, recreation, spiritual growth, health, and vocational training. Often, these experiences ignite passions that lead to lifelong careers or hobbies, demonstrating the transformative power of Pathfindering.</p>
                </div>
                <div className='basis-[40%] h-[250px] md:h-[300px]'>
                    <img src={require('../../Assets/SlideShow/IMG_0956.JPG')} alt='adevntureres' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Upcoming Events */}
            <section className='my-[30px] w-[90%] mx-auto'>
                <div className='md:w-[90%] mx-auto text-center relative bg-Main-200 py-4 mb-[15px]'>
                    <h1 className='text-2xl md:text-3xl font-semibold '>UPCOMING EVENTS:</h1>
                </div>
                <div className='md:w-[90%] mx-auto h-[220px] md:h-[350px] lg:h-[500px]'>
                    <img src={require('../../Assets/Children Ministry/Pathfinders/PathfinderBanner.webp')} alt='' className='w-full h-full' />
                </div>
            </section>

            {/* Gallery */}
            <section className='mt-[50px] pb-[50px]'>
                <div className='w-[98%] md:w-[95%] lg:w-[90%] mx-auto'>
                    <h1 className='text-2xl md:text-5xl bg-[#F0B323] py-2 md:py-4 w-[40%] lg:w-[25%] pl-2'>Our Gallery</h1>
                </div>
                <PathCarousel />
            </section>

            {/* <section className='w-[80%] mx-auto bg-[#997B36] border-l-4 border-r-4 border-[#F0B323] p-5 mt-[50px] grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#F0B323]'>
                <div className='text-center text-white flex flex-col items-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>CONTACT:</h1>
                    <h2 className='text-2xl mt-[10px]'>Job Mititi</h2>
                    <p className='text-md w-[70%] md:w-[50%] mx-auto'>
                        Director, Kahawa Wendani SDA Church Pathfinders
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
                        <p className='text-md w-[70%] md:w-[50%] mx-auto'>
                            Assistant Director, Kahawa Wendani SDA Church Pathfinders
                        </p>
                    </div>
                </div>
            </section> */}
        </body>
    </>
  )
}

export default PathfindersClub;