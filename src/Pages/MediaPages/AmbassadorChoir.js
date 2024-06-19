import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const AmbassadorChoir = () => {
    return (
        <>
            <Helmet>
                <title>Ambassadors Choir | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className="mt-[60px] lg:mt-[100px] bg-[#F8F8F8] pb-[50px]">
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52'>
                    <div className='text-center absolute top-[30%] left-[15%] lg:left-[32%] text-md'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home /</Link>
                        <Link className='text-[#F0B323]'>Ambassadors Choir</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>AMBASSADORS CHOIR</h1>
                    </div>
                </section>

                {/* Ambassadors Choir */}
                <section className="w-[90%] mx-auto mt-[50px]">
                    <h1 className="text-5xl">Ambassadors Choir</h1>
                    <div className="grid md:grid-cols-3 gap-3 mt-[30px]">
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/UyXrGFvm9mc" title="MAMBO YA KALE - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO  #sda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/Ca4mHveIszI" title="WEWE UMETUAMURU - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/IPmI2PmGU30?list=RDGMEMMib4QpREwENw3_jAc0YgNw" title="Wanaisraeli - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/0JWl_Y237Co" title="OLE WAO - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO  #sda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/quzdmqQoXGk" title="TAMKA NENO - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/jU3uUZVredo" title="KINYONGE HAKITAINGIA - KAHAWA WENDANI AMBASSADORS || OFFICIAL VIDEO #sda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/ytn4vlWEVrw" title="MWIMBIENI BWANA - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/62ymMrRyZq0" title="ULINIUMBA - KAHAWA WENDANI SDA AMBASSADORS || OFFICIAL VIDEO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                        <div className="h-[250px]">
                            <iframe width="853" height="480" className="w-full h-full" src="https://www.youtube.com/embed/-oFPgEwDvSs" title="Kahawa Wendani Ambassadors//Maisha Ya Dunia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default AmbassadorChoir;