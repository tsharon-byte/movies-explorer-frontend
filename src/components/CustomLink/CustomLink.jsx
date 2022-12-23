import React from 'react';
import './CustomLink.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CustomLink({ to, text, active }) {
  return (
    <NavLink
      className={`custom-link ${active ? 'custom-link_type_active' : ''}`}
      to={to}
    >
      {text}
    </NavLink>
  );
}
CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};
CustomLink.defaultProps = {
  active: false,
};
export default CustomLink;
