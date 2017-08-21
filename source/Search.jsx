import React from "react";
import PropTypes from "prop-types";

const Search = props =>
  <div>
    <input
      type="text"
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
    />
  </div>;

Search.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default Search;
