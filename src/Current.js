import React from "react";

import CurrentWeatherOverview from "./CurrentWeatherOverview";
import CurrentWeatherTemp from "./CurrentWeatherTemp";
import WeatherDetails from "./WeatherDetails";

import "./Current.css";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="col-12 current">
        <CurrentWeatherOverview />
      </div>
      <div className="row">
        <div className="col-6-floatLeft">
          <CurrentWeatherTemp currentTemp={23} />
        </div>
        <div className="col-6-floatRight">
          <WeatherDetails />
        </div>
      </div>
    </div>
  );
}
