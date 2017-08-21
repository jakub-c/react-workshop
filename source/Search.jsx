import React from "react";
import PropTypes from "prop-types";

const Search = props =>
  <div>
    <input
      type="text"
      onChange={props.handleSearchTermChange}
      value={props.searchQuery}
    />
  </div>;

Search.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};

export default Search;
