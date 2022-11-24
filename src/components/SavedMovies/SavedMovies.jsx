import React from 'react';
import { saved } from '../../utils/constants';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <div>
      <Navigation />
      <div className="column block">
        <SearchForm />
        <MoviesCardList movies={saved} isSaved />
      </div>
      <Footer />
    </div>
  );
}
export default SavedMovies;
