import React from 'react';
import { Link } from 'react-router-dom';

//Icons
import { FcCallback } from "react-icons/fc";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaYoutube, FaRegCopyright  } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const Footer = () => {
  return (
    <>
        <footer className='bg-[#00162E] w-full p-5'>
            <div className='w-[95%] mx-auto grid lg:grid-cols-3 gap-4 text-white'>
                <div className='p-2'>
                    <div className='w-[270px] h-[75px]'>
                        <img src={require('../../Assets/Logos/wsdalogo6.png')} alt='logo' className='w-full h-full' />
                    </div>
                    <div className='text-wrap font-about'>
                        <p>At SDA Church Kahawa Wendani, we are a vibrant and close-knit community dedicated to spreading the message of love, faith and service in accordance with the fundamental tenets of Seventh-Day Adventism. Our church, situated in the heart of Kahawa Wendani, is not just a place of worship but a home where individuals and families come together to grow spiritually.</p>
                    </div>
                    <div className='mt-[30px] flex gap-3'>
                        <div className='text-4xl bg-[#F0B323] w-[40px] h-[40px] flex flex-col items-center' target='_blank'>
                            <a href='tel:' className='m-auto cursor-pointer'>
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
                    <h1 className='text-2xl md:text-4xl font-semibold'>Quick Links</h1>
                    <hr className='border border-[#F0B323] w-[30%] mt-[10px]'></hr>
                    <ol className='ml-[30px] mt-[20px] list-disc text-lg md:text-xl'>
                        <li>
                            <Link to="/aboutUs" className='hover:text-[#F0B323]'>
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/events" className='hover:text-[#F0B323]'>
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link to="/sermon" className='hover:text-[#F0B323]'>
                                Sermon
                            </Link>
                        </li>
                        <li>
                            <Link to="/churchChoir" className='hover:text-[#F0B323]'>
                                Church Choir Music
                            </Link>
                        </li>
                        <li>
                            <Link to="/childregistration" className='hover:text-[#F0B323]'>
                                Child Dedication Form
                            </Link>
                        </li>
                        <li>
                            <Link to="/contactUs" className='hover:text-[#F0B323]'>
                                Contact Us
                            </Link>
                        </li>
                    </ol>
                </div>
                <div>
                    <h1 className='text-2xl md:text-4xl font-semibold'>Reach Out</h1>
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
                        <a href='tel:' className='hover:text-gray-700 my-auto'>
                            +2547xxxxxxx
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