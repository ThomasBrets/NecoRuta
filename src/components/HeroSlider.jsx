import React from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

// Utils
import { scrollToSection } from "../utils/scrollToSection";

// Framer-motion
import { motion } from "framer-motion";
import { titleVariants, icon } from "../utils/motion";

// Images
import img5 from "../assets/img/5.jpg";
import img9 from "../assets/img/9.jpg";
import img10 from "../assets/img/10.jpg";
import img11 from "../assets/img/11.jpg";
import img8 from "../assets/img/8.jpg";
import img4 from "../assets/img/4.jpg";

// Slides
const slides = [
  {
    title: "NecoRuta S.A.",
    bg: img9,
    btnText: "Transportes",
  },
  {
    title: "NecoRuta S.A.",
    bg: img5,
    btnText: "Transportes",
  },
  {
    title: "NecoRuta S.A.",
    bg: img10,
    btnText: "Transportes",
  },
  {
    title: "NecoRuta S.A.",
    bg: img11,
    btnText: "Transportes",
  },
  {
    title: "NecoRuta S.A.",
    bg: img8,
    btnText: "Transportes",
  },
  {
    title: "NecoRuta S.A.",
    bg: img4,
    btnText: "Transportes",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heroSlider h-[625px] lg:h-[860px] shadow-2xl"
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            key={index}
            className="h-full bg-orange-400 relative flex justify-center items-center"
          >
            {/* title and button */}
            <div className="z-20 text-white text-center">
              <motion.div
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="uppercase font-primary tracking-[6px] mb-5"
              >
                Desde 2008 brindamos servicios de transporte de cargas generales
              </motion.div>
              <motion.h1
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="mb-5 uppercase font-primary tracking-[2px] text-[32px] max-w-[920px] lg:text-[68px]"
              >
                {title}
              </motion.h1>
              <button
                className="btn btn-primary btn-lg mx-auto rounded"
                onClick={() => scrollToSection("#transportes")}
              >
                {btnText}
              </button>
            </div>
            {/* carrusel */}
            <div className="absolute top-0 h-full w-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            {/* overlay */}
            <div className="absolute h-full w-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
