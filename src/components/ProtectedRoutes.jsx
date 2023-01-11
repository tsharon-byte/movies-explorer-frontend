import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoutes({ loggedIn }) {
  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
}
ProtectedRoutes.propTypes = {
  loggedIn: PropTypes.bool,
};
ProtectedRoutes.defaultProps = {
  loggedIn: false,
};

export default ProtectedRoutes;
