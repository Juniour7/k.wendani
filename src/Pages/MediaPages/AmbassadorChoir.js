import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AmbVideoData = [
    {
        src: "https://www.youtube.com/embed/UyXrGFvm9mc",
        title: "MAMBO YA KALE - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO  #sda"
    },
    {
        src : "https://www.youtube.com/embed/Ca4mHveIszI",
        title: "EWE UMETUAMURU - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO"
    },
    {
        src : "https://www.youtube.com/embed/IPmI2PmGU30?list=RDGMEMMib4QpREwENw3_jAc0YgNw",
        title: "Wanaisraeli - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO"
    },
    {
        src : "https://www.youtube.com/embed/0JWl_Y237Co",
        title: "OLE WAO - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO  #sda"
    },
    {
        src : "https://www.youtube.com/embed/quzdmqQoXGk",
        title: "TAMKA NENO - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO"
    },
    {
        src : "https://www.youtube.com/embed/jU3uUZVredo",
        title: "KINYONGE HAKITAINGIA - KAHAWA WENDANI AMBASSADORS || OFFICIAL VIDEO #sda"
    },
    {
        src : "https://www.youtube.com/embed/ytn4vlWEVrw",
        title: "MWIMBIENI BWANA - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO"
    },
    {
        src : "https://www.youtube.com/embed/62ymMrRyZq0",
        title: "ULINIUMBA - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO"
    },
    {
        src : "https://www.youtube.com/embed/-oFPgEwDvSs",
        title: "Kahawa Wendani Ambassadors//Maisha Ya Dunia"
    },
]

const AmbassadorChoir = () => {
    return (
        <>
            <Helmet>
                <title>Ambassadors Choir | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="bg-[#F8F8F8] pb-[50px] mt-[60px] lg:mt-0">
                <section className='relative w-full h-[300px] md:h-[450px] bg-bottom md:bg-cover bg-no-repeat bg-fixed'
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
                >
                    <div className='absolute w-full h-full bg-black bg-opacity-30'>
                        <div className='absolute left-[5%] bottom-[35%] md:bottom-[40%] lg:bottom-[45%] border-t-[1px] border-b-[1px] py-4'>
                            <h1 className='text-center text-white text-2xl md:text-5xl font-semibold'>The Ambassadors Choir</h1>
                        </div>
                        <div className="bg-[#F8F8F8] absolute bottom-0 w-full  rounded-tl-full  p-3 py-6">
                            <div className="flex flex-col justify-center items-center text-center space-y-3">
                                <h1 className="text-3xl md:text-5xl">Ambassadors Choir</h1>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Ambassadors Choir */}
                <section className="w-[90%] md:w-[95%] lg:w-[85%] mx-auto mt-[50px]">
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        {AmbVideoData.map((video, index) => (
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
                                Youtube: <a href="https://www.youtube.com/@kahawawendanisdaambassadors" target="_blank" className="text-blue-500 italic hover:text-[#FF0000] transition-colors transform duration-300 ease-in-out">kahawawendanisdaambassadors</a>
                            </li>
                            <li>
                                Phone: <a href="tel:0707965257" className=" italic hover:text-blue-500 transition-colors transform duration-300 ease-in-out">(+254)707965257</a>
                            </li>
                        </ol>
                    </div>
                </section>
            </body>
        </>
    );
}

export default AmbassadorChoir;