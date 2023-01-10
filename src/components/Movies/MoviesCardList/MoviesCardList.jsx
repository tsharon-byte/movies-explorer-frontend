import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MoviesCardList.css';
import MoviesListPage from './MoviesListPage';

function MoviesCardList({
  movies, isSaved, filter, render,
}) {
  const [ix, setIx] = useState(0);
  const [moviesToShow, setMoviesToSHow] = useState([]);
  const [numCols, setNumCols] = useState(3);
  const [initial, setInitial] = useState(12);

  const calculateDimension = () => {
    setTimeout(() => {
      const width = window.innerWidth;
      if (width <= 520) {
        setNumCols(2);
        setInitial(5);
        setIx(0);
      } else if (width <= 768) {
        setNumCols(2);
        setInitial(8);
        setIx(0);
      } else {
        setNumCols(3);
        setInitial(12);
        setIx(0);
      }
    }, 100);
  };

  useEffect(() => {
    calculateDimension();
  }, []);
  useEffect(() => {
    window.addEventListener('resize', calculateDimension);
    return () => {
      window.removeEventListener('resize', calculateDimension);
    };
  }, []);

  useEffect(() => {
    let filteredArray = [...movies];
    if (filter && filter.film && filter.film !== '') {
      filteredArray = filteredArray.filter((i) => RegExp(filter.film, 'i').test(i.nameRU));
    }
    if (filter && filter.isSmall === true) {
      filteredArray = filteredArray.filter((i) => i.duration <= 40);
    }
    setMoviesToSHow(filteredArray);
    setIx(0);
  }, [movies, filter]);

  const handleClick = () => {
    setIx(ix + 1);
  };
  return (
    <div className="movies">
      <MoviesListPage
        isSaved={isSaved}
        moviesToShow={moviesToShow}
        ix={ix}
        numCols={numCols}
        initial={initial}
        render={render}
      />
      <div className="movies__more">
        {moviesToShow.length > 0 && ((ix + 1) * numCols < moviesToShow.length) && <button className="movies__button" type="button" onClick={handleClick}>Ещё</button>}
      </div>
    </div>
  );
}
MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.objectOf(PropTypes.shape({ url: PropTypes.string, id: PropTypes.number })),
    nameRU: PropTypes.string,
    duration: PropTypes.number,
    liked: PropTypes.bool,
  })),
  isSaved: PropTypes.bool,
  render: PropTypes.func,
  filter: PropTypes.objectOf(PropTypes.shape({
    film: PropTypes.string,
    isSmall: PropTypes.bool,
  })),
};
MoviesCardList.defaultProps = {
  movies: [],
  isSaved: false,
  filter: {},
  render: () => {},
};
export default MoviesCardList;
