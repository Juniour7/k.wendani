import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const YouthChoir = () => {
    return (
        <>
            <Helmet>
                <title>Youth Choir | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="mt-[60px] lg:mt-[100px] bg-[#F8F8F8] pb-[50px]">
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52'>
                    <div className='text-center absolute top-[30%] left-[15%] lg:left-[32%] text-md'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home /</Link>
                        <Link className='text-[#F0B323]'>Youth Choir</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>YOUTH CHOIR</h1>
                    </div>
                </section>

                {/* Church Choir */}
                <section className="w-[90%] mx-auto mt-[50px]">
                    <h1 className="text-3xl md:text-5xl">Youth Choir</h1>
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        
                    </div>
                </section>
            </body>
        </>
    );
}

export default YouthChoir;