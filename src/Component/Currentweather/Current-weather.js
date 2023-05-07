import React from "react";
import cloud from "../Assets/cloud.png"
import clear from "../Assets/clear.png"
import mist from "../Assets/mist.png"
import rain from "../Assets/rain.png"
import snow from "../Assets/snow.png"

import "./current-weather.css";

const CurrentWeather = ({ data }) => {

  const project =()=>{
    
      switch(data.weather[0].main) {
        case 'Clouds':
          return  <img 
          alt="weather"
          className="weather-icon"
         
          src={cloud}/>
         
          case 'Haze':
            return  <img 
            alt="weather"
            className="weather-icon"
           
            src={cloud}/>
 
case 'Clear':
return <img 
alt="weather"
className="weather-icon"

src={clear}/>

case 'Rain':
return  <img 
alt="weather"
className="weather-icon"

src={rain}/>

case 'Mist':
return  <img 
alt="weather"
className="weather-icon"

src={mist}/>

case 'Snow':
return <img 
alt="weather"
className="weather-icon"

src={snow}/>

default:      return  <img 
  alt="weather"
  className="weather-icon"
 
  src={    data.main ?(
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`): ("--")         }/>

  }

  }
  return (
    <div className="wrappe">
    <div className="weather">
      <div className="top">
        <div>
          <h1 className="city">{data.name}</h1>
          <p className="weather-description"> { data.main ?(
          data.weather[0].description): ("--")}</p>

        </div>
        { data.main ?
        
        (<>{ project() } </>)

            : ("--") }

            </div> 

      <div className="bottom"> 
        <p className="temperature">
        { data.main ?(
           Math.round(data.main.temp -273)) : ("--")}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label" style={{fontWeight:"700"}}>Details</span>
          </div>
          <div className="parameter-row">
          <i className='fas fa-temperature-low'style={{marginRight:"-12%" ,marginTop:"5px"}}/>
            <span className="parameter-label"> Feels like</span>
            <span className="parameter-value">{ data.main ?(
           Math.round(data.main.feels_like -273)) : ("--")}
            °C
            </span>
          </div>
          <div className="parameter-row">
          <i className="fa-solid fa-wind" style={{marginRight:"-12%" ,marginTop:"5px"}}/>
            <span className="parameter-label"> Wind</span>
            <span className="parameter-value"> { data.main ?(data.wind.speed) : ("--")}m/s</span>
          </div>
          <div className="parameter-row">
          <i className="fa-sharp fa-solid fa-droplet" style={{marginRight:"-12%" ,marginTop:"5px"}} />
            <span className="parameter-label"> 
            Humidity</span>
            <span className="parameter-value"> { data.main ?(
           Math.round(data.main.humidity)) : ("--")}%</span>
          </div>
          <div className="parameter-row">
          <i className="fa-solid fa-wind" style={{marginRight:"-12%" ,marginTop:"5px"}}/>
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value"> { data.main ?(
           Math.round(data.main.pressure)) : ("--")} hPa</span>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default CurrentWeather;
