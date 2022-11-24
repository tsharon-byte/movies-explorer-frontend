import React from 'react';
import PropTypes from 'prop-types';
import './Tag.css';

function Tag({ text }) {
  return <div className="tag">{text}</div>;
}
Tag.defaultProps = {
  text: '',
};
Tag.propTypes = {
  text: PropTypes.string,
};
export default Tag;
