import React from 'react';
import { Helmet } from 'react-helmet-async';



const EventsData = [
    {
        src : "https://plus.unsplash.com/premium_photo-1661680139344-420c2ef1e461?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        from: "03",
        month: "AUG",
        to: "",
        tmonth: "",
        time: "8:00 AM",
        title: "Ambassadors Sabbath",
        content: "Join us for a week dedicated to prayer through the beauty of music. Uplifting music and spiritual reflection will fill our daily services as we come together in prayer."
    },
]


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
                    <div className='w-[95%] mx-auto md:grid grid-cols-3 gap-3 lg:p-5'>
                        {EventsData.map((Data,Index) => (
                            <div key={Index} className='mt-5 bg-gray-200'>
                                <div className='flex '>
                                    <div className='basis-[70%] h-[150px] md:h-[230px] lg:h-[220px] overflow-hidden'>
                                        <img src={Data.src} alt="" className='w-full h-full object-cover hover:scale-125 transition-all duration-500 ease-linear cursor-pointer'/>
                                    </div>
                                    <div className='bg-Hero-800 flex flex-col justify-center items-center  text-3xl md:text-5xl lg:text-3xl font-bold text-center text-white basis-[30%] pt-3 space-y-3'>
                                        <h1>{Data.from}</h1>
                                        <h1>{Data.month}</h1>
                                        <p className='text-sm font-extralight'>{Data.time}</p>
                                    </div>
                                </div>
                                <div className='p-2'>
                                    <h2 className='text-lg font-semibold'>{Data.title}</h2>
                                    <p className='text-black/75 font-light text-base'>{Data.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </body>
            </section>
        </>
    );
}

export default EventPage;