import React from "react";
import "./Wrapper.css";
import Footer from "./Footer";
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
       <Footer/>
      </div>
    </div>
  );
}