import React, { useState } from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo';
import CustomLink from '../CustomLink/CustomLink';
import Hamburger from '../Hamburger/Hamburger';
import MobileMenu from '../MobileMenu/MobileMenu';
import AccountButton from '../AccountButton/AccountButton';

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="navigation">
      <Logo />
      <Hamburger collapsed={collapsed} setCollapsed={setCollapsed} />
      <MobileMenu collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="navigation__items">
        <ul className="navigation__links">
          <li>
            <CustomLink to="/movies" text="Фильмы" />
          </li>
          <li>
            <CustomLink to="/saved-movies" text="Сохранённые фильмы" />
          </li>
        </ul>
        <AccountButton />
      </div>

    </div>
  );
}
export default Navigation;
