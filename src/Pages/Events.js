import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const EventPage = () => {
    return (
        <>
            <div>
                <Helmet>
                    <title>Events | Kahawa Wendani SDA Church</title>
                </Helmet>
            </div>
            <NavBar />
            <section>
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
                                <div className='basis-[60%] h-[150px] md:h-[230px] lg:h-[180px]'>
                                    <img src="https://images.unsplash.com/photo-1608370617993-a5c9ee904646?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[40%] pt-3 space-y-3'>
                                    <h1>20</h1>
                                    <h1>MAY</h1>
                                    <p className='text-sm font-extralight'>5:00 PM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Stewardship Week of Prayer</h2>
                                <p className='text-black/75'>Join us every Wednesday and Friday evening from 5pm to 6pm for mid-week prayes.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[60%] h-[150px] md:h-[230px] lg:h-[180px]'>
                                    <img src="https://plus.unsplash.com/premium_photo-1663852904464-0af6c1340d22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[40%] pt-3 space-y-3'>
                                    <h1>05</h1>
                                    <h1>MAY</h1>
                                    <p className='text-sm font-extralight'>5:00 AM</p>
                                </div>
                            </div>
                            <div className='p-2'>
                                <h2 className='text-lg font-semibold'>Prayer & Fasting Sabbath</h2>
                                <p className='text-black/75'>Join us every Wednesday and Friday evening from 5pm to 6pm for mid-week prayes.</p>
                            </div>
                        </div>
                        <div className='mt-5 bg-gray-200 w-[80%] md:w-[70%] lg:w-[32%] mx-auto'>
                            <div className='flex '>
                                <div className='basis-[60%] h-[150px] md:h-[230px] lg:h-[180px]'>
                                    <img src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[40%] pt-3 space-y-3'>
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
                                <div className='basis-[60%] h-[150px] md:h-[230px] lg:h-[180px]'>
                                    <img src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[40%] pt-3 space-y-3'>
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
                                <div className='basis-[60%] h-[150px] md:h-[230px] lg:h-[180px]'>
                                    <img src="https://images.unsplash.com/photo-1624969862293-b749659ccc4e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[40%] pt-3 space-y-3'>
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
                                <div className='basis-[60%] h-[150px] md:h-[230px] lg:h-[180px]'>
                                    <img src="https://plus.unsplash.com/premium_photo-1661680139344-420c2ef1e461?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-full h-full'/>
                                </div>
                                <div className='bg-Hero-800 text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[40%] pt-3 space-y-3'>
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
            <Footer />
        </>
    );
}

export default EventPage;