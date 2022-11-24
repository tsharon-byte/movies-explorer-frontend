import React from 'react';
import PropTypes from 'prop-types';
import Save from '../../../images/save.svg';
import Remove from '../../../images/remove.svg';
import './MoviesCard.css';

function MoviesCard({
  src, nameRu, duration, isSaved,
}) {
  return (
    <div className="card">
      <div className="card__description">
        <div className="card__columns">
          <div className="column">
            <span className="card__name">{nameRu}</span>
            <span className="card__duration">{duration}</span>
          </div>
          {isSaved ? <img src={Remove} alt="Удалить" /> : <img src={Save} alt="Сохранить в избранное" />}
        </div>
      </div>
      <img src={src} alt={nameRu} className="card__image" />
    </div>
  );
}

MoviesCard.propTypes = {
  src: PropTypes.string.isRequired,
  nameRu: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  isSaved: PropTypes.bool.isRequired,
};

export default MoviesCard;
