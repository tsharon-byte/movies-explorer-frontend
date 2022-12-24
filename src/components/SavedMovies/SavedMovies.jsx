import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Page from '../Page/Page';
import mainApi from '../../utils/MainApi';

function SavedMovies() {
  const [saved, setSaved] = useState([]);
  const [flag, setFlag] = useState(false);
  const [filter, setFilter] = useState({ film: '', isSmall: true });
  useEffect(() => {
    console.log(filter);
    mainApi.getMovies().then((res) => {
      console.log(res);
      setSaved(res);
    });
  }, [flag]);

  return (
    <Page>
      <div className="column">
        <Navigation />
        <main className="column block">
          <SearchForm setFilter={setFilter} />
          {saved.length > 0 && (
          <MoviesCardList
            movies={saved}
            isSaved
            render={() => setFlag(!flag)}
          />
          )}
        </main>
      </div>
      <Footer />
    </Page>
  );
}
export default SavedMovies;
