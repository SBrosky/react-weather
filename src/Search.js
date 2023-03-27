import React from "react";
import "./Search.css";

export default function Form() {
  return (
    <div className="Form">
      <div className="Container">
        <form className="change-city-bar" id="change-city" />
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="change city"
              className="form-control"
              id="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="submit-button" />
          </div>
        </div>
        <button className="current-button">Current Location</button>
      </div>
    </div>
  );
}
