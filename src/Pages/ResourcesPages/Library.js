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

                <section className='mt-[50px] w-[90%] md:w-[80%] mx-auto grid grid-cols-1 gap-3'>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/84/toc' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Patriachs and Prophtes.jpeg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className='basis-[50%] lg:basis-[80%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>Patriarchs and Prophets</h1>
                            <p className='mt-[10px] text-[#676767] w-full'>Patriarchs and Prophets is the first volume in the Conflict of the Ages series. It covers the sweeping panorama of human history from the creation of Earth to the reign of Israel's King David. With unusual insights the author describes the role of our planet in the cosmic conflict between right and wrong, truth and error. She describes the tragic rebellion that took place in heaven many thousands of years ago and makes plain that this ongoing conflict between Satan and God affects each person who lives on Earth. Patriarchs and Prophets shows how this conflict worked itself out in the lives of men and women in Old Testament times. It answers such questions as: “Where did we come from?” “Where are we going?” and “If God is all-powerful, why doesn’t He prevent the spread of evil and its tragic results?”</p>
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
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/88.8/toc' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Prphtes and Kings.jpeg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[80%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>Prophets and Kings</h1>
                            <p className='mt-[10px] text-[#676767]'>Prophets and Kings, the second volume in the Conflict of the Ages series, opens with the story of Solomon’s glorious reign over Israel and ends with the nation’s exile and captivity. It traces the history of a favored and chosen people, vacillating between allegiance to God and to the gods of the nations around them. In these pages can vividly be seen dramatic evidences of the raging struggle between God and Satan for the hearts of men and women. Here the reader will find fascinating characters—wise Solomon, fearless Elijah, wicked Ahaz, beloved Daniel, courageous Jeremiah, and many others. Their experiences provide rich lessons of faith and evidences of God’s love and providential care.</p>
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
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/88.8/toc' target='_blank'>
                                <img src={require('../../Assets/SlideShow/the disire of ages.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[80%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>The Desire of Ages</h1>
                            <p className='mt-[10px] text-[#676767]'>The Desire of Ages (Volume 3 of the Conflict of the Ages series) is Ellen White’s classic on the life of Jesus—the One who stands at the center of all human history. No one else has had such a profound influence on Planet Earth as Jesus Christ. In this book the author does not set forth the events of Jesus’ life in strict chronological order, but she presents Him as the One who can satisfy the deepest yearnings of the human heart. She presents the divine beauty of the life of the Savior, the love of God as revealed in His Son. New and glorious light flashes from many familiar passages of Scripture. Follow Jesus in these pages from His birth in Bethlehem’s stable to His death on the cross, His glorious resurrection, and triumphant return to heaven.</p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/130.4/toc' target='_blank'>
                                    <FaBook />
                                </a>
                            </span>
                            <span>
                                <a href='https://media2.egwwritings.org/pdf/en_DA.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span>
                                <a href='https://whiteestate.org/audio/130/the-desire-of-ages/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/127.5#0' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Acts-of-the-Apostles.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[80%] pb-[50px] mb:pb-0'>
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
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/127.5#0' target='_blank'>
                                <img src={require('../../Assets/SlideShow/The Great Controversy.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className=' basis-[50%] lg:basis-[80%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>The Great Controversy</h1>
                            <p className='mt-[10px] text-[#676767]'>Volume 5 of the Conflict of the Ages series carries the story of the controversy between God and Satan to its ultimate and glorious conclusion. Beginning with the destruction of Jerusalem and continuing through the persecutions of Christians in the Roman Empire, the apostasy of the Dark Ages, the shining light of the Reformation, and the worldwide religious awakening of the nineteenth century, this volume traces the conflict into the future, to the Second Coming of Jesus and the glories of the earth made new. As the end draws ever closer, the vital issue of loyalty to God will become decisive. In this concluding volume, the author powerfully points out the principles involved in the impending conflict and how each person can stand firmly for God and His truth.</p>
                        </div>
                        <div className='absolute bottom-[10px] right-[10px] md:bottom-[20px] md:right-[50px] text-[#F0B323] text-2xl md:text-3xl flex gap-2'>
                            <span className='text-red-700'>
                                <a href='https://m.egwwritings.org/en/book/132/toc' target='_blank'>
                                    <FaBook />
                                </a>
                            </span>
                            <span className=''>
                                <a href='https://media2.egwwritings.org/pdf/en_GC.pdf' target='_blank'>
                                    <FaFilePdf />
                                </a>
                            </span>
                            <span className=''>
                                <a href='https://whiteestate.org/audio/132/the-great-controversy/' target='_blank'>
                                    <FcSpeaker />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className='bg-white p-3 shadow-xl md:flex gap-3 relative'>
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
                            <a href='https://m.egwwritings.org/en/book/6.2' target='_blank'>
                                <img src={require('../../Assets/SlideShow/Appeal-to-Mothers-Ellen-G.-White.jpg')} alt='Acts Of The Apostles' className='w-full h-full object-cover hover:scale-125 transition-all ease-in-out duration-700' />
                            </a>
                        </div>
                        <div className='basis-[85%] pb-[50px] mb:pb-0'>
                            <h1 className='text-2xl'>An Appeal To Mothers</h1>
                            <p className='mt-[10px] text-[#676767]'>This book was the first Ellen G. White writing in the field of health after the vision of June 6, 1863. It depicts the perils of secret vice. It was reprinted by James White in 1870 in the book, A Solemn Appeal Relative to Solitary Vice and the Abuses and Excesses of the Marriage Relation. It is also paralleled in the Testimonies, and was drawn from heavily for Child Guidance in the section “Preserving Moral Integrity.”</p>
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
                        <div className='w-[95%] md:w-[40%] lg:w-[15%] mx-auto md:mx-0 h-[300px] lg:h-[200px] overflow-hidden'>
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