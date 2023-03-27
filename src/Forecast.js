import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="Forecast">
        <div className="container">
          <div className="row forecast-weather">
            <div className="col">
              <p>
                Monday <br />
                11°C <br />
                <span>🌤️</span>
              </p>
            </div>
            <div className="col">
              <p>
                Tuesday <br />
                11°C <br />
                <span>🌤️</span>
              </p>
            </div>
            <div className="col">
              <p>
                Wednesday <br />
                11°C <br />
                <span>🌤️</span>
              </p>
            </div>
            <div className="col">
              <p>
                Thursday <br />
                11°C <br />
                <span>🌤️</span>
              </p>
            </div>
            <div className="col">
              <p>
                Friday <br />
                11°C <br />
                <span>🌤️</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
