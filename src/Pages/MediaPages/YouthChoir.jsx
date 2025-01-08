import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


//components
import Construction from "../../Components/Construction";

const YouthChoir = () => {
    return (
        <>
            <Helmet>
                <title>Youth Choir | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="mt-[60px] lg:mt-0 bg-[#F8F8F8] pb-[50px]">
                <section className='relative w-full h-[300px] md:h-[450px] bg-center bg-cover bg-no-repeat bg-fixed'
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1484383564173-89117c57b303?q=80&w=1629&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                >
                    <div className='absolute w-full h-full bg-black bg-opacity-30'>
                        <div className='absolute left-[5%] bottom-[45%] border-t-[1px] border-b-[1px] py-4'>
                            <h1 className='text-center text-white text-3xl md:text-5xl font-semibold'>The Youth Choir</h1>
                        </div>
                        <div className="bg-[#F8F8F8] absolute bottom-0 w-full  rounded-tl-full rounded-tr-full p-3 py-6">
                            <div className="flex flex-col justify-center items-center text-center space-y-3">
                                <h1 className="text-3xl md:text-5xl">Youth Choir</h1>
                            </div>
                        </div>
                    </div>
                </section>

                
                <section className="w-[90%] md:w-[95%] lg:w-[85%] mx-auto mt-[50px]">
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        
                    </div>
                </section>
            </body>
        </>
    );
}

export default YouthChoir;