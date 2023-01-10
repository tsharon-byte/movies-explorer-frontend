import React, { useContext, useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../../Navigation/Navigation';
import getMessage from '../../../utils/utils';
import ProfileInput from '../../CintrolledInput/ProfileInput';
import FormButton from '../../FormButton/FormButton';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import mainApi from '../../../utils/MainApi';
import Error from '../../Error/Error';

function Profile({ toggleShouldUpdate }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [values, setValues] = useState({ email: currentUser.email, name: currentUser.name });
  const [errors, setErrors] = useState({ email: '', name: '' });
  const [isEditMode, setEditMode] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: getMessage(e) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mainApi.patchUser(values)
      .then((res) => {
        setCurrentUser(res);
        toggleShouldUpdate();
        navigate(-1);
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  const handleSignOut = () => {
    mainApi.signOut().then(() => {
      localStorage.clear();
      setCurrentUser(null);
      navigate('/');
    }).catch((err) => {
      setError(err.message);
    });
  };
  return (
    <div className="profile">
      <Navigation />
      <h1 className="register__header">{`Привет, ${values.name}!`}</h1>
      <div className="profile__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__inputs">
            <ProfileInput
              value={values.name}
              onChange={handleChange}
              placeholder="Имя"
              id="name"
              label="Имя"
              error={errors.name}
              required
              readOnly={!isEditMode}
            />
            <ProfileInput
              value={values.email}
              onChange={handleChange}
              placeholder="Email"
              id="email"
              label="E-mail"
              error={errors.email}
              type="email"
              required
              readOnly={!isEditMode}
            />
            <Error error={error} />
          </div>
          {isEditMode && (
          <FormButton text="Сохранить" errors={Object.values(errors)} />
          )}
        </form>
        {!isEditMode && (
        <div className="form__footer">
          <button className="form__button form__link_color_white" onClick={() => setEditMode(true)} type="button">Редактировать</button>
          <button className="form__button form__link_color_red" onClick={handleSignOut} type="button">Выйти из аккаунта</button>
        </div>
        )}
      </div>
    </div>
  );
}

Profile.propTypes = {
  toggleShouldUpdate: PropTypes.func.isRequired,
};
export default Profile;
