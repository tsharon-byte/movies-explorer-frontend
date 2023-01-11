import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Page from '../Page/Page';
import mainApi from '../../utils/MainApi';
import { FILTER_FOR_SAVED_MOVIES } from '../../utils/constants';
import { getValue } from '../../utils/utils';

function SavedMovies() {
  const [saved, setSaved] = useState([]);
  const [flag, setFlag] = useState(false);
  const [filter, setFilter] = useState(getValue(FILTER_FOR_SAVED_MOVIES));
  const saveFilter = (value) => {
    setFilter(value);
    localStorage.setItem(FILTER_FOR_SAVED_MOVIES, JSON.stringify(value));
  };
  useEffect(() => {
    mainApi.getMovies().then((res) => {
      setSaved(res);
    }).catch((err) => console.error(err.message));
  }, [flag]);

  return (
    <Page>
      <div className="column">
        <Navigation />
        <main className="column block">
          <SearchForm setFilter={saveFilter} initialValues={filter} />
          {saved.length > 0 && (
          <MoviesCardList
            movies={saved}
            isSaved
            render={() => setFlag(!flag)}
            filter={filter}
          />
          )}
        </main>
      </div>
      <Footer />
    </Page>
  );
}
export default SavedMovies;
