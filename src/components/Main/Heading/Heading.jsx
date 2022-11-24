import React from 'react';
import PropTypes from 'prop-types';
import './Heading.css';

function Heading({ text }) {
  return (
    <div className="column">
      <h2 className="heading">{text}</h2>
      <div className="line" />
    </div>
  );
}
Heading.propTypes = {
  text: PropTypes.string,
};
Heading.defaultProps = {
  text: '',
};
export default Heading;
