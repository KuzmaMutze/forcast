import React from 'react'
import './App.css';
import SearchContainer from './components/Search/SearchContainer';
import CityContainer from './components/City/CityContainer'
import { enablePlus, getWeatherCityLoc } from "./redux/app-reducer";
import { connect } from 'react-redux';
class App extends React.Component {

  componentDidMount() {
    const successCallback = (position) => {
      this.props.getWeatherCityLoc(position.coords)
    }
    const errorCallback = (error) => {
      if(error.code === 1) {
        this.props.enablePlus(true)
      }
    }
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
  }

  render() {
    return(
      <div className="App">
        <CityContainer/>
        <SearchContainer/>
      </div>
    )
  }
}

export default connect(null, {getWeatherCityLoc, enablePlus})(App);

