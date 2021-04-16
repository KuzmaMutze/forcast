import React from "react";
import { connect } from "react-redux";
import { deleteCity } from "../../redux/app-reducer";
import { City } from "./City";

class CityContainer extends React.Component{

  render() {
    return(
      <>
        {this.props.weatherCity.map(city => <City 
            deleteCity={this.props.deleteCity}
            name={city.name}
            main={city.main}
            wind={city.wind}
            weather={city.weather}
            icon={city.weather[0].icon}
            description={city.weather[0].description}
            id={city.id}
        />)}
      </>
    )
  }
}

let mapStateToPropsType = (state) => ({
  weatherCity: state.app.weatherCity
})

export default connect(mapStateToPropsType, {deleteCity})(CityContainer)