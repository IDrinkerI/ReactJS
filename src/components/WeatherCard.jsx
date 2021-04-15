import React from "react";
import "../css/weather_card.scss";

const WeatherCard = (props) => {
    return (
        <div className="weather_card">
            <p className="weather_card-week_day">{props.weekDay}</p>
            <p className="weather_card-date">Date: {props.date}</p>
            <p className="weather_card-temp">Temp: {props.temp}C&deg;</p>
        </div>
    )
}

export default WeatherCard;