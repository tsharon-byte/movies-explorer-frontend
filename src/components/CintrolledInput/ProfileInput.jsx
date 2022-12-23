import React from 'react';
import './ControlledInput.css';
import PropTypes from 'prop-types';

function ProfileInput({
  id, label, error, ...rest
}) {
  return (
    <label htmlFor={id} className="profile__label">
      <div className="row">
        {label}
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input id={id} className={`input input_type_profile ${error.length !== 0 ? 'input__error' : ''}`} name={id} {...rest} />
      </div>
      <span className="form__error">{error}</span>
    </label>
  );
}
ProfileInput.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
};

ProfileInput.defaultProps = {
  type: 'text',
  label: '',
};
export default ProfileInput;
