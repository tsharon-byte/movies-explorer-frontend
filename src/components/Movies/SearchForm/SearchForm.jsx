import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [film, setFilm] = useState('');
  const [isSmall, setSmall] = useState(true);
  const handleChange = (e) => setFilm(e.target.value);
  const handleChangeSmall = (e) => {
    setSmall(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', film, isSmall);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search">
        <input className="search__input" type="text" value={film} onChange={handleChange} placeholder="Фильм" />
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <button className="search__icon" type="submit" />
      </div>
      <div className="search-form__checkbox">
        <input type="checkbox" id="smallFilms" checked={isSmall} onChange={handleChangeSmall} />
        <span className="search-form__text">Короткометражки</span>
      </div>
    </form>
  );
}
export default SearchForm;
