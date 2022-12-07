import React from "react";

const WheaterInfo = props => {

    console.log(props)

    return (
        <div className="card card-body">
            <p>Lugar: {props.city}, {props.country}</p>
            <p>Temperatura: {props.temperature}</p>
            <p>Velocidad del viento: {props.wind_speed}</p>
            <p>Humedad: {props.humidity}</p>
            <p>Descripción: {props.description}</p>
        </div>
    )
}

export default WheaterInfo;