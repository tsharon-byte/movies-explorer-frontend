import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import LogoImg from '../../images/logo.svg';

function Logo() {
  return (
    <Link to="/" className="header__logo">
      <img className="header__logo" src={LogoImg} alt="React Logo" />
    </Link>
  );
}
export default Logo;
