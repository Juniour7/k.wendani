import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import YouthCarousel from '../../Components/MinCarousel/YouthCarousel';

// Images
import Image1 from '../../Assets/Youth Corner/Youths.jpg';
import Image2 from '../../Assets/Youth Corner/WhatsApp Image 2024-06-21 at 10.57.30_b0da969c.jpg';

const YouthsCorner = () => {
  return (
    <>
        <Helmet>
            <title>Youth's Corner Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] pb-[50px]'>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={Image1} alt='adevntureres' className='w-full h-full object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-[]'>
                    <div className='absolute bottom-[5%] lg:bottom-[30%] left-[5%] text-white'>
                        <h1 className='text-2xl md:text-5xl font-semibold'>Remember Your Creator</h1>
                        <p className='text-[#D9D9D9] w-[95%] md:w-[65%] mt:mt-[5px] md:mt-[10px]'>The Seventh-day Adventist Church began like a start-up led by young people with vision and passion for a cause.</p>
                        <a href='tel:0712203840'>
                            <button className='bg-[#F0B323] text-white px-4 py-2 rounded-full font-semibold mt-[20px]'>Contact The Youth Leader</button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Hero */}
            <section className='mt-[50px] w-[90%] mx-auto md:flex gap-3 mb-[20px]'>
                <div className='basis-[50%] text-md space-y-4 text-center md:text-left'>
                    <p>The story of the Adventist Youth Society, now titled Young Adults (YA), began over 125 years ago along a dusty country lane in Michigan with two young boys kneeling in prayer. Today that dusty lane has become a worldwide web of highways that links over 10 million Seventh-day Adventist young people in nearly every political entity on every continent of the globe. This story comes in every hue of the rainbow; it is filled with extremes of exhilaration and mountaintop experiences, as well as deep sadness and unfulfilled dreams. This is the story of God’s leading a fascinating army down through the battles of the great overarching conflict that is life as we know it now.</p>
                    <p>AY MISSION: To lead young people into a saving relationship with Jesus Christ and help them embrace His call to discipleship. AY AIM: The Advent message to all the world in my generation. AY MOTTO: The love of Christ compels me.</p>
                </div>
                <div className='basis-[40%] h-[220px] md:h-[300px]'>
                    <img src={Image2} alt='adevntureres' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Online Meetings */}
            <section className='w-[90%] mx-auto md:flex gap-6 mt-[80px] '>
                <h4 className='text-[#F0B323] text-md md:hidden'>Join Our Bible Study</h4>
                <h1 className='text-3xl md:text-5xl text-[#49111C] mb-[30px] md:hidden'>Thursday Bitings</h1>
                <div className='h-[220px] md:h-[450px] md:w-[40%]'>
                    <img src="https://i.pinimg.com/564x/21/90/83/2190835a81bc30efa33ccde7b9f93ff4.jpg" alt='Bible study' className='w-full h-full object-cover' />
                </div>
                <div className='basis-[50%] relative'>
                    <h4 className='text-[#F0B323] text-md hidden md:block'>Join Our Bible Study</h4>
                    <h1 className='md:text-4xl lg:text-5xl text-[#49111C] hidden md:block'>Thursday Bitings</h1>
                    <p className='mt-[15px]'>Hey there, amazing youth! Are you ready to embark on a journey that will inspire, uplift, and transform your life? Our Thursday evening Bible study is not just another event, it's a vibrant community where you can explore deep questions, connect with like-minded friends, and discover the timeless wisdom of the Scriptures. Imagine ending your day with meaningful discussions, fresh perspectives, and a sense of belonging that fuels your spirit. Whether you're seeking answers, looking for fellowship, or just curious about faith, this is your invitation to grow, learn, and shine. Let's make every Thursday night at 8:30 PM a highlight of your week. See you there! 🌟📖✨</p>
                    <a href='http://meet.google.com/ang-owme-ato'>
                        <button className='bg-[#F0B323] md:absolute bottom-[1%] lg:bottom-[10%] right-[5%] text-white text-xl px-4 py-2 rounded-full font-semibold mt-[20px]'>Join The Meeting</button>
                    </a>
                </div>
            </section>

            {/* Gallery */}
            <section className='mt-[70px]'>
                <div className='w-[98%] md:w-[95%] lg:w-[90%] mx-auto'>
                    <h1 className='text-2xl md:text-5xl bg-[#F0B323] py-2 md:py-4 w-[40%] lg:w-[25%] pl-2'>Our Gallery</h1>
                </div>
                <YouthCarousel />
            </section>

        </body>
    </>
  )
}

export default YouthsCorner;