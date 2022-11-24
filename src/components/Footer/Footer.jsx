import React from 'react';
import './Footer.css';
import Anchor from '../Anchor/Anchor';

function Footer() {
  return (
    <div className="footer">
      <div className="column footer__content">
        <div className="footer__caption">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </div>
        <div className="footer__line" />
        <div className="footer__nav">
          <p className="footer__copyright">© 2022</p>
          <div className="two-columns footer_links">
            <Anchor href="https://practicum.yandex.ru" text="Яндекс.Практикум" />
            <Anchor href="https://github.com/tsharon-byte/" text="Github" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
