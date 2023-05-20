import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles/Map.css";
import { Icon } from "leaflet";
import img from "../assets/lieu.png";

const Map = () => {
  const markers = [
    {
      geocode: [51.5167, -0.2167],
    },
  ];

  const customIcons = new Icon({
    iconUrl: img,
    iconSize: [50, 50],
  });

  return (
    <div className="map">
      <MapContainer center={[51.5167, -0.2167]} zoom={13}>
        <TileLayer
          attribution="openstreetmap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcons}>
            <Popup>
              <h5>CURTAIN CALL THEATER</h5>
              <p>123 Main Street Notting Hill</p>
              <p>London</p>
              <p>United Kingdom</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
