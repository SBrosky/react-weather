import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `197ef3a642b76eef90e131866f74a0a0`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="Container">
          <form
            className="change-city-bar"
            id="change-city"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="change city"
                  className="form-control"
                  id="form-control"
                  onChange={handleCityChange}
                />
              </div>

              <div className="col-3">
                <input type="submit" value="Search" className="submit-button" />
              </div>
            </div>
          </form>
          <button className="current-button">Current Location</button>
        </div>

        <h1>{weatherData.city}</h1>
        <h2>
          <FormattedDate date={weatherData.date} />
        </h2>

        <div className="row local-weather">
          <div className="col-6">
            <p className="current-weather">
              <img src={weatherData.iconUrl} />
              <span id="degrees">{Math.round(weatherData.temperature)}°C</span>
            </p>
          </div>
          <div className="col-6">
            <p className="weather-details">
              <div id="description">{weatherData.description}</div>
              <div id="humidity">Humidity: {weatherData.humidity}%</div>
              <div id="wind">Wind: {Math.round(weatherData.wind)} km/hr</div>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
