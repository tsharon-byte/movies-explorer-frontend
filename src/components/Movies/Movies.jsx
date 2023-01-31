import React, { useEffect, useState } from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Page from '../Page/Page';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';
import { getValue } from '../../utils/utils';
import mainApi from '../../utils/MainApi';
import { FILTER_IN_LOCAL_STORAGE } from '../../utils/constants';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState('');
  const [working, setWorking] = useState(false);
  const [filter, setFilter] = useState(getValue(FILTER_IN_LOCAL_STORAGE));
  const saveFilter = (value) => {
    setFilter(value);
    localStorage.setItem(FILTER_IN_LOCAL_STORAGE, JSON.stringify(value));
  };
  const movieMapper = (saved, item) => {
    const local = saved.filter((elem) => elem.movieId === item.id);
    return {
      ...item,
      liked: local.length > 0,
      localId: local.length > 0 ? local[0]._id : undefined,
    };
  };
  useEffect(() => {
    mainApi.getMovies().then((saved) => {
      const moviesFromStorage = getValue('movies');
      if (moviesFromStorage) {
        setMovies(moviesFromStorage.map((item) => movieMapper(saved, item)));
      } else {
        setWorking(true);
        moviesApi.getMovies().then((m) => {
          setError('');
          setMovies(m.map((item) => movieMapper(saved, item)));
          localStorage.setItem('movies', JSON.stringify(m));
        }).catch(() => {
          setError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. '
            + 'Подождите немного и попробуйте ещё раз');
        }).finally(() => {
          setWorking(false);
        });
      }
    });
  }, [flag]);
  return (
    <Page>
      <div className="column">
        <Navigation />
        <main className="column block">
          <SearchForm setFilter={saveFilter} initialValues={filter} />
          {working ? <Preloader />
            : <MoviesCardList movies={movies} filter={filter} render={() => setFlag(!flag)} />}
          {error && <span>{error}</span>}
        </main>
      </div>
      <Footer />
    </Page>
  );
}

export default Movies;
