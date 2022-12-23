import React from 'react';
import { saved } from '../../utils/constants';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList';
import Page from '../Page/Page';

function SavedMovies() {
  return (
    <Page>
      <Navigation />
      <main className="column block">
        <SearchForm />
        <MoviesCardList movies={saved} isSaved />
      </main>
      <Footer />
    </Page>
  );
}
export default SavedMovies;
