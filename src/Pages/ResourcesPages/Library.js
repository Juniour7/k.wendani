import React from 'react';
import { Helmet } from 'react-helmet-async';

//Icons
import { FaFilePdf, FaBook  } from "react-icons/fa";
import { FcSpeaker } from "react-icons/fc";


const Library = () => {
    return (
        <>
            <Helmet>
                <title>Library | Kahawa Wendani SDA Church</title>
            </Helmet>
            <body className='pb-[50px] bg-[#F8F8F8]'>
                <section className='w-full h-72 md:h-96 relative'>
                    <img src={require('../../Assets/SlideShow/d04a2a9694c81133f120a0c32ba947fd.jpg')} alt='Library' className='w-full h-full object-cover' />
                    <div className='absolute bottom-[15%] left-[10%]'>
                        <h1 className='text-3xl md:text-5xl'>Church Library</h1>
                        <hr className='border border-[#F0B323] w-[50%] mt-[10px]'></hr>
                    </div>
                </section>

                <section className='mt-[50px] w-[80%] mx-auto grid grid-cols-1 gap-3'>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[90%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/84/toc' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Patriachs and Prophtes.jpeg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[70%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>Patriarchs and Prophets</h1>
                            <p className='mt-[10px] text-[#676767]'>The amazing story of the early Christian believers is told in Volume 4, The Acts of the Apostles. After Jesus was victorious over Satan and returned to heaven, the enemy turned his attention to Jesus’ church on earth. Here are thrilling stories of fierce persecutions and unswerving loyalty to God. Peter, Paul, James, John, Luke, Barnabas, Stephen, Mark, and the other early apostles carried the wonderful news of the gospel to all of the then-known world.</p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/84/toc' target='_blank'>
                                    <FaBook  />
                                </a>
                            </span>
                            <span>
                                <a href='https://media4.egwwritings.org/pdf/en_PP-SG.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span>
                                <a href='https://whiteestate.org/audio/84/patriarchs-and-prophets/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[90%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/88.8/toc' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Prphtes and Kings.jpeg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[70%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>Prophets and Kings</h1>
                            <p className='mt-[10px] text-[#676767]'>The amazing story of the early Christian believers is told in Volume 4, The Acts of the Apostles. After Jesus was victorious over Satan and returned to heaven, the enemy turned his attention to Jesus’ church on earth. Here are thrilling stories of fierce persecutions and unswerving loyalty to God. Peter, Paul, James, John, Luke, Barnabas, Stephen, Mark, and the other early apostles carried the wonderful news of the gospel to all of the then-known world.</p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/88.8/toc' target='_blank'>
                                    <FaBook />
                                </a>
                            </span>
                            <span>
                                <a href='https://media2.egwwritings.org/pdf/en_PK.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span>
                                <a href='https://whiteestate.org/audio/88/prophets-and-kings/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[90%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/127.5#0' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Acts-of-the-Apostles.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[70%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>The Acts Of The Apostles</h1>
                            <p className='mt-[10px] text-[#676767]'>The amazing story of the early Christian believers is told in Volume 4, The Acts of the Apostles. After Jesus was victorious over Satan and returned to heaven, the enemy turned his attention to Jesus’ church on earth. Here are thrilling stories of fierce persecutions and unswerving loyalty to God. Peter, Paul, James, John, Luke, Barnabas, Stephen, Mark, and the other early apostles carried the wonderful news of the gospel to all of the then-known world.</p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/127.5#0' target='_blank'>
                                    <FaBook />
                                </a>
                            </span>
                            <span className=''>
                                <a href='https://media4.egwwritings.org/pdf/en_AA.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span className=''>
                                <a href='https://whiteestate.org/audio/127/the-acts-of-the-apostles/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[90%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/6.2' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Appeal-to-Mothers-Ellen-G.-White.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className='basis-[85%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>An Appeal To Mothers</h1>
                            <p className='mt-[10px] text-[#676767]'>The matter contained in the following pages having been left at our disposal, we feel impelled by a strong sense of Christian duty and love of humanity, to bring it before the public in its present form. We believe that too much importance cannot be attached to this subject and that no false delicacy should prevent thorough inquiry and investigation upon a question in which the present and future welfare of multitudes is involved. As a people, who profess to be looking for the coming of the Lord, and preparing for translation into his holy presence, perhaps we have too long kept silent on this great source of physical, mental and moral pollution, and a high duty and responsibility remains to be discharged in this matter.
                            </p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/6.2' target='_blank'>
                                    <FaBook />
                                </a>
                            </span>
                            <span>
                                <a href='https://media4.egwwritings.org/pdf/en_AA.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span>
                                <a href='https://whiteestate.org/audio/6/an-appeal-to-mothers/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[90%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/128.5' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Adventist-Home.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className='basis-[70%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>Adventist Home</h1>
                            <p className='mt-[10px] text-[#676767]'>This compilation contains practical counsel for Christian families, including guidance on where to locate the home and how to make it pleasant, and counsel on how to get along with other family members.</p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/128.5' target='_blank'>
                                    <FaBook />
                                </a>
                            </span>
                            <span>
                                <a href='https://media4.egwwritings.org/pdf/en_AA.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span>
                                <a href='https://whiteestate.org/audio/128/the-adventist-home/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                </section>
            </body>
        </>
    );
}

export default Library;