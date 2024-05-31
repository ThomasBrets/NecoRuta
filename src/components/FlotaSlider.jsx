import React, { useContext } from "react";

import "../flota.css";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// import required modules
import { Pagination, FreeMode, Autoplay } from "swiper/modules";

// react-icons
import { RxArrowUp } from "react-icons/rx";

// context
import { transportContext } from "../context/transportContext";

// framer-motion
import { motion } from "framer-motion";

// ScrollToSection
import { scrollToSection } from "../utils/scrollToSection";

const FlotaSlider = () => {
  const { flota } = useContext(transportContext);
  // console.log("FLOTA", flota);

  return (
    <div className="flex items-center justify-center flex-col lg:h-[500px] h-[350px] bg-primary shadow-2xl relative">
      <div className="lg:py-[320px] py-[280px] w-full mx-auto absolute -top-4 lg:shadow-1 bg-primary bg-transparent backdrop-blur rounded-lg" />
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="max-w-[90%] lg:max-w-[90%]"
      >
        {flota.map((flot, index) => (
          <SwiperSlide key={flot.name}>
            <div
              className="flex flex-col gap-6 group relative shadow-lg scale-100 text-white rounded-xl h-[215px] w-full lg:h-[380px] lg:w-[360px] overflow-hidden cursor-pointer"
              onClick={() => scrollToSection("info")}
            >
              <img src={flot.img} alt="img" className="h-full w-full" />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
              <div className="absolute bottom-5 left-5 flex lg:gap-2  items-center">
                <RxArrowUp className="lg:w-[35px] w-[30px] lg:h-[35px] h-[30px] text-primary group-hover:text-primary group-hover:rotate-180 duration-300 bg-white rounded-full" />
                <div className="font-primary lg:text-[20px] text-[15px] group-hover:text-primary absolute left-48 z-30 font-bold bg-white whitespace-pre text-primary rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-0 group-hover:left-14 group-hover:duration-300 group-hover:w-fit">
                  +Info
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlotaSlider;