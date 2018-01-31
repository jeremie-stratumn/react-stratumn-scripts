import React from 'react';
import { connect } from 'react-redux';
import { auth } from 'actions';
import PropTypes from 'prop-types';
import { Welcome } from 'components';

const LoginContainer = props => (
  <div>
    <Welcome
      title="Hello visitor! Please login."
      btnText="Login"
      onClick={props.login}
    />
  </div>
);

LoginContainer.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  login: auth.login,
};

export default connect(null, mapDispatchToProps)(LoginContainer);
