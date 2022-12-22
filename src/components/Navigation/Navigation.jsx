import React, { useState } from 'react';
import './Navigation.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import CustomLink from '../CustomLink/CustomLink';
import Hamburger from '../Hamburger/Hamburger';
import MobileMenu from '../MobileMenu/MobileMenu';
import AccountButton from '../AccountButton/AccountButton';

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const isSaved = location.pathname === '/saved-movies';
  return (
    <div className="navigation">
      <Logo />
      <Hamburger collapsed={collapsed} setCollapsed={setCollapsed} />
      <MobileMenu collapsed={collapsed} setCollapsed={setCollapsed} isSaved={isSaved} />
      <div className="navigation__items">
        <ul className="navigation__links">
          <li>
            <CustomLink to="/movies" text="Фильмы" active={!isSaved} />
          </li>
          <li>
            <CustomLink to="/saved-movies" text="Сохранённые фильмы" active={isSaved} />
          </li>
        </ul>
        <AccountButton />
      </div>

    </div>
  );
}
export default Navigation;
