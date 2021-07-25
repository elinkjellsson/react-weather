import React from "react";
import "./WeatherDetails.css";

export default function WeatherDetails() {
  let weatherDetailsData = {
    humidity: 70,
    windSpeed: 2
  };
  return (
    <div className="col-6-floatRight" id="weatherDetails">
      <span id="weatherDescription">Sunny</span>
      <br />
      <span id="humidity">Humidity: {weatherDetailsData.humidity}</span>%
      <br />
      <span id="wind">Wind: {weatherDetailsData.windSpeed}m/h</span>
    </div>
  );
}
