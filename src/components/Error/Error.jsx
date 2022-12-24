import React from 'react';
import './Error.css';
import PropTypes from 'prop-types';

function Error({ error }) {
  return <span className="error">{error}</span>;
}
Error.propTypes = {
  error: PropTypes.string.isRequired,
};
export default Error;
