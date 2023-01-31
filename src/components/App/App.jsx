import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Login from '../pages/Register/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../pages/Register/Profile';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import ProtectedRoutes from '../ProtectedRoutes';
import { FILTER_FOR_SAVED_MOVIES, FILTER_IN_LOCAL_STORAGE, USER } from '../../utils/constants';
import { getValue } from '../../utils/utils';

function App() {
  const [currentUser, setCurrentUser] = useState(getValue(USER));
  useEffect(() => {
    mainApi.getMe().then((user) => {
      setCurrentUser(user);
      localStorage.setItem(USER, JSON.stringify(user));
    }).catch((err) => {
      console.log(err.message);
      setCurrentUser(null);
      localStorage.removeItem(USER);
      localStorage.removeItem(FILTER_IN_LOCAL_STORAGE);
      localStorage.removeItem(FILTER_FOR_SAVED_MOVIES);
    });
  }, []);
  return (
    <CurrentUserContext.Provider value={
      useMemo(() => ({ currentUser, setCurrentUser }), [currentUser, setCurrentUser])
}
    >
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route element={(
          <ProtectedRoutes
            loggedIn={currentUser && currentUser.name !== undefined}
          />
)}
        >
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CurrentUserContext.Provider>
  );
}

export default App;
