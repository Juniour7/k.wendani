import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//icons
import { MdOutlineArticle, MdOutlineHeadsetMic  } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { GoBook } from "react-icons/go";

//Components
import HeroCarousel from '../Components/Carousel/HeroCarousel';
import Development from '../Components/Carousel/Development';
import UpcomingEvents from '../Components/UpcomingEvents/UpcomingEvents';

//images
import Pastor from '../Assets/Leaders/PPastor.png';
import Vision from '../Assets/SlideShow/vision.png';
import Community from '../Assets/SlideShow/community.JPG';

import Image1 from '../Assets/Construction Drive/4.jpg';
import Image2 from '../Assets/Logos/Baby-Dedication-Form.webp';
import Image3 from '../Assets/Construction Drive/7.jpg';

const AboutUs = [
    {
        src: Community,
        title: "Our Community",
        content: "Our Mission is to foster a community of believers who are passionate about living out the teachings of Jesus Christ in harmony with the distinctive beliefs of the Seventh-day Adventists. We uphold the core tenets of the Seventh-Day Adventist faith, including the observance of the Sabbath, imminent return of Christ and the importance of healthful living."
    },
    {
        src: Vision,
        title: "Our Mission",
        content: "Make disciples of Jesus Christ who live as His loving witnesses and proclaim to all people the everlasting gospel of the Three Angels’ Messages in preparation for His soon return (Matt 28:18-20, Acts 1:8, Rev 14:6-12)."
    },
    {
        src: 'https://i.pinimg.com/736x/d2/da/a2/d2daa2f598e60e1053a87c888b24d63e.jpg',
        title: "Our Vision",
        content: "In harmony with Bible revelation, Seventh-day Adventists see as the climax of God’s plan the restoration of all His creation to full harmony with His perfect will and righteousness."
    }
]


const HomePage = () => {
    const navigate = useNavigate();

    const HandleAbout = () => {
        navigate('/aboutUs');
    };

    return (
        <>
            <Helmet>
                <title>Home | Kahawa Wendani SDA Church</title>
            </Helmet>
            <HeroCarousel />
            <body className=''>
                {/* Who We Are */}
                <section className='w-[90%] mx-auto md:flex justify-center items-center gap-3 pt-[30px] mb-[30px] font-title'>
                    <div className='basis-[55%] '>
                        <h4 className='text-[#F0B323] text-md font-semibold'>WELCOME TO:</h4>
                        <h1 className='text-[#007681] text-2xl md:text-3xl font-semibold mb-[20px]'>Seventh-Day Adventist Church Kahawa Wendani Community</h1>
                        <div className='space-y-[10px] font-light'>
                            <p>Welcome to Kahawa Wendani SDA Church! Here, you’ll find a warm and caring church family, along with numerous community events and services. We hope the resources available will nourish your mind, soul, and body, and inspire you to join us in person for our weekly Sabbath worship.</p>
                            <p>We hold the Scriptures as sacred and approach their study with reverence. Our services follow a traditional format, featuring congregational singing of cherished hymns and moments of prayer.</p>
                            <p>We invite you to join us in fellowship as you seek your rightful place in serving the Almighty God and humanity.</p>
                        </div>
                        <Link to="/aboutUs">
                            <button className='bg-[#F0B323] text-white text-lg font-semibold px-5 py-2 mt-[40px] hover:bg-black transition-colors duration-300'>Learn More</button>
                        </Link>
                    </div>
                    <div className='w-[40%] hidden md:block h-[350px] basis-[45%] overflow-hidden rounded-md'>
                        <img src={Image1} alt='' className='w-full h-full object-cover rounded-md shadow-md hover:scale-125 transition-all duration-500 ease-in-out' />
                    </div>
                </section>

                {/* About US */}
                <div className='flex items-center w-[70%] mx-auto text-[#007681] font-title'>
                    <hr className='flex-grow '/>
                    <h1 className='text-center font-body text-xl md:text-3xl my-5 md:my-7'>About The Church</h1>
                    <hr className='flex-grow'/>
                </div>
                <section className='grid md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto gap-3 my-10 font-title'>
                    {AboutUs.map((Data, Index) => (
                        <div key={Index} className='bg-[#F8F8F8]   mb-3 mx-auto shadow-md'>
                            <div className='w-full h-[200px] md:h-[340px] lg:h-[250px]'>
                                <img 
                                    src={Data.src} 
                                    alt={Data.title}
                                    className='w-full h-full object-cover'    
                                />
                            </div>
                            <div className='p-3 pb-4'>
                                <h1 className='text-center text-2xl font-semibold'>{Data.title}</h1>
                                <p className='font-light mt-2'>{Data.content}</p>
                                {/* <div className=''>
                                    <button onClick={HandleAbout} className='bg-Hero-700 px-4 py-2 my-3 text-md font-semibold text-white rounded-sm hover:bg-black hover:text-white transition-colors duration-300 ease-in-out'>Learn More</button>                              
                                </div> */}
                            </div>
                        </div>
                    ))}
                </section>

                {/* Development Section */}
                <Development />

                {/* Media Section */}
                <div className=' pb-[50px] font-title w-[90%] mx-auto'>
                <section className=' pb-[50px]'>
                    <h1 className='  text-white bg-[#F0B323] p-2 w-[200px]'>In Case You Missed It</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 justify-center mt-5'>
                        <div className=''>
                            <h1 className=' text-white bg-[#F0B323] mt-5 mb-2 p-2 w-[200px]'>Camp Meeting 2024</h1>
                            <div className='w-full h-[200px] md:w-full md:h-[150px] lg:h-[223px]'>
                                <iframe  width="853" height="480" className='w-full h-full' src="https://www.youtube.com/embed/videoseries?si=uBr5WEjZ0RZAGZTk&amp;list=PLVMwUA2etYjF0Tgkg8TI45yIDsWyh3QYV" title="Stewardship Revival Week || Day 1  || Sunday 19th May 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className=' text-white bg-[#F0B323] mt-5 mb-2 p-2 w-[40%] md:w-[60%] lg:w-[40%]'>Latest Sermon</h1>
                            <div className='w-full h-[200px] md:w-full md:h-[150px] lg:h-[223px]'>
                                <iframe width="560" height="315" className="w-full h-full" src="https://www.youtube.com/embed/g1PtgMIbXgM?si=DJJzwZ3I0CD9jWo4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className=''>
                            <h1 className=' text-white bg-[#F0B323] mt-5 mb-2 p-2 w-[200px]'>Worship in Music</h1>
                            <div className='w-full h-[200px] md:w-full md:h-[150px] lg:h-[223px]'>
                                <iframe width="853" height="480" className='w-full h-full' src="https://www.youtube.com/embed/bBk9d4FfVfk" title="NILIPOTEA KATIKA GIZA LA DHAMBI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

                {/* Dedication Form */}
                <section className='bg-[#007681] w-full p-9 md:flex justify-center'>
                    <div className='w-[95%] md:w-[85%] basis-[60%]'>
                        <div className='w-[90%] md:w-[80%] mx-auto'>
                            <img src={Image2} alt='Dedication Form' className='w-full h-full bject-cover' />
                        </div>
                        <p className='text-white mt-5 font-body'>Kahawa Wendani Seventh-day Adventist Church believes children are a gift from God, and we are very excited that you are interested in dedicating your child at our church.</p>
                        <p className=' text-white mt-[20px]'>Dedications take place the <span className='text-[#F0B323] font-semibold'>1st Saturday</span> of each month.</p>
                    </div>
                    <div className='basis-[30%] text-white'>
                        <p>This service gives you as the parent(s) the opportunity to express publicly your desires to spiritually nurture your child through the aid of the Holy Spirit, so your child will develop a desire to love God and to love their fellowmen.</p>
                        <p className=''>Please <Link to="/childregistration" className='text-[#F0B323] font-bold cursor-pointer'>CLICK THIS LINK</Link> to download a copy of the form.</p>
                    </div>
                </section>

                {/* Upcoming Events */}
                <UpcomingEvents />

                {/* Pastor's Welcoming */}
                <section
                    className='bg-cover bg-center bg-fixed bg-no-repeat lg:h-[85vh]'
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className='w-full h-full bg-[#007681] bg-opacity-50'>
                        <div className='w-[90%] mx-auto md:flex gap-3 justify-center'>
                            <div className='basis-[50%] pt-[50px]'>
                                <h1 className='text-3xl'>Welcome To Church</h1>
                                <div className='mt-[20px] space-y-4'>
                                    <p className=''>Welcome to Kahawa Wendani SDA Church! Here, you’ll find a warm and caring church family, along with numerous community events and services. We hope that the resources available will nourish your mind, soul, and body, and inspire you to join us in person for our weekly Sabbath worship.</p>
                                    <p>We hold the Scriptures as sacred and approach their study with reverence. Our services follow a traditional format, featuring congregational singing of cherished hymns and moments of prayer. </p>
                                    <p>We invite you to join us in fellowship as you seek your rightful place in serving the Almighty God and humanity.</p>
                                    <h1 className='text-4xl'>Pr. Macjoe Masesi</h1>
                                </div>
                            </div>
                            <div className='basis-[50%] '>
                                <div className='h-[100%] w-[75%] mx-auto md:mx-0'>
                                    <img
                                        src={Pastor}
                                        alt=''
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pages Preview */}
                <section>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[90%]  mx-auto my-[50px]'>
                        <div className='bg-white text-[#007681] p-3 pb-5 rounded-lg flex flex-col items-center shadow-xl hover:bg-[#007681] hover:text-white transition-all duration-300'>
                            <span className='text-7xl text-[#F0B323]'>
                                <MdOutlineArticle />
                            </span>
                            <div className='text-center space-y-2 md:space-y-4'>
                                <h1 className='text-3xl font-semibold'>Our Blogs</h1>
                                <p className=''>Discover the rich tapestry of Christian thought and inspiration through our diverse collection of articles that illuminate faith, challenge the mind, and nurture the soul.</p>
                                <Link to="/blog">
                                    <button className='bg-[#F0B323] w-[90%] md:w-[70%] mx-auto text-lg font-semibold px-4 py-2 rounded-lg mt-[30px] hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Learn More +</button>
                                </Link>
                            </div>
                        </div>
                        <div className='bg-white text-[#007681] p-3 rounded-lg flex flex-col items-center shadow-xl hover:bg-[#007681] hover:text-white transition-all duration-300'>
                            <span className='text-7xl text-[#F0B323]'>
                                <GoBook />
                            </span>
                            <div className='text-center space-y-2 md:space-y-4'>
                                <h1 className='text-3xl font-semibold'>Church Library</h1>
                                <p className=''>Discover a treasure trove of inspiration and knowledge at our church library your sanctuary for spiritual growth, enlightening reads, and community connection. Explore now on our website!</p>
                                <Link to="/churchLibrary">
                                    <button  className='bg-[#F0B323] w-[90%] md:w-[70%] mx-auto text-lg font-semibold px-4 py-2 rounded-lg mt-[30px] hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Learn More +</button>
                                </Link>
                            </div>
                        </div>
                        <div className='bg-white text-[#007681] p-3 rounded-lg flex flex-col items-center shadow-xl hover:bg-[#007681] hover:text-white transition-all duration-300'>
                            <span className='text-7xl text-[#F0B323]'>
                                <FaRegBell />
                            </span>
                            <div className='text-center space-y-2 md:space-y-4'>
                                <h1 className='text-3xl font-semibold'>Ministries</h1>
                                <p className=''>Discover the rich tapestry of Christian thought and inspiration through our diverse collection of articles that illuminate faith, challenge the mind, and nurture the soul.</p>
                                <Link to="">
                                    <button  className='bg-[#F0B323] w-[90%] md:w-[70%] mx-auto text-lg font-semibold px-4 py-2 rounded-lg mt-[30px] hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Learn More +</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Reach out */}
                <section className='w-full relative h-[500px] md:h-[370px] mt-[150px]'>
                    <img src={Image3} alt='' className='w-full h-full object-none object-center' />
                    <div className='absolute top-0 w-full h-full bg-[#007681] bg-opacity-[63%]'>
                        
                    </div>
                    <div className='absolute -top-[75px] left-[30px] lg:left-[100px] bg-[#F0B323] text-white rounded-md lg:w-[24%] mx-auto p-4 flex flex-col items-center justify-center hover:-translate-y-9 transition-all duration-700 cursor-pointer ease-in-out'>
                        <span className='text-7xl my-[20px] md:my-[30px]'>
                            <MdOutlineHeadsetMic  />
                        </span>
                        <div className='text-center md:space-y-5 font-body'>
                            <h1 className='text-3xl font-semibold'>Call Us Now</h1>
                            <h4 className='text-md'>Kahawa Wendani SDA Church</h4>
                            <a href='tel:'>
                                <h5>+2547xxxxxxx</h5>
                            </a>
                            <a href='mailto:kahawawendanisdachurch@gmail.com'>
                                <h5>kahawawendanisdachurch@gmail.com</h5>
                            </a>
                        </div>
                    </div>
                    <div className='absolute left-[3%] md:left-[45%] lg:left-[35%] top-[190px] md:top-[50px] text-white md:space-y-4'>
                        <h4 className='text-[#F0B323] text-sm'>GET IN TOUCH</h4>
                        <h1 className='font-semibold text-3xl'>HAVE ANY QUESTIONS?</h1>
                        <p className='md:w-[95%] lg:w-[60%] text-sm'>Discover a warm, welcoming community where faith and fellowship thrive! Whether you're seeking spiritual growth, meaningful connections, or simply want to learn more about our mission, we're here for you. Reach out to us today by phone, email, or by filling out our easy online form. Join us and be part of a vibrant SDA family dedicated to making a difference together. Let's connect and grow in faith and friendship!</p>
                        <Link to="/contactUs">
                            <button  className='bg-[#F0B323] text-lg font-bold px-4 py-2 rounded-lg mt-[30px] hover:bg-white hover:text-[#F0B323] transition-colors duration-300'>Reach Out</button>
                        </Link>
                    </div>
                </section>
            </body>
        </>
    );
}

export default HomePage;