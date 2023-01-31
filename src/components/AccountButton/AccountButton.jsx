import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Account from '../../images/account.svg';

function AccountButton({ onClick }) {
  const navigate = useNavigate();
  return (
    <button className="account" type="button" onClick={() => { onClick(); navigate('/profile'); }}>
      <img src={Account} alt="Значок аккаунта" />
      <span>Аккаунт</span>
    </button>
  );
}
AccountButton.propTypes = {
  onClick: PropTypes.func,
};
AccountButton.defaultProps = {
  onClick: () => {},
};
export default AccountButton;
