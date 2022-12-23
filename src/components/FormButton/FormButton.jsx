import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './FormButton.css';

function FormButton({ text, errors }) {
  const [disabled, setDisabled] = useState(false);

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
  return <button className={`form-button ${disabled ? 'disabled' : ''}`} type="submit" disabled={disabled}>{text}</button>;
}
FormButton.propTypes = {
  text: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};
FormButton.defaultProps = {
  text: '',
};
export default FormButton;
