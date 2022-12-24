import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesListPage({
  moviesToShow, isSaved, ix, numCols, initial, render,
}) {
  const [moviesPerPage, setMoviesPerPage] = useState([]);
  useEffect(() => {
    const len = initial + ix * numCols;
    const result = len > moviesToShow.length ? moviesToShow : moviesToShow.slice(1, len + 1);
    setMoviesPerPage(result);
  }, [moviesToShow, isSaved, ix]);
  return (
    <div className="movies__list">
      {moviesToShow.length > 0 ? moviesPerPage.map((item) => {
        let card = {};
        if (!isSaved) {
          const {
            id, country,
            director,
            duration, year, description, trailerLink, nameRU, nameEN, liked, localId,
          } = item;
          const src = `https://api.nomoreparties.co/${item.image.url}`;
          const thumbnail = `https://api.nomoreparties.co/${item.image.formats.thumbnail.url}`;
          card = {
            country,
            director,
            duration,
            year,
            description,
            image: src,
            trailerLink,
            thumbnail,
            movieId: id,
            nameRU,
            nameEN,
            liked,
            localId,
          };
        }
        return (
          <MoviesCard
            key={item.id}
            isSaved={isSaved}
            card={isSaved ? item : card}
            render={render}
          />
        );
      }) : <span>Ничего не найдено</span>}
    </div>
  );
}
MoviesListPage.propTypes = {
  moviesToShow: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.objectOf(PropTypes.shape({ url: PropTypes.string, id: PropTypes.number })),
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    liked: PropTypes.bool,
  })),
  isSaved: PropTypes.bool,
  ix: PropTypes.number,
  numCols: PropTypes.number,
  initial: PropTypes.number,
  render: PropTypes.func,
};
MoviesListPage.defaultProps = {
  moviesToShow: [],
  isSaved: false,
  ix: 0,
  numCols: 3,
  initial: 12,
  render: () => {},
};
export default MoviesListPage;
