import React from "react";
import { connect } from "react-redux";
import { getWeatherCity } from "../../redux/app-reducer";

import { Search } from "./Search";
class SearchContainer extends React.Component {

    render() {
        return(
            <div>
                <Search
                    isWarning={this.props.isWarning}
                    getWeatherCity={this.props.getWeatherCity}
                    isPuls={this.props.isPuls}
                    />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isPuls: state.app.isPuls,
    isWarning: state.app.isWarning
})

export default connect(mapStateToProps, {getWeatherCity})(SearchContainer)