import React from "react";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTicketSimple } from '@fortawesome/free-solid-svg-icons'

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
          <NavLink to="">
            <li>
              <p>WHAT'S ON</p>
            </li>
          </NavLink>
          <NavLink to="/our-story">
            <li>
              <p>OUR STORY</p>
            </li>
          </NavLink>
          {/* <NavLink to="">
            <li>
              <p>BASKET</p>
            </li>
          </NavLink> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
