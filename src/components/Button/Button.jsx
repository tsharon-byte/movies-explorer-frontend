import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ text }) {
  return <button className="button" type="button">{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string,
};
Button.defaultProps = {
  text: '',
};
export default Button;
