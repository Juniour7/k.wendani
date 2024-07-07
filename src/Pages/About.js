import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


//Components


const AboutPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className='mt-[80px] lg:mt-[100px] bg-[#F8F8F8] pb-[100px]'>
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] w-full h-32 md:h-52 flex flex-col justify-center items-center'>
                    <div className='text-center'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home >></Link>
                        <Link className='text-[#F0B323]'>About Us</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>Who We Are</h1>
                    </div>
                </section>

                {/* Brief History Section */}
                <section className='p-5 md:flex justify-evenly gap-0 mt-[70px]'>
                    <div className='basis-[40%]'>
                        <h1 className='text-5xl text-[#007681] font-About mb-[40px]'>Our History</h1>
                        <div className='space-y-[20px]'>
                            <p>The name “Wendani,” a rich Kikuyu word meaning “love,” perfectly embodies the spirit and essence of our church. Sda Church Kahawa Wendani has a deep-rooted history, originating from SDA Kahawa Garrison, where Wendani Sabbath School was born on July 23, 2005.</p>
                            <p>Our journey began on a bright Sabbath morning when members of the church, expecting their usual worship at Kahawa Garrison, were unexpectedly denied entry. The Garrison commander had issued a directive that restricted civilian access, allowing only soldiers and their families to worship inside the barracks. Despite the abrupt change, our members displayed unwavering faith, worshiping under the sun by the roadside that day.</p>
                            <p>In the spirit of resilience and community, the church leadership quickly found a temporary worship place in an incomplete house nearby, graciously offered by the Kerimu family. As our congregation grew, we continued our services outdoors until we relocated to Mama Mbau’s compound, and later to a space provided by Brother Denvas Nyamari Gekonde’s family. Our steadfast journey reflects our commitment to faith and fellowship.</p>
                            <p>On June 23, 2007, Wendani Sabbath School was formally organized into a church under the guidance of Pastor Marundu and Pastor Nzioka. We celebrated our first Holy Communion on July 14, 2007, marking a significant milestone in our spiritual journey. Since then, our church has continually evolved, relocating to our current location on June 29, 2013.</p>
                        </div>
                    </div>
                    <div className='basis-[30%] h-[500px]'>
                        <img src={require('../Assets/8ae083fe15fe978364cddc88e857f76b.jpg')} alt='' className='w-full h-full object-cover rounded-lg' />
                    </div>
                </section>

                {/* Mission Section */}
                <section className='w-[85%] mx-auto'>
                    <h1 className='text-5xl text-[#007681] font-About mb-[40px]'>Our Mission</h1>
                    <div className='md:flex justify-evenly mt-[50px]'>
                        <div className='overflow-hidden basis-[50%] h-[300px]'>
                            <img src={require('../Assets/1c6c5cd12abc318761dfb5cb5be56522.jpg')} alt='Mission' className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <div className='basis-[40%] text-right'>
                            <p>The mission of the Seventh-day Adventist Church is to proclaim to all people the everlasting gospel in the context of the Three Angels’ Messages of Revelation 14:6-12. This mission is accomplished through preaching, teaching, and healing.</p>
                        </div>
                    </div>
                </section>

                {/* Vision Section */}
                <section className='w-[85%] mx-auto mt-[70px]'>
                    <h1 className='text-5xl text-[#007681] font-About mb-[40px]'>Our Vision</h1>
                    <div className='md:flex flex-row-reverse justify-evenly mt-[50px]'>
                        <div className='overflow-hidden basis-[50%] h-[300px]'>
                            <img src={require('../Assets/1c6c5cd12abc318761dfb5cb5be56522.jpg')} alt='Mission' className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <div className='basis-[40%]'>
                            <p>The vision of the Seventh-day Adventist Church is to prepare the world for the imminent return of Jesus Christ. This vision is fulfilled by encouraging personal spiritual growth, fostering community outreach, and promoting the global mission of spreading God's love and hope.</p>
                        </div>
                    </div>
                </section>

                {/* Join us */}
                <section className='text-center my-[70px] w-[65%] mx-auto'>
                    <h1 className='text-5xl text-[#007681] font-About mb-[40px]'>Join Us</h1>
                    <p>We invite you to join us at Sda Church Kahawa Wendani, where love and faith are at the heart of everything we do. Whether you are seeking a new church home or exploring your faith, you will find a welcoming community here</p>
                    <p>Connect with us and be part of our journey as we continue to grow in faith, love, and service to our neighbors.Experience the warmth and love of Wendani, and together, let us make a difference in our community and beyond.</p>
                </section>

                {/* Our Leaders */}
                <section className='mt-[70px]'>
                    <h1 className='text-3xl md:text-5xl text-[#007681] font-About mb-[40px] text-center mt-[20px]'>Meet Our Leaders</h1>
                    <div className='grid md:grid-cols-3 gap-4 font-About w-[85%] mx-auto'>
                        <div className='relative'>
                            <h4 className='text-3xl'>First Elder</h4>
                            <div className='relative z-50 mt-[30px] w-[70%] h-[70%]'>
                                <img src={require('../Assets/Leaders/1st Elder.png')} alt='first elder' className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute top-[10%] left-[10%] bg-[#F8F8F8] border border-[#F0B323] w-[70%] h-[70%] z-0'/>
                            <div className='mt-[10px] text-gray-600'>
                                <h1>Eld. Ooonge</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <h4 className='text-3xl'>Pastor</h4>
                            <div className='relative z-50 mt-[30px] w-[70%] h-[70%]'>
                                <img src={require('../Assets/Leaders/Pastor.jpg')} alt='first elder' className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute top-[10%] left-[10%] bg-[#F8F8F8] border border-[#F0B323] w-[70%] h-[70%] z-0'/>
                            <div className='mt-[10px] text-gray-600'>
                                <h1>Pst.Macjoe  Masesi</h1>
                            </div>
                        </div>
                        <div className='relative'>
                            <h4 className='text-3xl'>Church Leader</h4>
                            <div className='relative z-50 mt-[30px] w-[70%] h-[70%]'>
                                <img src={require('../Assets/Leaders/Church Leader.jpeg')} alt='first elder' className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute top-[10%] left-[10%] bg-[#F8F8F8] border border-[#F0B323] w-[70%] h-[70%] z-0'/>
                            <div className='mt-[10px] text-gray-600'>
                                <h1>Ch Leader.Hellen Wandollah</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default AboutPage;