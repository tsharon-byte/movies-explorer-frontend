import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { movies } from '../../utils/constants';
import Page from '../Page/Page';

function Movies() {
  return (
    <Page>
      <Navigation />
      <main className="column block">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </main>
      <Footer />
    </Page>
  );
}

export default Movies;
