import React from 'react';
import './ControlledInput.css';
import PropTypes from 'prop-types';

function ControlledInput({
  id, label, error, ...rest
}) {
  return (
    <label htmlFor={id} className="label">
      {label}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <input id={id} className={`input ${error.length !== 0 ? 'input__error' : ''}`} name={id} {...rest} />
      <span className="form__error">{error}</span>
    </label>
  );
}
ControlledInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
};

ControlledInput.defaultProps = {
  type: 'text',
  label: '',
};
export default ControlledInput;
