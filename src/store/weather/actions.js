import { GET_WEATHER_START, GET_WEATHER_FAILURE, GET_WEATHER_SUCCEES } from "./types";
import weatherDataConvert from "../../utils/weatherDateConvert.js";

const API = "https://www.7timer.info/bin/civil.php?lon=37.6&lat=55.7&ac=0&unit=meteo&output=json&tzshift=3";

const getWeatherFailureAction = (error) => ({ type: GET_WEATHER_FAILURE, payload: error });
const getWeatherSucceesAction = (data) => ({ type: GET_WEATHER_SUCCEES, payload: data });
const getWeatherStart = () => ({ type: GET_WEATHER_START, });

export const getWeatherAction = () => async (dispatch) => {
    dispatch(getWeatherStart());
    try {
        const response = await fetch(API);

        if (!response.ok)
            throw new Error(`Response failure, status : ${response.status}`);

        const jsonData = await response.json();
        const data = weatherDataConvert(jsonData);
        dispatch(getWeatherSucceesAction(data))
    }
    catch (e) {
        dispatch(getWeatherFailureAction(e));
    }
};