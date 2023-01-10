import React, { useContext, useState } from 'react';
import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../Logo/Logo';
import getMessage from '../../../utils/utils';
import ControlledInput from '../../CintrolledInput/ControlledInput';
import FormButton from '../../FormButton/FormButton';
import mainApi from '../../../utils/MainApi';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function Register({ toggleShouldUpdate }) {
  const { setCurrentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: ' ', email: ' ', password: ' ' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: getMessage(e) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mainApi.postSignUp(values).then((res) => {
      setCurrentUser(res);
      navigate('/movies');
      toggleShouldUpdate();
    }).catch((err) => {
      console.log(err);
      setError(err.message);
    });
  };

  return (
    <div className="register">
      <div className="register__header-container">
        <Logo />
        <h1 className="register__header">Добро пожаловать!</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__inputs">
          <ControlledInput
            value={values.name}
            onChange={handleChange}
            placeholder="Имя"
            id="name"
            label="Имя"
            error={errors.name}
            required
          />
          <ControlledInput
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            id="email"
            label="E-mail"
            error={errors.email}
            type="email"
            required
          />
          <ControlledInput
            value={values.password}
            onChange={handleChange}
            placeholder="Пароль"
            id="password"
            label="Пароль"
            type="password"
            error={errors.password}
            autoComplete="new-password"
            required
          />
        </div>
        <div className="form__footer">
          <span className="error">{error}</span>
          <FormButton text="Зарегистрироваться" errors={Object.values(errors)} />
          <div className="form__links">
            <span className="form__text">Уже зарегистрированы?</span>
            <NavLink className="form__link" to="/signin">Войти</NavLink>
          </div>
        </div>
      </form>
    </div>
  );
}

Register.propTypes = {
  toggleShouldUpdate: PropTypes.func.isRequired,
};

export default Register;
