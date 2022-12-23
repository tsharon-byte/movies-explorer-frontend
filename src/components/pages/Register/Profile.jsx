import React, { useState } from 'react';
import './Register.css';
import { useHistory } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import getMessage from '../../../utils/utils';
import ProfileInput from '../../CintrolledInput/ProfileInput';
import FormButton from '../../FormButton/FormButton';

function Profile() {
  const history = useHistory();
  const [values, setValues] = useState({ email: 'sharonova_t@inbox.ru', name: 'Татьяна' });
  const [errors, setErrors] = useState({ email: '', name: '' });
  const [isEditMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: getMessage(e) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit', values);
    history.push('/');
  };
  return (
    <div className="profile">
      <Navigation />
      <h1 className="register__header">{`Привет, ${values.name}!`}</h1>
      <div className="profile__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__inputs">
            <ProfileInput value={values.name} onChange={handleChange} placeholder="Имя" id="name" label="Имя" error={errors.name} minLength={2} readOnly={!isEditMode} />
            <ProfileInput value={values.email} onChange={handleChange} placeholder="Email" id="email" label="E-mail" error={errors.email} type="email" readOnly={!isEditMode} />
          </div>
          {isEditMode && (
          <FormButton text="Сохранить" errors={Object.values(errors)} />
          )}
        </form>
        {!isEditMode && (
        <div className="form__footer">
          <button className="form__button form__link_color_white" onClick={() => setEditMode(true)} type="button">Редактировать</button>
          <button className="form__button form__link_color_red" onClick={() => history.push('/signin')} type="button">Выйти из аккаунта</button>
        </div>
        )}
      </div>
    </div>
  );
}
export default Profile;
