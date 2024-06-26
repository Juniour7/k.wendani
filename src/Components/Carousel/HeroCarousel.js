import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props)  {
    const { onClick} = props;
    return(
        <div onClick={onClick} className={`text-white `} >
            <ion-icon name="chevron-forward-outline" class="arrows" className='text-white text-5xl'></ion-icon>
        </div>
    );
}


const HeroCarousel = () => {
    const settings = {
        fade: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        cssEase: "linear",
        autoplaySpeed: 5000,
        nextArrow: <SampleNextArrow to="next"/>
    }


    return (
        <>
            <div className='md:hidden mt-[70px] z-0'>
                <Slider {...settings}>
                    <div className='relative h-[280px] w-full z-0'>
                        <img 
                            src={require('../../Assets/SlideShow/IMG_0004.JPG')}
                            alt=""
                            className='w-full h-full'
                        />
                        <motion.div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 w-full h-full bg-black bg-opacity-[50%] space-y-[5px]'>
                            <p className='text-Main-700'>Embrace The warmth Of Fellowship</p>
                            <h1 className='text-2xl font-semibold font-body'>WEEKLY PRAYERS</h1>
                            <p className='text-center'>Join us for prayers every Wednesday and Friday evening from 5pm to 6pm.</p>
                            <Link to="/sermon">
                                <button className='bg-[#F0B323] text-md px-5 py-2 my-2  hover:cursor-pointer rounded-md transition-colors duration-200'>Our Sermons</button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className='relative h-[280px] w-full'>
                        <img 
                            src={require('../../Assets/Construction Drive/3.jpg')}
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 space-y-[5px] w-full h-full bg-black bg-opacity-[50%]'>
                            <p className='text-Main-700 font-semibold'>WORSHIP IN GIVING</p>
                            <h1 className='text-2xl font-semibold text-center font-body'>JOIN THE CONSTRUCTION DRIVE</h1>
                            <p className='w-[95%] mx-auto text-center'>Join us in building a beacon of faith and community!</p>
                            <Link to="/giving">
                                <button className='bg-[#F0B323] text-md px-5 py-2 my-2  hover:cursor-pointer rounded-md transition-colors duration-200'>Contribute</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-[280px] font-[Poppins]'>
                        <img 
                            src={require('../../Assets/SlideShow/Ambassadors.jpg')}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 space-y-[5px] w-full h-full bg-black bg-opacity-[50%]'>
                            <p className='text-Main-700 '>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-2xl text-center font-semibold font-body'>EVERY HEART FINDS HOME</h1>
                            <p className='text-center'>We invite you to experience the grace, joy and love that defines our faith community</p>
                            <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-2  hover:cursor-pointer rounded-md transition-colors duration-200'>Ministries</button>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='hidden md:block lg:hidden mt-[70px]'>
                <Slider {...settings}>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src={require('../../Assets/SlideShow/IMG_0004.JPG')}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose w-full h-full bg-black bg-opacity-[50%] space-y-[20px]'>
                            <p className='text-Main-700'>Embrace The warmth Of Fellowship</p>
                            <h1 className='text-5xl font-semibold font-body'>WEEKLY PRAYERS</h1>
                            <p>Join us for prayers every Wednesday and Friday evening from 5pm to 6pm.</p>
                            <Link to="/sermon">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Our Sermons</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src={require('../../Assets/Construction Drive/2.jpg')}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[50%]'>
                            <p className='text-Main-700 font-semibold'>WORSHIP IN GIVING</p>
                            <h1 className='text-5xl font-semibold font-body'>JOIN THE CONSTRUCTION DRIVE</h1>
                            <p className='w-[85%] mx-auto text-center'>Join us in building a beacon of faith and community! As members of our SDA family, your contributions are vital in creating a sanctuary where we can gather, worship, and grow together</p>
                            <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Contribute</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src={require('../../Assets/SlideShow/Ambassadors.jpg')}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[50%]'>
                            <p className='text-Main-700 '>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-6xl font-semibold font-body text-center'>EVERY HEART FINDS HOME</h1>
                            <p>We invite you to experience the grace, joy and love that defines our faith community</p>
                            <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Ministries</button>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='hidden lg:block z-10'>
                <Slider {...settings}>
                    <div className='relative h-screen font-[Poppins] '>
                        <img 
                            src={require('../../Assets/SlideShow/IMG_0004.JPG')}
                            alt="Hero"
                            className=' max-h-screen w-full object-cover overflow-hidden'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose w-full h-full bg-black bg-opacity-[50%] space-y-[20px]'>
                            <p className='text-Main-700'>Embrace The warmth Of Fellowship</p>
                            <h1 className='text-5xl font-semibold font-body'>WEEKLY PRAYERS</h1>
                            <p>Join us for prayers every Wednesday and Friday evening from 5pm to 6pm.</p>
                            <Link to="/sermon">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Our Sermons</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-screen font-[Poppins]'>
                        <img 
                            src={require('../../Assets/Construction Drive/2.jpg')}
                            alt="Hero"
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[50%]'>
                            <p className='text-Main-700 font-semibold'>WORSHIP IN GIVING</p>
                            <h1 className='text-5xl font-semibold font-body'>JOIN THE CONSTRUCTION DRIVE</h1>
                            <p className='w-[65%] mx-auto text-center'>Join us in building a beacon of faith and community! As members of our SDA family, your contributions are vital in creating a sanctuary where we can gather, worship, and grow together</p>
                            <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Contribute</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-screen font-[Poppins]'>
                        <img 
                            src={require('../../Assets/SlideShow/Ambassadors.jpg')}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[50%]'>
                            <p className='text-Main-700 '>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-6xl font-semibold font-body'>EVERY HEART FINDS HOME</h1>
                            <p>We invite you to experience the grace, joy and love that defines our faith community</p>
                            <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Ministries</button>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default HeroCarousel;