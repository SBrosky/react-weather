import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `197ef3a642b76eef90e131866f74a0a0`;
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  axios.get(url).then(handleResponse);

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
