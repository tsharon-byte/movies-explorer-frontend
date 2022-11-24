import React from 'react';
import './Promo.css';
import PromoSvg from '../../../images/promo.svg';

function Promo() {
  return (
    <div className="block promo">
      <div className="promo__columns">
        <div className="promo__column">
          <h1 className="promo__heading">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__subheading">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <a href="#about" className="promo__button">Узнать больше</a>
        </div>
        <div>
          <img src={PromoSvg} alt="Эмблема web-факультета" className="promo__img" />
        </div>
      </div>
    </div>
  );
}

export default Promo;
