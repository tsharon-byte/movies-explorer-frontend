import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from '../Movies/Movies';
import Main from '../Main/Main';
import Profile from '../pages/Register/Profile';
import Login from '../pages/Register/Login';
import Register from '../pages/Register/Register';
import NotFound from '../pages/NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/signin">
        <Login />
      </Route>
      <Route path="/signup">
        <Register />
      </Route>
      <Route path="/">
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
