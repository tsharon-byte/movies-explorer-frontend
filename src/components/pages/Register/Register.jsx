import React, { useState } from 'react';
import './Register.css';
import { NavLink, useHistory } from 'react-router-dom';
import Logo from '../../Logo/Logo';
import getMessage from '../../../utils/utils';
import ControlledInput from '../../CintrolledInput/ControlledInput';
import FormButton from '../../FormButton/FormButton';

function Register() {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({ name: ' ', email: ' ', password: ' ' });
  const history = useHistory();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: getMessage(e) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', values);
    history.push('/signin');
  };

  return (
    <div className="register">
      <div className="register__header-container">
        <Logo />
        <h1 className="register__header">Добро пожаловать!</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__inputs">
          <ControlledInput value={values.name} onChange={handleChange} placeholder="Имя" id="name" label="Имя" error={errors.name} minLength={2} />
          <ControlledInput value={values.email} onChange={handleChange} placeholder="Email" id="email" label="E-mail" error={errors.email} type="email" />
          <ControlledInput value={values.password} onChange={handleChange} placeholder="Пароль" id="password" label="Пароль" type="password" error={errors.password} minLength={2} autoComplete="new-password" />
        </div>
        <div className="form__footer">
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
export default Register;
