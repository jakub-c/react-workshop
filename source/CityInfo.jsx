import React from "react";
import PropTypes from "prop-types";

const CityInfo = props =>
  <div>
    {props.name} {props.temp}
  </div>;

CityInfo.propTypes = {
  name: PropTypes.string,
  temp: PropTypes.number
};

CityInfo.defaultProps = {
  name: "No city name",
  temp: "No temp info"
};

export default CityInfo;
