import React from 'react';
import './MobileMenu.css';
import PropTypes from 'prop-types';
import CustomLink from '../CustomLink/CustomLink';
import AccountButton from '../AccountButton/AccountButton';

function MobileMenu({ collapsed, setCollapsed }) {
  return (
    <div className={`mobile-menu ${!collapsed ? 'mobile-menu_type_off' : ''}`}>
      <ul className="mobile-menu__links">
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li onClick={() => setCollapsed(!collapsed)}><CustomLink to="/" text="Главная" /></li>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li onClick={() => setCollapsed(!collapsed)}><CustomLink to="/movies" text="Фильмы" /></li>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li onClick={() => setCollapsed(!collapsed)}><CustomLink to="/saved-movies" text="Сохранённые фильмы" /></li>
      </ul>
      <AccountButton onClick={() => setCollapsed(!collapsed)} />
    </div>
  );
}
MobileMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
};
export default MobileMenu;
