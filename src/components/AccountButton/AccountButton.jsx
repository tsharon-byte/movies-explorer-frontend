import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Account from '../../images/account.svg';

function AccountButton({ onClick }) {
  const { push } = useHistory();
  return (
    <button className="account" type="button" onClick={() => { onClick(); push('/profile'); }}>
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
