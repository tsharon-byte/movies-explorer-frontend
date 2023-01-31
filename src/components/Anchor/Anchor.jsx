import React from 'react';
import PropTypes from 'prop-types';
import './Anchor.css';

function Anchor({ text, href }) {
  return <a className="link" href={href} target="_blank" rel="noreferrer">{text}</a>;
}
Anchor.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default Anchor;
