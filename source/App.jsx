import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

import CityInfo from "./CityInfo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: []
    };
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

  render() {
    return (
      <div>
        {this.state.cities.map(city =>
          <CityInfo key={city.id} name={city.name} temp={city.main.temp} />
        )}
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
