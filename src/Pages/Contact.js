import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

//Components
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className='mt-[60px] lg:mt-0 w-full bg-[#F8F8F8] pb-[50px]'>
                <div className='bg-fixed relative bg-cover bg-center bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                    style={{backgroundImage: "url(https://images.unsplash.com/photo-1577563820627-bc12aa2139de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
                >
                    <div className='absolute inset-0 flex flex-col justify-center items-center'>
                        <div className=' py-5 md:py-7  border-t-[0.2px] border-b-[0.2px]  w-[50%] mx-auto'>
                            <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>CONTACT</h1>
                        </div>
                    </div>
                </div>

                <section className='mt-[30px] w-[90%] mx-auto p-5'>
                    <h4 className='text-[#FFE001] text-lg mb-[15px]'>GET IN TOUCH</h4>
                    <div className=' grid grid-cols-1 md:grid-cols-3 gap-4'>
                        <div className='bg-[#007681] text-white rounded-lg flex flex-col items-center justify-center p-6 hover:bg-[#FFE001] hover:cursor-pointer transition-all duration-300'>
                            <span className='text-6xl my-[20px] mb-[20px]'>
                                <TfiHeadphoneAlt />
                            </span>
                            <h3 className='text-2xl mb-[10px]'>Phone Number</h3>
                            <a href='tel:'>
                                <p className='text-[#F9F9F9] hover:text-black transition-colors duration-300'>(+254716794363)</p>
                            </a>
                        </div>
                        <div className='bg-[#007681] text-white rounded-lg flex flex-col items-center justify-center p-6 hover:bg-[#FFE001] hover:cursor-pointer transition-all duration-300'>
                            <span className='text-6xl my-[20px] mb-[20px]'>
                                <CiLocationOn />
                            </span>
                            <h3 className='text-2xl mb-[10px]'>Address</h3>
                            <p className='text-[#F9F9F9]'>P.O. BOX 25685-00100 Nairobi</p>
                        </div>
                        <div className='bg-[#007681] text-white rounded-lg flex flex-col items-center justify-center p-6 hover:bg-[#FFE001] hover:cursor-pointer transition-all duration-300'>
                            <span className='text-6xl my-[20px] mb-[20px]'>
                                <MdOutlineMailOutline />
                            </span>
                            <h3 className='text-2xl mb-[10px]'>Email Address</h3>
                            <a href='mailto:kahawawendanisdachurch@gmail.com'>
                                <p className='text-[#F9F9F9] hover:text-black transition-colors duration-300'>kahawawendanisdachurch@gmail.com</p>
                            </a>
                        </div>
                    </div>
                </section>

                <section className='mt-[50px] md:mt-[100px] w-[90%] md:w-[80%] mx-auto md:flex  justify-center items-center'>
                    <div className='md:basis-[55%]'>
                        <form action="https://api.web3forms.com/submit" method="POST" className='bg-white   flex flex-col justify-center py-[50px] px-[20px] space-y-[20px] shadow-xl'>
                        <input type="hidden" name="access_key" value="203298c2-7be9-4de5-b1c6-1b91f760bea0" />
                            <input type='text' name='Respondents Name' placeholder='Full Name' className='border border-[#007681] rounded-md p-2 block' required />
                            <input type='text' name='Respondents Number' placeholder='Phone Number' className='border border-[#007681] rounded-md p-2 block' required />
                            <input type='email' name='Respondents Email' placeholder='Email Address' className='border border-[#007681] rounded-md p-2 block' />
                            <input type='text' name='Respondents Subject' placeholder='Subject' className='border border-[#007681] rounded-md p-2 block' required />
                            <textarea type='text' name='Respondents Message' placeholder='Message' rows="5" className='border border-[#007681] rounded-md p-2' required />
                            <input type='submit' value='Submit' className='bg-[#F0B323] rounded-md p-2 text-white w-[40%] md:w-[20%] hover:cursor-pointer  ' />
                        </form>
                    </div>
                    <div className=' md:basis-[50%] h-[550px] hidden md:block'>
                        <img src='https://images.unsplash.com/photo-1547843337-c59a53c2c0cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhY2glMjBvdXR8ZW58MHwxfDB8fHww' alt='' className='w-full h-full object-cover' />
                    </div>
                </section>
            </body>
        </>
    );
}

export default ContactPage;