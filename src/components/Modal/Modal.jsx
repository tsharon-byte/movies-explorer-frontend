import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Button from '../Button/Button';

function Modal({ isOpen, onClose, text }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <div className="popup__text">
          {text}
        </div>
        <Button text="Да" onClick={onClose} className="popup__button" />
        <button className="popup__close-icon" type="button" onClick={onClose} aria-label="Закрыть" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  text: PropTypes.string,
};

Modal.defaultProps = {
  isOpen: false,
  text: '',
};
export default Modal;
