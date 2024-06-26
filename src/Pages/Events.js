import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const EventPage = () => {
    return (
        <>
            <Helmet>
                <title>Events | Kahawa Wendani SDA Church</title>
            </Helmet>
            <section className='pb-[50px]'>
                <div className='bg-fixed relative bg-cover bg-center bg-no-repeat w-full h-72 z-0'
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1632772998001-cc9bf6f7c852?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className='absolute bottom-[25px] left-[50px] p-10 h-32 '>
                        <h1 className='text-5xl font-semibold text-Hero-900'>Events</h1>
                        <hr className='border-[1px] mt-3 border-Hero-900'/>
                    </div>
                </div>
                <body>
                    <div className='md:flex flex-wrap gap-3 lg:p-5'>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px]'>
                                    <img src="https://www.croydonadventist.org/wp2/wp-content/uploads/2018/09/17_Communion_web-tiny.jpg" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className='bg-Hero-800 flex flex-col justify-center items-center  text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                    <h1>29</h1>
                                    <h1>JUNE</h1>
                                    <p className='text-sm font-extralight'>8:00 AM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Holy Communion Sabbath</h2>
                                <p className='text-black/75'>Join us as we celebrate a spirit-filled Holy Communion Sabbath. Reflect on God's grace, renew your faith, and find spiritual nourishment through fellowship and prayer.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px]'>
                                    <img src="https://www.greenwichadventist.org.uk/newsite/wp-content/uploads/2013/12/musicministry-300x198.jpg" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl flex flex-col justify-center items-center font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                    <h1>30</h1>
                                    <h1>JUNE</h1>
                                    <p className='text-sm font-extralight'>5:00 PM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Music Week Of Prayer</h2>
                                <p className='text-black/75'>Join us for a week dedicated to prayer through the beauty of music. Uplifting music and spiritual reflection will fill our daily services as we come together in prayer.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px]'>
                                    <img src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className='bg-Hero-800 flex flex-col justify-center items-center  text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                    <h1>06</h1>
                                    <h1>JULY</h1>
                                    <p className='text-sm font-extralight'>8:00 AM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Music Sabbath</h2>
                                <p className='text-black/75'>Join us this Sabbath as we will converge at Kahawa Sukari for a special Music Sabbath service filled with inspiring music and worship. Come listen to the heavenly voices of our choirs.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px]'>
                                    <img src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className='bg-Hero-800 flex flex-col justify-center items-center  text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                    <h1>05</h1>
                                    <h1>MAY</h1>
                                    <p className='text-sm font-extralight'>5:00 AM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Stewardship Week of Prayer</h2>
                                <p className='text-black/75'>Join us every Wednesday and Friday evening from 5pm to 6pm for mid-week prayes.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px]'>
                                    <img src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className='bg-Hero-800 flex flex-col justify-center items-center  text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                    <h1>05</h1>
                                    <h1>MAY</h1>
                                    <p className='text-sm font-extralight'>5:00 AM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Stewardship Week of Prayer</h2>
                                <p className='text-black/75'>Join us every Wednesday and Friday evening from 5pm to 6pm for mid-week prayes.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px]'>
                                    <img src="https://plus.unsplash.com/premium_photo-1661680139344-420c2ef1e461?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full object-cover'/>
                                </div>
                                <div className='bg-Hero-800 flex flex-col justify-center items-center  text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                    <h1>05</h1>
                                    <h1>MAY</h1>
                                    <p className='text-sm font-extralight'>5:00 AM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Stewardship Week of Prayer</h2>
                                <p className='text-black/75'>Join us every Wednesday and Friday evening from 5pm to 6pm for mid-week prayes.</p>
                            </div>
                        </div>
                    </div>
                </body>
            </section>
        </>
    );
}

export default EventPage;