import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


//icons
import { IoIosPlay } from "react-icons/io";


const LessonVideoData = [
  {
    src: "https://www.youtube.com/embed/J44YtgYfWKg?si=00E0_uIXcSqH0bw7&amp;start=2517"
  },
  {
    src: "https://www.youtube.com/embed/Ao-nYsvrzYE?si=Y4Xa_2-YboHUN_do&amp;start=2789"
  },
  {
    src: "https://www.youtube.com/embed/N819zjwSnN8?si=aL_DeQiU_oqrdSfJ&amp;start=9"
  },
  {
    src: "https://www.youtube.com/embed/bV3oEk2VzbM?si=wwS_mwGrGD8iF0UH&amp;start=1455"
  },
  {
    src: "https://www.youtube.com/embed/tt98BuoeQfY?si=rIaIBTqPtE6IZY-6&amp;start=1455"
  },
  {
    src: "https://www.youtube.com/embed/yd8AWrTAgVQ?si=Zxyaz6z4SgLk4Aq8&amp;start=1455"
  },
]


const LessonDiscussion = () => {
  return (
    <>
      <Helmet>
        <title>Lessson | Kahawa Wendani SDA Church</title>
      </Helmet>
      <body className=" bg-[#F8F8F8] pb-[50px]">
        <section className='relative w-full h-[400px] md:h-[450px] bg-blend-screen md:bg-bottom bg-cover bg-no-repeat bg-fixed'
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1474432494633-30352e8efcda?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)" }}
        >
          <div className='absolute w-full h-full bg-black bg-opacity-30'>
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
              <h1 className='text-center text-white text-3xl md:text-5xl font-semibold border-t-[1px] border-b-[1px] py-3 md:w-[50%]'>Lesson Disscusion</h1>
            </div>
            <div className="bg-[#F8F8F8] absolute bottom-0 w-full rounded-tl-3xl  md:rounded-tl-full  p-3 md:py-6">
              <div className="flex flex-col justify-center items-center text-center space-y-2">
                <h1 className="text-2xl md:text-3xl">Our Video Lesson Discussion</h1>
                <p className="md:w-[60%] text-sm font-light">Dive into our engaging SDA community discussions and enrich your faith by watching our insightful past lesson videos today!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-[50px] w-[90%] md:w-[95%] lg:w-[85%] mx-auto'>
          <div className='flex items-center gap-1'>
            <span className='text-2xl my-auto'>
              <IoIosPlay />
            </span>
            <h1 className='text-xl'>The Gospel of John</h1>
          </div>
          <div className='grid md:grid-cols-3 gap-3 mt-[30px]'>
            {LessonVideoData.map((video,index) => (
              <div key={index} className='h-[215px] md:h-[150px] lg:h-[210px] shadow-md'>
                <iframe
                  className="w-full h-full"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>
      </body>
    </>
  );
}

export default LessonDiscussion;