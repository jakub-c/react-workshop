import React from "react";
import PropTypes from "prop-types";

const AdminPanel = props =>
  <div>
    <input
      type="text"
      onChange={props.handleSearchTermChange}
      value={props.searchTerm}
    />
  </div>;

AdminPanel.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default AdminPanel;
