import React, { useEffect, useState } from "react";
import "./WeatherInfo.css";

const WeatherInfo = props => {
    const [clima, setClima] = useState([]);
    
    useEffect(() => {
        const options = {method: 'GET'};

        fetch('https://api.openweathermap.org/data/2.5/weather?q=cordoba&appid=8ac9f07855842f6bccb42df2b2f5b1ac&units=metric&lang=es', options)
        .then(response => response.json())
        .then(response => setClima({
            temperature: response.main.temp,
            description: response.weather[0].description,
            humidity: response.main.humidity,
            wind_speed: response.wind.speed,
            city: response.name,
            country: response.sys.country,
            temperature_max: response.main.temp_max,
            temperature_min: response.main.temp_min,
            icon: response.weather[0].icon,
        }))
        .catch(err => console.error(err));
    }, []);
    
    return (
        <div className="container">
            <div className="weather-side">
                <div className="weather-gradient"></div>
                <div className="date-container">
                    <span className="location">{!!props.city ? props.city : clima.city}, {!!props.country ? props.country : clima.country}</span>
                </div>
                <div className="weather-container">
                    <div className="weather-header">
                    <img className="weather-icon" src={`https://openweathermap.org/img/wn/${!!props.icon ? props.icon : clima.icon}@2x.png`} />
                    <h1 className="weather-temp">{!!props.temperature ? props.temperature : clima.temperature}°C</h1>
                    </div>
                    <h3 className="weather-desc">{!!props.description ? props.description : clima.description}</h3>
                    <div className="weather-factors">
                        <span className="title">HUMEDAD: {!!props.humidity ? props.humidity : clima.humidity}%</span>
                        <span className="title">VIENTO: {!!props.wind_speed ? props.wind_speed : clima.wind_speed} km/h</span>
                    </div>
                    <div className="wheater-max-min">
                        <span>Max: {!!props.temperature_max ? props.temperature_max : clima.temperature_max}°C</span>
                        <span>Min: {!!props.temperature_min ? props.temperature_min : clima.temperature_min}°C</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo;