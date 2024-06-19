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
                <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52'>
                    <div className='text-left absolute top-[30%] left-[25%] md:left-[32%] text-md'>
                        <Link to="/" className='hover:text-[#F0B323] mr-3'>Home /</Link>
                        <Link className='text-[#F0B323]'>About Us</Link>
                        <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>Who We Are</h1>
                    </div>
                </section>

                {/* Brief History Section */}
                <section className='p-5 md:flex justify-evenly gap-0 mt-[70px]'>
                    <div className='basis-[40%]'>
                        <h1 className='text-5xl text-[#007681] font-About mb-[40px]'>Brief History</h1>
                        <div className='space-y-[20px]'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
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
                            <div className='absolute -bottom-[2%] left-[20%] bg-[#F8F8F8] border border-[#F0B323] w-[70%] h-[70%] z-0'/>
                        </div>
                        <div className='relative'>
                            <h4 className='text-3xl'>Pastor</h4>
                            <div className='relative z-50 mt-[30px] w-[70%] h-[70%]'>
                                <img src={require('../Assets/Leaders/Pastor.jpg')} alt='first elder' className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute -bottom-[2%] left-[20%] bg-[#F8F8F8] border border-[#F0B323] w-[70%] h-[70%] z-0'/>
                        </div>
                        <div className='relative'>
                            <h4 className='text-3xl'>Church Leader</h4>
                            <div className='relative z-50 mt-[30px] w-[70%] h-[70%]'>
                                <img src={require('../Assets/Leaders/Church Leader.jpeg')} alt='first elder' className='w-full h-full object-cover' />
                            </div>
                            <div className='absolute -bottom-[2%] left-[20%] bg-[#F8F8F8] border border-[#F0B323] w-[70%] h-[70%] z-0'/>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default AboutPage;