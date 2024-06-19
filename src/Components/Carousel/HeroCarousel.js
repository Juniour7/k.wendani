import React from 'react';
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
        speed: 800,
        nextArrow: <SampleNextArrow to="next"/>
    }

    return (
        <>
            <div className='md:hidden mt-[70px] z-0'>
                <Slider {...settings}>
                    <div className='relative h-[280px] w-full z-0'>
                        <img 
                            src="https://images.unsplash.com/photo-1600288480699-0b0d8a456dd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute bottom-0 text-white p-2 leading-relaxed'>
                            <p>Communicate with God</p>
                            <h1 className='text-xl font-bold '>WEEKLY PRAYER</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-lg px-3 py-2 border-[1px] my-5 border-white hover:cursor-pointer hover:bg-white hover:text-black hover:border-none'>Read More</button>
                        </div>
                    </div>
                    <div className='relative h-[280px] w-full'>
                        <img 
                            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute bottom-0 text-white p-2 leading-relaxed'>
                            <p>Communicate with God</p>
                            <h1 className='text-xl font-bold '>WEEKLY PRAYER</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-lg px-3 py-2 border-[1px] my-5 border-white hover:cursor-pointer hover:bg-white hover:text-black hover:border-none'>Read More</button>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='hidden md:block lg:hidden mt-[70px]'>
                <Slider {...settings}>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src="https://images.unsplash.com/photo-1600288480699-0b0d8a456dd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute bottom-0 text-white p-2 leading-loose'>
                            <p>Communicate with God</p>
                            <h1 className='text-xl font-bold '>WEEKLY PRAYER</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-lg px-3 py-2 border-[1px] my-5 border-white hover:cursor-pointer hover:bg-white hover:text-black hover:border-none'>Read More</button>
                        </div>
                    </div>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute bottom-0 text-white p-2 leading-loose'>
                            <p>Communicate with God</p>
                            <h1 className='text-xl font-bold '>WEEKLY PRAYER</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-lg px-3 py-2 border-[1px] my-5 border-white hover:cursor-pointer hover:bg-white hover:text-black hover:border-none'>Read More</button>
                        </div>
                    </div>
                    <div className='relative h-[500px] w-full'>
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute bottom-0 text-white p-2 leading-loose'>
                            <p>Communicate with God</p>
                            <h1 className='text-xl font-bold '>WEEKLY PRAYER</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-lg px-3 py-2 border-[1px] my-5 border-white hover:cursor-pointer hover:bg-white hover:text-black hover:border-none'>Read More</button>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className='hidden lg:block z-10'>
                <Slider {...settings}>
                    <div className='relative h-screen font-[Poppins] '>
                        <img 
                            src={require('../../Assets/SlideShow/IMG_0004.JPG')}
                            alt=""
                            className=' max-h-screen w-full object-cover overflow-hidden'
                        />
                        <div className='absolute top-[280px] ml-[100px] w-[70%] text-white p-5 leading-loose'>
                            <p>Communicate with God</p>
                            <h1 className='text-6xl font-semibold font-["Roboto"]'>WEEKLY PRAYERS</h1>
                            <p>Join us for prayers every Wednesday anf Friday evening from 5pm to 6pm.</p>
                            <button className='bg-transparent text-xl px-3 py-2 border-[1px] my-5 border-white hover:cursor-pointer hover:bg-white hover:text-black  transition-colors duration-200'>Read More</button>
                        </div>
                    </div>
                    <div className='relative h-screen font-[Poppins]'>
                        <img 
                            src="https://images.unsplash.com/photo-1519491050282-cf00c82424b4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute top-[280px] ml-[100px] w-[70%] mx-auto text-white p-5 leading-loose'>
                            <p>Communicate with God</p>
                            <h1 className='text-6xl font-semibold '>SABBATH WORSHIP</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-xl px-3 py-2 my-5 border-[1px] border-white hover:cursor-pointer hover:bg-white hover:text-black  transition-colors duration-200'>Read More</button>
                        </div>
                    </div>
                    <div className='relative h-screen font-[Poppins] '>
                        <img 
                            src="https://plus.unsplash.com/premium_photo-1673002094195-f18084be89ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className='w-full h-full'
                        />
                        <div className='absolute top-[280px] ml-[100px] w-[70%] mx-auto text-white p-5 leading-loose'>
                            <p>Communicate with God</p>
                            <h1 className='text-6xl font-semibold '>JOIN OUR COMMUNITY</h1>
                            <p>Join us for prayers every Wednesday evening from 5 to 6</p>
                            <button className='bg-transparent text-xl px-3 py-2 my-5 border-[1px] border-white hover:cursor-pointer hover:bg-white hover:text-black  transition-colors duration-200'>Read More</button>
                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default HeroCarousel;