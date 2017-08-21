import React, { Component } from "react";
import PropTypes from "prop-types";

import CityInfo from "./CityInfo";
import AdminPanel from "./AdminPanel";

class CityList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  handleSearchTermChange(event) {
    this.setState({ searchQuery: event.target.value });
  }
  render() {
    return (
      <div>
        <AdminPanel
          searchQuery={this.state.searchQuery}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        {this.props.cities
          .filter(city =>
            city.name.toLowerCase().includes(this.state.searchQuery)
          )
          .map(city =>
            <CityInfo key={city.id} name={city.name} temp={city.main.temp} />
          )}
      </div>
    );
  }
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CityList;
