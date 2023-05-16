import React from "react";
import "../styles/Trailer.css";

const Trailer = ({ trailer }) => {
  return (
    <div className="trailer">
      <iframe
        width="700"
        height="400"
        frameBorder="0"
        src={trailer}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Trailer;
