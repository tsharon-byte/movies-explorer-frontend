import React from 'react';
import PropTypes from 'prop-types';
import './MoreButton.css';

function MoreButton({ handleClick, isShown }) {
  return <button className={`movies__button ${isShown ? '' : 'movies__button_type_hidden'}`} type="button" onClick={handleClick}>Ещё</button>;
}
MoreButton.propTypes = {
  handleClick: PropTypes.func,
  isShown: PropTypes.bool,
};
MoreButton.defaultProps = {
  handleClick: () => {},
  isShown: false,
};
export default MoreButton;
