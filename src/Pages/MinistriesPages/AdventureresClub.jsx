import React from 'react';
import { Helmet } from 'react-helmet-async';

//Components
import ChildrenCarousel from '../../Components/MinCarousel/ChildreCarousel';

// Images
import Image from '../../Assets/Children Ministry/adv2.jpg';
import Image1 from '../../Assets/Children Ministry/Adventurers Achievements/builder1.png';
import Image2 from '../../Assets/Children Ministry/Adventurers Achievements/busy-bee1.png';
import Image3 from '../../Assets/Children Ministry/Adventurers Achievements/eager-beaver1.png';
import Image4 from '../../Assets/Children Ministry/Adventurers Achievements/helping-hand1.png';
import Image5 from '../../Assets/Children Ministry/Adventurers Achievements/little-lamb1.png';
import Image6 from '../../Assets/Children Ministry/Adventurers Achievements/sunbeam1.png';
import Image7 from '../../Assets/Children Ministry/adventureres.jpg';




const AdventureresClub = () => {
    const Badges = [
        Image1, Image2, Image3, Image4, Image5, Image6
    ];

  return (
    <>
        <Helmet>
            <title>Adventurers Club | Kahawa Wendani SDA Church</title>
        </Helmet>
        <body className='bg-[#F8FAFC] '>
            <section className='w-full h-[40vh] lg:h-screen relative'>
                <img src={Image} alt='adevntureres' className='w-full h-full object-cover' />
                <div className='absolute top-0 h-full w-full bg-black bg-opacity-[10%]'>
                    <div className='absolute bottom-[24%] left-[10%] text-white'>
                        <h1 className='text-3xl md:text-7xl font-semibold'>Adventurers Club</h1>
                        <hr className='border border-[#F0B323] w-[40%] mt-[10px]'></hr>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  justify-center items-center mt-[30px]'>
                {Badges.map((img,index) => (
                    <div 
                        key={index}
                        className='w-[150px] h-[120px]'
                    >
                        <img 
                            src={img} 
                            alt="" 
                            className='w-full h-full'
                        />
                    </div>
                ))}
            </section>

            <section className='mt-[50px] w-[97%] md:w-[90%] mx-auto md:flex gap-3 mb-[20px]'>
                <div className='basis-[50%] text-md space-y-4 text-center md:text-left'>
                    <p>Over one million children worldwide have found joy and excitement in one of the most engaging clubs ever created just for them—the Adventurer Club. Tailored for kids aged 4-9, this club offers specialized weekly activities that cater to the unique psychological needs of this age group, fostering stronger parent-child bonds. Parents also benefit from this experience, gaining valuable parenting skills and enjoying memorable activities alongside their children. The Adventurer Club is more than just a fun experience; it’s a meaningful journey for families to grow and learn together.</p>
                    <p>We encourage each child to fully engage in all our activities, with parents and guardians actively participating alongside them through various assignments. Our Adventurer program offers a diverse array of age-appropriate challenges, including games, outdoor adventures, nature exploration, family camping, field trips, and community service projects. The program is structured around a five-level, age-specific curriculum, complemented by around 80 specialized award areas that cover crafts, nature, recreation, spiritual development, and home arts. This comprehensive approach ensures a well-rounded and enriching experience for every participant.</p>
                </div>
                <div className='basis-[40%]'>
                    <img src={Image7} alt='adevntureres' className='w-full h-full object-cover' />
                </div>
            </section>

            {/* Gallery */}
            <section className='mt-[50px] pb-[50px]'>
                <div className='w-[98%] md:w-[95%] lg:w-[90%] mx-auto'>
                    <h1 className='text-2xl md:text-5xl bg-[#F0B323] py-2 md:py-4 w-[40%] lg:w-[25%] pl-2'>Our Gallery</h1>
                </div>
                <ChildrenCarousel />
            </section>
        </body>
    </>
  )
}

export default AdventureresClub;