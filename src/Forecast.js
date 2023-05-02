import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
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
  } else {
    let apiKey = `a5acb752426cd8188485c35694980e3a`;
    let latitude = props.coords.lat;
    let longitude = props.coords.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
    return <div>Loading</div>;
  }
}
