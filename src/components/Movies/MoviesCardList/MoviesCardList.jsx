import React from 'react';
import PropTypes from 'prop-types';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList({ movies, isSaved }) {
  return (
    <div className="column">
      <div className="movies">
        {movies.map((item) => (
          <MoviesCard
            key={item.id}
            src={item.image}
            nameRu={item.nameRU}
            duration={item.duration}
            isSaved={isSaved}
          />
        ))}
      </div>
      <div className="more">
        <button className="more__button" type="button">Ещё</button>
      </div>
    </div>
  );
}
MoviesCardList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    nameRU: PropTypes.string,
    duration: PropTypes.number,
  })),
  isSaved: PropTypes.bool,
};
MoviesCardList.defaultProps = {
  movies: [],
  isSaved: false,
};
export default MoviesCardList;
