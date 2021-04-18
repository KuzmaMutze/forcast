export let today = new Date().getDate()
export let month = new Date().toLocaleString("ru", {month: "long"})


export const findDay = (day, today) => {
    let date = new Date(day.dt_txt.replace(' ', 'T')).getDate()
    return (date == today) 
  }

export const createArr = (arr) => {
    return(
      arr.map( ( elem => {
        let time = new Date(elem.dt_txt.replace(' ', 'T')).toLocaleString("ru", {
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