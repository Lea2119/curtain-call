import React from "react";
import Hero from "../Components/Hero";
import Movies from "../Components/Movies";
import Sort from "../Components/Sort";
import Navigation from "../Components/Navigation";
import Top from "../Components/Top";
import Soon from "../Components/Soon";
import SoonSwiper from "../Components/SoonSwiper";
import Map from "../Components/Map";
import Find from "../Components/Find";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Top />
      <Hero />
      <Sort />
      <Movies />
      <Soon />
      <SoonSwiper />
      <Find />
      <Map />
    </div>
  );
};

export default Home;
