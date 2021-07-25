import React from "react";
import "./CurrentWeatherTemp.css";

export default function CurrentWeatherTemp(props) {
  return (
    <div className="col-6-floatLeft">
      <img
        src={"https://openweathermap.org/img/wn/10d@2x.png"}
        alt="Clear"
        id="icon"
      />
      <br />
      <span id="temperature">{props.currentTemp}</span>
      <span className="units">°C</span>
    </div>
  );
}
