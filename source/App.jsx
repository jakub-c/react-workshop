import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";
import { HashRouter, Route, Switch } from "react-router-dom";

import CityList from "./CityList";
import CityDetails from "./CityDetails";

class App extends Component {
  constructor() {
    super();

    this.state = {
      cities: [{ name: "empty" }]
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
      <HashRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={() => <CityList cities={this.state.cities} />}
          />
          <Route
            path="/details/:name"
            component={props => {
              const paramName = props.match.params.name;
              const cityIndex = this.state.cities.findIndex(
                obj => obj.name === paramName
              );
              if (cityIndex === -1) return false;
              return <CityDetails city={this.state.cities[cityIndex]} />;
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById("app"));
