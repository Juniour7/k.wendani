import React, { useState } from 'react';
import Slider from 'react-slick';


//Images
import Image1 from "../../Assets/Youth Corner/WhatsApp Image 2024-06-21 at 10.57.30_b0da969c.jpg";
import Image2 from "../../Assets/Youth Corner/Youths.jpg";
import Image3 from "../../Assets/Children Ministry/campout.jpg";
import Image4 from "../../Assets/Children Ministry/camporee.jpg";
import Image5 from "../../Assets/Children Ministry/drills.jpg";

//Slider Styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [Image1, Image2, Image3, Image4, Image5];

const YouthCarousel = () => {
    const [mainSlider, setMainSlider] = useState(null);
  const [thumbSlider, setThumbSlider] = useState(null);

  const mainSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    lazyLoad: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: false,
    asNavFor: thumbSlider,
  };

  const thumbSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: mainSlider,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  };
  return (
    <>
        <div className="flex justify-center items-center lg:w-[90%] md:w-[95%] w-[98%] mx-auto bg-black p-2 md:p-5 gap-2 md:gap-5">
      <div className="w-[20%] h-[300px] md:h-[500px] lg:h-screen overflow-hidden">
        <Slider
          {...thumbSettings}
          ref={(slider) => setThumbSlider(slider)}
          className="h-full"
        >
          {images.map((image, index) => (
            <div key={index} className="p-1">
              <img src={image} alt={image.alt} className="w-full h-full object-cover cursor-pointer" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-3/4 bg-black">
        <Slider
          {...mainSettings}
          ref={(slider) => setMainSlider(slider)}
        >
          {images.map((image, index) => (
            <div key={index} className='w-[50px]  h-[200px] md:h-[370px] lg:w-[90%] lg:h-[500px]'>
              <img src={image} alt={image.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  )
}

export default YouthCarousel;