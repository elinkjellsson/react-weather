import React from "react";
import "./Wrapper.css";
import Form from "./Form";
import Current from "./Current";
import WeatherForecast from "./WeatherForecast";

export default function Wrapper() {
  return (
    <div className="container">
      <div className="wrapper" id="background-element">
        <Form />
        <Current />
        <WeatherForecast />
        <hr />
       <div className="footer">
    <footer>
      <a
        href="https://github.com/elinkjellsson/react-weather"
       target="_blank" rel="noreferrer">
        Open-source code{" "}
      </a>
      by Elin Kjellsson
    </footer>
    </div>
      </div>
    </div>
  );
}