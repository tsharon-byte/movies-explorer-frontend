import React from 'react';
import './MobileMenu.css';
import PropTypes from 'prop-types';
import CustomLink from '../CustomLink/CustomLink';
import AccountButton from '../AccountButton/AccountButton';

function MobileMenu({ collapsed, setCollapsed, isSaved }) {
  // const location = useLocation();
  // const isSaved = location.pathname === '/saved-movies';
  // useEffect(() => { console.log('constructor'); }, []);
  return (
    <div className={`mobile-menu ${!collapsed ? 'mobile-menu_type_off' : ''}`}>
      <ul className="mobile-menu__links">
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li onClick={() => setCollapsed(!collapsed)}><CustomLink to="/" text="Главная" /></li>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li onClick={() => setCollapsed(!collapsed)}><CustomLink to="/movies" text="Фильмы" active={!isSaved} /></li>
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <li onClick={() => setCollapsed(!collapsed)}><CustomLink to="/saved-movies" text="Сохранённые фильмы" active={isSaved} /></li>
      </ul>
      <AccountButton onClick={() => setCollapsed(!collapsed)} />
    </div>
  );
}
MobileMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  setCollapsed: PropTypes.func.isRequired,
  isSaved: PropTypes.bool,
};
MobileMenu.defaultProps = {
  isSaved: false,
};
export default MobileMenu;
