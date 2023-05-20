import React from "react";
import Hero from "../Components/Hero";
import Movies from "../Components/Movies";
import Sort from "../Components/Sort";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Sort />
      <Movies />
    </div>
  );
};

export default Home;
