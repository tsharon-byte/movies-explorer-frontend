import React from 'react';
import './AboutProject.css';
import Heading from '../Heading/Heading';
import ProgressBar from '../ProgressBar/ProgressBar';

function AboutProject() {
  return (
    <div className="about-project">
      <Heading text="О проекте" />
      <div className="two-columns about-project__description">
        <div className="column">
          <h3 className="about-project__heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="column">
          <h3 className="about-project__heading">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}

export default AboutProject;
