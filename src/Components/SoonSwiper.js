import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/SoonSwiper.css";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/Hero.css";

import { Pagination } from "swiper";

const SoonSwiper = () => {
  return (
    <div className="coming-soon">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="soon-swiper"
      >
        <SwiperSlide>
          <p>ASTEROID CITY</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Killers of the Flower Moon</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Oppenheimer</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SoonSwiper;
