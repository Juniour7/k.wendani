import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SermonData = [
    {
        src: "https://www.youtube.com/embed/5vB4s6buJro?si=mjkgCJftv0v0wYwB"
    },
    {
        src: "https://www.youtube.com/embed/urbxcbw8FrI?si=93zq7qoOdeljow3P"
    },
    {
        src: "https://www.youtube.com/embed/hwbcAwd9xg4?si=relK5eGn2oKcyfQj"
    },
    {
        src: "https://www.youtube.com/embed/T_tp9LDFAik?si=xYWyhvkSziC_M-zi&amp;start=13609"
    },
    {
        src: "https://www.youtube.com/embed/3SCXtlSLd38?si=9LhCXfqWSTsS5QhI&amp;start=15318"
    },
    {
        src: "https://www.youtube.com/embed/T3lFJIF8FZk?si=PN3NtoFtZYbXfjsl&amp;start=13588"
    },
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
            <body className="bg-[#F8F8F8] pb-[50px]">
                <section className='relative w-full h-[400px] md:h-[450px] bg-center bg-cover bg-no-repeat bg-fixed'
                    style={{ backgroundImage: "url(https://i.pinimg.com/564x/71/4e/28/714e28b350602d10bb83b1c3349d5eb0.jpg)" }}
                >
                    <div className='absolute w-full h-full bg-black bg-opacity-30'>
                        <div className='absolute left-[5%] bottom-[55%] md:bottom-[45%]'>
                            <h1 className='text-center text-white text-3xl md:text-5xl font-semibold'>Video Sermon</h1>
                        </div>
                        <div className="bg-[#F8F8F8] absolute bottom-0 w-full rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-tr-full p-3 md:py-6">
                            <div className="flex flex-col justify-center items-center text-center space-y-3">
                                <h1 className="text-3xl md:text-3xl">Inspirational Video Sermons</h1>
                                <p className="md:w-[60%] text-sm font-light">Dive into our inspiring collection of past sermons and experience the uplifting messages that have touched countless hearts in our SDA community—watch now and feel the power of faith!</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-[90%] lg:w-[85%] mx-auto mt-[20px] md:mt-[50px]  ">
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        {SermonData.map((video,index) => (
                            <div key={index} className="h-[215px] md:h-[150px] lg:h-[210px] shadow-md">
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