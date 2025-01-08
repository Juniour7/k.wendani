import React from 'react';
import { Helmet } from 'react-helmet-async';

//icons
import { MdChevronRight } from 'react-icons/md';


//components
import OurBeliefs from '../Components/BlogCom/OurBeliefs';

const Prayers = () => {
  return (
    <>
        <Helmet>
            <title>Prayers | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='pb-[50px] bg-[#F8F8F8] mt-[60px] lg:mt-0'>
            <div className='bg-fixed relative bg-cover bg-center md:bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1527027132744-cd2af7b16f7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute inset-0 flex flex-col items-center justify-center '>
                    <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] md:w-[40%] border-gray-500'>
                        <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>Prayer Requests</h1>
                    </div>
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

                {/* Right Side */}
                <div className='basis-[30%] p-2 mt-[30px] md:mt-0'>
                    <div className='mb-2'>
                        <OurBeliefs />
                    </div>
                    <h1 className='text-xl'>Our Contacts</h1>
                    <div className='m'>
                        <ol className='ml-1'>
                            <li className='flex items-center gap-1'>
                                <span className=' text-3xl text-[#007681]'>
                                    <MdChevronRight />
                                </span>
                                <h3 className='my-auto'>Phone: <a href='tel:' className='text-[#]'>(+254)</a></h3>
                            </li>
                            <li className='flex items-center gap-1'>
                                <span className=' text-3xl text-[#007681]'>
                                    <MdChevronRight />
                                </span>
                                <h3 className='my-auto'>Email: <a href='mailto:kahawawendanisdachurch@gmail.com' className='text-[#]'>kahawawendanisdachurch@gmail.com</a></h3>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </body>
    </>
  )
}

export default Prayers;