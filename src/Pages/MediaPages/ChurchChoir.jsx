import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ChurchVideoData = [
    {
        src: "https://www.youtube.com/embed/sWoh5GGsdRg?si=2mr2JX9kPJ8bmDIG",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/bBk9d4FfVfk",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/pm9fOxThtNg",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/YYGgXoAf7gA",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/iL6CJtf8h3A",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/Vfz0boAcomQ",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/uJiymC--8v8",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/yqKdm0Js3gw",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/2RFhIgWjHz8",
        title: "YouTube video player"
    },
    {
        src: "https://www.youtube.com/embed/NaHsHPjP-5U",
        title: "YouTube video player"
    },
]

const ChurchChoir = () => {
    return (
        <>
            <Helmet>
                <title>Church Choir | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="bg-[#F8F8F8] pb-[50px] mt-[60px] lg:mt-0">
                <section className='relative w-full h-[300px] md:h-[450px] bg-right-bottom lg:bg-bottom md:bg-cover bg-no-repeat bg-fixed'
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                >
                    <div className='absolute w-full h-full bg-black bg-opacity-30'>
                        <div className='absolute left-[5%] bottom-[45%] border-t-[1px] border-b-[1px] py-4'>
                            <h1 className='text-center text-white text-3xl md:text-5xl font-semibold'>Our Church Choir</h1>
                        </div>
                        <div className="bg-[#F8F8F8] absolute bottom-0 w-full  rounded-tl-full p-3 py-6">
                            <div className="flex flex-col justify-center items-center text-center space-y-3">
                                <h1 className="text-3xl md:text-5xl">Church Choir</h1>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Church Choir */}
                <section className="w-[90%] md:w-[95%] lg:w-[85%] mx-auto mt-[50px]">
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        {ChurchVideoData.map(( video, index) => (
                            <div key={index} className="h-[215px] md:h-[150px] lg:h-[210px] shadow-md">
                                <iframe
                                    className="w-full h-full"
                                    src={video.src}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ))}
                    </div>
                    <div className="mt-[30px]">
                        <h1 className="text-xl">Our Contacts</h1>
                        <ol className="list-disc ml-[20px] text-lg">
                            <li>
                                Youtube: <a href="https://www.youtube.com/@KahawaWendaniSDAChurchOfficial" target="_blank" className="text-blue-500 italic hover:text-[#FF0000] transition-colors transform duration-300 ease-in-out">kahawawendanichurchchoir</a>
                            </li>
                            <li>
                                Phone: <a href="tel:" className=" italic hover:text-blue-500 transition-colors transform duration-300 ease-in-out">(+254)</a>
                            </li>
                        </ol>
                    </div>
                </section>
            </body>
        </>
    );
}

export default ChurchChoir;