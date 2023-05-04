import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);
  let weatherIconUrl = `https://openweathermap.org/img/wn/${forecastData[0].weather[0].icon}@2x.png`;

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecastData);
    return (
      <div className="Forecast">
        <div className="container">
          <div className="row forecast-weather">
            <div className="col">
              <div className="forecast-day">{forecastData[0].dt}</div>
              <div className="forecast-temps">
                <span className="temp-max">{forecastData[0].temp.max}°</span>
                <span className="temp-min">{forecastData[0].temp.min}°C</span>
              </div>
              <img src={weatherIconUrl} alt="weather icon" />
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
