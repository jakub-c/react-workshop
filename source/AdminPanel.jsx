import React from "react";
import PropTypes from "prop-types";

import Search from "./Search";

const AdminPanel = props =>
  <Search
    searchQuery={props.searchQuery}
    handleSearchTermChange={props.handleSearchTermChange}
  />;

AdminPanel.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired
};

export default AdminPanel;
