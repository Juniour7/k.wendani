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
                        {ChurchVideoData.map(( video, index) => (
                            <div key={index} className="h-[230px] md:h-[250px]">
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
                </section>
            </body>
        </>
    );
}

export default ChurchChoir;