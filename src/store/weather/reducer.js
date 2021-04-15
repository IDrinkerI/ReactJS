import { GET_WEATHER_START, GET_WEATHER_FAILURE, GET_WEATHER_SUCCEES } from "./types";

const initialState = {
    city: "Moscow",
    data: [],
    processing: false,
    error: null,
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER_START: {
            return {
                ...state,
                error: null,
                processing: true,
            }
        }
        case GET_WEATHER_SUCCEES: {
            return {
                ...state,
                data: action.payload,
                error: null,
                processing: false,
            }
        }
        case GET_WEATHER_FAILURE: {
            return {
                ...state,
                error: action.payload,
                processing: false
            }
        }
        default:
            return state;
    }
}