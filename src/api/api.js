import * as axios from "axios"

let instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/`
})

export let weatherAPI = {
    getWeather(cityName) {
        return instance.get(`weather?q=${cityName}&units=metric&lang=ru&appid=b6eeedaf85e5637c1a4001f74ee73c62`)
    },
    getWeatherLoction(cord) {
        return instance.get(`weather?lat=${cord.latitude}&lon=${cord.longitude}&units=metric&lang=ru&appid=b6eeedaf85e5637c1a4001f74ee73c62`)
    },
    getMoreInfoAboutCity(cityName) {
        return instance.get(`forecast?q=${cityName}&lang=ru&units=metric&appid=b6eeedaf85e5637c1a4001f74ee73c62`)
    }
}