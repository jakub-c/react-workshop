import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

import CityInfo from "./CityInfo";
import AdminPanel from "./AdminPanel";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: [],
      searchQuery: ""
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/jakub-c/95cc4648a34ddd7e52a1b96c45fc6975/raw/98b979e9498e22ce8d6ea523d373911537a92336/weather%2520raw%2520response"
      )
      .then(response => {
        this.setState({ cities: response.data.list });
      });
  }
  handleSearchTermChange(event) {
    this.setState({ searchQuery: event.target.value });
  }
  render() {
    return (
      <div>
        <AdminPanel
          searchTerm={this.state.searchQuery}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        {this.state.cities
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

render(<App />, document.getElementById("app"));
