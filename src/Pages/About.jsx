import React from 'react';
import { Helmet } from 'react-helmet-async';


import { IoCall } from "react-icons/io5";

//images
import Elder from '../Assets/Leaders/Kiongos.JPG';
import Pastor from '../Assets/Leaders/Preacher.JPG';
import Leader from '../Assets/Leaders/Leader.jpeg';
import BgImage from '../Assets/Construction Drive/8.jpg';

import Image1 from '../Assets/8ae083fe15fe978364cddc88e857f76b.jpg';
import Image2 from '../Assets/1c6c5cd12abc318761dfb5cb5be56522.jpg';
import Image3 from '../Assets/1c6c5cd12abc318761dfb5cb5be56522.jpg';

const Leaders = [
    {
        src: Pastor,
        position: "Pastor",
        name: "Pst. Macjoe Masesi",
        href: "tel:0715209523"
    },
    {
        src: Elder,
        position: "First Elder",
        name: "Eld. Ooonge",
        href: "tel:0715209523"
    },
    {
        src: Leader,
        position: "Church Leader",
        name: "CL. Hellen Wandollah",
        href: "tel:0715209523"
    },
]

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className='bg-[#F8F8F8] pb-[100px]'>
                <section className='w-full h-[250px] md:h-[400px] bg-fixed bg-center relative'
                    style={{ backgroundImage: `url(${BgImage})` }}
                >
                    <div className='absolute inset-0 flex flex-col items-center justify-center '>
                        <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] w-[60%] md:w-[40%] border-gray-500'>
                            <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>Our Church</h1>
                        </div>
                    </div>
                </section>

                {/* Brief History Section */}
                <section className='md:p-5 justify-evenly gap-0 mt-[70px] w-[90%] mx-auto'>
                    <div className=''>
                        <h1 className='text-5xl text-[#007681] text-center font-About mb-[40px]'>Our History</h1>
                        <div className='space-y-[20px]'>
                            <p>The name “Wendani,” a rich Kikuyu word meaning “love,” perfectly embodies the spirit and essence of our church. Sda Church Kahawa Wendani has a deep-rooted history, originating from SDA Kahawa Garrison, where Wendani Sabbath School was born on July 23, 2005.</p>
                            <p>Our journey began on a bright Sabbath morning when members of the church, expecting their usual worship at Kahawa Garrison, were unexpectedly denied entry. The Garrison commander had issued a directive that restricted civilian access, allowing only soldiers and their families to worship inside the barracks. Despite the abrupt change, our members displayed unwavering faith, worshiping under the sun by the roadside that day.</p>
                            <p>In the spirit of resilience and community, the church leadership quickly found a temporary worship place in an incomplete house nearby, graciously offered by the Kerimu family. As our congregation grew, we continued our services outdoors until we relocated to Mama Mbau’s compound, and later to a space provided by Brother Denvas Nyamari Gekonde’s family. Our steadfast journey reflects our commitment to faith and fellowship.</p>
                            <p>On June 23, 2007, Wendani Sabbath School was formally organized into a church under the guidance of Pastor Marundu and Pastor Nzioka. We celebrated our first Holy Communion on July 14, 2007, marking a significant milestone in our spiritual journey. Since then, our church has continually evolved, relocating to our current location on June 29, 2013.</p>
                        </div>
                    </div>
                    <div className=' h-[500px] hidden'>
                        <img src={Image1} alt='' className='w-full h-full object-cover rounded-lg' />
                    </div>
                </section>

                {/* Mission Section */}
                <section className='w-[85%] mx-auto'>
                    <h1 className='text-5xl text-center text-[#007681] font-About mb-[40px]'>Our Mission</h1>
                    <div className=' justify-evenly mt-[50px]'>
                        <div className='overflow-hidden basis-[50%] h-[300px] hidden'>
                            <img src={Image2} alt='Mission' className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <div className='basis-[40%] text-center'>
                            <p>Make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the everlasting gospel of the Three Angels’ Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8, Rev 14:6-12).</p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className='w-[85%] mx-auto mt-[70px]'>
                    <h1 className='text-5xl text-[#007681] font-About mb-[40px] text-center'>Our Vision</h1>
                    <div className=' flex-row-reverse justify-evenly mt-[50px]'>
                        <div className='overflow-hidden basis-[50%] h-[300px] hidden'>
                            <img src={Image3} alt='Mission' className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <div className='basis-[40%] text-center'>
                            <p>In harmony with Bible revelation, Seventh-day Adventists see as the climax of God’s plan the restoration of all His creation to full harmony with His perfect will and righteousness.</p>
                        </div>
                    </div>
                </section>

                {/* Our Leaders */}
                <section className='mt-[70px]'>
                    <h1 className='text-3xl md:text-5xl text-[#007681] font-About mb-[40px] text-center mt-[20px]'>Meet Our Leaders</h1>
                    <div className='grid md:grid-cols-3 gap-3 font-About w-[90%] mx-auto'>
                        {Leaders.map((Data,Index) => (
                            <div key={Index} className='bg-white cursor-pointer flex flex-col justify-center items-center p-3  shadow-md hover:shadow-2xl hover:-translate-y-4 group hover:bg-[#] transition-all duration-700 ease-in-out'>
                                <div className='w-[150px] h-[150px] mx-auto'>
                                    <img 
                                        src={Data.src} 
                                        alt={Data.name} 
                                        className='w-full h-full object-cover rounded-full' 
                                    />
                                </div>
                                <h1 className='text-center text-2xl font-light mt-[15px]'>{Data.name}</h1>
                                <p className='text-[#F0B323] text-center text-lg pb-3 mt-[15px]'>{Data.position}</p>
                                <div className='bg-black hover:bg-[#F0B323] transition-colors duration-300 ease-in-out transform w-[50px] h-[50px] flex flex-col justify-center items-center rounded-full'>
                                    <span className="text-3xl my-auto text-white hover:cursor-pointer rounded-full items-center justify-center flex ">
                                        <a href={Data.href}>
                                            <IoCall />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div> 
                </section>
            </body>
        </>
    );
}

export default AboutPage;