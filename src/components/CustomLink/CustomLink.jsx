import React from 'react';
import './CustomLink.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function CustomLink({ to, text, isPrimary }) {
  return <NavLink className={`custom-link ${isPrimary ? 'custom-link_type_primary' : ''}`} to={to}>{text}</NavLink>;
}
CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isPrimary: PropTypes.bool,
};
CustomLink.defaultProps = {
  isPrimary: false,
};
export default CustomLink;
