import React from "react";
import { connect } from "react-redux";
import { getWeatherCity } from "../../redux/app-reducer";

import { Search } from "./Search";
class SearchContainer extends React.Component {

    render() {
        return(
            <div>
                <Search getWeatherCity={this.props.getWeatherCity}/>
            
            </div>
        )
    }
}

export default connect(null, {getWeatherCity})(SearchContainer)