import React from 'react';
import './Techs.css';
import Heading from '../Heading/Heading';
import Tag from '../../Tag/Tag';

const techs = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

function Techs() {
  return (
    <div className="techs">
      <Heading text="Технологии" />
      <h2 className="techs__header">
        7 технологий
      </h2>
      <p className="techs__subheader">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <div className="tags">
        {techs.map((item) => (<Tag text={item} key={item} />))}
      </div>
    </div>
  );
}
export default Techs;
