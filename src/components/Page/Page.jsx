import React from 'react';
import PropTypes from 'prop-types';
import './Page.css';

function Page({ children }) {
  return <div className="page">{children}</div>;
}
Page.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Page;
