import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import 'swiper/css/autoplay';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

// Utils
import { scrollToSection } from "../utils/scrollToSection";

// Images
import img5 from "../assets/img/5.jpg";
import img9 from "../assets/img/9.jpg";
import img10 from "../assets/img/10.jpg";
import img11 from "../assets/img/11.jpg";
import ofi1 from "../assets/ofi/ofi1.jpg";
import ofi2 from "../assets/ofi/ofi2.jpg";

// Slides
const slides = [
  {
    title: "NecoRuta S.A.",
    bg: ofi1,
    btnText: "Desde 2009 brindando servivios de transporte de carga",
  },
  {
    title: "NecoRuta S.A.",
    bg: ofi2,
    btnText: "Desde 2009 brindando servivios de transporte de carga",
  },
  {
    title: "NecoRuta S.A.",
    bg: img9,
    btnText: "Desde 2009 brindando servivios de transporte de carga",
  },
  {
    title: "NecoRuta S.A.",
    bg: img5,
    btnText: "Desde 2009 brindando servivios de transporte de carga",
  },
  {
    title: "NecoRuta S.A.",
    bg: img10,
    btnText: "Desde 2009 brindando servivios de transporte de carga",
  },
  {
    title: "NecoRuta S.A.",
    bg: img11,
    btnText: "Desde 2009 brindando servivios de transporte de carga",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
    modules={[EffectFade, Autoplay]}
    effect={"fade"}
    loop={true}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    className="heroSlider h-[600px] lg:h-[860px]" 
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
        <SwiperSlide key={index} className="h-full bg-orange-400 relative flex justify-center items-center">
          
        </SwiperSlide>
        ) 
      })}
    </Swiper>
  );
};

export default HeroSlider;
