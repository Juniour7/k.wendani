import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


//icons
import { IoIosPlay } from "react-icons/io";


const LessonVideoData = [
  {
    src: "https://www.youtube.com/embed/hbw5nSO37iw?si=KIqZO0k1GvUPg9qp"
  },
  {
    src: "https://www.youtube.com/embed/QGfFS6f0YKY?si=KuTm1V_I8Sj6L5hD&amp;start=3484"
  },
  {
    src: "https://www.youtube.com/embed/AtARIfHwNAw?si=8__1WpEwQ_ZcfdhB"
  },
  {
    src: "https://www.youtube.com/embed/T_tp9LDFAik?si=yfI057pYecjlh8pL&amp;start=3323"
  },
  {
    src: "https://www.youtube.com/embed/3SCXtlSLd38?si=vVlABnIBp5khA06Q&amp;start=3012"
  },
  {
    src: "https://www.youtube.com/embed/T3lFJIF8FZk?si=DFRifdTspp-jqKSG&amp;start=2342"
  },
  {
    src: "https://www.youtube.com/embed/phdOotN8G4w?si=XpdJiohVJ0UpZOiz&amp;start=2793",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/o9ubVE_Rinc?si=us3LatXFB4wK04NQ&amp;start=2019",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/wB_cRKpPfks?si=Zkz_B3HpoLuj8ZH0&amp;start=2965",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/7JWwjy-5NsI?si=lAw2q9qirZd5R8kZ&amp;start=4053",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/gO0_R-mLY8U?si=Tm3SryI4YvJE22ou&amp;start=3343",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/iMpHGRmgwgk?si=Yk4PqltweRSu3fha&amp;start=3883",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/mdEDPUOleCc?si=D7vc6J0c9D7ubqwj&amp;start=3630",
    title: ""
  },
  {
    src: "https://www.youtube.com/embed/gty6oQcWr4c?si=07gcceScEryQkFrd&amp;start=1808",
    title: ""
  }
]


const LessonDiscussion = () => {
  return (
    <>
      <Helmet>
        <title>Lessson | Kahawa Wendani SDA Church</title>
      </Helmet>
      <body className=" bg-[#F8F8F8] pb-[50px]">
        <section className='relative w-full h-[400px] md:h-[450px] bg-blend-screen md:bg-bottom bg-cover bg-no-repeat bg-fixed'
          style={{ backgroundImage: "url(https://media.istockphoto.com/id/155096043/photo/young-adults-in-a-bible-study.webp?b=1&s=170667a&w=0&k=20&c=N7lVeO-FcojnGMSzWa2f_jUbD_m9Uj1gCySMRUl4ksU=)" }}
        >
          <div className='absolute w-full h-full bg-black bg-opacity-30'>
            <div className='absolute left-[5%] bottom-[55%] md:bottom-[45%]'>
              <h1 className='text-center text-white text-3xl md:text-5xl font-semibold'>Lesson Disscusion</h1>
            </div>
            <div className="bg-[#F8F8F8] absolute bottom-0 w-full rounded-tl-3xl rounded-tr-3xl md:rounded-tl-full md:rounded-tr-full p-3 md:py-6">
              <div className="flex flex-col justify-center items-center text-center space-y-3">
                <h1 className="text-3xl md:text-3xl">Our Video Lesson Discussion</h1>
                <p className="md:w-[60%] text-sm font-light">Dive into our engaging SDA community discussions and enrich your faith by watching our insightful past lesson videos today!</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-[50px] w-[90%] md:w-[85%] mx-auto'>
          <div className='flex items-center gap-1'>
            <span className='text-2xl my-auto'>
              <IoIosPlay />
            </span>
            <h1 className='text-xl'>The Book Mark</h1>
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