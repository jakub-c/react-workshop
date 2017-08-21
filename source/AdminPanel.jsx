import React from "react";
import PropTypes from "prop-types";

import Search from "./Search";

const AdminPanel = props =>
  <Search
    searchTerm={props.searchTerm}
    handleSearchTermChange={props.handleSearchTermChange}
  />;

AdminPanel.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default AdminPanel;
