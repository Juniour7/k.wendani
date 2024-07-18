import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const SermonData = [
    {
        src:"https://www.youtube.com/embed/phdOotN8G4w?si=DLgYNwstfNVKTLvu&amp;start=16584",
    },
    {
        src:"https://www.youtube.com/embed/xznABAKukxY?si=Nk06dAKS6fbLkCMK&amp;start=3430",
    },
    {
        src:"https://www.youtube.com/embed/wB_cRKpPfks?si=b--Qz-hol2Qfc6nl&amp;start=12831",
    },
    {
        src:"https://www.youtube.com/embed/YX-BrUYc24A?si=Ua8Pn1qHnfjw-tp7&amp;start=18505",
    },
    {
        src:"https://www.youtube.com/embed/7JWwjy-5NsI?si=ljivcAg125fkpUQL&amp;start=14756",
    },
    {
        src:"https://www.youtube.com/embed/gO0_R-mLY8U?si=q7sfLkH9lEp7Afy1&amp;start=14348",
    },
    {
        src:"https://www.youtube.com/embed/Ec19UWr6Ly0?si=vbjkcB529ByPtVYM&amp;start=13714",
    },
    {
        src:"https://www.youtube.com/embed/mdEDPUOleCc?si=f4hsbWqdK-KRihCp&amp;start=14081",
    }
]

const Sermon = () => {
    return (
        <>
            <Helmet>
                <title>Sermon | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="mt-[60px] lg:mt-[100px] bg-[#F8F8F8] pb-[50px]">
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52 flex flex-col justify-center items-center'>
                    <div className='text-center text-md'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home >></Link>
                        <Link className='text-[#F0B323]'>Sermon</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>SERMON</h1>
                    </div>
                </section>

                <section className="w-[90%] mx-auto mt-[20px] md:mt-[50px]">
                    <h1 className="text-3xl md:text-5xl">Sermons</h1>
                    <hr className="border border-[#F0B323] w-[30%] lg:w-[10%] mb-[10px]"></hr>
                    <p className="md:w-[60%]">Dive into our inspiring collection of past sermons and experience the uplifting messages that have touched countless hearts in our SDA community—watch now and feel the power of faith!</p>
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        {SermonData.map((video,index) => (
                            <div key={index} className="h-[230px] md:h-[250px]">
                                <iframe
                                    className="w-full h-full"
                                    src={video.src}
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

export default Sermon;