import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const LessonVideoData = [
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
      <body className="mt-[60px] lg:mt-[100px] bg-[#F8F8F8] pb-[50px]">
        <section className='bg-gradient-to-r from-[#007681] to-[#1050F3] relative w-full h-32 md:h-52 flex flex-col justify-center items-center'>
          <div className='text-center text-md'>
            <Link to="/" className='hover:text-[#F0B323] mr-3'>Home >></Link>
            <Link className='text-[#F0B323]'>Lesson Discussion</Link>
            <h1 className='text-center text-white text-3xl md:text-6xl font-semibold'>Lesson Discussion</h1>
          </div>
        </section>

        <section className='mt-[50px] w-[90%] mx-auto'>
          <h1 className='text-4xl'>Lesson Discussion</h1>
          <p className='md:w-[60%] mt-[15px]'>Dive into our engaging SDA community discussions and enrich your faith by watching our insightful past lesson videos today!</p>
          <div className='grid md:grid-cols-3 gap-3 mt-[30px]'>
            {LessonVideoData.map((video,index) => (
              <div key={index} className='h-[230px] md:h-[250px]'>
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