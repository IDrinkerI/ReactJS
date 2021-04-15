import React from "react";
import { useSelector } from "react-redux";
import WeatherCard from "./WeatherCard.jsx";
import "../css/weather_display.scss"

const WeatherDisplay = () => {
    const { data, city } = useSelector(store => store.weather);

    return (
        <>
            <h2>{city}:</h2>
            <div className="weather_card-wrapper">
                {data.map((item, i) =>
                    <WeatherCard temp={item.temp} date={item.date} weekDay={item.weekDay} key={i} />
                )}
            </div>
        </>
    )
}

export default WeatherDisplay;