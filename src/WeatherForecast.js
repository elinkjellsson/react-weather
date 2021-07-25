import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast" id="weatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecast-day">Mon</div>
          <img
            id="forecastIcon"
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
          />
          <div className="forecastTemp">
            <span className="forecast-temp-max">21°</span>
            <span className="forecast-temp-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
