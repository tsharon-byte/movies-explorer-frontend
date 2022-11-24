import React from 'react';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import { movies } from '../../utils/constants';

function Movies() {
  return (
    <div>
      <Navigation />
      <div className="column block">
        <SearchForm />
        <MoviesCardList movies={movies} />
      </div>
      <Footer />
    </div>
  );
}

export default Movies;
