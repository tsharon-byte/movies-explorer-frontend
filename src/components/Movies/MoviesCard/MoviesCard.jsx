import React from 'react';
import PropTypes from 'prop-types';
import './MoviesCard.css';
import mainApi from '../../../utils/MainApi';

function MoviesCard({
  isSaved, card, render,
}) {
  const removeFromSavedClick = () => {
    mainApi.deleteMovie(card._id).then(() => {
      render();
    });
  };
  const likeCardClick = () => {
    if (card.liked) {
      // Delete /movies
      mainApi.deleteMovie(card.localId).then(() => {
        render();
      });
    } else {
      // POST /movies
      const { liked, ...cardToSave } = card;
      mainApi.saveMovie(cardToSave).then(() => {
        render();
      })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  const hours = Math.floor(card.duration / 60);
  const minutes = card.duration % 60;
  return (
    <div className="card">
      <div className="card__description">
        <div className="card__columns">
          <div className="column">
            <span className="card__name">{card.nameRU}</span>
            <span className="card__duration">{`${hours > 0 ? `${hours}ч ` : ''}${minutes}мин`}</span>
          </div>
          {isSaved ? (
            <button
              type="button"
              className="remove-btn"
              aria-label="Удаление из сохраненных"
              onClick={removeFromSavedClick}
            />
          ) : (
            <button
              type="button"
              className={`like-btn ${card.liked ? 'like-btn__type_liked' : ''}`}
              onClick={likeCardClick}
              aria-label="Сохранение карточки"
            />
          )}
        </div>
      </div>
      <a href={card.trailerLink}>
        <img src={card.image} alt={card.nameRU} className="card__image" />
      </a>
    </div>
  );
}

MoviesCard.propTypes = {
  isSaved: PropTypes.bool.isRequired,
  render: PropTypes.func,
  card: PropTypes.objectOf(PropTypes.shape({
    country: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    trailerLink: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    movieId: PropTypes.number.isRequired,
    nameRU: PropTypes.string.isRequired,
    nameEN: PropTypes.string.isRequired,
    liked: PropTypes.bool,
  })).isRequired,
};
MoviesCard.defaultProps = {
  render: () => {},
};

export default MoviesCard;
