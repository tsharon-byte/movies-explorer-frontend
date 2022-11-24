import React from 'react';
import PropTypes from 'prop-types';
import './Hamburger.css';

function Hamburger({ collapsed, setCollapsed }) {
  return (
    <button
      type="button"
      className="hamburger__lines"
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      <div
        className={`hamburger__line ${
          collapsed ? 'hamburger__line_type_collapsed' : ''
        } `}
      />
      <div
        className={`hamburger__line ${
          collapsed ? 'hamburger__line_type_collapsed' : ''
        } `}
      />
      <div
        className={`hamburger__line ${
          collapsed ? 'hamburger__line_type_collapsed' : ''
        } `}
      />
    </button>
  );
}
Hamburger.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};

export default Hamburger;
