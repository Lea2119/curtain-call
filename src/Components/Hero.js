import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../styles/Hero.css";

import { Pagination } from "swiper";

const Hero = () => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>AFTERSUN</SwiperSlide>
        <SwiperSlide>VERMEER</SwiperSlide>
        <SwiperSlide>PARALLEL MOTHERS</SwiperSlide>
        <SwiperSlide>ALCARRAS</SwiperSlide>
        <SwiperSlide>LIVING</SwiperSlide>
        <SwiperSlide>ONE FINE MORNING</SwiperSlide>
        <SwiperSlide>FULL TIME</SwiperSlide>
        <SwiperSlide>FIRE OF LOVE</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
