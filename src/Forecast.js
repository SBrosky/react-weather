import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="container">
        <div className="row forecast-weather">
          <div className="col">
            <div className="forecast-day">Mon</div>
            <div className="forecast-temps">
              <span className="temp-max">11°</span>
              <span className="temp-min">9°C</span>
            </div>
            <span className="forecast-icon">🌤️</span>
          </div>
        </div>
      </div>
    </div>
  );
}
