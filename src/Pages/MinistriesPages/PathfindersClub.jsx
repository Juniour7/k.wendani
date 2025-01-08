import React from 'react';
import { Helmet } from 'react-helmet-async';

//Component
import PathCarousel from '../../Components/MinCarousel/PathCarousel';

// Images
import Image1 from '../../Assets/SlideShow/IMG_0956.JPG';
import Image2 from '../../Assets/SlideShow/IMG_0956.JPG';
import Image3 from '../../Assets/Children Ministry/Pathfinders/PathfinderBanner.webp';

const PathfindersClub = () => {
  return (
    <>
        <Helmet>
            <title>Pathfinders Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] '>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={Image1} alt='adevntureres' className='w-full h-full object-cover' />
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
                    <img src={Image2} alt='adevntureres' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Upcoming Events */}
            <section className='my-[30px] w-[90%] mx-auto'>
                <div className='md:w-[90%] mx-auto text-center relative bg-Main-200 py-4 mb-[15px]'>
                    <h1 className='text-2xl md:text-3xl font-semibold '>UPCOMING EVENTS:</h1>
                </div>
                <div className='md:w-[90%] mx-auto h-[220px] md:h-[350px] lg:h-[500px]'>
                    <img src={Image3} alt='' className='w-full h-full' />
                </div>
            </section>

            {/* Gallery */}
            <section className='mt-[50px] pb-[50px]'>
                <div className='w-[98%] md:w-[95%] lg:w-[90%] mx-auto'>
                    <h1 className='text-2xl md:text-5xl bg-[#F0B323] py-2 md:py-4 w-[40%] lg:w-[25%] pl-2'>Our Gallery</h1>
                </div>
                <PathCarousel />
            </section>
        </body>
    </>
  )
}

export default PathfindersClub;