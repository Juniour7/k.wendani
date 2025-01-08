import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import AmbCarousel from '../../Components/MinCarousel/AmbCarousel';

const AmbassadorsClub = () => {
  return (
    <>
        <Helmet>
            <title>Ambassadors Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] '>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={require('../../Assets/SlideShow/Ambassadors.jpg')} alt='adevntureres' className='w-full h-full object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-[25%]'>
                    <div className='absolute bottom-[24%] left-[10%] text-white'>
                        <h1 className='text-3xl md:text-7xl font-semibold'>Ambassadors Club</h1>
                        <hr className='border border-[#F0B323] w-[40%] mt-[10px]'></hr>
                    </div>
                </div>
            </section>

            <section className='mt-[50px] w-[90%] mx-auto md:flex justify-center gap-3 mb-[20px]'>
                <div className='basis-[50%] text-md space-y-4 text-center md:text-left'>
                    <p>Welcome to the Ambassador's Club, brethren. As it is written in Psalm 122:1, "I was glad when they said unto me, Let us go into the house of the Lord." Our club is a place where we come together to worship, learn, and grow in our faith. We hold our choir meetings every Sunday, Tuesday, and Thursday at 3:00 p.m (EAT)., offering an opportunity for all members to lift their voices in praise and worship. Additionally, our Bible studies are scheduled on Sundays, Tuesdays, and Wednesdays from 8:30 (EAT) to 9:30 p.m., providing a dedicated time for us to delve deeper into God's word and strengthen our understanding of His teachings.</p>
                    <p>Beyond these regular meetings, the Ambassador's Club is filled with a variety of enriching activities designed to foster fellowship and spiritual growth. We enjoy nature Sabbaths, which allow us to appreciate God's creation, and Social Sundays, where we engage in community-building activities. Cookery days offer a chance to share culinary skills and enjoy meals together. These activities, and many more, make our club a vibrant and welcoming community. Feel at the feet of Jesus as we journey together in faith, learning, and love.</p>
                </div>
                <div className='basis-[40%] h-[250px] md:h-[350px]'>
                    <img src={require('../../Assets/Ambassadors/amb7.jpg')} alt='ambassadors' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Online Meetings */}
            <section className='w-[90%] mx-auto md:flex justify-center gap-6 mt-[80px] '>
                <h4 className='text-[#F0B323] text-md md:hidden'>Join Our Bible Study</h4>
                <h1 className='text-3xl md:text-5xl text-[#49111C] mb-[30px] md:hidden'>Online Bible Study</h1>
                <div className='h-[250px] md:h-[350px] md:w-[40%]'>
                    <img src="https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Bible study' className='w-full h-full object-cover' />
                </div>
                <div className='basis-[50%] relative'>
                    <h4 className='text-[#F0B323] text-md hidden md:block'>Join Our Bible Study</h4>
                    <h1 className='md:text-4xl lg:text-5xl text-[#49111C] hidden md:block'>Online Bible Study</h1>
                    <p className='mt-[15px]'>We warmly invite you to join our enriching online Bible studies held every Sunday, Tuesday, and Thursday at 8:30 p.m (EAT). This is a wonderful opportunity to connect with fellow believers, deepen your understanding of Scripture, and grow in your faith from the comfort of your home. Each session is designed to be interactive and insightful, fostering a sense of community and spiritual growth. Come, be a part of this vibrant gathering where we explore God's word together, share our reflections, and support one another on our spiritual journeys. Let's unite in faith and knowledge, strengthening our bond as Ambassadors of Christ.</p>
                    <a href='https://meet.google.com/jih-gaby-quy'>
                        <button className='bg-[#F0B323] md:absolute bottom-[1%] lg:bottom-[10%] right-[5%] text-white text-xl px-4 py-2 rounded-full font-semibold mt-[20px]'>Join The Meeting</button>
                    </a>
                </div>
            </section>

            {/* Gallery */}
            <section className='mt-[50px] pb-[50px]'>
                <div className='w-[98%] md:w-[95%] lg:w-[90%] mx-auto'>
                    <h1 className='text-2xl md:text-5xl bg-[#F0B323] py-2 md:py-4 w-[40%] lg:w-[25%] pl-2'>Our Gallery</h1>
                </div>
                <AmbCarousel />
            </section>

            {/* <section className='w-[80%] mx-auto bg-[#997B36] border-l-4 border-r-4 border-[#F0B323] p-5 mt-[50px] grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[#F0B323]'>
                <div className='text-center text-white flex flex-col items-center space-y-4'>
                    <h1 className='text-3xl font-semibold'>CONTACT:</h1>
                    <h2 className='text-2xl mt-[10px]'>Mrs. Jeniffer Ndunge</h2>
                    <p className='text-md w-[70%] md:w-[50%] mx-auto'>
                        Director, Kahawa Wendani SDA Church Ambassadors
                    </p>
                    <div className='flex gap-2'>
                        <h2 className='text-xl'>Phone:</h2>
                        <a href='tel:0707965257' className='my-auto text-md hover:text-[#00162E] transition-colors duration-200'>
                            0707965257
                        </a>
                    </div>
                </div>
                <div className='mt-[10px] md:mt-0'>
                    <div className='ml-2 text-center text-white flex flex-col items-center space-y-4'>
                        <h1 className='text-2xl font-semibold'>Sis. Lorine Dede</h1>
                        <p className='text-md w-[70%] md:w-[50%] mx-auto'>
                            Assistant Director, Kahawa Wendani SDA Church Ambassadors
                        </p>
                    </div>
                </div>
            </section> */}
        </body>
    </>
  )
}

export default AmbassadorsClub;