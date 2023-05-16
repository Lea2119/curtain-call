import React from "react";
import Navigation from "../Components/Navigation";
import { useParams } from "react-router-dom";
import { movies } from "../data/Infos.js";
import Prices from "../Components/Prices";
import "../styles/Paiement.css";

const Paiement = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id); // Permet de récupérer les informations pour chaque movie de "movies"

  return (
    <div className="paiement">
      <Navigation />
      {/* <h1>Hello, movie {id}!</h1> */}
      <Prices
        id={movie.id}
        name={movie.name}
        category={movie.category}
        price={movie.price}
        cover={movie.cover}
        director={movie.director}
        link={movie.link}
        description={movie.description}
        trailer={movie.trailer}
        slots={movie.slots}
        times={movie.times}
        paiement={movie.paiement}
        prices={movie.prices}
      />
    </div>
  );
};

export default Paiement;
