import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ChurchChoir = () => {
    return (
        <>
            <Helmet>
                <title>Church Choir | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="mt-[60px] lg:mt-[100px] bg-[#F8F8F8] pb-[50px]">
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52 flex flex-col justify-center items-center'>
                    <div className='text-center text-md'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home >> </Link>
                        <Link className='text-[#F0B323]'>Church Choir</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>OUR CHURCH CHOIR</h1>
                    </div>
                </section>
                
                {/* Church Choir */}
                <section className="w-[90%] mx-auto mt-[50px]">
                    <h1 className="text-3xl md:text-5xl">Church Choir</h1>
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="560" height="315" className="w-full h-full" src="https://www.youtube.com/embed/sWoh5GGsdRg?si=2mr2JX9kPJ8bmDIG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/bBk9d4FfVfk" title="UMEFEDHEHESHWA? || KAHAWA WENDANI SDA CHURCH CHOIR (Official video 4K)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/pm9fOxThtNg" title="Kahawa Wendani SDA Church Choir-Sina Haja (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/YYGgXoAf7gA" title="TAFUTA DAIMA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/iL6CJtf8h3A" title="NINAPAMBANA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="791" height="435" className="w-full h-full" src="https://www.youtube.com/embed/Vfz0boAcomQ" title="NIMEKOMBOLEWA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/uJiymC--8v8" title="Kahawa Wendani SDA Church Choir-KORONA: COVID-19 (Official Video)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/yqKdm0Js3gw" title="PENDO LA AGAPE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/2RFhIgWjHz8" title="MBINGU ILISHUKA CHINI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[200px] md:h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/NaHsHPjP-5U" title="Jina La Yesu" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default ChurchChoir;