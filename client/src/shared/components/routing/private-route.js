import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render = {props =>
      localStorage.getItem('AUTH_TOKEN') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to="/signin"
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired
};

export default PrivateRoute;
