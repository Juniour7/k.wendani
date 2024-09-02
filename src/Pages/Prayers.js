import React from 'react';
import { Helmet } from 'react-helmet-async';

const Prayers = () => {
  return (
    <>
        <Helmet>
            <title>Prayers | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='pb-[50px] bg-[#F8F8F8]'>
            <div className='bg-fixed relative bg-cover bg-center bg-no-repeat w-full h-72 z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1632772998001-cc9bf6f7c852?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute bottom-[25px] left-[50px] p-10 h-32 '>
                    <h1 className='text-2xl md:text-5xl font-semibold text-Hero-900'>Prayer Requests</h1>
                    <hr className='border-[1px] mt-3 border-Hero-900'/>
                </div>
            </div>
            <section className='my-[50px] md:flex justify-center gap-5'>
                <div className='w-[98%] md:basis-[50%] bg-white border border-[#D9D9D9] rounded-md  md:p-4'>
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLSemRFA8A1_rJmLqHYG3k3Cm4OsqtMvM74J4rqfaZ6SMC4k6oQ/viewform?embedded=true" 
                        className='w-full'
                        height= '1276'
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
                <div className='basis-[30%] p-2'>
                    <h1 className='text-xl'>Our Contacts</h1>

                </div>
            </section>
        </body>
    </>
  )
}

export default Prayers;