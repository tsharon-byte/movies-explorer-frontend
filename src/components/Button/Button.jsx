import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text, onClick, className }) {
  return <button className={`button ${className || ''}`} type="button" onClick={onClick}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
Button.defaultProps = {
  text: '',
  onClick: () => {},
  className: undefined,
};
export default Button;
