import React from "react";
import "../styles/Booking.css";
import { NavLink } from "react-router-dom";

const Booking = ({ slots, times, paiement, prices }) => {
  return (
    <div className="booking">
      {slots &&
        times &&
        slots.map((slot, index) => (
          <div key={index}>
            <p className="slot-ttle">{slot}</p>
            {times.map((time, index) => (
              <NavLink to={paiement} className="card-link" key={index}>
                <ul>
                  <li className="times">{time}</li>
                </ul>
              </NavLink>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Booking;
