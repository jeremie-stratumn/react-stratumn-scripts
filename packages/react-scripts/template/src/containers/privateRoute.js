import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRouteContainer = props => {
  const { isAuthenticated, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={otherProps =>
        isAuthenticated ? (
          <Component {...otherProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: otherProps.location },
            }}
          />
        )}
    />
  );
};

PrivateRouteContainer.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(PrivateRouteContainer);
