import React from 'react';
import Slider from 'react-slick';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Images
import Image1 from "../../Assets/Construction Drive/1.jpg";
import Image2 from "../../Assets/Construction Drive/2.jpg";
import Image3 from "../../Assets/Construction Drive/3.jpg";
import Image4 from "../../Assets/Construction Drive/4.jpg";
import Image5 from "../../Assets/Construction Drive/5.jpg";
import Image6 from "../../Assets/Construction Drive/6.jpg";
import Image7 from "../../Assets/Construction Drive/7.jpg";
import Image8 from "../../Assets/Construction Drive/8.jpg";
import Image9 from "../../Assets/Construction Drive/9.jpg";
import Image10 from "../../Assets/Construction Drive/10.jpg";
import { Link } from 'react-router-dom';


const Development = () => {
    const images = [Image1,Image2,Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10];
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 15000,
        arrows: false,
    };

  return (
    <>
        <section className='bg-[#F8F8F8] px-3 lg:px-0 py-[20px] md:pb-[50px] font-title'>
            <div className='text-center mb-2 md:mb-6 w-[90%] mx-auto'>
                <h1 className='text-[#007681] text-2xl md:text-4xl my-7 font-semibold'>Ongoing Church Construction</h1>
                <div className="h-[250px] md:h-[400px] flex-shrink-0 rounded-lg mt-[20px] lg:hidden overflow-hidden">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                        <div key={index} className='h-[220px] md:h-[400px] w-full'>
                            <img
                            src={image}
                            alt={`Step ${index + 1}`}
                            className='w-full h-full object-cover'
                        />
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
            <div className='lg:flex  justify-center  gap-5 w-[90%] mx-auto lg:w-full'>
                <div className='basis-[40%] space-y-3 font-light'>
                    <p className=''>We warmly invite you to join us in the meaningful journey of constructing our church, a sacred space where faith, fellowship, and community will come together. Just as Israelites willingly contributed to building the temple with joyful hearts (1 Chronicles 29:9), we have a similar opportunity to unite our efforts in creating a place that will serve as a beacon of hope and love for all. Every contribution, will help us build this sanctuary, where lives will be transformed, prayers will be answered, and God's love will be felt by all who enter.</p>
                    <p>As we embark on this endeavor, we are reminded of the early church's spirit of generosity in Acts 2:44-45, where believers shared everything, they had to support one another. Your support will not only help construct a building but also establish a spiritual home that will impact lives for generations to come. </p>
                    <p>We invite you to be part of this divine mission, where together, we can create a place to grow in Christ and serve our community with love and grace.</p>
                    <Link to="/giving"><button className='text-white mt-[20px] md:mt-[50px] bg-[#F0B323] font-medium text-lg px-6 py-2   hover:bg-black hover:border-0 transition-colors duration-300 transform ease-in-out'>Build With Us</button></Link>
                </div>

                {/* Carousel Part */}
                <div className="basis-[50%] md:w-[40%] h-[250px] md:h-[450px] flex-shrink-0 rounded-lg  hidden lg:block">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                        <div key={index} className='md:w-[40%] h-[250px] md:h-[450px] rounded-lg'>
                            <img
                            src={image}
                            alt={`Step ${index + 1}`}
                            className='w-full h-full object-cover rounded-lg'
                        />
                        </div>
                    ))}
                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default Development;