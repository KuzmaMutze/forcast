import { weatherAPI } from "./../api/api";
import { findDay, createArr } from "./../helpers/createArr"

const SET_WEATHER_CITY = "SET_WEATHER_CITY"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
const DELETE_CITY = "DELETE_CITY"
const SET_MORE_INFO_CITY = "SET_MORE_INFO_CITY"

let initialState = {
    errorMessage: "",
    weatherCity: [],
    moreInfoCity: []
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
        case SET_MORE_INFO_CITY:
            return {
                ...state,
                moreInfoCity: [
                    {day: "Понедельник", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'понедельник')))},
                    {day: "Вторник", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'вторник')))},
                    {day: "Среда", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'среда')))},
                    {day: "Четверг", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'четверг')))},
                    {day: "Пятница", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'пятница')))},
                    {day: "Суббота", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'суббота')))},
                    {day: "Воскресение", data: createArr(action.moreInfoCity.filter((day) => findDay(day, 'воскресение')))}
                ]
            }
        default:
            return state
    }
}

let setWeatherCity = (data) => ({type: "SET_WEATHER_CITY", data})
let setErrorMessage = () => ({type: "SET_ERROR_MESSAGE"})
let deleteWeatherCity = (id) => ({type: "DELETE_CITY", id})
let setMoreInfoCity = (moreInfoCity) => ({type: "SET_MORE_INFO_CITY", moreInfoCity})

export const getWeatherCity = (cityName) => async (dispatch) => {
    let data = await weatherAPI.getWeather(cityName)
    if (data.status === 200) {
        dispatch(setWeatherCity(data.data))
    } else {
        dispatch(setErrorMessage())
    }
}

export const getWeatherCityLoc = (cord) => async (dispatch) => {
    let data = await weatherAPI.getWeatherLoction(cord)
    if (data.status === 200) {
        dispatch(setWeatherCity(data.data))
    } else {

    }
}

export const deleteCity = (id) => (dispatch) => {
    dispatch(deleteWeatherCity(id))
}

export const getWeatherCityMore = (cityName) => async (dispatch) => {
    let data = await weatherAPI.getMoreInfoAboutCity(cityName)
    if (data.status === 200) {
        dispatch(setMoreInfoCity(data.data.list))
    } else {

    }
}


export default appReducer