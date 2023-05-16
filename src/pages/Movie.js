import React from "react";
import { useParams } from "react-router-dom";
import { movies } from "../data/Infos.js";
import Navigation from "../Components/Navigation";
import Details from "../Components/Details.js";
import "../styles/Movie.css";

const Movie = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id); // Permet de récupérer les informations pour chaque movie de "movies"

  return (
    <div>
      <Navigation />
      {/* <h1>Hello, movie {id}!</h1> */}
      <div
        className="hero-img"
        style={{ backgroundImage: `url(${movie.cover})` }}
        alt={movie.name}
      ></div>
      {/* <h1 className="movie-name">{movie.name}</h1> */}
      <Details
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

export default Movie;
