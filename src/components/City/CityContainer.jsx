import React from "react";
import { connect } from "react-redux";
import { deleteCity, getWeatherCityMore } from "../../redux/app-reducer";
import { City } from "./City";

class CityContainer extends React.Component{

  render() {
    return(
      <>
        {this.props.weatherCity.map(city => <City 
            preloader={this.props.preloader}
            deleteCity={this.props.deleteCity}
            name={city.name}
            main={city.main}
            wind={city.wind}
            weather={city.weather}
            icon={city.weather[0].icon}
            description={city.weather[0].description}
            id={city.id}
            getWeatherCityMore={this.props.getWeatherCityMore}
            moreInfoCity={this.props.moreInfoCity}
        />)}
      </>
    )
  }
}

let mapStateToPropsType = (state) => ({
  weatherCity: state.app.weatherCity,
  moreInfoCity: state.app.moreInfoCity,
  preloader: state.app.preloader
})

export default connect(mapStateToPropsType, {deleteCity, getWeatherCityMore})(CityContainer)