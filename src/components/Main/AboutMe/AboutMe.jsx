import React from 'react';
import './AboutMe.css';
import Heading from '../Heading/Heading';
import Photo from '../../../images/Tanya.jpg';
import PortfolioLink from '../../PortfolioLink/PortfolioLink';
import Anchor from '../../Anchor/Anchor';

function AboutMe() {
  return (
    <div className="about-me" id="about">
      <Heading text="Студент" />
      <div className="two-columns about-me__description">
        <div className="column">
          <h2 className="heading-h2">
            Татьяна
          </h2>
          <p className="about-me__role">Фронтенд разработчик</p>
          <p className="about-me__info">Немного о себе ...</p>
          <div className="about-me__link">
            <Anchor href="https://github.com/tsharon-byte/" text="Github" />
          </div>
        </div>
        <div className="column">
          <img className="about-me__photo" src={Photo} alt="Фотокарточка студента" />
        </div>
      </div>
      <div className="about-me__portfolio">
        <h3 className="about-me__portfolio-heading">Портфолио</h3>
        <div className="about-me__links">
          <PortfolioLink text="Статичный сайт" href="https://tsharon-byte.github.io/how-to-learn/" />
          <div className="about-me__line" />
          <PortfolioLink text="Адаптивный сайт" href="https://tsharon-byte.github.io/russian-travel/index.html" />
          <div className="about-me__line" />
          <PortfolioLink text="Одностраничное приложение" href="https://tsharon-byte.github.io/react-mesto-auth/" />
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
