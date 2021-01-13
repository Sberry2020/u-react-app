import React from "react";
import "./App.css";
import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="App">
      <WeatherApp />
      <footer>
        This project was coded by Aksana Kurbanova and is {""}
        <a href="https://github.com/Sberry2020/u-react-app" target="_blank" rel="noreferrer">
          open-sourced on GitHub {""}
        </a>
        and also hosted on {""}
        <a href="https://agitated-lovelace-6dab26.netlify.app" target="_blank" rel="noreferrer">
          Netlify.com
        </a>
      </footer>
    </div>
  );
}
