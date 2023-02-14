import React from "react";
import "./wheaterInfo.css";

const WheaterInfo = props => {

    console.log(props)

    return (
        <div class="container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                <div class="date-container">
                    <span class="location">{props.city}, {props.country}</span>
                </div>
                <div class="weather-container">
                    <h1 class="weather-temp">{props.temperature}°C</h1>
                    <h3 class="weather-desc">{props.description}</h3>
                    <div className="weather-factors">
                        <span class="title">HUMEDAD: {props.humidity}%</span>
                        <span class="title">VIENTO: {props.wind_speed} km/h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheaterInfo;