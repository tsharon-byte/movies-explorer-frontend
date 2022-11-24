import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import CustomLink from '../CustomLink/CustomLink';

function Header() {
  return (
    <div className="header">
      <Logo />
      <ul className="header__nav">
        <li>
          <CustomLink to="/signup" text="Регистрация" />
        </li>
        <li><NavLink to="/signin"><Button text="Войти" /></NavLink></li>
      </ul>
    </div>
  );
}
export default Header;
