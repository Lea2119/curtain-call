import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "../styles/Hero.css";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="hero">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="image-container">
            <div className="slide-text">AFTERSUN</div>
            <img
              src={require("../assets/hero/aftersun.webp")}
              alt=""
              className="swiper-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <div className="slide-text">FIRE OF LOVE</div>
            <img
              src={require("../assets/hero/fire-of-love-1-e1657537846309-1568x752.jpg")}
              alt=""
              className="swiper-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <div className="slide-text">Vermeer: The Greatest Exhibition</div>
            <img
              src={require("../assets/hero/Website_Header_Vermeer_-2496×1266px.jpg")}
              alt=""
              className="swiper-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <div className="slide-text">ONE FINE MORNING</div>
            <img
              src={require("../assets/hero/08one-fine-morning-review2-1-0824-videoSixteenByNine3000-v3.jpg")}
              alt=""
              className="swiper-image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image-container">
            <div className="slide-text">LIVING</div>
            <img
              src={require("../assets/hero/08one-fine-morning-review2-1-0824-videoSixteenByNine3000-v3.jpg")}
              alt=""
              className="swiper-image"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
