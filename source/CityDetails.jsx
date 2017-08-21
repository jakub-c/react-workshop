import React from "react";
import PropTypes from "prop-types";

const CityDetails = props =>
  <div>
    {props.city.name}
  </div>;

CityDetails.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};
// CityDetails.propTypes = {
//   city: PropTypes.string.isRequired
// };

export default CityDetails;
