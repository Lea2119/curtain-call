import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav className="nav-container">
        <ul>
          <NavLink className="logo" to="/">
            <li>
              <p>Curtain Call Theater</p>
            </li>
          </NavLink>
          <NavLink to="/our-story">
            <li>OUR STORY</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
