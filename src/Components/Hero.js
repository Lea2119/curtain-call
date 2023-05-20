import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

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
        <SwiperSlide>
          <NavLink to={"/movies/2ab"}>
            <p>AFTERSUN</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/movies/3ab"}>
            <p>VERMEER</p>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide>
          <NavLink to={"/movies/1ed"}>
            <p>PARALLEL MOTHERS</p>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={"/movies/7ab"}>
            <p>ALCARRAS</p>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink to={"/movies/12ab"}>
            <p>FIRE OF LOVE</p>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
