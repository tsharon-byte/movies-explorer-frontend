import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FormButton.css';

function FormButton({ text, errors, disabled: disabledFromProps }) {
  const [disabled, setDisabled] = useState(disabledFromProps);

  useEffect(() => {
    let result = false;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < errors.length; i++) {
      if (errors[i] && errors[i].length > 0) {
        result = true;
        break;
      }
    }
    setDisabled(result);
  });
  return <button className={`form-button ${disabledFromProps || disabled ? 'disabled' : ''}`} type="submit" disabled={disabledFromProps || disabled}>{text}</button>;
}

FormButton.propTypes = {
  text: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};
FormButton.defaultProps = {
  text: '',
  disabled: false,
};
export default FormButton;
