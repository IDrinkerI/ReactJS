import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWeatherAction } from "../store/weather/actions.js";
import ErrorDisplay from "./ErrorDisplay.jsx";
import Spinner from "./Spinner.jsx";
import WeatherDisplay from "./WeatherDisplay.jsx";

const Weather = () => {
    const dispatch = useDispatch();
    const { error, processing } = useSelector(store => store.weather);

    useEffect(() => {
        dispatch(getWeatherAction())
    }, [])

    return (
        <>
            <h1>Weather</h1>
            {(error) ? (<ErrorDisplay error={error} />) :
                (processing) ? (<Spinner />) : <WeatherDisplay />}
        </>
    )
};

export default Weather;