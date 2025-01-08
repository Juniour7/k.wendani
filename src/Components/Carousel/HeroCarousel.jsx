import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//icons
import { GoChevronLeft } from "react-icons/go";
import { FiChevronRight } from "react-icons/fi";

//images
import Image from '../../Assets/SlideShow/amo.jpg';
import Image1 from  '../../Assets/SlideShow/IMG_0004.JPG';
import Image2 from '../../Assets/Construction Drive/3.jpg';
import Image3 from '../../Assets/SlideShow/Ambassadors.jpg';

const HeroCarousel = () => {
    const navigate = useNavigate();

    const GivingClick = () => {
        navigate('/giving')
    }; 

    const CustomPrevArrow = ({ onClick }) => {
        return (
          <div
            className="absolute left-[3%] md:left-[5%] w-[35px] h-[35px] md:w-[60px] md:h-[60px] top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-2 cursor-pointer hover:bg-opacity-60 z-10"
            onClick={onClick}
          >
            <span className='text-2xl md:text-4xl'>
                <GoChevronLeft />
            </span>
          </div>
        );  
    };

    const CustomNextArrow = ({ onClick }) => {
        return (
          <div
            className="absolute right-[3%] md:right-[5%] w-[35px] h-[35px] md:w-[60px] md:h-[60px] top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-2 cursor-pointer hover:bg-opacity-60 z-10"
            onClick={onClick}
          >
            <span className='text-2xl md:text-4xl'>
                <FiChevronRight />
            </span>
          </div>
        );
    };

    const settings = {
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 1000,
        infinte: true,
        pauseOnHover: false,
        autoplaySpeed: 15000,
        cssEase: "linear",
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    }


    return (
        <>
            <div className='md:hidden mt-[70px] z-0 overflow-hidden'>
                <Slider {...settings}>
                    <div className='relative h-[250px] w-full z-0'>
                        <img 
                            src={Image1}
                            alt="Kahawa Wendani"
                            className='w-full h-full'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 w-full h-full bg-black bg-opacity-[25%] space-y-[5px]'>
                            <p className='text-Main-700'>Embrace The warmth Of Fellowship</p>
                            <h1 className='text-xl font-semibold font-body'>WEEKLY PRAYERS</h1>
                            <p className='text-center text-sm w-[90%]'>Join us for prayers every Wednesday and Friday evening from 5pm to 6pm.</p>
                            <Link to="/media/sermon">
                                <button className='bg-[#F0B323] text-sm px-3 py-2 my-2  hover:cursor-pointer rounded-md transition-colors duration-200'>Our Sermons</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-[250px] w-full'>
                        <img 
                            src={Image2}
                            alt="Kahawa Wendani"
                            className='w-full h-full'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 space-y-[5px] w-full h-full bg-black bg-opacity-[25%]'>
                            <p className='text-Main-700 font-semibold'>WORSHIP IN GIVING</p>
                            <h1 className='text-xl font-semibold text-center font-body w-[90%]'>JOIN THE CONSTRUCTION DRIVE</h1>
                            <p className='w-[95%] mx-auto text-center text-sm'>Join us in building a beacon of faith and community!</p>
                            <button onClick={GivingClick} className='bg-[#F0B323] text-sm px-3 py-2 my-2  hover:cursor-pointer rounded-md transition-colors duration-200'>Contribute</button>
                        </div>
                    </div>
                    <div className='relative h-[250px] font-[Poppins]'>
                        <img 
                            src={Image3}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-3 w-full h-full bg-black bg-opacity-[25%]'>
                            <p className='text-Main-700 text-base'>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-xl text-center font-semibold font-body'>EVERY HEART FINDS HOME</h1>
                            <p className='text-center text-sm'>We invite you to experience the grace, joy and love that defines our faith community</p>
                        </div>
                    </div>
                    <div className='relative h-[250px] font-[Poppins]'>
                        <img 
                            src={Image}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-3 w-full h-full bg-black bg-opacity-[25%]'>
                            <p className='text-Main-700 text-base'>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-xl text-center font-semibold font-body'>MOMENTS OF RENEWAL</h1>
                            <p className='text-center text-xs'>Experience the joy of fellowship, spiritual growth, and unforgettable moments of renewal in faith and unity</p>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='hidden md:block lg:hidden mt-[70px]'>
                <Slider {...settings}>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src={Image1}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose w-full h-full bg-black bg-opacity-[25%] space-y-[20px]'>
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
                            src={Image2}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[25%]'>
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
                            src={Image2}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[25%]'>
                            <p className='text-Main-700 '>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-6xl font-semibold font-body text-center'>EVERY HEART FINDS HOME</h1>
                            <p>We invite you to experience the grace, joy and love that defines our faith community</p>
                        </div>
                    </div>
                    <div className='relative h-[500px] font-[Poppins]'>
                        <img 
                            src={Image}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-3 w-full h-full bg-black bg-opacity-[25%]'>
                            <p className='text-Main-700 text-base'>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-6xl font-semibold font-body text-center'>MOMENTS OF RENEWAL</h1>
                            <p className='text-center '>Experience the joy of fellowship, spiritual growth, and unforgettable moments of renewal in faith and unity</p>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='hidden lg:block z-10 overflow-hidden'>
                <Slider {...settings}>
                    <div className='relative h-screen font-[Poppins] '>
                        <img 
                            src={Image1}
                            alt="Hero"
                            className='h-full w-full object-cover overflow-hidden'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose w-full h-full bg-black bg-opacity-[25%] space-y-[20px]'>
                            <p className='text-Main-700'>Embrace The warmth Of Fellowship</p>
                            <h1 className='text-5xl font-semibold font-body'>WEEKLY PRAYERS</h1>
                            <p>Join us for prayers every Wednesday and Friday evening from 5pm to 6pm.</p>
                            <Link to="/media/sermon">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Our Sermons</button>
                            </Link>
                        </div>
                    </div>
                    <div className='relative h-screen font-[Poppins]'>
                        <img 
                            src={Image2}
                            alt="Hero"
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[25%]'>
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
                            src={Image3}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[25%]'>
                            <p className='text-Main-700 '>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-6xl font-semibold font-body'>EVERY HEART FINDS HOME</h1>
                            <p>We invite you to experience the grace, joy and love that defines our faith community</p>
                            {/* <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Ministries</button>
                            </Link> */}
                        </div>
                    </div>
                    <div className='relative h-screen font-[Poppins]'>
                        <img 
                            src={Image}
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-5 leading-loose space-y-[20px] w-full h-full bg-black bg-opacity-[20%]'>
                            <p className='text-Main-700 '>AT WENDANI SDA CHURCH COMMUNITY</p>
                            <h1 className='text-6xl font-semibold font-body'>MOMENTS OF RENEWAL</h1>
                            <p>Experience the joy of fellowship, spiritual growth, and unforgettable moments of renewal in faith and unity</p>
                            {/* <Link to="/giving">
                                <button className='bg-[#F0B323] text-xl px-5 py-2 my-5  hover:cursor-pointer rounded-md hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Ministries</button>
                            </Link> */}
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default HeroCarousel;