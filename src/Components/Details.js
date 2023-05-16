import React from "react";
import "../styles/Details.css";
import Trailer from "./Trailer";
import Booking from "./Booking";

const Details = ({
  id,
  name,
  category,
  price,
  director,
  description,
  trailer,
  slots,
  times,
  paiement,
  prices,
}) => {
  return (
    <div className="details">
      <div className="details-container">
        <div className="details-shop">
          {/* <h1>SLOTS</h1> */}
          <div className="details-booking">
            <Booking
              slots={slots}
              times={times}
              name={name}
              paiement={paiement}
              prices={prices}
            />
          </div>
        </div>
        <div className="details-description">
          <h1>MOVIE INFO</h1>
          <div className="details-body">
            <p className="details-resume">{description}</p>
          </div>
        </div>
        <div className="details-trailer">
          {/* <h1>TRAILER</h1> */}
          <div className="trailer-body">
            <div className="details-trailer">
              <Trailer trailer={trailer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
