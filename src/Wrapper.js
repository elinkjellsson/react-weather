import React from "react";
import "./Wrapper.css";

import Form from "./Form";
import Footer from "./Footer";
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
        <Footer />
      </div>
    </div>
  );
}