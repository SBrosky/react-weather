import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  let weatherIconUrl = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return temperature;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return temperature;
  }

  return (
    <div>
      <div className="container">
        <div className="forecast-day">{day()}</div>
        <div className="forecast-temps">
          <span className="temp-max">{maxTemp()}°</span>
          <span className="temp-min">{minTemp()}°C</span>
        </div>
        <img
          src={weatherIconUrl}
          alt="weather icon"
          className="daily-icon"
          width="50"
        />
      </div>
    </div>
  );
}
