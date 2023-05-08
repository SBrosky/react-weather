import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coords]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast  forecast-weather ">
        <div className="row">
          {forecastData.map(function (dailyWeather, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col">
                  <WeatherForecastDay data={dailyWeather} />
                </div>
              );
            }
          })}
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
