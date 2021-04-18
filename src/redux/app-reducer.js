import { weatherAPI } from "./../api/api";
import { findDay, createArr, month, today } from "./../helpers/createArr"

const SET_WEATHER_CITY = "SET_WEATHER_CITY"
const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE"
const DELETE_CITY = "DELETE_CITY"
const SET_MORE_INFO_CITY = "SET_MORE_INFO_CITY"
const SET_ENABLE_PULS = "SET_ENABLE_PULS"

let initialState = {
    errorMessage: "",
    isWarning: false,
    weatherCity: [],
    moreInfoCity: [],
    isPuls: false,
    preloader: true
}

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_CITY:
            if (state.weatherCity.some(city => city.name === action.data.name)) {
                alert("Такой город уже добавлен")
            } else {
                return {
                    ...state,
                    weatherCity: [...state.weatherCity, action.data],
                    isWarning: false
                }
            }
            
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: "Город не найден"
            }
        case DELETE_CITY:
            return {
                ...state,
                weatherCity: state.weatherCity.filter(city => city.id != action.id),
                isPuls: true,
                isWarning: state.weatherCity.length == 1
            }
        case SET_MORE_INFO_CITY:
            return {
                ...state,
                moreInfoCity: [
                    {day: "сегодня", data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today))))},
                    {day: "завтра", data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today + 1))))},
                    {day: `${today + 2} ${month}`, data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today + 2))))},
                    {day: `${today + 3} ${month}`, data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today + 3))))},
                    {day: `${today + 4} ${month}`, data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today + 4))))},
                    {day: `${today + 5} ${month}`, data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today + 5))))},
                    {day: `${today + 6} ${month}`, data: createArr(action.moreInfoCity.filter((day) => findDay(day, (today + 6))))}
                ],
                preloader: false
            }
        case SET_ENABLE_PULS: 
            return {
                ...state,
                isPuls: action.bool
            }
        default:
            return state
    }
}

let setWeatherCity = (data) => ({type: "SET_WEATHER_CITY", data})
let setErrorMessage = () => ({type: "SET_ERROR_MESSAGE"})
let deleteWeatherCity = (id) => ({type: "DELETE_CITY", id})
let setMoreInfoCity = (moreInfoCity) => ({type: "SET_MORE_INFO_CITY", moreInfoCity})
let setEnablePuls = (bool) => ({type: "SET_ENABLE_PULS", bool})

export const getWeatherCity = (cityName) => async (dispatch) => {
    
    let data = await weatherAPI.getWeather(cityName)
    if (data.status === 200) {
        dispatch(enablePlus(false))
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

export const enablePlus = (bool) => (dispatch) => {
    dispatch(setEnablePuls(bool))
}


export default appReducer