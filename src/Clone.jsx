import React, { useState } from "react";
import './App.css';

export default function Clone() {
  
  let response;
  let [tempData, newTempData] = useState({
    temp: "",
    city: "",
    wind: "",
    humidity: "",
    lat : "",
    lon : "",
    condition:""
  });

  

 


 
    

  const Weather = async () => {
    const api = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=259fc3ed3c01e64d7266c6bab7c2f772&units=metric`
    );
    response = await api.json();
    newTempData({
      temp: response.main.temp,
      city: response.name,
      wind: response.wind.speed,
      humidity: response.main.humidity,
      lat : response.coord.lat,
      lon : response.coord.lon,
      condition: response.weather[0].main
    });
    console.log(response)
  };
  const [data, setdata] = useState("");
  const handlechange = (e) => {setdata(e.target.value);
  };
  return (
    <>
      <div className="main-container">
        <div className="head">
          <h1>Today's Weather</h1>
        </div>
        <div className="search-container">
          <input
            onChange={handlechange}
            className="search-bar"
            placeholder="search Your City.."
          ></input>
          <div className="icons" onClick={Weather}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="coordinates">
          <p>
            LATITUDE :- {tempData.lat}
            <br />
            LONGITUDE :- {tempData.lon}
          </p>
        </div>

        <div className="temp">
          <h1>
           
              {tempData.temp}
              <sup>°</sup>C
            
          </h1>
        </div>

        <div className="info">
          <div className="info1">
          <h4>Condition :- {tempData.condition}</h4>
            <h4>Humidity :- {tempData.humidity}</h4>
          </div>
          <div className="info2">
            <h4>City :- {tempData.city}</h4>
            <h4>Wind-Speed :- {tempData.wind}</h4>
          </div>
        </div>
      </div>
    </>
  )
}
