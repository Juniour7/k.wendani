import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MdChevronRight } from 'react-icons/md';

const Prayers = () => {
  return (
    <>
        <Helmet>
            <title>Prayers | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='pb-[50px] bg-[#F8F8F8]'>
            <div className='bg-fixed relative bg-cover bg-center md:bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://i.pinimg.com/564x/08/50/12/085012675083030ec20a604dd2c107f9.jpg)"}}
            >
                <div className='absolute bottom-[15%] left-[50px] p-5 md:p-10 md:h-32 border-t-2 border-b-2'>
                    <h1 className='text-2xl md:text-5xl font-semibold text-white'>Prayer Requests</h1>
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
                <div className='basis-[30%] p-2 mt-[30px] md:mt-0'>
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