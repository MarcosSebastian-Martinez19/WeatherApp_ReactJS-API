import React, { useEffect, useState } from "react";
import "./wheaterInfo.css";

const WheaterInfo = props => {
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
        }))
        .catch(err => console.error(err));
    }, []);

    // console.log(props)
    // console.log(clima)
    
    return (
        <div class="container">
            <div class="weather-side">
                <div class="weather-gradient"></div>
                <div class="date-container">
                    <span class="location">{!!props.city ? props.city : clima.city}, {!!props.country ? props.country : clima.country}</span>
                </div>
                <div class="weather-container">
                    <h1 class="weather-temp">{!!props.temperature ? props.temperature : clima.temperature}°C</h1>
                    <h3 class="weather-desc">{!!props.description ? props.description : clima.description}</h3>
                    <div className="weather-factors">
                        <span class="title">HUMEDAD: {!!props.humidity ? props.humidity : clima.humidity}%</span>
                        <span class="title">VIENTO: {!!props.wind_speed ? props.wind_speed : clima.wind_speed} km/h</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WheaterInfo;