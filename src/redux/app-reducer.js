import { weatherAPI } from "./../api/api";

const SET_WEATHER_CITY = "SET_WEATHER_CITY"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
const DELETE_CITY = "DELETE_CITY"

let initialState = {
    errorMessage: "",
    weatherCity: []
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_CITY:
            return {
                ...state,
                weatherCity: [...state.weatherCity, action.data]
            }
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: "Город не найден"
            }
        case DELETE_CITY:
            return {
                ...state,
                weatherCity: state.weatherCity.filter(city => city.id != action.id)
            }
        default:
            return state
    }
}

let setWeatherCity = (data) => ({type: "SET_WEATHER_CITY", data})
let setErrorMessage = () => ({type: "SET_ERROR_MESSAGE"})
let deleteWeatherCity = (id) => ({type: "DELETE_CITY", id})

export const getWeatherCity = (cityName) => async (dispatch) => {
    let data = await weatherAPI.getWeather(cityName)
    if (data.status === 200) {
        dispatch(setWeatherCity(data.data))
    } else {
        dispatch(setErrorMessage())
    }
}

export const deleteCity = (id) => (dispatch) => {
    dispatch(deleteWeatherCity(id))
}

export default appReducer