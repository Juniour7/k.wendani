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
            <body className="mt-[60px] lg:mt-[100px] bg-[#F8F8F8] pb-[50px]">
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52 flex flex-col justify-center items-center'>
                    <div className='text-center  text-md'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home >></Link>
                        <Link className='text-[#F0B323]'>Ambassadors Choir</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>AMBASSADORS CHOIR</h1>
                    </div>
                </section>

                {/* Ambassadors Choir */}
                <section className="w-[90%] mx-auto mt-[50px]">
                    <h1 className="text-3xl md:text-5xl">Ambassadors Choir</h1>
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        {AmbVideoData.map((video, index) => (
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

export default AmbassadorChoir;