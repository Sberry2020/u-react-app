import React, { useState } from "react";
import axios from "axios";


export default function WeatherApp() {

  const [query, setQuery] = useState(' ');
  const [weather, setWeather] = useState({});
 
  
  function search(response) {
    setWeather(' ');
    setQuery(' ');
  }
  
 
    const apiKey = "8130e5393014b472385fd22ad89b732c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(search);


  const dateBuilder = (d) => {
    let days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    let day = days[d.getDay()];
    let hours = d.getHours();
     
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = d.getMinutes();

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    return (
      <div>
        {day} {hours}:{minutes}
      </div>
    );
  }
  return (
    <div className="WeatherApp">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search a city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
        <div className="location"> {weather} </div>
        <div className="date"> {dateBuilder(new Date())} </div>
          <div className="weather-box"> 
          <div className="temp"> 15°C</div>
          <div className="weather"> Sunny </div>
          </div>
        <div className="date"> Humidity: 30% </div>
          <div className="date"> Wind: 3 km/h</div>
          </div>
      </main>
    </div>
  );
}
