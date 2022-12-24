import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component, loggedIn, ...props }) {
  console.log('loggedIn', loggedIn);
  return (
    <Route>
      {loggedIn ? (
        <Component {...props} />
      ) : (
        <Navigate to="/signin" />
      )}
    </Route>
  );
}
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
