import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Copenhagen" };
  }

  render() {
    return <City name={this.state.name} />;
  }
}

const City = props =>
  <div>
    {props.name}
  </div>;

City.propTypes = {
  name: PropTypes.string
};

render(<App />, document.getElementById("app"));
