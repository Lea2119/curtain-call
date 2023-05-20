import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Card.css";

const Card = ({ id, cover, name, director, link }) => {
  return (
    <div key={id} className="card">
      <NavLink to={link} className="card-link">
        <div
          className="card-img"
          style={{ backgroundImage: `url(${cover})` }}
        ></div>
        <div className="card-body">
          <h2 className="card-name">{name}</h2>
          <p className="card-info">{director}</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
