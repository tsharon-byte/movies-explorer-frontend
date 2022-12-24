import React, { useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../pages/Register/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../pages/Register/Profile';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import { USER } from '../../utils/constants';
import { getValue } from '../../utils/utils';

function App() {
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(getValue(USER));
  const toggleShouldUpdate = () => {
    setShouldUpdate(!shouldUpdate);
  };
  useEffect(() => {
    mainApi.getMe().then((user) => {
      setCurrentUser(user);
      localStorage.setItem(USER, JSON.stringify(user));
    }).catch((err) => {
      console.log(err.message);
      setCurrentUser(null);
    });
  }, [shouldUpdate]);
  return (
    <CurrentUserContext.Provider value={
      useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser])
}
    >
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/signin" element={<Login toggleShouldUpdate={toggleShouldUpdate} />} />
        <Route path="/signup" element={<Register toggleShouldUpdate={toggleShouldUpdate} />} />
        <Route path="/movies" element={currentUser && currentUser.name ? <Movies /> : <Navigate to="/signin" />} />
        <Route path="/saved-movies" element={currentUser && currentUser.name ? <SavedMovies /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={currentUser && currentUser.name ? <Profile toggleShouldUpdate={toggleShouldUpdate} /> : <Navigate to="/signin" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
