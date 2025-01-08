import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import { FcCallback } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaYoutube, FaRegCopyright  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdChevronRight } from "react-icons/md";

// Images
import Logo from '../../Assets/Logos/wsdalogo6.png';

const Footer = () => {
  return (
    <>
        <footer className='bg-[#00162E] w-full p-5'>
            <div className='w-[95%] mx-auto grid lg:grid-cols-3 gap-4 text-white'>
                <div className='p-2'>
                    <div className='w-[270px] h-[75px]'>
                        <img 
                            src={Logo} 
                            alt='logo' 
                            className='w-full h-full' 
                        />
                    </div>
                    <div className='tex font-about'>
                        <p>At SDA Church Kahawa Wendani, we are a vibrant and close-knit community dedicated to spreading the message of love, faith and service in accordance with the fundamental tenets of Seventh-Day Adventism. Our church, situated in the heart of Kahawa Wendani, is not just a place of worship but a home where individuals and families come together to grow spiritually.</p>
                    </div>
                    <div className='mt-[30px] flex gap-3'>
                        <div className='text-4xl bg-[#F0B323] w-[40px] h-[40px] flex flex-col items-center' target='_blank'>
                            <a href='tel:0715209523' className='m-auto cursor-pointer'>
                                <FcCallback />
                            </a>
                        </div>
                        <div className='text-4xl bg-[#F0B323] w-[40px] h-[40px] flex flex-col items-center'>
                            <a href='mailto:kahawawendanisdachurch@gmail.com' className='m-auto cursor-pointer' target='_blank'>
                                <MdOutlineMailOutline  />
                            </a>
                        </div>
                        <div className='text-4xl bg-[#F0B323] text-red-700 w-[40px] h-[40px] flex flex-col items-center'>
                            <a href='https://youtube.com/@kahawawendanisdachurchofficial?si=ndjr8Wrz8Q4_C36T' className='m-auto cursor-pointer' target='_blank'>
                                <FaYoutube  />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl '>Quick Links</h1>
                    <hr className='border border-[#F0B323] w-[30%] mt-[10px]'></hr>
                    <ol className='mt-[20px] text-base space-y-2 md:text-xl'>
                        <li>
                            <Link to="/aboutUs" className='hover:text-[#F0B323] flex items-center'>
                                <span>
                                    <MdChevronRight />
                                </span>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/events" className='hover:text-[#F0B323] flex items-center'>
                                <span>
                                    <MdChevronRight />
                                </span>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/media/sermon" className='hover:text-[#F0B323] flex items-center'>
                                <span>
                                    <MdChevronRight />
                                </span>
                                Sermon
                            </Link>
                        </li>
                        <li>
                            <Link to="/media/churchChoir" className='hover:text-[#F0B323] flex items-center'>
                                <span>
                                    <MdChevronRight />
                                </span>
                                Church Choir Music
                            </Link>
                        </li>
                        <li>
                            <Link to="/childregistration" className='hover:text-[#F0B323] flex items-center'>
                                <span>
                                    <MdChevronRight />
                                </span>
                                Child Dedication Form
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactUs" className='hover:text-[#F0B323] flex items-center'>
                                <span>
                                    <MdChevronRight />
                                </span>
                                Contact Us
                            </Link>
                        </li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl'>Reach Out</h1>
                    <hr className='border border-[#F0B323] w-[30%] mt-[10px]'></hr>
                    <div className='mt-[20px] flex gap-3'>
                        <span className='text-4xl text-[#F0B323]'>
                            <CiLocationOn />
                        </span>
                        <h4 className='text-md'>Kahawa Wendani P.O. BOX 25685-00100 Nairobi off Thika Road Next to Wendani Primary School</h4>
                    </div>
                    <div className='mt-[20px] flex gap-3'>
                        <span className='text-4xl text-[#F0B323]'>
                            <MdOutlineMailOutline />
                        </span>
                        <a href='mailto:kahawawendanisdachurch@gmail.com' className='hover:text-gray-700 my-auto'>
                            kahawawendanisdachurch@gmail.com
                        </a>
                    </div>
                    <div className='mt-[20px] flex gap-3'>
                        <span className='text-4xl text-[#F0B323]'>
                            <TfiHeadphoneAlt />
                        </span>
                        <a href='tel:0715209523' className='hover:text-gray-700 my-auto'>
                            (+254)715209523
                        </a>
                    </div>
                </div>
            </div>
        </footer>
        <section className='bg-[#070F2B] text-white text-center gap-1 md:gap-3 p-2 md:p-3 flex justify-center itens-center'>
            <span className='text-xl my-auto'>
                <FaRegCopyright />
            </span>
            <h4 className='my-auto'>Kahawa Wendani SDA Church 2024. All rights Reserved.</h4>
        </section>
    </>
  );
}

export default Footer;