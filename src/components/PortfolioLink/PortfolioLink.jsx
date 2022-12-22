import React from 'react';
import PropTypes from 'prop-types';
import './PortfolioLink.css';

function PortfolioLink({ text, href }) {
  return (
    <a className="portfolio-link" href={href} target="_blank" rel="noreferrer">
      <span className="portfolio-link__caption">{text}</span>
      <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.60653 16.5241L0.944603 14.8622L13.3026 2.48295H3.7571L3.77841 0.181818H17.2656V13.6903H14.9432L14.9645 4.14489L2.60653 16.5241Z" fill="white" />
      </svg>
    </a>
  );
}
PortfolioLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
};
PortfolioLink.defaultProps = {
  text: '',
  href: '',
};
export default PortfolioLink;
