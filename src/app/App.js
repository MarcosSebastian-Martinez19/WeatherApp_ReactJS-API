import React, { Component } from "react";

import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherForm from "./components/WeatherForm/WeatherForm";

import { WEATHER_KEY } from "./keys";

import "./App.css"


class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: '',
        city: '',
        country: '',
        temperature_max: '',
        temperature_min: '',
        icon: '',
        error: null
    }

    getWeather = async e => {

        e.preventDefault();

        const { city, country} = e.target.elements;

        const cityValue = city.value;
        const countryValue = country.value;

        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric&lang=es`
        const response = await fetch(API_URL);
        const data = await response.json();

        this.setState({
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed,
            city: data.name,
            country: data.sys.country,
            temperature_max: data.main.temp_max,
            temperature_min: data.main.temp_min,
            icon: data.weather[0].icon,
            error: null
        });

    }

    render() {
        return (
                <div className="App">
                    <WeatherForm getWeather={this.getWeather}/>
                    <WeatherInfo {...this.state}/>
                </div>
        )
    };
}

export default App;