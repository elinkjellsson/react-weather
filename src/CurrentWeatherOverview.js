import React from "react";

import "./CurrentWeatherOverview.css";

export default function CurrentWeatherOverview() {
  let currentWeatherData = {
    city: "Halmstad",
    currentDate: "Sunday 22:36"
  };
  return (
    <div className="CurrentWeatherOverview">
      <h1 id="display-city">{currentWeatherData.city}</h1>
      <span id="current-date">{currentWeatherData.currentDate} </span>
    </div>
  );
}