import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

//icons
import { MdOutlineArticle, MdOutlineHeadsetMic  } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { GoBook } from "react-icons/go";

//Components
import HeroCarousel from '../Components/Carousel/HeroCarousel';



const HomePage = () => {
    return (
        <>
            <Helmet>
                <title>Home | Kahawa Wendani SDA Church</title>
            </Helmet>
            <HeroCarousel />
            <body className=''>
                {/*Upcoming Events */}
                <section className='grid grid-cols-1 md:grid-cols-4 '>
                    <div className='bg-[#007681] text-white p-5'>
                        <div className='py-[20px] md:py-[70px] flex flex-col justify-center items-center text-left'>
                            <div className='text-left'>
                                <h3 className='text-lg font-light text-left'>Upcoming</h3>
                                <h1 className='text-5xl font-semibold'>Events</h1>
                            </div>
                        </div>
                    </div>
                    <div className='relative group hover:cursor-pointer'>
                        <div className='w-full h-[250px] md:h-full'>
                            <img src={require('../Assets/Events/Ambassadors Sabbath.jpg')} alt='event poster' className='w-full h-full object-cover' />
                        </div>
                        <div className='absolute bottom-0 h-[30%] w-full bg-white bg-opacity-50 p-2 group-hover:h-[100%] group-hover:bg-opacity-90 transition-all duration-700 '>
                            <h5 className='text-sm text-[#4D3C3C]'>03th Aug, 2024</h5>
                            <h3 className='text-xl'>Ambassadors Sabbath</h3>
                            <p className='hidden group-hover:block transition-all duration-300 delay-700 ease-in-out'>jknscdjkncskdjcn</p>
                        </div>
                    </div>
                    <div className='relative group hover:cursor-pointer'>
                        <div className='w-full h-[250px] md:h-full'>
                            <img src={require('../Assets/Events/Camp Meeting.jpg')} alt='event poster' className='w-full h-full object-cover object-center' />
                        </div>
                        <div className='absolute bottom-0 h-[30%] w-full bg-white bg-opacity-50 p-2 group-hover:h-[100%] group-hover:bg-opacity-90 transition-all duration-700'>
                            <h5 className='text-sm text-[#4D3C3C]'>11th Aug, 2024</h5>
                            <h3 className='text-xl'>Camp Meeting</h3>
                            <p></p>
                        </div>
                    </div>
                    <div className='relative group hover:cursor-pointer'>
                        <div className='w-full h-[250px] md:h-full'>
                            <img src={require('../Assets/Children Ministry/Pathfinders/PathfinderBanner.webp')} alt='event poster' className='w-full h-full object-cover' />
                        </div>
                        <div className='absolute bottom-0 h-[30%] w-full bg-white bg-opacity-50 p-2 group-hover:h-[100%] group-hover:bg-opacity-90 transition-all duration-700'>
                            <h5 className='text-sm text-Main-900'>21st Sep, 2024</h5>
                            <h3 className='text-xl'>World PathfinderDay</h3>
                            <p></p>
                        </div>
                    </div>
                </section>

                {/* Who We Are */}
                <section className='w-[90%] mx-auto md:flex justify-center items-center gap-3 pt-[30px] mb-[30px]'>
                    <div className='basis-[50%] text-[#8D9297]'>
                        <h4 className='text-[#F0B323] text-md font-semibold'>WELCOME TO:</h4>
                        <h1 className='text-[#007681] text-2xl md:text-3xl font-semibold mb-[20px]'>Seventh-Day Adventist Church Kahawa Wendani Community</h1>
                        <div className='space-y-[10px] text-sm text-black/50'>
                            <p>Welcome to Seventh Day Adventist Church Kahawa Wendani , where you can connect with a caring church community and participate in our diverse range of community events and services. During your time here, we trust you'll discover enriching experiences for your mind, spirit, and body. We also encourage you to consider joining us in person for our weekly Sabbath worship.</p>
                            <p>At our church, we hold the Scriptures in high regard and approach their study with reverence. Our services follow a traditional format, including congregational singing of cherished hymns and communal prayer. While many members opt for business or business casual attire, we invite you to dress comfortably according to your preference.</p>
                            <p>Join us in fellowship as together we seek to discern our unique roles in serving the Almighty God and humanity.</p>
                        </div>
                        <Link to="/aboutUs">
                            <button className='bg-[#F0B323] text-white text-lg font-semibold px-5 py-2 rounded-md mt-[40px] hover:bg-black transition-colors duration-300'>Learn More</button>
                        </Link>
                    </div>
                    <div className='w-[70%] hidden md:block h-[350px] basis-[40%]'>
                        <img src={require('../Assets/Construction Drive/2.jpg')} alt='' className='w-full h-full object-cover' />
                    </div>
                </section>

                {/* About US */}
                <div className='flex items-center w-[70%] mx-auto text-Main-800'>
                    <hr className='flex-grow '/>
                    <h1 className='text-center font-body text-xl md:text-3xl my-5 md:my-7'>About The Church</h1>
                    <hr className='flex-grow'/>
                </div>
                <section className='lg:flex gap-3 p-3 lg:p-5 font-body'>
                    <div className='bg-emerald-200 w-[98%] md:w-[75%] lg:w-[90%] mb-3 mx-auto'>
                        <div className='w-full h-[200px] md:h-[330px] lg:h-[250px]'>
                            <img 
                                src="https://plus.unsplash.com/premium_photo-1681505195930-388c317b7a76?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt=""
                                className='w-full h-full'    
                            />
                        </div>
                        <div className='p-3'>
                            <h1 className='text-center text-xl md:text-2xl font-semibold'>Our Community</h1>
                            <p className=''>Our Mission is to foster a community of believers who are pasionate about living out the teachings of Jesus Christ in harmony with the distinctive beliefs
                                of the Seventh-day Adventists. We uphold the core tenets of the sventh-day adventist faith, including the observance of the Sabbath, imminent return of Christ and the importance of healthful living.
                            </p>
                            <div className='flex flex-col justify-center items-center'>
                                <button className='bg-Hero-700 px-4 py-2 my-3 text-md font-semibold text-white rounded-md hover:bg-white hover:text-Hero-900'><Link to="/aboutUs">Learn More +</Link></button>                              
                            </div>
                        </div>
                    </div>
                    <div className='bg-emerald-200 w-[98%] md:w-[75%] lg:w-[90%] mb-3 mx-auto'>
                        <div className='w-full h-[200px] md:h-[340px]  lg:h-[250px]'>
                            <img 
                                src={require('../Assets/SlideShow/vision.png')} 
                                alt=""
                                className='w-full h-full object-cover'    
                            />
                        </div>
                        <div className='p-3'>
                            <h1 className='text-center text-2xl font-semibold'>Our Mission</h1>
                            <p>Our Mission is to foster a community of believers who are pasionate about living out the teachings of Jesus Christ in harmony with the distinctive beliefs
                                of the Seventh-day Adventists. We uphold the core tenets of the sventh-day adventist faith, including the observance of the Sabbath, imminent return of Christ and the importance of healthful living.
                            </p>
                            <div className='flex flex-col justify-center items-center'>
                                <button className='bg-Hero-700 px-4 py-2 my-3 text-md font-semibold text-white rounded-md hover:bg-white hover:text-Hero-900'><Link to="/aboutUs">Learn More +</Link></button>                              
                            </div>
                        </div>
                    </div>
                    <div className='bg-emerald-200 w-[98%] md:w-[75%] lg:w-[90%]  mb-3 mx-auto'>
                        <div className='w-full h-[200px] md:h-[340px] lg:h-[250px]'>
                            <img 
                                src={require('../Assets/SlideShow/mission.jpg')} 
                                alt=""
                                className='w-full h-full object-cover'    
                            />
                        </div>
                        <div className='p-3'>
                            <h1 className='text-center text-2xl font-semibold'>Our Vision</h1>
                            <p>Our Mission is to foster a community of believers who are pasionate about living out the teachings of Jesus Christ in harmony with the distinctive beliefs
                                of the Seventh-day Adventists. We uphold the core tenets of the sventh-day adventist faith, including the observance of the Sabbath, imminent return of Christ and the importance of healthful living.
                            </p>
                            <div className='flex flex-col justify-center items-center'>
                                <button className='bg-Hero-700 px-4 py-2 my-3 text-md font-semibold text-white rounded-md hover:bg-white hover:text-Hero-900'><Link to="/aboutUs">Learn More +</Link></button>                              
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Section */}
                <section className='bg-[#F8F8F8] w-full p-5 flex flex-wrap lg:flex-nowrap gap-5 justify-center'>
                    <div className='lg:basis-[40%]'>
                        <h4 className='text-md text-[#F0B323]'>You're Welcome</h4>
                        <h1 className='text-[#007681] text-3xl md:text-5xl'>Join The Drive</h1>
                        <p className='text-wrap mt-4 md:mt-10'>Join us in building a beacon of faith and community! As members of our SDA family, your contributions are vital in creating a sanctuary where we can gather, worship, and grow together. Your generous support will help lay the foundation for a church that not only serves as a place of spiritual nourishment but also stands as a testament to our shared commitment and unity. Together, let's construct a space where love, hope, and faith flourish for generations to come. Donate today and be a cornerstone of our collective mission!    </p>
                        <Link to="/giving"><button className='bg-[#F8F8F8]  text-[#F0B323] border border-[#F0B323] rounded-full text-xl font-semibold px-6 py-2 mt-[100px]  hover:bg-[#007681] hover:text-white hover:border-0 transition-colors duration-700'>Donate Now</button></Link>
                    </div>
                    <div className='lg:w-[50%] h-[250px] lg:h-[500px]'>
                        <img src={require('../Assets/Construction Drive/4.jpg')} alt='Construction Drive' className='w-full h-full object-ceover' />
                    </div>
                </section>

                {/* Media Section */}
                <div className=' pb-[50px]'>
                <section className='w-[90%] mx-auto pb-[50px]'>
                    <h1 className='text-xl font-bold text-white bg-[#007681] py-4 px-3 w-[250px]'>In Case You Missed It</h1>
                    <div className='md:flex flex-wrap lg:flex-nowrap gap-4 justify-center'>
                        <div className='mt-5'>
                            <h1 className='text-xl text-white bg-[#007681] mt-5 mb-2 font-semibold py-2 px-2 w-[270px]'>Camp Meeting 2024</h1>
                            <div className='w-full h-[200px] md:w-[400px] md:h-[228px]'>
                                <iframe  width="853" height="480" className='w-full h-full' src="https://www.youtube.com/embed/videoseries?si=uBr5WEjZ0RZAGZTk&amp;list=PLVMwUA2etYjF0Tgkg8TI45yIDsWyh3QYV" title="Stewardship Revival Week || Day 1  || Sunday 19th May 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-xl text-white bg-[#007681] mt-5 mb-2 font-semibold py-2 px-2 w-[30%]'>Sermon</h1>
                            <div className='w-full h-[200px] md:w-[400px] md:h-[228px]'>
                                <iframe width="560" height="315" className="w-full h-full" src="https://www.youtube.com/embed/5vB4s6buJro?si=mjkgCJftv0v0wYwB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <h1 className='text-xl text-white bg-[#007681] mt-5 mb-2 font-semibold py-2 px-2 w-[270px]'>Worship in Music</h1>
                            <div className='w-full h-[200px] md:w-[400px] md:h-[228px]'>
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
                            <img src={require('../Assets/Logos/Baby-Dedication-Form.webp')} alt='Dedication Form' className='w-full h-full bject-cover' />
                        </div>
                        <p className='text-white mt-5 font-body'>Kahawa Wendani Seventh-day Adventist Church believes children are a gift from God, and we are very excited that you are interested in dedicating your child at our church.</p>
                        <p className='flex text-white mt-[20px]'>Dedications take place the <h1 className='text-[#F0B323] font-semibold mx-3'>1st Saturday</h1> of each month.</p>
                    </div>
                    <div className='basis-[30%] text-white'>
                        <p>This service gives you as the parent(s) the opportunity to express publicly your desires to spiritually nurture your child through the aid of the Holy Spirit, so your child will develop a desire to love God and to love their fellowmen.</p>
                        <p className=''>Please <Link to="/childregistration" className='text-[#F0B323] font-bold cursor-pointer'>CLICK THIS LINK</Link> to download a copy of the form.</p>
                    </div>
                </section>

                {/* Pages Preview */}
                <section>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 w-[90%] md:w-[60%] lg:w-[90%] mx-auto my-[50px]'>
                        <div className='bg-white text-[#007681] p-3 rounded-lg flex flex-col items-center shadow-xl hover:bg-[#007681] hover:text-white transition-all duration-300'>
                            <span className='text-7xl text-[#F0B323]'>
                                <MdOutlineArticle />
                            </span>
                            <div className='text-center space-y-2 md:space-y-4'>
                                <h1 className='text-3xl font-semibold'>Our Blogs</h1>
                                <p className=''>Discover the rich tapestry of Christian thought and inspiration through our diverse collection of articles that illuminate faith, challenge the mind, and nurture the soul.</p>
                                <Link to="">
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
                    <img src={require('../Assets/Construction Drive/7.jpg')} alt='' className='w-full h-full object-none object-center' />
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