import React, { useContext } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { Pagination, FreeMode } from "swiper/modules";

// react-icons
import { RxArrowTopRight } from "react-icons/rx";

// context
import { transportContext } from "../context/transportContext";

const FlotaSlider = () => {
  const { flota } = useContext(transportContext);
  // console.log("FLOTA", flota);

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-primary">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {flota.map((flot, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-6 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px]">
            <div className={`absolute inset-0 bg-cover bg-center`}
            style={{backgroundImage: `url(${flot.img})`}}
            />
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50"/>  
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlotaSlider;
