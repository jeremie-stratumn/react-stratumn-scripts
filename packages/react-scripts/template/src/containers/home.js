import React from 'react';
import { connect } from 'react-redux';
import { auth } from 'actions';
import PropTypes from 'prop-types';
import { Welcome } from 'components';

const HomeContainer = props => (
  <div>
    <Welcome
      title="Welcome Stratumnite!"
      btnText="Logout here.."
      onClick={props.logout}
    />
  </div>
);

HomeContainer.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logout: auth.logout,
};

export default connect(null, mapDispatchToProps)(HomeContainer);
