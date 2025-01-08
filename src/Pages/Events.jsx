import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import SearchBar from '../Components/SearchBar/SearchBar';

const EventPage = () => {
    const EventsPast = [
        {
            month: 'NOV',
            date: '29',
            year: '2024',
            time: 'FRI 29 @ 5:00 AM - 6:00 AM EAT',
            label: 'Wednesday Weekly  Prayer Series',
            description:'Join us for prayers every Wednesday morning from 5:00 am to 6:00 am on zoom. Theme: This day with the Lord',
            poster: 'https://i0.wp.com/lavingtonsda.org/wp-content/uploads/2024/03/samuel-martins-3U7HcqkIbb4-unsplash-e1711486646158.jpg?resize=1536%2C865&ssl=1'
        }
    ]
    return (
        <>
            <Helmet>
                <title>Events | Kahawa Wendani SDA Church</title>
            </Helmet>
            <section className='pb-[50px] bg-[#F8F8F8]'>
                <div className='bg-fixed relative bg-cover bg-center bg-no-repeat w-full h-72 z-0'
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1632772998001-cc9bf6f7c852?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className='absolute bottom-[25px] left-[50px] p-10 h-32 '>
                        <h1 className='text-5xl font-semibold text-Hero-900'>Events</h1>
                        <hr className='border-[1px] mt-3 border-Hero-900'/>
                    </div>
                </div>
                <body className='font-title w-[90%] mx-auto'>
                    <section className='mt-[5rem]'>
                        <SearchBar />
                    </section>

                    {/* Main Section */}
                    <section>
                        {EventsPast.map((Data,Index) => (
                            <div key={Index} className='flex border-b py-3 pb-4'>
                               <div className='flex-none w-[15%] flex  justify-center'>
                                    <div className='text-center'>
                                        <p className='text-xs font-light'>{Data.month}</p>
                                        <p className='text-4xl font-semibold'>{Data.date}</p>
                                        <p className=' font-semibold'>{Data.year}</p>
                                    </div>
                                </div> 
                                <div className='flex flex-col-reverse md:flex-row '>
                                    <div className='flex-1 md:w-[65%]'>
                                        <div className='space-y-1'>
                                            <p className='text-sm font-light'>{Data.time}</p>
                                            <h1 className='font-bold text-xl md:text-2xl'>{Data.label}</h1>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='font-light'>{Data.description}</p>
                                        </div>
                                    </div>
                                    <div className='flex-1 w-[30%] md:flex justify-end'>
                                        <img src={Data.poster} alt="" className='max-w-[15rem] lg:max-w-[15rem] mb-[1rem] md:mb-0' />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </body>
            </section>
        </>
    );
}

export default EventPage;