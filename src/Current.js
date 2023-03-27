import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="container">
        <div className="row local-weather">
          <div className="col-6">
            <p className="current-weather">
              <span>🌤️</span>
              <span id="degrees">11°C</span>
            </p>
          </div>
          <div className="col-6">
            <p className="weather-details">
              <div id="description">OverCast Clouds</div>
              <div id="humidity">Humidity: 64%</div>
              <div id="wind">Wind: 4 km/hr</div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
