export const findDay = (day, dayName) => {
    let date = new Date(day.dt_txt).toLocaleString("ru", {weekday: "long"})
    return (date == dayName) 
  }

export const createArr = (arr) => {
    return(
      arr.map( ( elem => {
        let time = new Date(elem.dt_txt).toLocaleString("ru", {
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric" 
        })
        return {
          time,
          temp: elem.main.temp,
          feels_like: elem.main.feels_like,
          weather: elem.weather[0]
        }
      }))
    )
  }