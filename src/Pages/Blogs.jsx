import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';


const CardData = [
    {
        src: "https://images.unsplash.com/photo-1442115597578-2d0fb2413734?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "The Sabbath",
        content: "Sometimes we just need a day off. A 24-hour period in which we don’t have to think about work or other worries and stressors of life.  Fortunately, God knew this and planned for it even as far back as His creation of this world.",
        url: "theSabbath"  
    },
    {
        src: "https://images.unsplash.com/photo-1518381057566-9acabd658f10?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Death, the State of the Dead, and Resurrection",
        content: "The Bible has a lot to say about death and how it affects us as humans. What’s more, the idea of death doesn’t stop at dying. Our minds are confronted with the unknown—what happens after death, and what do we do when we’ve lost someone we love?",
        url: "stateofTheDead"  
    },
    {
        src: "https://images.unsplash.com/photo-1527027132744-cd2af7b16f7d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "How Does Prayer Work?",
        content: "Prayer works because God, through His love for us, wills it to work. He makes Himself accessible and available for us when we want to commune with Him.",
        url: "prayerWorks"  
      }
]

const Blogs = () => {
  return (
    <>
        <Helmet>
            <title>Our Blogs | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='mt-[60px] lg:mt-0 bg-[#F8F8F8] pb-[10px]'>
            <div className='bg-fixed relative bg-cover bg-bottom bg-no-repeat w-full h-[250px] md:h-[400px] z-0'
                style={{backgroundImage: "url(https://images.unsplash.com/photo-1725384800555-f0d477e084da?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"}}
            >
                <div className='absolute inset-0 flex flex-col items-center justify-center '>
                    <div className='py-5 md:py-4  border-t-[1px] border-b-[0.5px] w-[60%] md:w-[40%] border-gray-500'>
                        <h1 className='text-2xl md:text-5xl font-semibold text-white text-center'>Our Blogs</h1>
                    </div>
                </div>
            </div>

            {/* Blog Body */}
            <section>
                <div className='w-[90%] mx-auto grid md:grid-cols-2 lg:grid-cols-3 just-fy-center  gap-3 my-[30px]'>
                    {CardData.map((Data, Index) => (
                        <div key={Index} className='bg-white p-3 relative pb-[20px]'>
                            <div className='w-full h-[270px] overflow-hidden'>
                                <img 
                                    src={Data.src} 
                                    alt={Data.title} 
                                    className='w-full h-full object-cover hover:scale-125 cursor-pointer transition-all duration-700 ease-in-out transform' 
                                />
                            </div>
                            <div>
                                <Link to={Data.url}>
                                    <h1 className='text-xl my-[15px] text-[#007681] hover:underline'>{Data.title}</h1>
                                </Link>
                                <p className='text-[#888888] text-sm'>{Data.content}</p>
                                <div className='flex justify-end mt-[20px] absolute bottom-2 right-3'>
                                    <Link to={Data.url}>
                                        <button className='text-[#F0B323] underline underline-offset-2 hover:text-Hero-900 transition-colors duration-300 ease-in-out'>Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </body>
    </>
  )
}

export default Blogs;