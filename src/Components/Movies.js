import React from "react";
import "../styles/Movies.css";
import { movies } from "../data/Infos.js";
import Card from "./Card";

const Movies = () => {
  return (
    <div className="movies">
      <div className="movies-items">
        {movies.map(({ id, name, price, category, cover, director, link }) => (
          <Card
            key={id}
            name={name}
            category={category}
            price={price}
            cover={cover}
            director={director}
            link={link}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
