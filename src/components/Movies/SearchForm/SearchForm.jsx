import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';
import Error from '../../Error/Error';
import getMessage from '../../../utils/utils';

function SearchForm({ setFilter, initialValues }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({ film: '' });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: getMessage(e).length > 0 ? 'Нужно ввести ключевое слово' : '' });
  };

  const handleChangeCheckbox = () => {
    const newValue = !values.isSmall;
    setValues({ ...values, isSmall: newValue });
    setFilter({ ...values, isSmall: newValue });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFilter(values);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search">
        <input className="search__input" type="text" value={values.film} onChange={handleChange} placeholder="Фильм" name="film" />
        <button className="search__icon" type="submit" aria-label="Search" />
      </div>
      <Error error={errors.film} />
      <div className="search-form__checkbox">
        <input type="checkbox" id="smallFilms" checked={values.isSmall} name="isSmall" onChange={handleChangeCheckbox} />
        <span className="search-form__text">Короткометражки</span>
      </div>
    </form>
  );
}
SearchForm.propTypes = {
  setFilter: PropTypes.func.isRequired,
  initialValues: PropTypes.objectOf(PropTypes.shape({
    film: PropTypes.string,
    isSmall: PropTypes.bool,
  })),
};
SearchForm.defaultProps = {
  initialValues: { film: '', isSmall: false },
};
export default SearchForm;
