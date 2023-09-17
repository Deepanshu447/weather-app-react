import React,{useState} from 'react';
import './App.css';

export const App = () => {

  let response;
  let [tempData, newTempData] = useState({
    temp: "nahi pta",
    city: "",
    wind: "",
    humidity: "",
    lat : "",
    lon : ""
  });

  const Weather = async () => {
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=f51e6e3a8c0377fe66349623dac8f1c7`);
    response = await api.json();
      newTempData({
        temp: response.main.temp,
        city: response.name,
        wind: response.wind.speed,
        humidity: response.main.humidity,
        
      })
    }
  
 
  return (
    <>
      <div className="main-container">
        <div className="head">
          <h1>Today's Weather</h1>
        </div>
        <div className="search-container">
          <input
            
            className="search-bar"
            placeholder="search Your City.."
          ></input>
          <div className="icons" onClick={Weather} >
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="coordinates">
          <p>
            LATITUDE :- hjhgj
            <br />
            LONGITUDE :- hgjgh
          </p>
        </div>

        <div className="temp">
          <h1>
            <center>
              
              {tempData.temp}<sup>°</sup>C
            </center>
          </h1>
        </div>

        <div className="info">
          <div className="info1">
            <h4>Humidity :-{tempData.humidity}</h4>
            <h4>Condition :- hjukj</h4>

          </div>
          <div className="info2">
            <h4>City :- hghjgh</h4>
            <h4>Wind-Speed :- jkhjk</h4>
          </div>
        </div>
      </div>
    </>
    
  )
}
